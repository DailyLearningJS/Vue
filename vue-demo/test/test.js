var assert = require('assert')
describe('Array', function() {
  describe('#indexOf()', function() {
    it('should return -1 when the value is not present', function() {
        assert.equal(-1, [1, 2, 3].indexOf(4))
    })
  })
})
describe('#test', function(){
  it("should complete this test", function (done) {
    return new Promise(function(resolve, reject) {
      assert.ok(true)
      done()
    })
  })
})