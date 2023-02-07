require('babel-register');
require('babel-polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');
const privatekeys = ['0x112bcce5a36f0c388fae1a71f68dfb843c36595e0683346db0d65d5ea63ab987']

module.exports = {
  networks: {
    development: {
      host: "127.0.0.1",
      port: 7545,
      network_id: "*" // Match any network id
    },
    bsctestnet: {
      provider: () => new HDWalletProvider(
        privatekeys,
        'https://data-seed-prebsc-1-s1.binance.org:8545/'
        ),
      network_id: 97,
      skipDryRun: true
    }
  },
  contracts_directory: './src/contracts/',
  contracts_build_directory: './src/abis/',
  compilers: {
    solc: {
      optimizer: {
        enabled: true,
        runs: 200
      },
      evmVersion: "petersburg"
    }
  }
}
