
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

c.beginPath();
c.arc(200, 200, 30, 0, Math.PI *2, false);
c.strokeStyle = "green"
c.stroke();

let x = 200;
let dx = 2;
let y = Math.random() * window.innerHeight;
function animate() {
  requestAnimationFrame(animate);
  c.clearRect(0, 0, innerWidth, innerHeight);

  c.beginPath();
  c.arc(x, 200, 30, 0, Math.PI *2, false);
  c.strokeStyle = "green"
  c.stroke();

  x += dx;
}

