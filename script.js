console.log("page loaded...");

var requestSpan = document.querySelector("#count");
var connectionSpan = document.querySelector("#connectionsCount");
var username = document.querySelector("#idName");

function accept(id) {
    var element = document.querySelector(id);
    element.remove();
    requestSpan.innerText--;
    connectionSpan.innerText++;
}

function ignore(id) {
    var element = document.querySelector(id);
    element.remove();
    requestSpan.innerText--;
}

function edit() {
    username.innerText = "Krishna S";
}