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
    
        <p>
        <h3>
          <script>
            document.write(createGreeting());
          </script>
        </h3>
      </p>

//////////////////////////////////////////

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
