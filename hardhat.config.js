
/**
* @type import('hardhat/config').HardhatUserConfig
*/

//Hardhat is  development environment to compile, deploy, test, and debug Ethereum software. it helps developer when building smart ccontracts and dApps locally before deploying to live chain.


require('dotenv').config();
require("@nomiclabs/hardhat-ethers");
require("@nomiclabs/hardhat-etherscan");

const { API_URL, PRIVATE_KEY } = process.env;

module.exports = {
  solidity: "0.8.17",
   defaultNetwork: "goerli",
   networks: {
      hardhat: {},
      goerli: {
        url: API_URL,
        accounts: [`0x${PRIVATE_KEY}`]
      }
   },
   etherscan: {
    // Your API key for Etherscan
    // Obtain one at https://etherscan.io/
    apiKey: process.env.ETHERSCAN_API_KEY
  }
}