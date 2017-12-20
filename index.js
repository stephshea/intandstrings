//console.log('linked');

// document.getElementById("sumDigits").onsubmit = function(event) {
//     console.log("form submitted");
//     event.preventDefault();
// }

document.getElementById("submit").onclick = function() {
// take the numbers from the text field display them in our display area
var input = document.getElementById("input").value;
//innerHTML will contain literal raw HTML; text and html elements; returns a string
//.textContent skips html elements and just gets the raw text 
//value gets only information out of a text field
// console.log(input);
document.getElementById("display").innerHTML += input;
//+= adds new numbers on submit to input string
//javascript.value

document.getElementById("input").value = ('');
//getters (.) and setters (=) value
}

document.getElementById("addDigits").onclick = function() {
    //console.log("addDigits clicked");
    //get the sum of the digits from the display field
    var display = document.getElementById("display").innerHTML;
    //without = using a getter not a setter
    // console.log(display);
    var runningTotal = 0
    for (var i = 0; i <display.length; i++) {
        // console.log(display[i]);
        // runningTotal += parseInt(display[i]);
        runningTotal = runningTotal + parseInt(display[i]);
        
    }
    console.log(runningTotal);
    document.getElementById("display").innerHTML = runningTotal;
}