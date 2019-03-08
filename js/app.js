// Enemies our player must avoid


var Enemy = function(x,y, speed) {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started

    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    this.x =0;
    this.y = y +60;
    this.speed = speed;
    this.sprite = 'images/enemy-bug.png';
    this.move = 101;
};

// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {

    if (this.x < this.move *5){

        this.x += this.speed * dt;
    }
    else { this.x = -101 } //resets the enemy back to the starting point. 
   
};

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};




/* we creat the three enemies on the canvas with (x,y,speed)*/
const enemy1 = new Enemy(-101, 0, 200);
const enemy2 = new Enemy( 0, 83, 150 );
const enemy3 = new Enemy(-202, 166, 300);
const allEnemies=[];
allEnemies.push(enemy1, enemy2, enemy3);
console.log(allEnemies);




class Hero { //creating our player hero class
    constructor(x,y){
        this.x=202;// these two lines start our player in the middel of the canvas. 
        this.y= 395;
        this.ycoll= this.y +60 ;
        this.sprite='images/char-boy.png';
        this.victory = false;
    }

    render() {
   
        ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
    
    }
    /**
 
 * the method below takes the input keys and moves the character. 

 */
    handleInput(input) { 
        switch(input){
            case 'left':
            if (this.x > 0){
                this.x -= 101;}
                break;
            case 'up':
            if (this.y > 0){
                this.y -= 86;}
                break;
            case 'right':
            if (this.x < 404){
                this.x += 101;}
                break;
            case 'down':
            if ( this.y < 332){
                this.y += 86;}
                break;
    }
}
reset(){ // method resets our hero starting position
    this.x = 202;
    this.y = 395;
    
}
update(){ // this method checks if our player was hit by the enemy
  
  for(let enemy of allEnemies){
            /* below conditions finds if our enemies were able to catch our player. the intersections of the  x and y axis of both our enemies and player. To find the Y intersection, I added the difference
            amount to the players y axis as the is off by the small amount. for X, due to the continous motion of the enemies, I have marked the small
            area within the X axis the collusion can occur.  For each enemy we individually check.*/
       if (((this.y+3)== (enemy3.y) && ((this.x - enemy3.x) < 4 && (this.x - enemy3.x) > 0  )) ||
        (((this.y+6) == (enemy2.y) && ((this.x - enemy2.x) < 4 && (this.x - enemy2.x) > 0  )) ) || 
        (((this.y+9) == (enemy1.y) && ((this.x - enemy1.x) < 4 && (this.x - enemy1.x) > 0  )) ))
       {this.reset()
         }

        if ( this.y === -35 ){ // checks if our hero reached the water and updates the victory to true. 
             this.victory = true;
                
            
        } 
  }
 
}
}

const player= new Hero(); //creates our player from the hero class.




// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});


/* Day one: I was able to define the player and use the defined*/
/* Day two: enemy.y and hero.y is not matching. so I can work on the collsuion and add effect.*/
/* Day three: only left with stoping the animation request when the player winds and reseting. ERROR: Id is not defined under engine.js. And also left with any addtional
bonus functionality I would like to add.*/
/* Day Four: Game is running smooth. Just styling the and final touches are left. Also, will need to wirte the documentation. */

        // create a welcome modal which allows players to choose their character. 
        //during collusion there should be somekind of transition or animation.
