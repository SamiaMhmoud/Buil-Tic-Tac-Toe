let start = document.querySelector('.start');
let title = document.querySelector('.title');
let squ = [];
let turn = 'x';
function game(id){
    let item = document.getElementById(id);
    if(turn == 'x' && item.innerHTML == '') {
        item.innerHTML = "X";
        item.style.color = 'rgb(40 198 181)';
        turn = 'o';
        title.innerHTML = 'O';
        title.style.color = "goldenrod";
    }
    if(turn == 'o' && item.innerHTML == '') {
        item.innerHTML = "O";
        item.style.color = 'goldenrod';
        turn = 'x';
        title.innerHTML = 'X';
        title.style.color = "rgb(40 198 181)";
    }
    winner();
}
function end(x,y,z) {
    title.innerHTML = `${squ[x]} Winner`;
    title.style.color = 'rgb(209, 225, 234)';
    document.getElementById('item-'+ x).style.background = 'rgb(26 53 67)';
    document.getElementById('item-'+ y).style.background = 'rgb(26 53 67)';
    document.getElementById('item-'+ z).style.background = 'rgb(26 53 67)';
    setInterval(function(){title.innerHTML += '.'},1000);
    setTimeout(function(){location.reload()},3500);
}
function end2() {
    title.innerHTML = `Game Over`;
    title.style.color = 'rgb(209, 225, 234)';
    setInterval(function(){title.innerHTML += '.'},1000);
    setTimeout(function(){location.reload()},3500);
}
function winner() {
    for(i = 1; i<10; i++){
        squ[i] = document.getElementById("item-" + i).innerHTML;
    }
    if(squ[1]== squ[2] && squ[2] == squ[3] && squ[1] != '') end(1, 2 ,3);
    else if(squ[4]== squ[5] && squ[5] == squ[6] && squ[5] != '') end(4, 5, 6);
    else if(squ[7]== squ[8] && squ[8] == squ[9] && squ[7] != '') end(7, 8 ,9);
    else if(squ[1]== squ[4] && squ[4] == squ[7] && squ[1] != '') end(1, 4, 7);
    else if(squ[2]== squ[5] && squ[5] == squ[8] && squ[5] != '') end(2, 5 ,8);
    else if(squ[3]== squ[6] && squ[6] == squ[9] && squ[6] != '') end(3, 6 ,9);
    else if(squ[1]== squ[5] && squ[5] == squ[9] && squ[1] != '') end(1, 5, 9);
    else if(squ[3]== squ[5] && squ[5] == squ[7] && squ[5] != '') end(3, 5, 7);
    else {
        if(squ[1]!= '' && squ[2] != '' && squ[4] != '' && squ[5] != '' &&squ[6] != '' && squ[7] != '' && squ[8] != '' && squ[9] !='' ) {
            end2();
        }
    }
}
