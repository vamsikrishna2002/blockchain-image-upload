

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

## Draft Contract and Code

**Upload.sol**

* Manages file upload and ownership.
* Allows users to share or revoke access.
* Stores uploaded file hashes linked to owner addresses.

**App.js**

* Connects MetaMask wallet and interacts with the contract.
* Allows image upload and sharing using a simple interface.

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


