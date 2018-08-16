//using For loops
console.log("Using For Loops");
var text="";    //variable text assigned to show result in html page                               

for(var i = 1; i <= 10; i++)  //for loop initiation
 {
    var result = i*5;
    text += result +"<br>";  //code to show output on the HTML page
    document.getElementById("forloop").innerHTML = text;
    console.log(result);     //output shown in console
}

//using while loop
console.log("using While loops")
var texts="";    //variable text assigned to show result in html page
var count = 1;

while (count <= 10)  // while loop declaration
{
    var res = count*5
    texts+= res +"<br>";   //code to show output on the HTML page
    document.getElementById("whileloop").innerHTML = texts;
    console.log(res);    //output shown in console
    count++;
}



