window.solidWalls = [
  //lazienki i szafa
  {
    x: 0,
    y: 0,
    h: 263
  },
  {
    x: 0,
    y: 0,
    w: 158
  },
  {
    x: 0,
    y: 263,
    w: 202
  },
  {
    x: 202,
    y: 263,
    w: 148
  },
  {
    x: 202,
    y: 0,
    w: 148
  },
  {
    x: 350,
    y: 0,
    h: 90,
    id: 'dml1'
  },
  {
    x: 350,
    y: 263,
    h: -45
  },
  // pokoje dziecięce
  {
    x: 1200,
    y: 0,
    w: 258,
  },
  {
    x: 1458,
    y: 0,
    h: 374
  },
  {
    x: 1458,
    y: 374,
    w: -258
  },
  {
    x: 1200,
    y: 374,
    w: -163,
    id: 'p31'
  },
  {
    x: 1037,
    y: 374,
    w: -152,
  },

  // pokoj 2
  {
    x: 1200,
    y: 0,
    w: -286,
  },
  {
    x: 914,
    y: 0,
    h: 268 + 10, // + 10 dla wyrównania ścian
    id: 'p21'
  },

  // wspolny korytarz
  {
    x: 885,
    y: 374,
    w: -252,
  },
]

window.thinWalls = [
  //lazienki i szafa
  {
    x: 158,
    y: 0,
    h: 45
  },
  {
    x: 158,
    y: 45,
    w: 45
  },
  {
    // TODO doesn't match
    x: 203,
    y: 0,
    h: 98,
    id: 'dl2'
  },
  {
    x: 203,
    y: 90,
    w: 58,
    id: 'dml2'
  },
  {
    // TODO doesn't match
    x: 202,
    y: 263,
    h: -75,
    id: 'dl1'
  },

  // pokoje dziecięce
  {
    x: 1200,
    y: 0,
    h: 276,
  },
  {
    x: 1200,
    y: 276,
    w: -163,
    id: 'p32'
  },
  {
    x: 1037,
    y: 276,
    w: -10, // todo
    id: 'p22'
  },
];

window.doors = [
  {
    from: 'dl1',
    to: 'dl2'
  },
  {
    from: 'dml1',
    to: 'dml2',
    rotate: -Math.PI * .5
  },
  {
    from: 'p31',
    to: 'p32',
    // rotate: -Math.PI * .5
  },
  {
    from: 'p21',
    to: 'p22',
    rotate: -Math.PI * .5
  },
];
