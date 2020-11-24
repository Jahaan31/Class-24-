class PIG{
    constructor(x,y){
        var options={
            restitution:0.7,
            friction:1.5,
            density: 1
        }
        this.body = Bodies.rectangle(x,y,60,60,options);
        this.width = 60;
        this.height = 60;
        World.add(myworld,this.body);
    }

    display(){
        var pos = this.body.position;
        var angle = this.body.angle;
        push();
        translate(pos.x,pos.y);
        rotate(angle);
        fill("blue");
        rectMode(CENTER);
        rect(0,0,this.width,this.height);
        pop();
        
    }
}