'use strict'

////////////////////////////////////////// Prompt & Confirm ///////////////////////////////////
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
    document.write(YName + ' : ');
    document.write(Result);
    document.write(' --------> ' + txt);
    

////////////////////////////////// Function by using SRC /////////////////////////////////////////

function movie(){
        // input
        var favmov = prompt(" Welcome : Please enter which movies you mostly loved :  ");
        var movscn;
      
        // processing:
        if (favmov = 'comedy' ) {
            movscn = '<img src="https://i.pinimg.com/236x/f8/6b/ee/f86bee5c87273f1b2a3464c0c6a52acf--comedy-movies-funny-movies.jpg">'
        } else if (favmov = 'action' ) {
            movscn = '<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpZOCvVpXzMH-11CfhhkytZdvKRWthhsMF2yZse-7xy-RC9bF1">'
        } else if (favmov = 'horor' ) {
            movscn = '<img src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBUEg=">'
        } else {
            movscn = 'Unknown! ';
        }
      
        //output:
        return movscn;
    }

////////////////////////////////////Copied example //////////////////////////////////////
function createGreeting() {
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
}

/////////////////////////////////////// Loop function //////////////////////////////////////////
var order = prompt("To show up the movies for today ... which kind of movies you want :  ");
var picture = '';

while ( order !== 'Horor' || order !== 'Action' )
{
    order = prompt(" For today , we have horor or action ");
}

if(order === 'Action'){
    picture = picture + '<p><img src="https://st2.depositphotos.com/1498528/9192/v/950/depositphotos_91922214-stock-illustration-action-word-icon.jpg'
} else if (order ==='Horor'){
    picture = picture + '<p><img src="data:image/jpeg;base64,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'

}

//for(var PFT =0;PFT<total;)
