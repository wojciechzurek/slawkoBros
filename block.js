class Block
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
}