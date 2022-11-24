require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.17",
  networks: {
    hardhat: {},
    polygon_mumbai: {
      url: "https://polygon-mumbai.infura.io/v3/95c61446ddd64bcf96ff33cbc4040433",
      accounts: [
        `0x${"df57089febbacf7ba0bc227dafbffa9fc08a93fdc68e1e42411a14efcf23656e"}`,
      ],
    },
  },
};
