//random letter
function random(){
    let a = "A";
    let b = "B";
    let c = "C";
    let d = "D";
    let e = "E";
    let f = "F";
    let g = "G";

    let randomLetter = Math.floor(Math.random() * 7) + 1;
    if (randomLetter == 1){
        var letter = a;
    }
    else if(randomLetter == 2){
        var letter = b;
    }
    else if(randomLetter == 3){
        var letter = c;
    }
    else if(randomLetter == 4){
        var letter = d;
    }
    else if(randomLetter == 5){
        var letter = e;
    }
    else if(randomLetter == 6){
        var letter = f;
    }
    else{
        var letter = g;
    }
    return(letter);
}
function randomColor(){
    let a = "rgb(224, 255, 228)";
    let b = "rgb(255, 224, 224)";
    let c = "rgb(255, 224, 255)";
    let d = "rgb(254, 255, 224)";

    let randomLetter = Math.floor(Math.random() * 4) + 1;
    if (randomLetter == 1){
        var color = a;
    }
    else if(randomLetter == 2){
        var color = b;
    }
    else if(randomLetter == 3){
        var color = c;
    }
    else{
        var color = d;
    }
    return(color);
} 


//on click start game
let timer = 60;
let newTimer = timer;
let startGame = document.getElementById("btn1");
startGame.addEventListener("click", function(){
    //insert random rows with random color
    var table = document.getElementById("table");
    for(let i=0; i < table.rows.length; i++){
        for(let j=0; j < table.rows[i].cells.length; j++){
            table.rows[i].cells[j].innerHTML = random();
            table.rows[i].cells[j].style.backgroundColor = randomColor();
        }
    }
    startGame.setAttribute("disabled","disabled");

    //set a timer

    alert(`You have ${timer} second to reach max score`)
    document.getElementById("timer").innerText = "Timer: " + timer;
    setInterval(countDown, 1000);
    function countDown(){
        if (newTimer > 0){
            newTimer--;
            document.getElementById("timer").innerText = "Timer: " + newTimer;
        }
        else{
            document.getElementById("timer").innerText = "Timer: " + newTimer;
            if(confirm(`Timeout, your Score is ${score}. do you want to try again?`)){
                newTimer = 1;
                location.reload();
            }
        }
    }
});

