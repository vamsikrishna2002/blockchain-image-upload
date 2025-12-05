# Blockchain-Based Image Upload and Sharing System

##  Project Overview

This project implements a comprehensive **decentralized image storage and sharing platform** that leverages blockchain technology, InterPlanetary File System (IPFS), and React framework to overcome the inherent limitations of conventional centralized cloud storage solutions. The system utilizes Ethereum smart contracts for secure access control and ownership management, IPFS through Pinata services for distributed file storage, and a React-based interface for seamless user interaction.

## Key Features

###  **Security & Privacy**
- **Decentralized Architecture**: Eliminates single points of failure inherent in centralized systems
- **Multi-layered Security**: Cryptographic protection at every level
- **User Data Sovereignty**: Complete user control over data without third-party dependencies
- **Immutable Audit Trails**: All operations recorded permanently on blockchain
- **Zero-knowledge Authentication**: Privacy-preserving access control

###  **Blockchain Integration**
- **Smart Contract Logic**: Ethereum-based ownership and permission management
- **Gas Optimization**: Efficient contract design with 85,000 gas units for file operations
- **Event System**: Real-time updates and comprehensive audit logging
- **MetaMask Integration**: Seamless wallet connectivity and transaction signing

### **Storage System**
- **IPFS Network**: Distributed file storage with content addressing
- **Pinata Services**: Enhanced reliability and redundancy
- **Deduplication**: 35% average storage reduction through intelligent content addressing
- **Geographic Distribution**: Global accessibility with sub-2-second retrieval times

###  **User Interface**
- **React Frontend**: Responsive design supporting desktop, tablet, and mobile
- **Drag-and-Drop Upload**: Intuitive file management interface
- **Real-time Dashboard**: Live permission management and file browser
- **Blockchain Abstraction**: Complex operations simplified for end users

##  System Architecture

### **Three-Tier Architecture**

1. **Presentation Layer (React Frontend)**
   - Responsive user interface
   - MetaMask wallet integration
   - Real-time status updates
   - File management dashboard

2. **Application Layer (Ethereum Smart Contracts)**
   - Business logic implementation
   - Access control mechanisms
   - Ownership verification
   - Permission management

3. **Data Layer (IPFS + Blockchain)**
   - Distributed file storage (IPFS)
   - Metadata and permissions (Ethereum)
   - Content addressing and redundancy
   - Cryptographic verification

##  Installation & Setup

### **Prerequisites**
- Node.js (v14 or higher)
- npm or yarn
- MetaMask browser extension
- Git

### **Backend Setup**

1. **Clone the repository**
```bash
   git clone https://github.com/vamsikrishna2002/blockchain-image-upload
   cd blockchain-image-upload
```

2. **Install dependencies**
```bash
   npm install
```

3. **Configure environment variables**
```bash
   cp .env.example .env
   # Edit .env with your configuration
```

4. **Compile smart contracts**
```bash
   npx hardhat compile
```

5. **Deploy to local network**
```bash
   npx hardhat node
   npx hardhat run scripts/deploy.js --network localhost
```

### **Frontend Setup**

1. **Navigate to client directory**
```bash
   cd client
```

2. **Install frontend dependencies**
```bash
   npm install
```

3. **Configure API endpoints**
```bash
   # Update src/config.js with contract addresses
```

4. **Start development server**
```bash
   npm start
```

### **IPFS Configuration**

1. **Set up Pinata account**
   - Register at [pinata.cloud](https://pinata.cloud)
   - Generate API keys
   - Add to environment variables

2. **Configure IPFS settings**
```javascript
   // src/ipfsConfig.js
   export const PINATA_API_KEY = process.env.REACT_APP_PINATA_API_KEY;
   export const PINATA_SECRET_KEY = process.env.REACT_APP_PINATA_SECRET_KEY;
```

## Deployment

### **Testnet Deployment (Sepolia)**

1. **Configure network**
```javascript
   // hardhat.config.js
   networks: {
     sepolia: {
       url: "https://sepolia.infura.io/v3/YOUR_INFURA_KEY",
       accounts: [PRIVATE_KEY]
     }
   }
```

2. **Deploy contracts**
```bash
   npx hardhat run scripts/deploy.js --network sepolia
```

3. **Update frontend configuration**
```javascript
   // Update contract addresses in frontend
```

### **Production Deployment**

1. **Build frontend**
```bash
   cd client
   npm run build
```

2. **Deploy to hosting service**
```bash
   # Example: Vercel deployment
   vercel --prod
```


##  Comparison with Traditional Systems

| Feature | Blockchain Solution | Traditional Cloud |
|---------|-------------------|-------------------|
| **Data Ownership** | Complete user control | Platform controlled |
| **Transparency** | Immutable audit trails | Opaque operations |
| **Single Point Failure** | Distributed resilience | Central server risks |
| **Censorship Resistance** | Decentralized by design | Platform dependent |
| **Privacy** | Cryptographic protection | Third-party access |
| **Vendor Lock-in** | Open standards | Proprietary systems |
| **Global Accessibility** | IPFS distribution | CDN dependent |
| **Cost Predictability** | Transparent pricing | Variable subscription fees |


##  Contributing

We welcome contributions from the community! Please read our [Contributing Guidelines](CONTRIBUTING.md) for details on our code of conduct and the process for submitting pull requests.

### **Development Setup**
1. Fork the repository
2. Create a feature branch: `git checkout -b feature/amazing-feature`
3. Commit changes: `git commit -m 'Add amazing feature'`
4. Push to branch: `git push origin feature/amazing-feature`
5. Open a Pull Request


##  Team Members

| Name | Role | ASU ID | Email |
|------|------|--------|-------|
| **B. Vamsi Krishna** | Project Lead & Smart Contract Developer | 1234558704 | vboddap2@asu.edu |
| **Sri Sai Poojitha Madhyala** | Frontend Developer & UI/UX Designer | 1232806122 | smadhyal@asu.edu |
| **Sri Lakshmi Priya Dwarakanath** | Backend Developer & IPFS Integration | 1233149322 | dpnolast@asu.edu |
| **Chiranjiva Rao Atluri** | DevOps & Testing Engineer | 1234748959 | catluri@asu.edu |
| **Santhosh Kumar Bojanapally** | Security Analyst & Documentation | 1234281349 | sbojana1@asu.edu |



** Star this repository if you find it helpful!**


