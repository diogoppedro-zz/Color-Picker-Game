var numSquares = 6;
var colors = generateRandomColors(numSquares);
var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.getElementById("message");
var h1 = document.querySelector("h1");
var resetbutton = document.querySelector("#reset");
var easyBtn = document.querySelector("#easyBtn");
var hardBtn = document.querySelector("#hardBtn");


easyBtn.addEventListener("click", function(){
    hardBtn.classList.remove("selected");
    easyBtn.classList.add("selected");

    //Setting Max number of possible colours
    numSquares = 3;
    //Generat new colors
    colors = generateRandomColors(numSquares);
    //set new color to guess our of the 3
    pickedColor = pickColor();
    //set colorDisplay
    colorDisplay.textContent = pickedColor;
    //hide 3 bottom Colors divs
    for (var i = 0; i < squares.length; i++){
        if(colors[i]){
            squares[i].style.backgroundColor = colors[i];
        }else{
            squares[i].style.display = "none";
        }
    }
    
});

hardBtn.addEventListener("click", function(){

    hardBtn.classList.add("selected");
    easyBtn.classList.remove("selected");
    // Setting Number of Colours for array to be 6
    numSquares = 6;
    colors = generateRandomColors(numSquares);

    //set new color to guess our of the 3
    pickedColor = pickColor();
   
    //set colorDispla 
    colorDisplay.textContent = pickedColor;

    //Show 3 bottom Colors divs
    for (var i = 0; i < squares.length; i++){
      squares[i].style.backgroundColor = colors[i];
      squares[i].style.display = "block";
    }
});


//NEW COLORS BUTTON
resetbutton.addEventListener("click", function(){

    // Check how many colous should the array be 6 or 3
    //generate all new colors
    colors = generateRandomColors(numSquares);
    //pick a new random color from array to restart the game
    pickedColor = pickColor();

    //change colorDisplay to match picked color
    colorDisplay.textContent = pickedColor;
    h1.style.backgroundColor = "steelblue";
    messageDisplay.textContent = "";
    this.textContent = "New Colors";

    //change colors of squares
    for( var i = 0; i < squares.length; i++){
        //add initial colours to square
        squares[i].style.backgroundColor = colors[i];
        
        //add click listeners to squares
        squares[i].addEventListener("click", function(){
            //Grab color of clicked square
            var clickedcolor = this.style.backgroundColor;
            // compare color to pickedColor
            if (clickedcolor === pickedColor ){
                messageDisplay.textContent = "Correct!";
                changeColor(clickedcolor);
                h1.style.backgroundColor = clickedcolor;
                resetbutton.textContent = "Play Again";
                
                
            }else{
                this.style.backgroundColor = "#232323";
                messageDisplay.textContent = "Try Again";
            }
        });
    }


})

//hSetting label in html for the ardcoded the Color to be Displayed
colorDisplay.textContent = pickedColor;

//looping through the strings of RGB colours and Assigned to Variable holding the square Divs
for( var i = 0; i < squares.length; i++){
    //add initial colours to square
    squares[i].style.backgroundColor = colors[i];

    //add click listeners to squares
    squares[i].addEventListener("click", function(){
        //Grab color of clicked square
        var clickedcolor = this.style.backgroundColor;
        // compare color to pickedColor
        if (clickedcolor === pickedColor ){
            messageDisplay.textContent = "Correct!";
            resetbutton.textContent = "Play Again!";
            changeColor(clickedcolor);
            h1.style.backgroundColor = clickedcolor;
            

            
        }else{
            this.style.backgroundColor = "#232323";
            messageDisplay.textContent = "Try Again";
        }
    });
}

function changeColor (color){
   
    //loop through all square
    for( var i = 0; i < squares.length; i++){
        //add initial colours to square
        squares[i].style.backgroundColor = color;
    

    //change each color to match correct color
    }
}


function pickColor(){
    var random = Math.floor(Math.random() * colors.length)
    return colors[random];

}

function generateRandomColors(num){
    //Make and array
    var arr =[]
    //add num random colors to the array
    for (i = 0; i < num; i++){
        //generate random colors and push into array
        arr.push(randomColor())
    }
    //return
    return arr;
}


function randomColor(){
    //Pick red from 0 to 255
   var r =  Math.floor(Math.random() * 256)
    //Pick Green from 0 to 255
    var g = Math.floor(Math.random() * 256)
    //Pick Blue from 0 to 255
    var b = Math.floor(Math.random() * 256)
    return "rgb(" + r + ", " + g + ", " + b + ")"; 
    
}

