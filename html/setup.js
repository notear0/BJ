//////////////////////////////

// Player 객체 선언
/*
    자바스크립트는 OOP에서 말하는 클래스 개념은 없음.
    다만 비슷하게 함수 선언을 이용하여 객체 비슷하게 
    따라하는 것은 가능!

    아래는 Player 객체를 만들 수 있도록 선언해놓았음.
    var player1 = new Player("seung", 10000);

    이렇게 사용 가능함.
 */
function Player(name, money){
    this.money = money;
    this.name = name;
    this.winCount = 0;
    this.loseCount = 0;
}
/*
    아래는 Player 객체의 메소드 선언하는 것과 같음.
    prototype 이라는 내부 객체를 사용해서 선언함.

    확인이 필요할것 같긴 하지만 static 메소드처럼 
    쓰일 수도 있을 것 같음. (쓰기 나름 일듯)
 */
Player.prototype.getName = function() {
    return this.name;
}

///////////////////////////////

// 게임 종류
var gameType = ["blackjack","poker"];

// 게임 매니저 
var GameManager = {
    title : "BLACKJACK",
    gameType : gameType[0],
    players : 3
};

///////////////////////////////

// onload 함수는 html element가 load된 후에 
// 불리는 함수. entry point라고 생각하면 될 듯
window.onload = function() {

}