const ctx = flat.getContext('2d');

flat.width = window.innerWidth;
flat.height = window.innerHeight;

ctx.fillStyle = '#000';
ctx.font = '20px Arial';

const SOLID_WALL = 2;
const THIN_WALL = 1;

solidWalls.forEach((wall) => {
  ctx.fillRect(wall.x, wall.y, wall.w || SOLID_WALL, wall.h || SOLID_WALL);
})

thinWalls.forEach((wall) => {
  ctx.fillRect(wall.x, wall.y, wall.w || THIN_WALL, wall.h || THIN_WALL);
})

ctx.fillStyle = '#000';
ctx.textAlign = 'center';
ctx.textBaseline = 'middle';

solidWalls.forEach((wall, index) => {
  ctx.fillText(`${index +1}S ${Math.abs(wall.h || wall.w)}`, Math.floor((2 * wall.x + (wall.w || SOLID_WALL))/2), Math.floor((2 * wall.y + (wall.h || SOLID_WALL))/2) );
})

thinWalls.forEach((wall, index) => {
  ctx.fillText(`${index +1}T ${Math.abs(wall.h || wall.w)}`, Math.floor((2 * wall.x + (wall.w || THIN_WALL))/2), Math.floor((2 * wall.y + (wall.h || THIN_WALL))/2) );
})

ctx.fillStyle = '#333';
ctx.strokeStyle = '#333';
ctx.setLineDash([10,10]);


const allWalls = [...solidWalls, ...thinWalls];

doors.forEach((door, index) => {
  const from = allWalls.find((wall) => wall.id === door.from);
  const to = allWalls.find((wall) => wall.id === door.to);

  const fromX = from.x + (from.w || 0);
  const fromY = from.y + (from.h || 0);
  const toX = to.x + (to.w || 0);
  const toY = to.y + (to.h || 0);
  const distance = Math.floor(Math.hypot(fromX - toX, fromY - toY));


  const angleRadians = Math.atan2(toY - fromY, toX - fromX) + (door.rotate || 0);

  ctx.beginPath();
  ctx.moveTo(fromX, fromY);
  ctx.arc(fromX, fromY, distance, angleRadians, angleRadians + Math.PI * 0.5);
  ctx.lineTo(fromX, fromY);
  ctx.stroke();

  ctx.fillText(`${index +1}.d ${distance}`, Math.floor((fromX + toX)/2), Math.floor((fromY + toY)/2) );
})
