let player  = document.querySelector('.player');
let wall = document.querySelector('.wall');
let box = document.querySelector('.box');
let playerScore = document.querySelector('.scorel');
let reset = document.querySelector('.button');
let scoree = 0;

box.addEventListener('click',()=>{
    //score.
  scoreGive();

 
 
  if(player.classList != 'player-animation'){
      player.classList.add('player-animation');
      
       
  }
    box.addEventListener('contextmenu',()=>{
      if(player.classList != 'backflip'){
      player.classList.add('backflip');
       jumpSound();
       
      
       
         setTimeout(() => {
       
       
           player.classList.remove('backflip')
         }, 500);
      }
   
      
     
    
    })
    jumpSound();
  
   setTimeout(()=>{
     player.classList.remove('player-animation');
     
     player.classList.remove('backflip')
   },500);
    
   
   
  })
    setInterval(() => {
      var playerT = parseInt(window.getComputedStyle(player).getPropertyValue('top'));
      
      var wallL = parseInt(window.getComputedStyle(wall).getPropertyValue('left'));
     
    }, 100)
setInterval(() => {
var playerT = parseInt(window.getComputedStyle(player).getPropertyValue('top'));

var wallL = parseInt(window.getComputedStyle(wall).getPropertyValue('left'));

  
  // console.log(playerT, wallL);
  
  if(wallL<40 && wallL>0 && playerT >=240){
      
      
      wall.style.animation = 'none';
      overSound();
      gamebye();
       alert(`Your Score is : ${scoree}`)
      scoree=0;
      playerScore.textContent = scoree;
      
      
      
 
  }

}, 10) 


  //reset button
const resetBtn = ()=>{
  wall.style.animation = 'move 2.5s linear infinite';
     setTimeout(() => {
       wall.style.animation = 'move 1.5s linear infinite';
     }, 20000)
  scoree = 0;
  playerScore.textContent = scoree;
  reset.textContent = 'Reset';
  gamefinish.style.display = 'none';

  
}
   
reset.addEventListener('click',resetBtn);

//sound system..
let high = document.querySelector('.high');
let mute = document.querySelector('.mute');
let audio  = new Audio('background.mp3');

mute.addEventListener('click',()=>{
  high.style.display = 'block';
   mute.style.display = 'none';
   audio.play();
  
})
high.addEventListener('click', () => {
  mute.style.display = 'block';
  high.style.display = 'none';
  audio.pause();
  
})

// play system..
let play = document.querySelector('.play');
let exit = document.querySelector('.exit');
let menu = document.querySelector('.game-menu');
play.addEventListener('click',()=>{
    menu.style.display = 'none';
});
exit.addEventListener('click' , ()=>{
  location.replace('www.google.com');
});


// game--sound--system..
let jumpAudio = new Audio('jump.mp3');
let gameOverSound = new Audio('gameover.mp3');

const jumpSound = ()=>{
   jumpAudio.play();
}
const overSound = () => {
  gameOverSound.play();
}

// game over;
let gamefinish = document.querySelector('.show-gameover');

const gamebye = ()=>{
  gamefinish.classList.add('bye');
  gamefinish.style.display = "block";
}

// player score



const scoreGive = ()=>{
  scoree++;
  
    playerScore.textContent = scoree;

}
let hidden = document.querySelector('.hidden');
let perm = document.querySelector('.perm');

let userval = '';
hidden.addEventListener('mouseenter',()=>{
  userval = prompt('Enter the name ?');
  
  
function newfun() {
  localStorage.setItem('value', userval);

  perm.textContent = localStorage.getItem('value');

}
  
newfun();
})

window.addEventListener('keypress',(event)=>{
  console.log(event.key)
   if(event.key==='w'|| event.key ==='' || event.key ==='ArrowUp')
   {
     jumpJump()
   } 
})
const jumpJump = ()=>{
   
  if(player.classList != 'player-animation'){
      player.classList.add('player-animation');
       setTimeout(() => {
      
      
         player.classList.remove('player-animation')
       }, 500);
       jumpSound();
       scoreGive();
       }
       
  }



