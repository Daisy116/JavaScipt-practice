//產生三位數，可以零開頭，三個數字都不同
let logtext = '';
let times = 0;     //設為全域變數
let answer;
let guslength = 3;

answer = createAnswer(guslength);
console.log(answer);

function createAnswer(guslength = 3){    //預設猜三位數
    let poker = [];
    for(let i=0; i<10; i++) poker[i] = i;
    for(let i = poker.length-1 ; i>0; i--){
        let rand = parseInt(Math.random()*(i+1));
        [poker[i], poker[rand]] = [poker[rand], poker[i]];
    }

    let ret = '';   //ret是字串，所以ret +=  才能執行!!
    for(let i = 0; i<guslength; i++){
        ret += poker[i];
    }
    return ret;
}

function checkAB(ans, gus){
    let a = 0;
    let b = 0;
    for(let i=0 ; i<gus.length ; i++){
        if(gus.charAt(i) == ans.charAt(i)){
            a++;
        }else if(ans.indexOf(gus.charAt(i)) >= 0){  //ans字串中沒有第i碼的gus的話，值是-1
            b++;
        }
    }
    return(`${a}A${b}B`);
}

function doGuess(){
    times ++;
    let guess = document.getElementById('input').value;  //取得使用者輸入的值
    let result = checkAB(answer, guess);
    let gusnum = document.getElementById('input').innerText;

    alert(`${guess} => ${result}`);
    logtext += `${times} : ${guess} => ${result}<br>`;
    document.getElementById('log').innerHTML = logtext;
    gusnum = " ";    

    if(result == `${guslength}A0B`){
        alert(`YOU WIN`);
    }else if(times >= 10){
        alert(`Loser: answer = ${answer}`);
    }
    document.getElementById('input').focus();  //打字的聚焦一直在textbox
}

function replay(){    //為何不會重新產生答案??
    answer = createAnswer(changeLength);
    logtext = "";
    times = 0;
    document.getElementById('log').innerHTML = logtext;
    document.getElementById('input').value = logtext;
    document.getElementById('input').focus();
}

function changeLength(){
    let op = document.getElementById("guslength");
    if(op.value == "3"){
        guslength = 3;
    }else if(op.value == "4"){
        guslength = 4;
    }else if(op.value == "5"){
        guslength = 5;     
    }
    console.log(guslength);
    answer = createAnswer(guslength);
    console.log(answer);
}