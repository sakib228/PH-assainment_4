Q-1 Ans :

Difference between getElementById, getElementsByClassName, and querySelector/querySelectorAll ---

getElementById : Selects one element by ID, returns single element.

getElementsByClassName : Selects all elements with a class, returns HTMLCollection (live).

querySelector : Selects first element matching CSS selector.

querySelectorAll : Selects all elements matching CSS selector, returns NodeList (static).

Q-2 Ans :
let div = document.createElement("div");
div.innerText = "Hello";
document.body.appendChild(div); // insert into the DOM

Q-3 Ans :

Events propagate from child → parent by default.

Q-4 Ans :

Attach one event listener to a parent instead of each child.Useful for dynamic elements and performance.Q

Q-5 Ans :
preventDefault() : Stops default browser behavior (e.g., form submit, link click).

stopPropagation() : Stops event from bubbling up to parent elements.
