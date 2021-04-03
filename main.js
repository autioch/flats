const ctx = flat.getContext('2d');

flat.width = window.innerWidth;
flat.height = window.innerHeight;

flat.addEventListener('mousemove', (ev)=>{
  coords.style.transform = `translate(${ev.pageX + 10}px,${ev.pageY + 10}px)`;
  coords.textContent = `${ev.pageX}:${ev.pageY}`
});

// ctx.lineCap = 'round';
ctx.lineJoin = 'miter';

wallGroups.forEach(wallGroup => {

  ctx.lineWidth = wallGroup.width;
  ctx.strokeStyle = wallGroup.color;
  ctx.beginPath();
  ctx.moveTo(wallGroup.walls[0].x + .5, wallGroup.walls[0].y + .5);
  wallGroup.walls.reduce(({ x = 0, y = 0 }, wall) => {
    x += wall.x;
    y += wall.y;
    ctx.lineTo(x, y);
    // ctx.strokeStyle = wall.color;
    return {x,y}
  });
  ctx.stroke();

});
