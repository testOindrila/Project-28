class launcher
{
    constructor(bodyA,pointB)
    {
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }
        this.pointB=pointB;
        this.laucherObject = Constraint.create(options);
        World.add(world , this.laucherObject);
    }
    attach(body)
    {
        this.laucherObject.bodyA=body;
    }
    fly()
    {
        this.launcherObject.bodyA=null;
    }
    display()
    {
        if(this.laucherObject.bodyA)
        {
            var pointA = this.laucherObject.bodyA.position;
            var pointB = this.pointB;
            strokeWeight(3);
            line(pointA.x , pointA.y , pointB.x , pointB.y); 
        }
    }
}