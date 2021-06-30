class Rectangles{
    constructor(x, y, w, h){
        var modified_property = {
            isStatic: true
        }
        this.width = w
        this.height = h
        this.x = x
        this.y = y
        this.body = Bodies.rectangle(x, y, w, h, modified_property)
        World.add(world, this.body)
    }
    Visible(){
        var p = this.body.position
        rectMode(CENTER)
        rect(p.x, p.y, p.width, p.height)


    }
}