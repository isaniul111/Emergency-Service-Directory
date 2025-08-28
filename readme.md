1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?
getElementById finds one element by its unique ID.
getElementsByClassName finds all elements with a certain class and returns a live list that updates if the page changes.
querySelector finds the first element that matches any CSS selector.
querySelectorAll finds all elements matching a CSS selector, but the list does not update after the initial selection.

2. How do you create and insert a new element into the DOM?
Use document.createElement() to create a new element.
Add text or attributes to it.
Insert it into the page with methods like appendChild().

Example:
const newDiv=document.createElement("div");
newDiv.textContent ="Saniul";
document.body.appendChild(newDiv);

3. What is Event Bubbling and how does it work?
When you click on an element, the event starts there and then moves up through its parent elements until it reaches the document root.

4. What is Event Delegation in JavaScript? Why is it useful?
Instead of adding event listeners on many child elements, you add one listener on their parent.
Because events bubble, the parent can catch all child events. This saves memory and works even when new child elements are added dynamically.

5. What is the difference between preventDefault() and stopPropagation() methods?
preventDefault() stops the browser’s default behavior (like opening a link or submitting a form).
stopPropagation() stops the event from moving up or down the DOM, preventing other event listeners from triggering.