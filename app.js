// Coding Train

let ball1;
let ball2;
let speed_x = 4; 
let speed_y = 4;
let w = 600; // Canvas Width
let h = 400; // Canvas Height
let initialColor;
let ball_count = 3;

function setup() {
  createCanvas(w, h);
  initialColor = color(255, 0, 255);
  ball1 = new Ball(200, 200, 40, w, h, speed_x, speed_y);
  ball2 = new Ball(400, 200, 40, w, h, speed_x, speed_y);
}

function draw() {
  background(0);
  textSize(32);
  text('bubbleBath', 10, 30);
  ball1.move();
  ball1.show();
  textSize(20);
  ballText(ball1);
  ball2.move();
  ball2.show();
  ballText(ball2);
  
}

function ballText(ballNum) {
  // Text on ball displays current x, y speed
  text(`${round(ballNum.speed_x)}, ${round(ballNum.speed_y)}`, (ballNum.x - 20), (ballNum.y + 5));
}

function makeBalls(ball_count) {
  // Make x balls
}

function moveBalls(balls){
  // For each ball: move(), show(), ballText()
}

class Ball {
  constructor(x, y, r, w, h, sp_x, sp_y) {
    this.x = x;
    this.y = y;
    this.r = r;
    this.w = w;
    this.h = h;
    this.c = initialColor;
    this.direction_x = 'right';
    this.direction_y = 'up';
    this.speed_x = sp_x;
    this.speed_y = sp_y;
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
    let x_zero = (this.r / 2) + 5; // Shifts zero to edge of circle instead of center
    let x_limit = w - ((this.r / 2) + 5); 
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
    let y_zero = (this.r / 2) + 5; // Shifts zero to edge of circle instead of center
    let y_limit = h - ((this.r / 2) + 5); 
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

