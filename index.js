function Rectangle(x, y, width, height){
  if (!(this instanceof Rectangle)){
    throw new Error("You can not call this function without the new keyword")
  }

  this.y = y;
  this.x = x;
  this.width = width;
  this.height = height;
}

Object.defineProperty(Rectangle.prototype, 'perimeter', {
  get: function(){
    return (this.width * 2) + (this.height * 2)
  }
})

Object.defineProperty(Rectangle.prototype, 'area', {
  get: function(){
    return this.height * this.width
  }
})
module.exports = Rectangle;
