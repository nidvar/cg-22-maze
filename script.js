const width = 600
const height = 600
const cells = 3
const Engine = Matter.Engine
const Render = Matter.Render
const Runner = Matter.Runner
const World = Matter.World
const Bodies = Matter.Bodies
const engine = Engine.create({});
const world = engine.world;
const render = Render.create({
    element: document.body,
    engine: engine,
    options: {
        wireframes:true,
        width: width,
        height: height
    }
})
Render.run(render);
Runner.run(Runner.create(), engine)
const blocks = [
    Bodies.rectangle(width/2, 0, width, 40, {isStatic: true}),
    Bodies.rectangle(width/2, height, width, 40, {isStatic: true}),
    Bodies.rectangle(0, height/2, 40, height, {isStatic: true}),
    Bodies.rectangle(width, height/2, 40, height, {isStatic: true})
]
World.add(world, blocks)
World.add(world, Bodies.rectangle(200, 200, 50, 50))


const random_shuffle = (the_array)=>{
    let x = []
    let y = []
    the_array.forEach(a=>{
        if(Math.random()<0.5){
            x.push(a)
        }else{
            y.push(a)
        }
    })
    let result = x.concat(y)
    return result


}

const grid = Array(cells).fill(null).map(a=>{
    return Array(cells).fill(false)
})

const verticals = Array(cells).fill(null).map(a=>{
    return Array(cells-1).fill(false)
})

const horizontals = Array(cells-1).fill(null)
.map(a=>{return Array(cells).fill(false)})

const startRow = Math.floor(Math.random()*cells)
const startColumn = Math.floor(Math.random()*cells)

const theNextMove = (row, column)=>{

    if(grid[row][column] == true){
        return
    }

    grid[row][column] = true;

    const neighbors = random_shuffle([
        [row - 1, column],
        [row, column + 1],
        [row + 1, column],
        [row, column - 1]
    ]);
    console.log(neighbors)
    neighbors.forEach((a, i)=>{
        const nextRow = a[i]
        const nextColumn = a[i+1]
        
        if(
            nextRow < 0 ||
            nextRow >= cells ||
            nextColumn < 0 ||
            nextColumn >= cells
        ){
            continue;
        }

        if(grid[nextRow][nextColumn]){
            continue;
        }

    })

}

theNextMove(1,1)