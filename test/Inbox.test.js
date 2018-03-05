/*
 * Module dependencies
 */

const assert = require('assert')
const ganache = require('ganache-cli')
const Web3 = require('web3')

const provider = ganache.provider()
const web3 = new Web3(provider)

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

  inbox.setProvider(provider)
})

describe('Inbox', () => {
  it('deploys a contract', () => {
    assert.ok(inbox.options.address)
  })

  it('has a default message', async () => {
    const message = await inbox.methods.message().call()

    assert.equal(message, 'Hi Ethereum.')
  })

  it('can change the message', async () => {
    await inbox.methods.setMessage('Ethereum is awesome.').send({
      from: accounts[0]
    })

    const message = await inbox.methods.message().call()

    assert.equal(message, 'Ethereum is awesome.')
  })
})