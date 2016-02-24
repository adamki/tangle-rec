const assert = require('assert');
const Rectangle = require('../');

describe('Rectangle', function(){
  it('should be a function', function(){
    assert.equal(typeof Rectangle, 'function')
  })

  it('should take four arguments', function(){
    assert.equal(Rectangle.length, '4')
  })

  it('should instantiate an instance', function(){
    var rect = new Rectangle(0, 0, 10 ,10)
    assert.equal(typeof rect, 'object')
  })

  it('should throw error if "new" is ommitted', function(){
    assert.throws(function(){
      Rectangle()
    }, "You can not call this function without the new keyword" )
  })

  describe("instance", function(){
    beforeEach(function(){
      this.rect = new Rectangle(1, 2, 3, 4)
    });

    it('should have an "x" property base on the first arguement', function() {
      assert(this.rect.x, 'Instance does not have an "x".');
      assert.equal(this.rect.x, 1)
    });

    it('should have an "y" property base on the first arguement', function() {
      assert(this.rect.y, 'Instance does not have an "y".');
      assert.equal(this.rect.y, 2)
    });

    it('should have an "width" property base on the first arguement', function() {
      assert(this.rect.width, 'Instance does not have an "width".');
      assert.equal(this.rect.width, 3)
    });

    it('should have an "height" property base on the first arguement', function() {
      assert(this.rect.height, 'Instance does not have an "height".');
      assert.equal(this.rect.height, 4)
    });

  })

  describe("#perimeter", function(){
    it("should return the perimeter", function(){
      var rect = new Rectangle(0, 0, 10, 10);
      assert.equal(rect.perimeter, 40)
    });
  })

  describe("#area", function(){
    it("should return the area", function(){
      var rect = new Rectangle(0, 0, 10, 10);
      assert.equal(rect.area, 100)
    });
  })
})
