require("@nomicfoundation/hardhat-toolbox");

const PRIVATE_KEY = "12f778d27484a6f75bc561a36b842dfefb39b77d7159071177a084156f1bc61a";
// Remember to use the private key of a testing account
// For better security practices, it's recommended to use npm i dotenv for storing secret variables

module.exports = {
  defaultNetwork: "swisstronik",
  solidity: "0.8.21",
  networks: {
    swisstronik: {
      url: "https://json-rpc.testnet.swisstronik.com/",
      accounts: [`0x` + `${PRIVATE_KEY}`],
    },
  },
};
