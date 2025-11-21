import { useEffect } from "react";
import "./Modal.css";

const Modal = ({ setModalOpen, contract }) => {

  // -----------------------------
  // GRANT ACCESS
  // -----------------------------
  const sharing = async () => {
    const address = document.querySelector(".address").value;
    await contract.allow(address);
    setModalOpen(false);
  };

  // -----------------------------
  // REVOKE ACCESS (NEW)
  // -----------------------------
  const revoke = async () => {
    const address = document.querySelector(".address").value;
    await contract.disallow(address);
    setModalOpen(false);
  };

  // -----------------------------
  // POPULATE ACCESS LIST
  // -----------------------------
  useEffect(() => {
    const accessList = async () => {
      const addressList = await contract.shareAccess();
      let select = document.querySelector("#selectNumber");
      const options = addressList;

      for (let i = 0; i < options.length; i++) {
        let opt = options[i].user;     // <--- FIX: access struct returns {user,access}
        let e1 = document.createElement("option");
        e1.textContent = `${options[i].user}  —  ${options[i].access ? "Allowed" : "Revoked"}`;
        e1.value = opt;
        select.appendChild(e1);
      }
    };
    contract && accessList();
  }, [contract]);

  return (
    <>
      <div className="modalBackground">
        <div className="modalContainer">

          <div className="title">Share With</div>

          <div className="body">
            <input
              type="text"
              className="address"
              placeholder="Enter Address"
            />
          </div>

          <form id="myForm">
            <select id="selectNumber">
              <option className="address">People With Access</option>
            </select>
          </form>

          <div className="footer">

            {/* Cancel Button */}
            <button
              onClick={() => {
                setModalOpen(false);
              }}
              id="cancelBtn"
            >
              Cancel
            </button>

            {/* Share Access */}
            <button onClick={() => sharing()}>
              Share
            </button>

            {/* Revoke Access (NEW) */}
            <button 
              onClick={() => revoke()} 
              style={{ backgroundColor: "orange", color: "white" }}
            >
              Revoke
            </button>

          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;

