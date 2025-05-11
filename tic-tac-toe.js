// STORING INPUT VALUE LOCATION IN VARIABLES

// getting element by querry selector
let b1 = document.querySelector(".b1");
// let b1 = document.getElementById("b1");
let b2 = document.getElementById("b2");
let b3 = document.getElementById("b3");
let b4 = document.getElementById("b4");
let b5 = document.getElementById("b5");
let b6 = document.getElementById("b6");
let b7 = document.getElementById("b7");
let b8 = document.getElementById("b8");
let b9 = document.getElementById("b9");

// CREATING FUNCTIONS TO STORE "X" OR "O" ACCORTING TO USER TURN IN CLICKED BOX
let t = 1;
// function 1 to store "X" or"O" according to user turn  in box1 
function myfunc1() {
  if (t == 1) {
    b1.value = "X";
    b1.disabled = true;
    t = 0;
  } else {
    b1.value = "O";
    b1.disabled = true;
    t = 1;
  };
};

// adding function with the help of event listner 
b1.addEventListener('click',myfunc1);
b1.addEventListener('click',myfunc);
// function 2 to store "X" or"O" according to user turn   in box2
function myfunc2() {
  if (t == 1) {
    b2.value = "X";
    b2.disabled = true;
    t = 0;
  } else {
    b2.value = "O";
    b2.disabled = true;
    t = 1;
  };
};
// function 3 to store "X" or"O" according to user turn    in box3
function myfunc3() {
  if (t == 1) {
    b3.value = "X";
    b3.disabled = true;
    t = 0;
  } else {
    b3.value = "O";
    b3.disabled = true;
    t = 1;
  };
};
// function 4 to store "X" or"O" according to user turn     in box4
function myfunc4() {
  if (t == 1) {
    b4.value = "X";
    b4.disabled = true;
    t = 0;
  } else {
    b4.value = "O";
    b4.disabled = true;
    t = 1;
  };
};
// function 5 to store "X" or"O" according to user turn      in box5
function myfunc5() {
  if (t == 1) {
    b5.value = "X";
    b5.disabled = true;
    t = 0;
  } else {
    b5.value = "O";
    b5.disabled = true;
    t = 1;
  };
};
// function 6 to store "X" or"O" according to user turn       in box6
function myfunc6() {
  if (t == 1) {
    b6.value = "X";
    b6.disabled = true;
    t = 0;
  } else {
    b6.value = "O";
    b6.disabled = true;
    t = 1;
  };
};
// function 7 to store "X" or"O" according to user turn        in box7
function myfunc7() {
  if (t == 1) {
    b7.value = "X";
    b7.disabled = true;
    t = 0;
  } else {
    b7.value = "O";
    b7.disabled = true;
    t = 1;
  };
};
// function 8 to store "X" or"O" according to user turn         in box8
function myfunc8() {
  if (t == 1) {
    b8.value = "X";
    b8.disabled = true;
    t = 0;
  } else {
    b8.value = "O";
    b8.disabled = true;
    t = 1;
  };
};
// function 9 to store "X" or"O" according to user turn          in box9
function myfunc9() {
  if (t == 1) {
    b9.value = "X";
    b9.disabled = true;
    t = 0;
  } else {
    b9.value = "O";
    b9.disabled = true;
    t = 1;
  };
};

//------------------------------------------------------------------------------------------------------
//-------------------------------Function to check winning conditions------------------------------
//CREATING FUNCTION my func() using  different CONDITIONS TO CHECK WETHER THE USER X OR USER O WINS: AND DISPLAY WHICH USER WIN

