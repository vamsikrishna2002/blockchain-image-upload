import { useEffect, useState } from "react";
import "./Modal.css";

const Modal = ({ setModalOpen, contract }) => {
  const [addressList, setAddressList] = useState([]);
  const [selected, setSelected] = useState("");

  // fetch access list from contract and keep only those with access == true
  const loadAccessList = async () => {
    if (!contract) return;
    try {
      const list = await contract.shareAccess(); // returns Access[] (struct: user, access)
      // list elements might be objects; map them to simple addresses where access === true
      const allowed = list
        .filter((el) => {
          // depending on ethers version the struct fields could be el.user/el.access or el[0]/el[1]
          const accessFlag = typeof el.access !== "undefined" ? el.access : el[1];
          return accessFlag === true;
        })
        .map((el) => (el.user ? el.user : el[0]));
      setAddressList(allowed);
      if (allowed.length > 0) setSelected(allowed[0]);
      else setSelected("");
    } catch (err) {
      console.error("Failed to load access list", err);
      setAddressList([]);
      setSelected("");
    }
  };

  useEffect(() => {
    contract && loadAccessList();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [contract]);

  // Share (allow) the typed address
  const sharing = async () => {
    const address = document.querySelector(".address").value;
    if (!address) return alert("Enter an address to share with");
    try {
      const tx = await contract.allow(address);
      await tx.wait();
      await loadAccessList();
      setModalOpen(false);
    } catch (err) {
      console.error("Share failed", err);
      alert("Failed to share (see console)");
    }
  };

  // Remove access (disallow) the selected address
  const removeAccess = async () => {
    if (!selected) return alert("Select an address to remove");
    if (!window.confirm(`Remove access for ${selected}?`)) return;
    try {
      const tx = await contract.disallow(selected);
      await tx.wait();
      // reload the list so UI updates
      await loadAccessList();
      alert(`Access removed for ${selected}`);
    } catch (err) {
      console.error("Remove failed", err);
      alert("Failed to remove access (see console)");
    }
  };

  return (
    <>
      <div className="modalBackground">
        <div className="modalContainer">
          <div className="title">Share with</div>
          <div className="body">
            <input
              type="text"
              className="address"
              placeholder="Enter Address"
            ></input>
          </div>

          <div style={{ marginBottom: 8 }}>
            <label style={{ display: "block", marginBottom: 6 }}>
              People With Access
            </label>
            <select
              id="selectNumber"
              value={selected}
              onChange={(e) => setSelected(e.target.value)}
              style={{ width: "100%", padding: 6 }}
            >
              <option value="" disabled>
                {addressList.length ? "Select address" : "No addresses"}
              </option>
              {addressList.map((opt) => (
                <option key={opt} value={opt}>
                  {opt}
                </option>
              ))}
            </select>
          </div>

          <div className="footer" style={{ display: "flex", gap: 8 }}>
            <button
              onClick={() => {
                setModalOpen(false);
              }}
              id="cancelBtn"
            >
              Cancel
            </button>

            <button onClick={() => sharing()}>Share Access</button>

            {/* NEW: Remove button */}
            <button
              onClick={() => removeAccess()}
              disabled={!selected}
              style={{ backgroundColor: "#f44336", color: "white" }}
            >
              Remove Access
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
export default Modal;
