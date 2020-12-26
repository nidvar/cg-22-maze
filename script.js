console.log('Canvas API')

const width = 700
const height = 500

const Engine = Matter.Engine
const Render = Matter.Render
const Runner = Matter.Runner
const World = Matter.World
const Bodies = Matter.Bodies
const MouseConstraint = Matter.MouseConstraint
const Mouse = Matter.Mouse

// ******************************************

const engine = Engine.create({});
const world = engine.world;

const render = Render.create({
    element: document.body,
    engine: engine,
    options: {
        wireframes:false,
        width:700,
        height:500
    }
})

Render.run(render);
Runner.run(Runner.create(), engine)

World.add(world, MouseConstraint.create(engine, {
    mouse: Mouse.create(render.canvas)
}))

const blocks = [
    Bodies.rectangle(350, 0, 700, 40, {isStatic: true}),
    Bodies.rectangle(350, 500, 700, 40, {isStatic: true}),
    Bodies.rectangle(0, 250, 40, 600, {isStatic: true}),
    Bodies.rectangle(700, 250, 40, 500, {isStatic: true})
]

World.add(world, blocks)

World.add(world, Bodies.rectangle(200, 200, 50, 50))

for(let i = 0; i<= 30; i++){
    if(Math.random() > 0.5){
        World.add(world, Bodies.rectangle(Math.random()*width, Math.random()*height, 50, 50))
    }else{
        World.add(world, Bodies.circle(Math.random()*width, Math.random()*height, 25))
    }
    
}