//on click td
var score = 0;
function tdClick(){
    var table = document.getElementById("table"), rIndex, cIndex;

    for(let i=0; i < table.rows.length; i++){
        for(let j=0; j < table.rows[i].cells.length; j++){
            table.rows[i].cells[j].onclick = function(){
                rIndex = this.parentElement.rowIndex+1;
                cIndex = this.cellIndex+1;
                
                if( ((i-1 < 0) && (j-1 < 0)) ){
                    if( (table.rows[i].cells[j+1].innerText == table.rows[i].cells[j].innerText) ||
                        (table.rows[i+1].cells[j].innerText == table.rows[i].cells[j].innerText)){
                            console.log("test = green");
                            table.rows[i].cells[j].style.backgroundColor = "green";
                            setTimeout(function(){
                                table.rows[i].cells[j].innerHTML = random();
                                table.rows[i].cells[j].style.backgroundColor = randomColor();
                            }, 250);
                            if(newTimer < timer && newTimer > 0){
                                score++;
                                document.getElementById("score").innerText = `Score: ${score}`;
                            }
                            
                            //1
                            if((table.rows[i].cells[j+1].innerText == table.rows[i].cells[j].innerText)){
                                table.rows[i].cells[j+1].style.backgroundColor = "green";
                                setTimeout(function(){
                                    table.rows[i].cells[j+1].innerHTML = random();
                                    table.rows[i].cells[j+1].style.backgroundColor = randomColor();
                                }, 250);
                            }
                            else{
                                table.rows[i+1].cells[j].style.backgroundColor = "green";
                                setTimeout(function(){
                                    table.rows[i+1].cells[j].innerHTML = random();
                                    table.rows[i+1].cells[j].style.backgroundColor = randomColor();
                                }, 250);
                            }
                        }
                    else{
                        console.log("test = red");
                        table.rows[i].cells[j].style.backgroundColor = "red";
                        setTimeout(function(){
                            table.rows[i].cells[j].style.backgroundColor = randomColor();
                        }, 250);
                        if(newTimer < timer && newTimer > 0){
                            score--;
                            document.getElementById("score").innerText = `Score: ${score}`;
                        }
                        
                    }
                }
                else if( ((i-1) < 0) && ((j+1) > table.rows[i].cells.length-1)){
                    if( (table.rows[i].cells[j-1].innerText == table.rows[i].cells[j].innerText) ||
                        (table.rows[i+1].cells[j].innerText == table.rows[i].cells[j].innerText)){
                            console.log("test = green");
                            table.rows[i].cells[j].style.backgroundColor = "green";
                            setTimeout(function(){
                                table.rows[i].cells[j].innerHTML = random();
                                table.rows[i].cells[j].style.backgroundColor = randomColor();
                            }, 250);
                            if(newTimer < timer && newTimer > 0){
                                score++;
                                document.getElementById("score").innerText = `Score: ${score}`;
                            }
                            
                            //
                            if ((table.rows[i].cells[j-1].innerText == table.rows[i].cells[j].innerText)){
                                table.rows[i].cells[j-1].style.backgroundColor = "green";
                                setTimeout(function(){
                                    table.rows[i].cells[j-1].innerHTML = random();
                                    table.rows[i].cells[j-1].style.backgroundColor = randomColor();
                                }, 250);
                            }
                            else{
                                table.rows[i+1].cells[j].style.backgroundColor = "green";
                                setTimeout(function(){
                                    table.rows[i+1].cells[j].innerHTML = random();
                                    table.rows[i+1].cells[j].style.backgroundColor = randomColor();
                                }, 250);
                            }
                        }
                    else{
                        console.log("test = red");
                        table.rows[i].cells[j].style.backgroundColor = "red";
                        setTimeout(function(){
                            table.rows[i].cells[j].style.backgroundColor = randomColor();
                        }, 250);
                        if(newTimer < timer && newTimer > 0){
                            score--;
                            document.getElementById("score").innerText = `Score: ${score}`;
                        }
                    }
                }
                else if( ((i+1) > table.rows.length-1) && ((j-1) < 0)){
                    if( (table.rows[i].cells[j+1].innerText == table.rows[i].cells[j].innerText) ||
                        (table.rows[i-1].cells[j].innerText == table.rows[i].cells[j].innerText)){
                            console.log("test = green");
                            table.rows[i].cells[j].style.backgroundColor = "green";
                            setTimeout(function(){
                                table.rows[i].cells[j].innerHTML = random();
                                table.rows[i].cells[j].style.backgroundColor = randomColor();
                            }, 250);
                            if(newTimer < timer && newTimer > 0){
                                score++;
                                document.getElementById("score").innerText = `Score: ${score}`;
                            }
                            //
                            if ((table.rows[i].cells[j+1].innerText == table.rows[i].cells[j].innerText)){
                                table.rows[i].cells[j+1].style.backgroundColor = "green";
                                setTimeout(function(){
                                    table.rows[i].cells[j+1].innerHTML = random();
                                    table.rows[i].cells[j+1].style.backgroundColor = randomColor();
                                }, 250);
                            }
                            else{
                                table.rows[i-1].cells[j].style.backgroundColor = "green";
                                setTimeout(function(){
                                    table.rows[i-1].cells[j].innerHTML = random();
                                    table.rows[i-1].cells[j].style.backgroundColor = randomColor();
                                }, 250);
                            }
                        }
                    else{
                        console.log("test = red");
                        table.rows[i].cells[j].style.backgroundColor = "red";
                        setTimeout(function(){
                            table.rows[i].cells[j].style.backgroundColor = randomColor();
                        }, 250);
                        if(newTimer < timer && newTimer > 0){
                            score--;
                            document.getElementById("score").innerText = `Score: ${score}`;
                        }
                    }
                }
                else if( ((i+1) > table.rows.length-1) && ((j+1) > table.rows[i].cells.length-1)){
                    if( (table.rows[i].cells[j-1].innerText == table.rows[i].cells[j].innerText) ||
                        (table.rows[i-1].cells[j].innerText == table.rows[i].cells[j].innerText)){
                            console.log("test = green");
                            table.rows[i].cells[j].style.backgroundColor = "green";
                            setTimeout(function(){
                                table.rows[i].cells[j].innerHTML = random();
                                table.rows[i].cells[j].style.backgroundColor = randomColor();
                            }, 250);
                            if(newTimer < timer && newTimer > 0){
                                score++;
                                document.getElementById("score").innerText = `Score: ${score}`;
                            }
                            //
                            if((table.rows[i].cells[j-1].innerText == table.rows[i].cells[j].innerText)){
                                table.rows[i].cells[j-1].style.backgroundColor = "green";
                                setTimeout(function(){
                                    table.rows[i].cells[j-1].innerHTML = random();
                                    table.rows[i].cells[j-1].style.backgroundColor = randomColor();
                                }, 250);
                            }
                            else{
                                table.rows[i-1].cells[j].style.backgroundColor = "green";
                                setTimeout(function(){
                                    table.rows[i-1].cells[j].innerHTML = random();
                                    table.rows[i-1].cells[j].style.backgroundColor = randomColor();
                                }, 250);
                            }
                        }
                    else{
                        console.log("test = red");
                        table.rows[i].cells[j].style.backgroundColor = "red";
                        setTimeout(function(){
                            table.rows[i].cells[j].style.backgroundColor = randomColor();
                        }, 250);
                        if(newTimer < timer && newTimer > 0){
                            score--;
                            document.getElementById("score").innerText = `Score: ${score}`;
                        }
                    }
                }
                else if( i-1 < 0 && j-1 >= 0){
                    if( (table.rows[i].cells[j-1].innerText == table.rows[i].cells[j].innerText) ||
                        (table.rows[i].cells[j+1].innerText == table.rows[i].cells[j].innerText) ||
                        (table.rows[i+1].cells[j].innerText == table.rows[i].cells[j].innerText)){
                            console.log("test = green");
                            table.rows[i].cells[j].style.backgroundColor = "green";
                            setTimeout(function(){
                                table.rows[i].cells[j].innerHTML = random();
                                table.rows[i].cells[j].style.backgroundColor = randomColor();
                            }, 250);
                            if(newTimer < timer && newTimer > 0){
                                score++;
                                document.getElementById("score").innerText = `Score: ${score}`;
                            }
                            //
                            if((table.rows[i].cells[j-1].innerText == table.rows[i].cells[j].innerText)){
                                table.rows[i].cells[j-1].style.backgroundColor = "green";
                                setTimeout(function(){
                                    table.rows[i].cells[j-1].innerHTML = random();
                                    table.rows[i].cells[j-1].style.backgroundColor = randomColor();
                                }, 250);
                            }
                            else if((table.rows[i].cells[j+1].innerText == table.rows[i].cells[j].innerText)){
                                table.rows[i].cells[j+1].style.backgroundColor = "green";
                                setTimeout(function(){
                                    table.rows[i].cells[j+1].innerHTML = random();
                                    table.rows[i].cells[j+1].style.backgroundColor = randomColor();
                                }, 250);
                            }
                            else{
                                table.rows[i+1].cells[j].style.backgroundColor = "green";
                                setTimeout(function(){
                                    table.rows[i+1].cells[j].innerHTML = random();
                                    table.rows[i+1].cells[j].style.backgroundColor = randomColor();
                                }, 250);
                            }
                        }
                    else{
                        console.log("test = red");
                        table.rows[i].cells[j].style.backgroundColor = "red";
                        setTimeout(function(){
                            table.rows[i].cells[j].style.backgroundColor = randomColor();
                        }, 250);
                        if(newTimer < timer && newTimer > 0){
                            score--;
                            document.getElementById("score").innerText = `Score: ${score}`;
                        }
                    }
                }
                else if( i-1 >= 0 && j+1 > table.rows[i].cells.length-1){
                    if( (table.rows[i+1].cells[j].innerText == table.rows[i].cells[j].innerText) ||
                        (table.rows[i-1].cells[j].innerText == table.rows[i].cells[j].innerText) ||
                        (table.rows[i].cells[j-1].innerText == table.rows[i].cells[j].innerText)){
                            console.log("test = green");
                            table.rows[i].cells[j].style.backgroundColor = "green";
                            setTimeout(function(){
                                table.rows[i].cells[j].innerHTML = random();
                                table.rows[i].cells[j].style.backgroundColor = randomColor();
                            }, 250);
                            if(newTimer < timer && newTimer > 0){
                                score++;
                                document.getElementById("score").innerText = `Score: ${score}`;
                            }
                            //
                            if((table.rows[i+1].cells[j].innerText == table.rows[i].cells[j].innerText)){
                                table.rows[i+1].cells[j].style.backgroundColor = "green";
                                setTimeout(function(){
                                    table.rows[i+1].cells[j].innerHTML = random();
                                    table.rows[i+1].cells[j].style.backgroundColor = randomColor();
                                }, 250);
                            }
                            else if((table.rows[i-1].cells[j].innerText == table.rows[i].cells[j].innerText)){
                                table.rows[i-1].cells[j].style.backgroundColor = "green";
                                setTimeout(function(){
                                    table.rows[i-1].cells[j].innerHTML = random();
                                    table.rows[i-1].cells[j].style.backgroundColor = randomColor();
                                }, 250);
                            }
                            else{
                                table.rows[i].cells[j-1].style.backgroundColor = "green";
                                setTimeout(function(){
                                    table.rows[i].cells[j-1].innerHTML = random();
                                    table.rows[i].cells[j-1].style.backgroundColor = randomColor();
                                }, 250);
                            }
                        }
                    else{
                        console.log("test = red");
                        table.rows[i].cells[j].style.backgroundColor = "red";
                        setTimeout(function(){
                            table.rows[i].cells[j].style.backgroundColor = randomColor();
                        }, 250);
                        if(newTimer < timer && newTimer > 0){
                            score--;
                            document.getElementById("score").innerText = `Score: ${score}`;
                        }
                    }
                }
                else if( i+1 > table.rows.length-1 && j+1 <= table.rows[i].cells.length-1){
                    if( (table.rows[i].cells[j+1].innerText == table.rows[i].cells[j].innerText) ||
                        (table.rows[i].cells[j-1].innerText == table.rows[i].cells[j].innerText) ||
                        (table.rows[i-1].cells[j].innerText == table.rows[i].cells[j].innerText)){
                            console.log("test = green");
                            table.rows[i].cells[j].style.backgroundColor = "green";
                            setTimeout(function(){
                                table.rows[i].cells[j].innerHTML = random();
                                table.rows[i].cells[j].style.backgroundColor = randomColor();
                            }, 250);
                            if(newTimer < timer && newTimer > 0){
                                score++;
                                document.getElementById("score").innerText = `Score: ${score}`;
                            }
                            //
                            if((table.rows[i].cells[j+1].innerText == table.rows[i].cells[j].innerText)){
                                table.rows[i].cells[j+1].style.backgroundColor = "green";
                                setTimeout(function(){
                                    table.rows[i].cells[j+1].innerHTML = random();
                                    table.rows[i].cells[j+1].style.backgroundColor = randomColor();
                                }, 250);
                            }
                            else if((table.rows[i].cells[j-1].innerText == table.rows[i].cells[j].innerText)){
                                table.rows[i].cells[j-1].style.backgroundColor = "green";
                                setTimeout(function(){
                                    table.rows[i].cells[j-1].innerHTML = random();
                                    table.rows[i].cells[j-1].style.backgroundColor = randomColor();
                                }, 250);
                            }
                            else{
                                table.rows[i-1].cells[j].style.backgroundColor = "green";
                                setTimeout(function(){
                                    table.rows[i-1].cells[j].innerHTML = random();
                                    table.rows[i-1].cells[j].style.backgroundColor = randomColor();
                                }, 250);
                            }
                        }
                    else{
                        console.log("test = red");
                        table.rows[i].cells[j].style.backgroundColor = "red";
                        setTimeout(function(){
                            table.rows[i].cells[j].style.backgroundColor = randomColor();
                        }, 250);
                        if(newTimer < timer && newTimer > 0){
                            score--;
                            document.getElementById("score").innerText = `Score: ${score}`;
                        }
                    }
                }
                else if( i+1 <= table.rows.length-1 && j-1 < 0){
                    if( (table.rows[i-1].cells[j].innerText == table.rows[i].cells[j].innerText) ||
                        (table.rows[i+1].cells[j].innerText == table.rows[i].cells[j].innerText) ||
                        (table.rows[i].cells[j+1].innerText == table.rows[i].cells[j].innerText)){
                            console.log("test = green");
                            table.rows[i].cells[j].style.backgroundColor = "green";
                            setTimeout(function(){
                                table.rows[i].cells[j].innerHTML = random();
                                table.rows[i].cells[j].style.backgroundColor = randomColor();
                            }, 250);
                            if(newTimer < timer && newTimer > 0){
                                score++;
                                document.getElementById("score").innerText = `Score: ${score}`;
                            }
                            //
                            if((table.rows[i-1].cells[j].innerText == table.rows[i].cells[j].innerText)){
                                table.rows[i-1].cells[j].style.backgroundColor = "green";
                                setTimeout(function(){
                                    table.rows[i-1].cells[j].innerHTML = random();
                                    table.rows[i-1].cells[j].style.backgroundColor = randomColor();
                                }, 250);
                            }
                            else if((table.rows[i+1].cells[j].innerText == table.rows[i].cells[j].innerText)){
                                table.rows[i+1].cells[j].style.backgroundColor = "green";
                                setTimeout(function(){
                                    table.rows[i+1].cells[j].innerHTML = random();
                                    table.rows[i+1].cells[j].style.backgroundColor = randomColor();
                                }, 250);
                            }
                            else{
                                table.rows[i].cells[j+1].style.backgroundColor = "green";
                                setTimeout(function(){
                                    table.rows[i].cells[j+1].innerHTML = random();
                                    table.rows[i].cells[j+1].style.backgroundColor = randomColor();
                                }, 250);
                            }
                        }
                    else{
                        console.log("test = red");
                        table.rows[i].cells[j].style.backgroundColor = "red";
                        setTimeout(function(){
                            table.rows[i].cells[j].style.backgroundColor = randomColor();
                        }, 250);
                        if(newTimer < timer && newTimer > 0){
                            score--;
                            document.getElementById("score").innerText = `Score: ${score}`;
                        }
                    }
                }
                else{
                    if((table.rows[i-1].cells[j].innerText == table.rows[i].cells[j].innerText) ||
                    (table.rows[i].cells[j-1].innerText == table.rows[i].cells[j].innerText) ||
                    (table.rows[i].cells[j+1].innerText == table.rows[i].cells[j].innerText) ||
                    (table.rows[i+1].cells[j].innerText == table.rows[i].cells[j].innerText))
                    {
                        console.log("test = green");
                        table.rows[i].cells[j].style.backgroundColor = "green";
                        setTimeout(function(){
                            table.rows[i].cells[j].innerHTML = random();
                            table.rows[i].cells[j].style.backgroundColor = randomColor();
                        }, 250);
                        if(newTimer < timer && newTimer > 0){
                            score++;
                            document.getElementById("score").innerText = `Score: ${score}`;
                        }
                        //
                        if((table.rows[i-1].cells[j].innerText == table.rows[i].cells[j].innerText)){
                            table.rows[i-1].cells[j].style.backgroundColor = "green";
                            setTimeout(function(){
                                table.rows[i-1].cells[j].innerHTML = random();
                                table.rows[i-1].cells[j].style.backgroundColor = randomColor();
                            }, 250);
                        }
                        else if((table.rows[i].cells[j-1].innerText == table.rows[i].cells[j].innerText)){
                            table.rows[i].cells[j-1].style.backgroundColor = "green";
                            setTimeout(function(){
                                table.rows[i].cells[j-1].innerHTML = random();
                                table.rows[i].cells[j-1].style.backgroundColor = randomColor();
                            }, 250);
                        }
                        else if((table.rows[i].cells[j+1].innerText == table.rows[i].cells[j].innerText)){
                            table.rows[i].cells[j+1].style.backgroundColor = "green";
                            setTimeout(function(){
                                table.rows[i].cells[j+1].innerHTML = random();
                                table.rows[i].cells[j+1].style.backgroundColor = randomColor();
                            }, 250);
                        }
                        else{
                            table.rows[i+1].cells[j].style.backgroundColor = "green";
                            setTimeout(function(){
                                table.rows[i+1].cells[j].innerHTML = random();
                                table.rows[i+1].cells[j].style.backgroundColor = randomColor();
                            }, 250);
                        }
                    }
                    else{
                        console.log("test = red");
                        table.rows[i].cells[j].style.backgroundColor = "red";
                        setTimeout(function(){
                            table.rows[i].cells[j].style.backgroundColor = randomColor();
                        }, 250);
                        if(newTimer < timer && newTimer > 0){
                            score--;
                            document.getElementById("score").innerText = `Score: ${score}`;
                        }
                    }
                }
            };
        }
    }
}