import Upload from "./artifacts/contracts/Upload.sol/Upload.json";
import { useState, useEffect } from "react";
import { ethers } from "ethers";
import FileUpload from "./components/FileUpload";
import Display from "./components/Display";
import Modal from "./components/Modal";


import "./App.css";
import lockGif from "./assets/lock.gif";

function App() {
  const [account, setAccount] = useState("");
  const [contract, setContract] = useState(null);
  const [provider, setProvider] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    const provider = new ethers.providers.Web3Provider(window.ethereum);

    const loadProvider = async () => {
      if (provider) {
        window.ethereum.on("chainChanged", () => {
          window.location.reload();
        });

        window.ethereum.on("accountsChanged", () => {
          window.location.reload();
        });
        await provider.send("eth_requestAccounts", []);
        const signer = provider.getSigner();
        
        const address = await signer.getAddress();
        setAccount(address);
        let contractAddress = "0x5FbDB2315678afecb367f032d93F642f64180aa3";

        const contract = new ethers.Contract(
          contractAddress,
          Upload.abi,
          signer
        );
        //console.log(contract);
        setContract(contract);
        setProvider(provider);
      } else {
        console.error("Metamask is not installed");
      }
    };
    provider && loadProvider();
  }, []);
  return (
  <>
    {!modalOpen && (
      <button className="share" onClick={() => setModalOpen(true)}>
        Share
      </button>
    )}
    {modalOpen && (
      <Modal setModalOpen={setModalOpen} contract={contract}></Modal>
    )}

    <div className="App">
      <div className="app-shell">
  <div className="hero-icon-wrapper">
    <div className="hero-icon-glow">
      <img src={lockGif} alt="" className="hero-icon" />
    </div>
  </div>

  <h1>SMART IMAGE STORAGE</h1>

  <p className="subtitle">
    Blockchain-backed image upload and access-controlled sharing
  </p>

  {/* ⭐ Tech stack chips */}
  <p className="tech-chips">
    <span>Solidity · Hardhat</span>
    <span>IPFS · Pinata</span>
    <span>MetaMask</span>
  </p>

  <p className="account-line">
    Account : {account ? account : "Not connected"}
  </p>

  <FileUpload account={account} provider={provider} contract={contract} />
  <Display contract={contract} account={account} />
</div>

</div>
  </>
);
}

export default App;
