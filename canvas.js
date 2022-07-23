
const canvas = document.querySelector('canvas');
canvas.width = window.innerWidth
canvas.height = window.innerHeight

const c = canvas.getContext('2d');
// c.fillStyle = 'rgba(255,0,0,0.1)'
// c.fillRect(100, 100, 100, 100);
// c.fillStyle = 'rgba(0,255,0,0.1)'
// c.fillRect(400, 100, 100, 100);
// c.fillStyle = 'rgba(0,0,255,0.1)'
// c.fillRect(300, 300, 100, 100);


// console.log(canvas);

// Line
// c.moveTo(x,y);
// c.beginPath();
// c.moveTo(50, 300);
// c.lineTo(300, 100);
// c.lineTo(400, 300);
// c.strokeStyle = "blue"
// c.stroke();


// Arc / Circle
// c.beginPath();
// c.arc(300,300,30,0,Math.PI *2, false);
// c.strokeStyle = "green"
// c.stroke();

// for (let i = 1 ; i <= 100; i++) {
//   let x = Math.random() * window.innerWidth;
//   let y = Math.random() * window.innerHeight;
//   c.beginPath();
//   c.arc(x, y, 30, 0, Math.PI *2, false);
//   c.strokeStyle = "green"
//   c.stroke();
// }


// let x = Math.random() * innerWidth;
// let y = Math.random() * innerHeight;
// let dx = (Math.random() - 0.5) * 8;
// let dy = (Math.random() - 0.5) * 8;
// let radius = 30;


function Circle(x, y, dx, dy, radius) {
  this.x = x;
  this.y = y;
  this.dx = dx;
  this.dy = dy;
  this.radius = radius;

  this.draw = function() {
    c.beginPath();
    c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
    c.strokeStyle = "green"
    c.stroke();
  }

  this.update = function() {
    if (this.x  + this.radius > innerWidth || this.x  - this.radius < 0) {
      this.dx = -this.dx;
    }
    if (this.y + this.radius > innerHeight || this.y - this.radius < 0) {
      this.dy = -this.dy;
    }
    this.x += this.dx;
    this.y += this.dy;

    this.draw();
  }
}



let circleArray = [];

for (let i = 0; i < 100; i++) {
  let radius = 30;
  let x = Math.random() * (innerWidth - radius * 2) + radius;
  let y = Math.random() * (innerHeight - radius * 2) + radius;
  let dx = (Math.random() - 0.5) * 8;
  let dy = (Math.random() - 0.5) * 8;
  
  circleArray.push(new Circle(x, y, dx, dy, radius))
  
}


function animate() {
  requestAnimationFrame(animate);
  c.clearRect(0, 0, innerWidth, innerHeight);

  for (let i = 0; i < circleArray.length; i++) {
    circleArray[i].update();
  }
}

animate();