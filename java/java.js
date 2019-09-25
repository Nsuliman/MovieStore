'use strict'
/*
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
*/
/////////////////////////////////////// Loop function //////////////////////////////////////////
/*var order = prompt("To show up the movies for today ... which kind of movies you want :  ");
var picture = '';

while ( order !== 'Horor' && order !== 'Action' )
{
    order = prompt(" For today , we have horor or action ");
}

if(order === 'Action'){
    picture = picture + '<p><img src="https://st2.depositphotos.com/1498528/9192/v/950/depositphotos_91922214-stock-illustration-action-word-icon.jpg'
} else if (order ==='Horor'){
    picture = picture +

}*/

//////////////// HTML Calls 
/*
<p>
        <h3>
          <script>
            document.write(createGreeting());
          </script>
        </h3>
      </p>

      <p>
        <h2>
          <script>
             document.write(movie());
            </script>
        </h2>
      </p>
      */

var showOrder = function() {
    // input singer name 
    var singname = prompt('what is your favorite singer in the middle east "?');
    var picture = ''; 
    var total = NaN;
  
    // processing
    while (singname !== 'shernie' && singname !== 'tamer') {
        singname = prompt('Please enter one of the two best singers "sherine" or "tamer"...');
    }
  
    while(isNaN(total)) {
      total = prompt('How many pictures would you like to see ?');
    }
    
    for(var models = 0; models < total; models = models + 1) {
      if (singname === 'shernie') {
        picture = picture + '<p><img src="https://anghamicoverart1.akamaized.net/?id=82333422&size=296"></p>'
      } else if (singname === 'tamer') {
        picture = picture + '<p><img src="https://amp.thenational.ae/image/policy:1.682934:1512818274/Tamer-Hosny.jpg?f=16x9&w=1200&$p$f$w=1c57aff"></p>'
      }
    }
  
    // output
    return picture;
  }