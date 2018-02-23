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

fucnction Level(plan) {
  this.width = plan[0].length;
  this.height = plan.length;
  this.grid = [];
  this.actors = [];

  for(var y = 0; y < this.height; y++) {
    var line = plan[y], gridLine = [];
    for(var x = 0; x < this.width; x++) {
      car ch = Line[x], fieldType = null;
      var Actor = actorChars[ch];
      if(Actor)
        this.actors.push(new Actor(new Vector(x, y), ch));
      else if(ch === 'x')
        fieldType = 'wall';
      else if(ch === '!')
        fieldType = 'lava';
      gridLine.push(fieldType);
    }
    this.grid.push(gridLine);
  }

  this.player = this.actors.filter(function(actor) {
    return actor.type == 'player';
  })[0];
  this.status = this.finishDelay = null;
}
