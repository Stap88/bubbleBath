// Coding Train

// let bubble1;
// let bubble2;
let ball1;
// let ball2;
let edge;
let speed_x = 1;
let speed_y = 1;
let w = 1920;
let l = 1080;
let initialColor;

function setup() {
  createCanvas(w, l);
  initialColor = color(255, 0, 255);
  // bubble1 = new Bubble(200, 200, 40, w, l);
  // bubble2 = new Bubble(400, 200, 20, w, l); 
  ball1 = new Ball(200, 200, 20, w, l, speed_x, speed_y);
  ball2 = new Ball(400, 200, 40, w, l, (speed_x + 10), (speed_y + 10));
}

function draw() {
  background(0);
  ball1.move();
  ball1.show();
  ball2.move();
  ball2.show();
  // bubble1.move();
  // bubble1.show();
  // bubble2.move();
  // bubble2.show();
}


class Ball {
  constructor(x, y, r, w, l, sp_x, sp_y) {
    this.x = x;
    this.y = y;
    this.r = r;
    this.w = w;
    this.l = l;
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
    this.speed_x = random(0, 5);
  }

  random_speed_y() {
    this.speed_y = random(0, 5);
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
    let x_zero = (this.r / 2) + 5;
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
    let y_zero = (this.r / 2) + 5;
    let y_limit = l - ((this.r / 2) + 5);
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

// class Bubble {
//   constructor(x, y, r, w, l) {
//     this.x = x;
//     this.y = y;
//     this.r = r;
//     this.w = w;
//     this.l = l;
//     this.c = initialColor;
//   }

//   move() {
//     this.moveX();
//     this.moveY();
//   }

//   moveX() {
//     this.future_x = this.x + random((0 - speed), speed);
//     if (this.future_x > (w - ((this.r / 2) + 5)) || this.future_x < ((this.r / 2) + 5)) {
//       this.newColor();
//     } else {
//       this.x = this.future_x;
//     }
//   }

//   moveY() {
//     this.future_y = this.y + random((0 - speed), speed);
//     if (this.future_y > (l - ((this.r / 2) + 5)) || this.future_y < ((this.r / 2) + 5)) {
//       this.newColor();
//     } else {
//       this.y = this.future_y;
//     }
//   }
  
//   newColor() {
//     this.c = color(random(0, 255), random(0, 255), random(0, 255));
//     // print('newColor()');
//   }

//   show() {
//     stroke(255);
//     strokeWeight(4);
//     // noFill();
//     // fill(color(random(0, 255), random(0, 255), random(0, 255)));
//     fill(this.c);
//     ellipse(this.x, this.y, this.r * 2);
//     if (this.c === initialColor) {
//       this.newColor;
//     }
//     }
// }