class Slingshot{
	constructor(body,launcher)
	{
		
		var options={ 
            bodyA:body,			 
			pointB:launcher, 
			stiffness:0.004, 
			length:1
			
		}
		
		this.bodyA=body
		this.pointB=launcher
		this.slingshot=Constraint.create(options)
        World.add(world,this.slingshot)
        

	}

	attach(body){
		this.slingshot.bodyA=body;
	}

	fly()
	{
		this.slingshot.bodyA=null;
	}

	display()
	{
		if(this.slingshot.bodyA)
		{
			var pointA=this.bodyA.position;
			var pointB=this.pointB

			strokeWeight(2);		
			line(pointA.x,pointA.y,pointB.x,pointB.y);
		}
	}
}