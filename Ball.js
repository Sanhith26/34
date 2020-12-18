class Ball{

    constructor(x,y){
        var options={
            restitution:0.8,
            friction:1,
            density:0.04,
            isStatic:false
        }
        
        this.body=Bodies.circle(x,y,50,options)
        this.radius=50

World.add(world,this.body)
    }
    display(){
        var pos=this.body.position
        var angle=this.body.angle
        push();
        translate(pos.x,pos.y)
        rotate(angle)
        ellipseMode(RADIUS)
        ellipse(0,0,this.radius,this.radius)
        pop();
    }
    

    }
