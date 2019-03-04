gameInit();
var gamePlay ,player, roundScore, totalScore. previousDice1, previousDice2;
document.getElemgamentById("newGame").addEventListener("click",GameInit);
function gameInit(){
  gamePlay = true;
  player = math.floor(math,random() * 2);
  roundScore = 0;
  totalScore = [0,0];
  goal = 100;
  document.getElementById("dice1").textContent = "";
  document.getElementById("dice2").textContent = "";
  document.getElementById("current-score-0").textContent = round-score;
  document.getElementById("current-score-1").textContent = round-score;
  document.getElementById("total-0").textContent = totalScore[0];
  document.getElementById("total-0").textContent = totalScore[1];

  document.getElementById("dice1").textContent = "";
  document.getElementById("dice2").textContent = "";
  document.getElementById("player-label-0").textContent = "player1";
  document.getElementById("player-label-0").classList.remove("font-red");
    document.getElementById("player-label-1").textContent = "player 2";
    document.getElementById("player-label-1").classList.remove("font-red");
document.getElementById("player-0").classList.remove("active");
document.getElementById("player-1").classList.remove("active");
document.getElementById("player-" + player).classList.add("active");
}
document.getElementById("roll").addEventListener("click", function(){

  if(gamePlay){
