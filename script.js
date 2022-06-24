// for listing style
var list = document.getElementById('demo');
function getInputValue () {
    //for getting the value that put in the textbox
    var myInput = document.getElementById('myInput').value;
    // for making the input value displayed on list
    var entry = document.createElement('li');
    //for displaying the value that been put in the textbox
     entry.appendChild(document.createTextNode(myInput));
     //for displaying the button for end task
     var Btn = document.createElement('button');
    Btn.appendChild(document.createTextNode("Task Done."));

    // removing the task
     Btn.onclick = function () {
        this.parentElement.removeChild(entry);
        this.parentElement.removeChild(Btn);
     }

    if (myInput == "") {
        alert("Please fill the form");
        return false;
    } else {
      list.appendChild(entry);
      list.appendChild(Btn);
    };

}
