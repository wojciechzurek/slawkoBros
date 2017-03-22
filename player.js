class Player
{
	constructor(_x, _y, _w, _h, _img)
	{
		this.x = _x;
		this.y = _y;
		this.width = _w;
		this.height = _h;
		this.imgSrc = _img;
		this.newX = 0;
		this.newY = 0;
		this.maxSpeed = 4;
		this.jumping = false;
		this.canJump = true;
		this.haveFloor = true;
	}

	draw(ctx)
	{
		ctx.drawImage(this.imgSrc, this.x, this.y);
	}
	/*
	isCollideWithBlock(block)
	{
		if (this.x < block.x + block.width &&
			this.x + this.width > block.x &&
			this.y < block.y + block.height &&
			this.height + this.y > block.y)
			{
				if(this.y <= block.y - (block.height/2))
					return "top";
				if(this.y >= block.y + (block.height/2))
					return "bottom";
				if(this.x < block.x)
					return "left";
				if(this.x > block.x)
					return "right";
			}
			
		return "none";
	}
	*/
	isCollideWithBlock(block)
	{
		var dx=(this.x+this.width/2)-(block.x+block.width/2);
		var dy=(this.y+this.height/2)-(block.y+block.height/2);
		var width=(this.width+block.width)/2;
		var height=(this.height+block.height)/2;
		var crossWidth=width*dy;
		var crossHeight=height*dx;
		var collision = "none";

		if(Math.abs(dx)<=width && Math.abs(dy)<=height)
		{
			if(crossWidth>crossHeight)
				collision=(crossWidth>(-crossHeight))?'bottom':'left';
			else
				collision=(crossWidth>-(crossHeight))?'right':'top';
		}
		return collision;
	}
}