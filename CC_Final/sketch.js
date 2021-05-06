//background images
let i = 1
let cat;
let leavesF =[];
let leavesB = [];
let leavesL = [];
let page = 1
let sounds;
let x=0;
//
function preload(){
// load images
// character and other attributes are will use for loop to cycle through
}
function setup() {
  createCanvas(600, 400);
  //load images
  bg = loadImage('1.jpg')
  //buttons
  //Restart = createButton("Prev Page")
  Pbutton = createButton("Next Page")
  Pbutton.mousePressed(changeBg);
 //Restart.mousePressed(goBack)
//objects:
//Trees
  for (let i = 0; i < 300; i++) {
    leavesF.push(new Tree());
  }
  for (let i = 0; i < 300; i++) {
    leavesB.push(new Tree());
  }
  for (let i = 0; i < 200; i++) {
    leavesL.push(new Tree());
  }
}

function draw() {
  background(220);
  
  //changing bg image
  image(bg, 0, 0, 600, 400)
  image(bg, mouseX, mouseY, 50, 50)
  

 //Changing objects based on page(bg)
  if (0 < page < 3) {
    //Background color
    for (let i = 0; i < leavesF.length; i++) {
      leavesF[i].sway();
      leavesF[i].display();
    } //swaying leaves
    for (let i = 0; i < leavesL.length; i++) {
      leavesL[i].sway();
      leavesL[i].displayL();
    }
 
  }
  if (page== 4) {
    fill(255)
    image(bg, 0, 0, 600, 400)
  }
  if (page== 5) {
    fill(255)
    image(bg, 0, 0, 600, 400)
  }
  if (page==6) {
    fill(255)
    image(bg, 0, 0, 600, 400)
  }
  if (page==7) {
    fill(255)
    image(bg, 0, 0, 600, 400)
  }
  if (page==8) {
    fill(255)
    image(bg, 0, 0, 600, 400)
  }
//text
if (page==1){
  push()
  fill(255)
  rect(70,170,190,50)
  fill(0)
  textSize(15)
  text("Once upon a time,\n in a great forest…. ",80,190)
  pop()
 }
 if (page==2){
   push()
   fill(255)
   rect(70,170,210,90)
   fill(0)
   textSize(15)
   text("A young girl, Gloria,\nwalked the forest alone.\nShe was lost in thought, \nfeeling peaceful",80,190)
   pop()
  }
  if (page==3){
   push()
   fill(255)
   rect(70,80,210,50)
   rect(425,110,160,90)
   fill(0)
   textSize(15)
   text("...until she was interupted\n by a call from behind her!",80,100)
   text("Her younger sister,\nFrancisca, had \nfollowed her against\nher wishes.",435,130)
   pop()
  }
  
  fill(0)
  text(mouseX, 10, 10)
  text(mouseY, 10, 20)

}
//chage Background
function changeBg(){
  if (i==8){
    i = 0
  }
  i=i+1
  bg = loadImage( i + '.jpg') 
  page = i 
}

//Go back a page
function goBack(){
  let x = i-1
  bg = loadImage(x +'.jpg')
  page==page-1
}


//Tree object, moves when hovers
class Tree {
  constructor(){
    this.x= random(250,600)
    this.y = random(0,150)
    this.length = random(5,20);
    this.width = random(10,20);
    this.speed = 0.5
    this.xB = random(0,600)
    this.yB = random(0,230)
    this.r = random(0,180)
    this.g= random(100,250)
    this.b = random(0,100)
    this.t= 10
  }
   sway() {
 //moves when hovering
    if (
      mouseY >= 0 &&
      mouseY <= 150
    ) {
      this.x += random(-this.speed, this.speed);
    this.y += random(-this.speed, this.speed);
    }
  }
//tree leaves
  display() {
    noStroke()
    fill(this.r,this.g,this.b,)
    ellipse(this.x, this.y,  this.length, this.width);
  }
  displayL() {
    fill(this.r,this.g,this.b,)
    ellipse(this.x-400, this.y-40, this.length, this.width);
  }


}



