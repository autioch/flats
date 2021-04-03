window.wallGroups = [
  {
    color: '#000',
    width: 10,
    walls: [
      { x: 400, y: 500 }, // door left
      { x: -40 },
      { y: -20 },
      { x: -80 }, // wnęka  na lewo od drzwi
      { y: 20, },
      { x: -150 },
      { y: -100 },
      { x: 150 },
      { y: 40 },
      { y: -300 },
      { x: 300 },
      { y: 300 },
      { y: -100 },
      { x: 300 },
      { y: 160 },
      { x: -440 }
    ]
  },
  {
    color: '#09f',
    width: 5,
    walls: [
      { x: 210, y: 500 },
      { y: -30 }
    ]
  },
  {
    color: '#09f',
    width: 5,
    walls: [
      { x: 210, y: 400 },
      { y: 40 },
      { x: 30 }
    ]
  },
]

window.wallGroups.forEach((wallGroup) => {
  wallGroup.walls.forEach((wall, index) => {
    wall.x = wall.x || 0;
    wall.y = wall.y || 0;
  });
})
