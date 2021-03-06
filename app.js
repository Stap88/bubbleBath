
const speed_x = 4; // Ball speed
const speed_y = 4; // Ball speed
// let w = 360; // Canvas width
// let h = 740; // Canvas height
let w = window.innerWidth ; // Canvas width
let h = window.innerHeight ; // Canvas height
let initialColor; // Ball & Text starting color
const ball_count = 10;
var ball_list = [];


function setup() {
  // Runs First
  createCanvas(w, h);
  initialColor = color(255, 0, 255);
  makeBalls(ball_count);
}

function draw() {
  // Main Loop
  background(0);
  moveBalls(ball_list);
  windowResizeCheck();
}

function ballText(ballNum) {
  // Text on ball displays current x, y speed
    text(`${round(ballNum.speed_x)}, ${round(ballNum.speed_y)}`, (ballNum.x - 20), (ballNum.y + 5));
}

function makeBalls(ball_count) {
  // Make x balls
  var count = 0;
  while (count != ball_count) {
    let ball = new Ball(random(20, (w - 20)), random(20, (h - 20)), 30, w, h, speed_x, speed_y);
    ball_list.push(ball);
    count += 1;
  } 
  console.log(ball_list)
}

function moveBalls(ball_list){
  // Move/Show each ball, update speed text
  for (let ball of ball_list) {
    ball.move();
    ball.show();
    textSize(20);
    ballText(ball);
  }
}

function windowResizeCheck() {
  // Redraws canvas and centers balls on window resize
  if (w != (window.innerWidth - 20) || h != (window.innerHeight - 20)) {
    w = window.innerWidth - 20;
    h = window.innerHeight - 20;
    createCanvas(w, h);
    centerBalls();
  }
}

function centerBalls(){
  // Center balls within x, y bounds
  for (let ball of ball_list) {
    ball.x = random(30, (w - 30));
    ball.y = random(30, (h - 30));
  }
}

class Ball {
  constructor(x, y, r, w, h, sp_x, sp_y) {
    this.x = x; // x position
    this.y = y; // y position
    this.r = r; // radius
    this.w = w; // canvas width
    this.h = h; // canvas height
    this.c = initialColor;
    this.direction_x = 'right';
    this.direction_y = 'up';
    this.speed_x = sp_x; // Move speed x direction
    this.speed_y = sp_y; // Move speed y direction
  }


  toggle_direction_x() {
    if (this.direction_x === 'right') {
      this.direction_x = 'left';
    } else {
      this.direction_x = 'right';
    }  
  }

  toggle_direction_y() {
    if (this.direction_y === 'up') {
      this.direction_y = 'down';
    } else {
      this.direction_y = 'up';
    }  
  }

  random_speed_x() {
    this.speed_x = random((speed_x / 2), speed_x);
  }

  random_speed_y() {
    this.speed_y = random((speed_y / 2), speed_y);
  }

  set_speed_x() {
    if (this.direction_x === 'right') {
      this.speed_x = 0 + this.speed_x;
    } else {
      this.speed_x = 0 - this.speed_x;
    }
  }

  set_speed_y() {
    if (this.direction_y === 'up') {
      this.speed_y = 0 + this.speed_y;
    } else {
      this.speed_y = 0 - this.speed_y;
    }
  }

  move_x(){
    let x_zero = this.r; 
    let x_limit = w - this.r;  
    this.future_x = this.x;
    this.future_x += this.speed_x;

    if (this.future_x > x_limit || this.future_x < x_zero) {
      this.toggle_direction_x();
      this.random_speed_x();
      this.set_speed_x();
      this.newColor();
    } else {
      this.x = this.future_x;
    }
  }

  move_y(){
    let y_zero = this.r; 
    let y_limit = h - this.r; 
    this.future_y = this.y;
    this.future_y += this.speed_y;

    if (this.future_y > y_limit || this.future_y < y_zero) {
      this.toggle_direction_y();
      this.random_speed_y();
      this.set_speed_y();
      this.newColor();
    } else {
      this.y = this.future_y;
    }
  }

  move(){
    this.move_x();
    this.move_y();
  }
  
  newColor() {
    this.c = color(random(0, 255), random(0, 255), random(0, 255));
  }

  show() {
    stroke(255);
    strokeWeight(4);
    // noFill();
    // fill(color(random(0, 255), random(0, 255), random(0, 255)));
    fill(this.c);
    ellipse(this.x, this.y, this.r * 2);
    if (this.c === initialColor) {
      this.newColor;
    }
    }
}

