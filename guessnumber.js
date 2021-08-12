document.getElementById("playagain").style.visibility="hidden";
let game=true;
n=getrandom();
let op = gamefun();
document.querySelector(".playagain").addEventListener('click',function(){
    game=true;
    document.body.style.backgroundColor="black";
    document.querySelector('.result').textContent='Give a number!';
    n=getrandom();
    gamefun();
});
function gamefun(){
    document.querySelector('.checkbutton').addEventListener('click',function(){
        if(!document.querySelector('.inputnumber').value){
            document.querySelector('.result').textContent='Give a number!';
        }
        else{
            let x = Number(document.querySelector('.inputnumber').value);
            if((x> 10) ||  (x < 0)){
                document.querySelector('.result').textContent='Give a number btw <<1-10>>!';
            }
            else{
                if(x==n){
                    document.querySelector('.result').textContent="You guessed it right! Play Again!";
                    game=false;
                    document.getElementById("playagain").style.visibility="visible";
                    document.body.style.backgroundColor="white";
                    return game;
                }
                else{
                    document.querySelector('.result').textContent="Keep Guessing!!!";
                }

            }
            }

    });
}
function getrandom(){
let n = Math.random()*10;
n=Math.ceil(n);
console.log(n);
return n;
}