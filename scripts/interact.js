
const API_KEY = process.env.API_KEY;
const PRIVATE_KEY = process.env.PRIVATE_KEY;
const CONTRACT_ADDRESS = process.env.CONTRACT_ADDRESS;

// For Hardhat
const contract = require("../artifacts/contracts/HelloWorld.sol/HelloWorld.json");
//console.log(JSON.stringify(contract.abi));


// Provider
// This is a node provider that gives you read and write access to the blockchain.
const alchemyProvider = new ethers.providers.AlchemyProvider(network="goerli", API_KEY);

// Signer
//This respresents an Ethereum account that has the ability to sign transactions
const signer = new ethers.Wallet(PRIVATE_KEY, alchemyProvider);

// Contract
//Ethers.js object that represents a specific contract deployed on-chain.
const helloWorldContract = new ethers.Contract(CONTRACT_ADDRESS, contract.abi, signer);


async function main() {
    const message = await helloWorldContract.message();
    console.log("The message is: " + message);
  
    console.log("Updating the message...");
    const tx = await helloWorldContract.update("This is the new message.");
    //The wait() method below ensures that our script waits for the transaction to be mined on the blockchain
    //before proceeding onwards.

    //NOTE: if this line were to be left  out, your scripts may not be able to see the updated
    //message value in the contract.
    await tx.wait();
    const newMessage = await helloWorldContract.message();
    
    console.log("The new message is: " + newMessage);
    //console.log(message)
  }
  main();

  console.log('hello')

