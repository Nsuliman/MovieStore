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

//////////////////////////////////////////

    function movie() {
        // input
        var favmov = prompt(" Welcome : Please enter which movies you mostly loved :  ");
        var movscn;
      
        // processing:
        if (favmov = ('comedy') {
            movscn = '<img src="https://i.pinimg.com/236x/f8/6b/ee/f86bee5c87273f1b2a3464c0c6a52acf--comedy-movies-funny-movies.jpg">'
        } else if (favmov = 'action' ) {
            movscn = '<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpZOCvVpXzMH-11CfhhkytZdvKRWthhsMF2yZse-7xy-RC9bF1">'
        } else if (favmov = 'horor' ) {
            movscn = '<img src="data:image/jpeg;base64,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">'
        } else {
            movscn = 'Unknown! ';
        }
      
        //output:
        return movscn;
    }


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
