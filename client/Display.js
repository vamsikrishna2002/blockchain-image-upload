import React, { useState } from "react";
import "./Display.css";

const Display = ({ contract, account }) => {
  const [data, setData] = useState([]);

  // Fetch files for you or another address
  const getData = async () => {
    let dataArray = [];
    const otherAddress = document.querySelector(".address").value;

    try {
      if (otherAddress) {
        // Show another user's files
        dataArray = await contract.display(otherAddress);
      } else {
        // Show your own files
        dataArray = await contract.display(account);
      }
    } catch (e) {
      alert("You don't have access");
      return;
    }

    if (!dataArray || dataArray.length === 0) {
      alert("No files to display");
      return;
    }

    // Convert URLs → CIDs for Pinata gateway
    const cleanData = dataArray.map((item) => {
      const cid = item.includes("ipfs/")
        ? item.split("ipfs/")[1]
        : item.replace("ipfs://", "");

      return {
        fullUrl: item,
        cid: cid,
      };
    });

    setData(cleanData);
  };

  return (
    <>
      <div className="display-container">

        <h2>Your Files</h2>

        {/* Display AREA */}
        <div className="file-grid">
          {data.map((item, i) => (
            <div className="file-card" key={i}>
              <img
                src={`https://gateway.pinata.cloud/ipfs/${item.cid}`}
                alt="file"
                className="file-image"
              />

              <a
                href={`https://gateway.pinata.cloud/ipfs/${item.cid}`}
                target="_blank"
                rel="noopener noreferrer"
                className="open-btn"
              >
                View File
              </a>
            </div>
          ))}
        </div>

        {/* Input to view another user's files */}
        <input
          type="text"
          placeholder="Enter Address to View Files"
          className="address"
        />

        {/* Button */}
        <button className="button" onClick={getData}>
          Get Data
        </button>

      </div>
    </>
  );
};

export default Display;

