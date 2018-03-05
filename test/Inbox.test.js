/*
 * Module dependencies
 */

const assert = require('assert')
const ganache = require('ganache-cli')
const Web3 = require('web3')
const web3 = new Web3(ganache.provider())

let accounts = null

beforeEach(async () => {
  /*
   * 1. Get a list of all accounts
   * 2. Use one of those accounts to deploy the contract
   */

   accounts = await web3.eth.getAccounts()

   console.log(accounts)
})

describe('Inbox', () => {
  it('deploys a contract', () => {
  })
})