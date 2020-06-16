
const describe = require('mocha').describe
const it = require('mocha').it
const expect = require('chai').expect
const strictEqual = require('../calculation')

describe('calculation', () => {
  describe('strictEqual', () => {
    it('returns false for 6 and 7', () => {
      const total = strictEqual(6, 7) // run the function with the test data

      expect(total).to.equal(false) // make assertions
    })
    it('returns false for 5 and "5"', () => {
      const total = strictEqual(5, '5') // run the function with the test data

      expect(total).to.equal(false) // make assertions
    })
    it('returns false for 5 and "b"', () => {
      const total = strictEqual(5, 'b') // run the function with the test data

      expect(total).to.equal(false) // make assertions
    })
    it('returns true for 5 and 5', () => {
      const total = strictEqual(5, 5) // run the function with the test data

      expect(total).to.equal(true) // make assertions
    })
    it('returns true for "5" and "5"', () => {
      const total = strictEqual('5', '5') // run the function with the test data

      expect(total).to.equal(true) // make assertions
    })
  })
})
