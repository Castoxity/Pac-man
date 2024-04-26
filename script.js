const canvas = document.querySelector('canvas')
const c = canvas.getContext('2d')

canvas.width = innerWidth
canvas.height = innerHeight

 class Boundary{
    constructor({position}){                  
        // position inside the constructor so u dont gotta remember the series they get used in
        this.position = position
        this.width = 40
        this.height= 40
    }
    // 'draw' isnt pre defined, its user's choice of  wording
    draw(){
        
    }
 }