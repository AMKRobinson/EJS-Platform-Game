'use strict';

var simpleLevelPlan = [
  '                      ',
  '                      ',
  '  X              = X  ',
  '  X         O O    X  ',
  '  X @      XXXXX   X  ',
  '  XXXXX            X  ',
  '      X!!!!!!!!!!!!X  ',
  '                      ',
];

// ES5

// function Level(plan) {
//   this.width = plan[0].length;
//   this.height = plan.length;
//   this.grid = [];
//   this.actors = [];
//
//   for(var y = 0; y < this.height; y++) {
//     var line = plan[y], gridLine = [];
//     for(var x = 0; x < this.width; x++) {
//       car ch = Line[x], fieldType = null;
//       var Actor = actorChars[ch];
//       if(Actor)
//         this.actors.push(new Actor(new Vector(x, y), ch));
//       else if(ch === 'x')
//         fieldType = 'wall';
//       else if(ch === '!')
//         fieldType = 'lava';
//       gridLine.push(fieldType);
//     }
//     this.grid.push(gridLine);
//   }
//
//   this.player = this.actors.filter(function(actor) {
//     return actor.type == 'player';
//   })[0];
//   this.status = this.finishDelay = null;
// }

// ES6

class Level {
  constructor(plan) {
    let rows =  plan.trim().split('\n').map(l => [...l]);
    this.height = rows.length;
    this.width = rows[0].length;
    this.startActors = [];

    this.rows = rows.map((row, y) => {
      return row.map((ch, x) => {
        if(typeof type === 'string') return type;
        this.startActors.push(
          type.create(new Vec(x, y), ch));
        return 'empty';
      });
    });
  }
}

class State {
  constructor(level, actors, status) {
    this.levels = level;
    this.actors = actors;
    this.status = status;
  }

  static start(level) {
    return new State(level, level.startActors, 'playing');
  }

  get player() {
    return this.actors.find(a => a.type == 'player');
  }
}

class Vec {
  constructor(x, y) {
    this.x = x; this.y = y;
  }
  plus(other) {
    return new Vec(this.x + other.x, this.y + other.y);
  }
  times(factors) {
    return new Vec(this.x * factor, this.y * factor)
  }
}

class Player {
  constructor(pos, speed) {
    this.pos = pos;
    this.speed = speed;
  }

  get type() { return 'player'; }

  static create(pos) {
    return new Player(pos.plus(new Vec(0, -0.5)),
    new Vec(0, 0));
  }
}

Player.prototype.size = new Vec(0.8, 1.5);
