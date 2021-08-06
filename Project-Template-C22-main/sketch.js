const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var roof,balloptions;
//Create multiple bobs, mulitple ropes varibale here


function setup() {
	createCanvas(800, 600);
	rectMode(CENTER);

	engine = Engine.create();
	world = engine.world;

	var roof_options={
		isStatic:true			
	}

	balloptions={
		isStatic:true,
		restitution:0.95,

	}

	


	roof = Bodies.rectangle(400,100,230,20,roof_options);
    World.add(world,roof);

	ball=Bodies.circle(400,200,20);
	World.add(world,ball)

	Engine.run(engine);

	 		
	
	

con=Matter.Constraint.create({
pointA:{x:500,y:50},
bodyA:ball,
pointB:{x:500,y:50},
length:10,
stiffness:0.005
})
	World.add(world,con);
	
  
}

function draw() {
  rectMode(CENTER);
  ellipseMode(RADIUS);
  background("#99004d");
  

	 
  

  rect(roof.position.x,roof.position.y,230,20);
  ellipse(ball.position.x,ball.position.y,20);

  line(con.pointA.x,con.pointA.y,ball.position.x,ball.position.y);


  //call display() to show ropes here

  
  //create ellipse shape for multiple bobs here

 
}

//Write keyPressed function and apply force on pressing up_arrow key on the first bob.
