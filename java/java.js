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
        if (favmov ==='comedy' ) {
            movscn = '<img src="https://i.pinimg.com/236x/f8/6b/ee/f86bee5c87273f1b2a3464c0c6a52acf--comedy-movies-funny-movies.jpg">'
        } else if (favmov === 'action' ) {
            movscn = '<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpZOCvVpXzMH-11CfhhkytZdvKRWthhsMF2yZse-7xy-RC9bF1">'
        } else if (favmov === 'horor' ) {
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
  if (hournow > 18) {
    greeting = 'Good evening, Class!';
  } else if (hournow >= 12) {
    greeting = 'Good afternoon, Class!';
  } else if (hournow >= 0) {
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

while ( order !== 'Horor' && order !== 'Action' )
{
    order = prompt(" For today , we have horor or action ");
}

if(order === 'Action'){
    picture = picture + '<p><img src="https://st2.depositphotos.com/1498528/9192/v/950/depositphotos_91922214-stock-illustration-action-word-icon.jpg'
} else if (order ==='Horor'){
    picture = picture +

}
 
//////////////////////// Loop function //////////////////////////
  var showOrder = function() {
    // input
    var order = prompt('What movie you would like to watch today? "horor" or "action"?');
    var picture = ''; 
    var total = NaN;
  
    // processing
    while (order !== 'action' && order !== 'horor') {
      order = prompt('Please enter "action" or "horor"...');
    }
  
    while(isNaN(total)) {
      total = prompt('How many movie would you like?');
    }
    
    for(var models = 0; models < total; models = models + 1) {
      if (order === 'horor') {
        picture = picture + '<p><img src="https://cdn3.vectorstock.com/i/1000x1000/78/97/horror-word-and-silhouettes-on-them-vector-11157897.jpg"></p>'
      } else if (order === 'action') {
        picture = picture + '<p><img src="data:image/jpeg;base64,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"></p>'
      }
    }
  
    // output
    return picture;
  }