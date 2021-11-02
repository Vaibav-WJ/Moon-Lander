class Meteor{
        constructor(x, y, width, height, angle) {
          this.x = x;
          this.y = y;
          this.width = width;
          this.height = height;
          this.angle = angle;
          this.meteor_image = loadImage("./assets/mt.png");
        }
        
        display() {
         if (keyIsDown(RIGHT_ARROW) && this.angle<70  ) {
            this.angle += 1;
          }
      
          if (keyIsDown(LEFT_ARROW) && this.angle>-30 ) {
            this.angle -= 1;
          }
      
          push();
          translate(this.x, this.y);
          rotate(this.angle);
          imageMode(CENTER);
          image(this.meteor_image, 0, 0, this.width, this.height);
          pop();
          
        }
      }
   /* constructor(x,y,width,height,angle,metPos,metImg){
        this.speed = 0.05;
        this.body = bodies.rectangle(x,y,width,height,angle);
        this.width = width;
        this.height = height;
        this.metPos = mp;
        this.angle = angle;

        this.metImg = loadImage("assets/meteor(2)/png");

        World.add(world,this.body);
    }

    display(){
        var angle = this.body.angle;
        var pos = this.body.pos;
        push();
        translate(pos.x,pos.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.image,0,this.metPos,this.width,this.height)
        pop();
    }
}*/