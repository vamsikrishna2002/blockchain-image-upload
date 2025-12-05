import { useState } from "react";
import "./Display.css";

const Display = ({ contract, account }) => {
  const [data, setData] = useState("");

  // helper: normalize a stored value into a usable HTTP gateway URL
  const normalizeToGateway = (item) => {
    if (!item) return null;
    if (item.startsWith("http://") || item.startsWith("https://")) return item;
    if (item.startsWith("ipfs://")) return `https://gateway.pinata.cloud/ipfs/${item.slice(7)}`;
    // raw CID fallback
    return `https://gateway.pinata.cloud/ipfs/${item}`;
  };

  const getdata = async () => {
    let dataArray;
    const Otheraddress = document.querySelector(".address").value;
    try {
      if (Otheraddress) {
        dataArray = await contract.display(Otheraddress);
        console.log("display result:", dataArray);
      } else {
        dataArray = await contract.display(account);
      }
    } catch (e) {
      alert("You don't have access");
      return;
    }

    // safer empty check (contract returns string[] so length check is appropriate)
    if (!dataArray || dataArray.length === 0) {
      alert("No image to display");
      return;
    }

    const images = dataArray.map((item, i) => {
      const url = normalizeToGateway(item);
      if (!url) return null;
      return (
        <a
          href={url}
          key={`a-${i}`}
          target="_blank"
          rel="noopener noreferrer"
          style={{ margin: 8, display: "inline-block" }}
        >
          <img
            src={url}
            alt={`uploaded-${i}`}
            key={`img-${i}`}
            className="image-item"
            onError={(e) => {
              e.currentTarget.style.display = "none";
              console.error("Image failed to load:", url);
            }}
          />
        </a>
      );
    });

    setData(images.filter(Boolean));
  };

  return (
    <>
      <div className="image-list">{data}</div>
      <input type="text" placeholder="Enter Address" className="address"></input>
      <button className="center button" onClick={getdata}>
        Get Data
      </button>
    </>
  );
};
export default Display;
