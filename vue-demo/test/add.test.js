var add = require('./add.js')
var expect = require('chai').expect
var Foo = function () {
    this.name = 'foo'
}
var foo = new Foo()

describe('加法函数测试', function () {
    it(' 1 加 1 应该等于 2', function () {
        expect(add(1, 1)).to.be.equal(2)
    })
})
describe ('断言风格测试', function () {
    it ('测试是否可以多个同时进行', function () {
        expect(4 + 5).to.be.equal(9)
        expect(4 + 5).to.be.not.equal(10)
    })
    it ('测试断言ok 校验boolean类型', function () {
        expect('everything').to.be.ok
        expect(false).to.not.be.ok
        expect(false).to.not.ok
    }) 
    it ('测试typeof的使用', function () {
        expect('test').to.be.a('string')
        expect({ foo: 'bar'}).to.be.a('object')
        expect(foo).to.be.a.instanceOf(Foo)
        expect({ foo: 'bar'}).to.be.an('object')
        expect(foo).to.be.an.instanceOf(Foo)
    })
    it('测试include的使用', function () {
        expect([1, 2, 3]).to.be.include(2)
        expect('foo-text').to.contain('text')
        expect({name: 'foo', sex: 'box'}).to.include.keys('sex')
    })
    it('测试empty的使用', function () {
        expect([]).to.empty
        expect({}).to.be.empty
        expect('').to.empty
    })
    it('测试match 正则表达式的使用', function () {
        expect('foo').to.be.match(/^\w/)
    })
    it('不抛出错误就会测试通过', function () {})
})