"use strict";

document.getElementById("add").onclick  = function() {

    var node = document.createElement("Li");
    var text = document.getElementById("user-input").value;
    var textnode = document.createTextNode(text);
    node.appendChild(textnode);
    document.getElementById("list").appendChild(node);
}

