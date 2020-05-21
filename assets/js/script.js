var d = new Date();
document.getElementById("demo").innerHTML = d;

var weekday = new Array(7);
weekday[0] = "Sunday";
weekday[1] = "Monday";
weekday[2] = "Tuesday";
weekday[3] = "Wednesday";
weekday[4] = "Thursday";
weekday[5] = "Friday";
weekday[6] = "Saturday";
weekday[7] = "Sunday";
weekday[8] = "Monday";
weekday[9] = "Tuesday";
weekday[10] = "Wednesday";
weekday[11] = "Thursday";
weekday[12] = "Friday";
weekday[13] = "Saturday";

var d0 = weekday[d.getDay()];
document.getElementById("day0").innerHTML = d0;

var d1 = weekday[d.getDay() + 1];
document.getElementById("day1").innerHTML = d1;

var d2 = weekday[d.getDay() + 2];
document.getElementById("day2").innerHTML = d2;

var d3 = weekday[d.getDay() + 3];
document.getElementById("day3").innerHTML = d3;

var d4 = weekday[d.getDay() + 4];
document.getElementById("day4").innerHTML = d4; 

function myFunction() {
    var x = document.getElementById("myDIV");
   
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  }
  function myFunction2() {
    var y = document.getElementById("myDIV2");
   
    if (y.style.display === "none") {
      y.style.display = "block";
    } else {
      y.style.display = "none";
    }
  }

  function myFunction3() {
    var z = document.getElementById("myDIV3");
   
    if (z.style.display === "none") {
      z.style.display = "block";
    } else {
      z.style.display = "none";
    }
  }