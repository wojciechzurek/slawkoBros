class SpecialItem
{
	constructor(_x, _y, _w, _h, _blockID, _img = null)
	{
		this.x = _x;
		this.y = _y;
		this.width = _w;
		this.height = _h;
		this.blockID = _blockID;
		this.imgSrc = _img;
		this.animY = 0;
		this.blockMove = false;
	}

	draw(ctx)
	{
		ctx.drawImage(this.imgSrc, this.x, this.y);
	}
	
	isCollidedTo(player)
	{
		if (this.x < player.x + player.width &&
			this.x + this.width > player.x &&
			this.y < player.y + player.height &&
			this.height + this.y > player.y)
			
			return true;
			
		return false;
	}
	
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