//FOR USER "X" 
//first row
function myfunc() {
  if (b1.value == "X" && b2.value == "X" && b3.value == "X") {
    b4.disabled = true;
    b5.disabled = true;
    b6.disabled = true;
    b7.disabled = true;
    b8.disabled = true;
    b9.disabled = true;
    b1.style.backgroundColor = "red";
    b2.style.backgroundColor = "red";
    b3.style.backgroundColor = "red";
    document.getElementById("result").innerHTML = "Player X wins";
  } 
  //second row
  else if (b4.value == "X" && b5.value == "X" && b6.value == "X") {
    b1.disabled = true;
    b2.disabled = true;
    b3.disabled = true;
    b7.disabled = true;
    b8.disabled = true;
    b9.disabled = true;
    b4.style.backgroundColor = "red";
    b5.style.backgroundColor = "red";
    b6.style.backgroundColor = "red";
    document.getElementById("result").innerHTML = "Player X wins";
  } 
  //third row
  else if (b7.value == "X" && b8.value == "X" && b9.value == "X") {
    b1.disabled = true;
    b2.disabled = true;
    b3.disabled = true;
    b4.disabled = true;
    b5.disabled = true;
    b6.disabled = true;
    b7.style.backgroundColor = "red";
    b8.style.backgroundColor = "red";
    b9.style.backgroundColor = "red";
    document.getElementById("result").innerHTML = "Player X wins";
  }
  //first column
   else if (b1.value == "X" && b4.value == "X" && b7.value == "X") {
    b6.disabled = true;
    b2.disabled = true;
    b3.disabled = true;
    b8.disabled = true;
    b5.disabled = true;
    b9.disabled = true;
    b1.style.backgroundColor = "red";
    b4.style.backgroundColor = "red";
    b7.style.backgroundColor = "red";
    document.getElementById("result").innerHTML = "Player X wins";
  }
  //second column
   else if (b2.value == "X" && b5.value == "X" && b8.value == "X") {
    b1.disabled = true;
    b4.disabled = true;
    b3.disabled = true;
    b7.disabled = true;
    b6.disabled = true;
    b9.disabled = true;
    b2.style.backgroundColor = "red";
    b5.style.backgroundColor = "red";
    b8.style.backgroundColor = "red";
    document.getElementById("result").innerHTML = "Player X wins";
  } 
  //third column
  else if (b3.value == "X" && b6.value == "X" && b9.value == "X") {
    b1.disabled = true;
    b4.disabled = true;
    b2.disabled = true;
    b7.disabled = true;
    b5.disabled = true;
    b8.disabled = true;
    b3.style.backgroundColor = "red";
    b6.style.backgroundColor = "red";
    b9.style.backgroundColor = "red";
    document.getElementById("result").innerHTML = "Player X wins";
  }
  //first diognal 
   else if (b1.value == "X" && b5.value == "X" && b9.value == "X") {
    b3.disabled = true;
    b4.disabled = true;
    b2.disabled = true;
    b7.disabled = true;
    b6.disabled = true;
    b8.disabled = true;
    b1.style.backgroundColor = "red";
    b5.style.backgroundColor = "red";
    b9.style.backgroundColor = "red";
    document.getElementById("result").innerHTML = "Player X wins";
  } 
  //second diognal
   else if (b3.value == "X" && b5.value == "X" && b7.value == "X") {
    b1.disabled = true;
    b4.disabled = true;
    b2.disabled = true;
    b9.disabled = true;
    b6.disabled = true;
    b8.disabled = true;
    b3.style.backgroundColor = "red";
    b5.style.backgroundColor = "red";
    b7.style.backgroundColor = "red";
    document.getElementById("result").innerHTML = "Player X wins";
  }

  //-----------------------------------------------------------------------

  //FOR USER"O"
  //first row
  else if (b1.value == "O" && b2.value == "O" && b3.value == "O") {
    b4.disabled = true;
    b5.disabled = true;
    b6.disabled = true;
    b7.disabled = true;
    b8.disabled = true;
    b9.disabled = true;
    b1.style.backgroundColor = "red";
    b2.style.backgroundColor = "red";
    b3.style.backgroundColor = "red";
    document.getElementById("result").innerHTML = "Player O wins";
  } 
    //second row
  else if (b4.value == "O" && b5.value == "O" && b6.value == "O") {
    b1.disabled = true;
    b2.disabled = true;
    b3.disabled = true;
    b7.disabled = true;
    b8.disabled = true;
    b9.disabled = true;
    b4.style.backgroundColor = "red";
    b5.style.backgroundColor = "red";
    b6.style.backgroundColor = "red";
    document.getElementById("result").innerHTML = "Player O wins";
  }   
  //third row
  else if (b7.value == "O" && b8.value == "O" && b9.value == "O") {
    b1.disabled = true;
    b2.disabled = true;
    b3.disabled = true;
    b4.disabled = true;
    b5.disabled = true;
    b6.disabled = true;
    b7.style.backgroundColor = "red";
    b8.style.backgroundColor = "red";
    b9.style.backgroundColor = "red";
    document.getElementById("result").innerHTML = "Player O wins";
  }  
  //first column
  else if (b1.value == "O" && b4.value == "O" && b7.value == "O") {
    b6.disabled = true;
    b2.disabled = true;
    b3.disabled = true;
    b8.disabled = true;
    b5.disabled = true;
    b9.disabled = true;
    b1.style.backgroundColor = "red";
    b4.style.backgroundColor = "red";
    b7.style.backgroundColor = "red";
    document.getElementById("result").innerHTML = "Player O wins";
  }  
  //second column
   else if (b2.value == "O" && b5.value == "O" && b8.value == "O") {
    b1.disabled = true;
    b4.disabled = true;
    b3.disabled = true;
    b7.disabled = true;
    b6.disabled = true;
    b9.disabled = true;
    b2.style.backgroundColor = "red";
    b5.style.backgroundColor = "red";
    b8.style.backgroundColor = "red";
    document.getElementById("result").innerHTML = "Player O wins";
  }    
  //third column
   else if (b3.value == "O" && b6.value == "O" && b9.value == "O") {
    b1.disabled = true;
    b4.disabled = true;
    b2.disabled = true;
    b7.disabled = true;
    b5.disabled = true;
    b8.disabled = true;
    b3.style.backgroundColor = "red";
    b6.style.backgroundColor = "red";
    b9.style.backgroundColor = "red";
    document.getElementById("result").innerHTML = "Player O wins";
  }   
  //first diognal 
  else if (b1.value == "O" && b5.value == "O" && b9.value == "O") {
    b3.disabled = true;
    b4.disabled = true;
    b2.disabled = true;
    b7.disabled = true;
    b6.disabled = true;
    b8.disabled = true;
    b1.style.backgroundColor = "red";
    b5.style.backgroundColor = "red";
    b9.style.backgroundColor = "red";
    document.getElementById("result").innerHTML = "Player O wins";
  }   
  //second diognal
    else if (b3.value == "O" && b5.value == "O" && b7.value == "O") {
    b1.disabled = true;
    b4.disabled = true;
    b2.disabled = true;
    b9.disabled = true;
    b6.disabled = true;
    b8.disabled = true;
    b3.style.backgroundColor = "red";
    b5.style.backgroundColor = "red";
    b7.style.backgroundColor = "red";
    document.getElementById("result").innerHTML = "Player O wins";
  } 
  //DRAW  STATEMENT AFTER CHECKING EACH STATEMENT IT WIL CHECK THE FOLLOWING CONDITION BCZ WE HAVE ALREADY WROTE THE WIINING CONDITION IN THIS SECTION THERE IS NO CHANCE OF WINNING BCZ IF IT IS THE THE CONDITIONAL STATEMNT TRMINATES BEFORE IT 
  else if (
    (b1.value == "X" || b1.value == "O") && (b2.value == "X" ||b2.value == "O") && (b3.value == "X" ||b3.value == "O") &&
    (b4.value == "X" || b4.value == "O") && (b5.value == "X" ||b5.value == "O") && (b6.value == "X" ||b6.value == "O") &&
    (b7.value == "X" || b7.value == "O") && (b8.value == "X" ||b8.value == "O") && (b9.value == "X" ||b9.value == "O") 
)
   {
    document.getElementById("result").innerHTML = "DRAW";
  };
};
// CREATING RELOAD FUNCTION TO RELOAD WEBPAGE
function refresh() {
  location.reload();
};

