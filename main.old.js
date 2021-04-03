const ctx = flat.getContext('2d');
const OFFSETY = 150 + 0.5;
const OFFSETX = 450 + 0.5;
const posToM = (pos, off) => ((pos - off) / 100).toFixed(1);
flat.width = window.innerWidth;
flat.height = window.innerHeight;

flat.addEventListener('mousemove', (ev)=>{
  // coords.style.left = (ev.pageX + 10) + 'px';
  // coords.style.top = (ev.pageY + 10) + 'px';
  coords.style.transform = `translate(${ev.pageX + 10}px,${ev.pageY + 10}px)`;
  coords.textContent = `${posToM(ev.pageX, OFFSETX)}:${posToM(ev.pageY,OFFSETY)}`
});


ctx.font = 'bold 30px Consolas';
ctx.fillStyle = '#f00';
ctx.fillText('Drzwi i okna', 100, 120);
ctx.fillStyle = '#00f';
ctx.fillText('Schody', 100, 170);
ctx.fillStyle = '#bbb';
ctx.fillText('Siatka 1m', 100, 220);

ctx.font = 'bold 20px Consolas';
ctx.fillStyle = '#212121';
ctx.fillText('Kuchnia/pokój', 100, 450)
ctx.fillText(' 2.35 x 2.5', 100, 475)
ctx.fillStyle = '#212121';
ctx.fillText('   Salon', 810, 180)
ctx.fillText('4.4 x ~3.0', 810, 205)


ctx.translate(flat.width / 2, flat.height / 2);
ctx.rotate(Math.PI / 2);
ctx.translate(-flat.width / 2, -flat.height / 2);

// metric grid
ctx.strokeStyle = '#bbb';
ctx.lineWidth = 1;
ctx.beginPath();
// vertical
for (let i = 0; i < window.innerWidth * 2;  i = i + 100) {
  ctx.moveTo(i + OFFSETX, 0 + 0.5);
  ctx.lineTo(i + OFFSETX, window.innerHeight * 2 + 0.5);
}
// horizontal
for (let i = 0; i < window.innerHeight * 2; i = i + 100) {
  ctx.moveTo(0 + 0.5, i + OFFSETY);
  ctx.lineTo(window.innerWidth * 2 + 0.5, i + OFFSETY);
}
ctx.stroke();

const walls = [
  [0,150],
  [0,440],
  [300,0],
  [0,600],
  [250,0],
  [0,-235],
  [-170,0],
  [0,-65],
  [170,0],
  [0,-300],
  [0,-440],
  [0,-150],
  [-270,0],
  [0,150],
  [-280,0]
];

// walls
ctx.strokeStyle = '#212121';
ctx.lineWidth = 2.5;
ctx.beginPath();
walls.reduce(([prevX, prevY], [x,y]) => {
  const next = [prevX + x, prevY + y];
  ctx.moveTo(prevX, prevY);
  ctx.lineTo(...next);
  return next;
}, [OFFSETX,OFFSETY]);
ctx.stroke();

// circles
ctx.fillStyle = '#0c0';
ctx.beginPath();
walls.reduce(([prevX, prevY], [x,y]) => {
  const next = [prevX + x, prevY + y];
  ctx.moveTo(prevX, prevY);
  ctx.arc(prevX + x, prevY + y, 10, 0, 2 * Math.PI);
  return next;
}, [OFFSETX,OFFSETY]);
ctx.fill();

// door
ctx.strokeStyle = '#f00';
ctx.lineWidth = 6;
ctx.setLineDash([10,10]);
ctx.beginPath();
ctx.moveTo(OFFSETX+300,OFFSETY+650);
ctx.arc(OFFSETX+300,OFFSETY+650, 80, Math.PI / 2,  - Math.PI + Math.PI / 2, true);
ctx.stroke();


ctx.beginPath();
ctx.moveTo(OFFSETX+255,OFFSETY+150);
ctx.arc(OFFSETX+255,OFFSETY+150, 90, Math.PI , Math.PI/ 3, true);
ctx.stroke();

// window
ctx.setLineDash([]);
ctx.strokeRect(OFFSETX+60,OFFSETY+145, 90, 10);
ctx.strokeRect(OFFSETX+275,OFFSETY+25, 10, 90);
ctx.strokeRect(OFFSETX+545,OFFSETY+1005, 10, 90);
ctx.strokeRect(OFFSETX+545,OFFSETY+800, 10, 10);

// stairs
ctx.strokeStyle = '#00f';
ctx.lineWidth = 2.5;
ctx.beginPath();
ctx.arc(OFFSETX+450,OFFSETY+500, 80, 0, Math.PI * 2);
ctx.stroke();
