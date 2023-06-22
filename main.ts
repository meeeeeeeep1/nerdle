function makeTile (letter: string, color: number, textColor: number, rounded: boolean) {
    tile = image.create(16, 16)
    if (rounded) {
    	
    } else {
        tile.fill(color)
    }
    tile.printCenter(letter,4,textColor)
return tile
}
function createBoard () {
	
}
let tile: Image = null
let mySprite = sprites.create(makeTile("a", 13, 1, false), SpriteKind.Player)
custom.hello()
