class Snow{
    constructor(x,y,r){
        var options={
            'restituition':0.4,
        }

        this.body=Bodies.circle(x,y,r,options);
        this.r=r;
        this.color=color("white")
        World.add(world,this.body);
    }
    display(){
        var pos=this.body.position;
        var angle=this.body.angle;

        push();
        translate(pos.x,pos.y);
         rotate(angle);
         noStroke();
         fill(this.color);
         ellipseMode(CENTER);
         ellipse(0,0,this.r,this.r);
         pop();
    }
    
}
