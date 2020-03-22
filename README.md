# TBiff js
Template Bindings Framework (TBF) is a light-weight, dependency-free library that makes it really easy to interact with your HTML elements from within javascript.

## Introduction

If you're familiar with using a "forms" framework for application development, you'll be used to having automatic object bindings for your markup elements. This simple library allows you to achieve this with no hassle and no setup.

## Getting Started
The only thing you need to do to get started with this library:
1. Download bindings.js and include it in your front-end directory
2. Include it in any HTML page for which you want automatic bindings
# Example 0.5. Include bindings.js
```html
<script src="bindings.js"></script>
```
And now you're ready!


## NOTE
TBiff utilizes *window.onload* to generate all the bindings. Depending on the order that you include your javascript sources, it may unintentionally break functionality. Because of this, it's recommended to define the template method **app()** in the global scope, and this will have the intended behavior.
```javascript
function app(){
  // window.onload alternative
}
```


For any HTML element with an *id*, a corresponding javascript object will be generated within the **window.** scope. This object will have the same name as the *id* of the element. (this could be arbitrarily changed or extended to support different attributes, I suppose.)

Additionally, if your element is a **\<button>** (let's say the *id* is "btn1") a template method bttn1Clicked will become available to the **window.** scope.

# Example 1. Bindings Basics
```html
<input type="text" id="nameInput"/>
<p id="nameP"></p>
```
```javascript
function app(){
  nameP.innerHTML = nameInput.value;
}
```
It really is that simple!


# Example 2. Buttons
```html
<input type="text" id="messageInput"/>
<button id="sendBtn">Send</button>
```
```javascript
function sendBtnClicked(){
  alert(messageInput.value);
}
```

Without any setup, the sendBtnClicked funcion will be invoked when the button is clicked.

## NOTE 
If you override the *onclick=* on the button, the template method won't be called.
