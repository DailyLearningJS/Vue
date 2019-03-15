import add from './add.js'
import chai from 'chai'
let expect = chai.expect
describe('es6语法支持', () => {
  it('1 加 1 应该等于 2', () => {
      expect(add(1, 1)).to.be.equal(2)
    })
})