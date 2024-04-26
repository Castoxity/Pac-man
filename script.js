const canvas = document.querySelector('canvas')
const c = canvas.getContext('2d')

canvas.width = innerWidth
canvas.height = innerHeight

 class Boundary{
    static width = 40
    static height = 40
    constructor({position}){                  
        // position inside the constructor so u dont gotta remember the series they get used in
        this.position = position
        this.width = 40
        this.height= 40
    }
    // 'draw' isnt pre defined, its user's choice of  wording
    draw(){
        c.fillStyle='blue'
        c.fillRect(this.position.x,this.position.y,this.width,this.height)
    }
 }

 const map  = [
    ['-','-','-','-','-','-'],
    ['-',' ',' ',' ',' ','-'],
    ['-',' ','-','-',' ','-'],
    ['-',' ',' ',' ',' ','-'],
    ['-','-','-','-','-','-']
 ]
 const boundaries =[]


map.forEach((row, i)=> {
    row.forEach((symbol, j) => {
        switch (symbol){
            case '-':
                boundaries.push(new Boundary({
                    position:{
                        x:Boundary.width * j,
                        y:Boundary.height * i
                    }
                })
            )
            break
        }
    })
})

 boundaries.forEach(boundary => {
    boundary.draw()
 })