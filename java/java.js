'use strict'

var YName = prompt(" Welcome Lady ... Please enter your name : ");
var Height = prompt(" to know the ideal weight for you ...  Please enter your Height : ");
var txt;
var Result;

if (Height >= 200 ) {
    Result = ' Your weight must be from 69 to 80 KG' ;
} else if (Height >= 170 && Height < 180 ) {
    Result = ' Your weight must be from 61 to 68 KG' ;
} else if (Height >= 160 && Height < 170 ) {
    Result = ' Your weight must be from 54 to 59 KG' ;
} else if (Height >= 150 && Height < 160 ){
    Result = ' Your weight must be from 49 to 52 KG' ;
}else {
    Result = ' Please ask your doctor' ;
}

var r = confirm("Press a button!");
if (r == true) {
  txt = " Keep going ";
} else {
  txt = " try another way!";
}
    document.write(YName + ' : ')
    document.write(Result)
    document.write(' --------> ' + txt)


    function createGreeting() {
        // input
        var today = new Date();
        var hourNow = today.getHours();
        var greeting;
      
        // processing:
        if (hourNow > 18) {
          greeting = 'Good evening, Class!';
        } else if (hourNow >= 12) {
          greeting = 'Good afternoon, Class!';
        } else if (hourNow >= 0) {
          greeting = 'Good morning!';
        } else {
          greeting = 'Welcome!';
        }
      
        //output:
        return greeting;

/*function createGreeting() {
  // input
  //var today = new Date();
  var hournow = prompt(" Please enter what is the time now : ");
  //var hourNow = today.getHours();
  var greeting;

  // processing:
  if (hourNow > 18) {
    greeting = 'Good evening, Class!';
  } else if (hourNow >= 12) {
    greeting = 'Good afternoon, Class!';
  } else if (hourNow >= 0) {
    greeting = 'Good morning!';
  } else {
    greeting = 'Welcome!';
  }

  //output:
  return greeting;
}*/
