var eng = +prompt("Enter the english marks");  
var urdu = +prompt("Enter the urdu marks"); 
var maths = +prompt("Enter the maths marks");
var sci = +prompt("Enter the science marks");
var totalMarks=400;

var obtainMarks = eng +urdu +maths +sci;


console.log("Persentage: " + obtainMarks/totalMarks*100 +"%");
alert("obtain marks: " +obtainMarks ); 