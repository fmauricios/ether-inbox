const HDWalletProvider = require('truffle-hdwallet-provider')
const Web3 = require('web3')
const { interface, bytecode } = require('./compile')

const { mnemonic, networkUrl } = require('./config')

const provider = new HDWalletProvider(
  mnemonic,
  networkUrl
)

const web3 = new Web3(provider)