class paper{
  constructor(x,y){
      var options = {
      isStatic:false,
      restitution:0.8,
      density:1
      }
      this.image = loadImage("paper.png")
      this.body = Bodies.circle(x,y,20,options)
      World.add(world,this.body)
  }
     display(){
         push()
         imageMode(CENTER)
         fill("yellow")
         image(this.image,this.body.position.x,this.body.position.y,70,70)
         pop()
     }
    
}