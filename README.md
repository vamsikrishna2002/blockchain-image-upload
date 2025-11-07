

# Blockchain-Based Image Upload and Sharing System

## Project Description

This project aims to develop a **Blockchain-Based Image Upload and Sharing System** that allows users to securely upload and share images through decentralized storage and smart contracts.
Instead of using centralized services like Google Drive, the system uses **IPFS** for file storage and **Ethereum smart contracts** for ownership and access management.
It ensures transparency, security, and verifiable ownership of uploaded files.

---

## Features

* Upload and store images on IPFS (decentralized network).
* Use Solidity smart contracts to manage file access and ownership.
* Share or revoke access with other users securely.
* Frontend built with React.js for user interaction.

---

## Setup Instructions

### Backend

1. Navigate to the project folder:

   ```bash
   cd blockchain-image-upload
   ```
2. Install required dependencies:

   ```bash
   npm install
   ```
3. Compile the smart contract:

   ```bash
   npx hardhat compile
   ```

### Frontend

1. Navigate to the client directory:

   ```bash
   cd client
   ```
2. Install dependencies:

   ```bash
   npm install
   ```
3. Run the application:

   ```bash
   npm start
   ```

---

## Draft Smart Contract
The draft Solidity smart contract Upload.sol is the core part of the system that manages the image upload, sharing, and access control process on the Ethereum blockchain. It is designed as an early prototype to demonstrate how ownership and permissions will be recorded in a decentralized manner.

This contract stores uploaded image links (from IPFS) and keeps track of which users have permission to view those images. Each function has a specific role in maintaining transparency, ownership, and access rights without relying on a centralized server.

### Main Functions
add(address user, string url)
Allows the uploader to store a reference to their uploaded image (such as an IPFS hash or URL). The image link is associated with the uploader’s address on the blockchain.

allow(address user)
Grants permission for another Ethereum address to view the uploader’s images. This creates a decentralized access control record.

disallow(address user)
Revokes access that was previously granted to a user. Once removed, that address can no longer view the uploader’s files.

hasAccess(address owner, address viewer)
Checks if a particular viewer address is allowed to see the owner’s files. This function ensures that only authorized users can view private content.

display(address user)
Retrieves and returns all the image URLs that a specific user (the owner) has uploaded, as long as the viewer has permission to access them.

### Key Features
On-chain Ownership and Permissions:
Each uploaded file and permission record is stored permanently on the blockchain, ensuring transparency and traceability.

Decentralized Storage Integration:
Images are stored using IPFS (InterPlanetary File System), allowing distributed, tamper-proof file hosting.

Access Control via Smart Contracts:
The contract ensures that access rights are handled automatically and securely without third-party involvement.

Easy Deployment and Testing:
The contract can be compiled and deployed using Hardhat, and a deployment script (deploy.js) is provided for future integration with the frontend.

Scalable Design for Future Work:
The contract structure and comments are written clearly to allow for future additions such as file encryption, metadata handling, and transaction cost analysis.


---



## Team Members

| Name                              | ASU ID     | 
| --------------------------------- | ---------- |  
| **B. Vamsi Krishna**              | 1234558704 |     
| **Sri Lakshmi Priya Dwarakanath** | 1233149322 | 
| **Sri Sai Poojitha Madhyala**     | 1232806122 |          
| **Chiranjiva Rao Atluri**         | 1234748959 |             
| **Santhosh Kumar Bojanapally**    | 1234281349 | 

---


