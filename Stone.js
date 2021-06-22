class Stone{
	constructor(x,y,height,width)
	{
		var options={
			'restitution':0.8,
			'friction':0.9,
			'density':12
		}
        
		World.add(world, this.body);
        this.height = height;
        this.width=width;
	}
	display()
	{
			var stonepos=this.body.position;		
			push()
			translate(stonepos.x, stonepos.y);
			rectMode(CENTER)
			strokeWeight(4);
			stroke("black");
			fill("darkblue");   
			pop()
	}

}