const expect = require('chai').expect
const request = require('superagent')
const fetch = require('node-fetch')
describe('验证是否默认读取test文件夹子目录下的文件', function () {
    it ('是否校验dir目录下的test文件呢', function () {}) 
})

describe('异步测试', function () {
    it ('测试应该5000毫秒结束', function (done) {
        var x = true
        var f = function () {
            x = false
            expect(x).to.be.not.ok
            done()
        }
        setTimeout(f, 4000)
    })
})

describe('尝试请求', function () {
    it('superagent异步应该返回一个对象', function (done) {
        request.get('https://api.github.com').end(function(err, res){
            expect(res).to.be.an('object')
            done()
        })
    })
    it('node-fetch尝试异步请求 允许promise 不用显示调用done', function () {
        fetch('https://api.github.com')
        .then(function (res) {
            return res.json()
        }).then(function (json) {
            expect(json).to.be.an('object')
        })
    })
})
