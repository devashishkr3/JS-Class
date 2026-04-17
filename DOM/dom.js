let node1 = document.getElementById("node1");
console.log(node1);
console.log(node1.innerText);
console.log(node1.innerHTML);

node1.innerText = "This is a new text added by JavaScript.";
console.log(node1.innerText);

// first child, last child, parent node, next sibling, previous sibling
let node = document.querySelector("div").children;
console.log(node);
console.log(node.firstChild);
console.log(node.lastChild);
console.log(node.parentNode);
console.log(node.nextSibling);
console.log(node.previousSibling);


let node2 = document.getElementsByClassName("node2");
console.log(node2);

let node3 = document.getElementsByTagName("p");
console.log(node3);
console.log(node3[1].innerText);

let node4 = document.getElementById("node4");
console.log(node4);

let node5 = document.getElementById("node5");
console.log(node5);