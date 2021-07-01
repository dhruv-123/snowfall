class Snowing {
    constructor(x, y) {
        var options = {
            'restitution': 0.5,
            'friction': 0,
            isStatic:false
        }
        this.r = 50;
        this.body = Bodies.circle(x, y, this.r, options);
        this.snowImage = loadImage("snow4.webp");
        this.snowImage2=loadImage("snow5.webp")
        World.add(world, this.body);
        this.trajectory = [];
        //only 40 times the loop will work and random positions for snow will go into the array
        for(var i=0;i<40;i++){ 
            Matter.Body.setPosition(this.body,{x:random(0,800),y:random(0,600)});
             var position = [this.body.position.x,this.body.position.y];
             this.trajectory.push(position);
              }
    }
    display() {
        var pos = this.body.position;
        var angle=this.body.angle

        
        var angle = this.body.angle;
        //take the values from the array now and add 2 diffrent images of snow side by side.
        for(var i=0; i<this.trajectory.length; i++)
        { image(this.snowImage, this.trajectory[i][0], this.trajectory[i][1],this.r,this.r); 
            image(this.snowImage2, this.trajectory[i][0]+15, this.trajectory[i][1],this.r,this.r)
        }

       /* push();
        translate(pos.x, pos.y);
        rotate(angle);
        imageMode(CENTER);
        imageMode(RADIUS);*/
      // image(this.snowImage,this.body.position.x,this.body.position.y,this.r,this.r);
       // pop();
    }

};