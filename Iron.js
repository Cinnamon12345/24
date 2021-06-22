class Iron{
	constructor(x,y,height,width)
	{
		var options={
			'restitution':0.8,
			'friction':3,
			'density':30
		}
        
		World.add(world, this.body);
        this.height = height;
        this.width=width;
	}
	display()
	{
			var ironpos=this.body.position;		
			push()
			translate(ironpos.x, ironpos.y);
			rectMode(CENTER)
			strokeWeight(4);
			stroke("black");
			fill("darkblue");

			pop()
	}

}