/*
 * Module dependencies
 */

const assert = require('assert')
const ganache = require('ganache-cli')
const Web3 = require('web3')
const web3 = new Web3(ganache.provider())
const { interface, bytecode } = require('../compile')

let accounts = null
let inbox = null

beforeEach(async () => {
  /*
   * 1. Get a list of all accounts
   * 2. Use one of those accounts to deploy the contract
   */

  accounts = await web3.eth.getAccounts()

  inbox = await new web3.eth.Contract(JSON.parse(interface))
    .deploy({ data: bytecode, arguments: ['Hi Ethereum.'] })
    .send({ from: accounts[0], gas: '1000000' })
   
})

describe('Inbox', () => {
  it('deploys a contract', () => {
    console.log(inbox)
  })
})