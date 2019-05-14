---
title: JQuery vs CoffeeScript
keywords: javascript, jquery, coffeescript, web, development
description: Is coffeescript the next big thing?
tags: javascript, jquery, coffeescript
---

From the word of the author, the golden rule of CoffeeScript is _"it's just javascript"_, and to a certain level, it is true. The [homepage](http://coffeescript.org/) of CoffeeScript is doing a great job in highlighting the benefit of using CoffeeScript as oppose of pure JavaScript. To a certain extend, it is doing good in sugarcoating and helping developer avoiding the dark side of JavaScript, and syntax wise, I love the fact that I don't need to worry about braces (most of the time) and semicolons. But, programmer beware. Though what you write will appear to be short, elegant, and understandable, like most other sugercoater, CoffeeScript hides the intricate details and complexity of the code. This will make it easier for you to forget, that, the code you write is longer then you think (read: bigger file size = bandwidth hungry), and it will make it a bit harder to optimize. Now, let's see what CoffeeScript has to offer and put it to battle with jquery. Yup, you read that right. Here, i will put functionality offered by jquery, not just JavaScript, and CoffeeScript into battle.

### FUNCTIONS AND LOOPS

CoffeeScript way of defining function is by using

```js
->
```

which will translate into

```js
function() { ... }
```

looks good? Sure is.. but, in CoffeeScript, every function return a value, and this can introduce some interesting effect. For example, let's say I wrote something like this.

```js
->
  alert i for i in [1,2,3,4]
```

Simple right? Let's just said that this anonymous function are to be used to handle a successful ajax callback, on which a return value is not needed. Let's see how it is getting generated to :

```js
;(function() {
  var i, _i, _len, _ref, _results
  _ref = [1, 2, 3, 4]
  _results = []
  for (_i = 0, _len = _ref.length; _i < _len; _i++) {
    i = _ref[_i]
    _results.push(alert(i))
  }
  return _results
})
```

Hmm.. ok, why would a \_results array need to be build? Oh right, because the for loop is the last statement in the function, so it has to return a value. Unnecessary computation? To avoid this, you need to add a dummy statement right after the loop, e.g:

```js
->
  alert i for i in [1,2,3,4]
  null # ... needed?
```

Now, see how it automatically declare the looping variables for you, neat eh.. but, check how it behave when you do more then 1 loop in a function

```js
->
  a = [1,2,3,4]
  alert i for i in a
  alert i for i in a
  null
```

becomes :

```js
;(function() {
  var a, i, _i, _j, _len, _len1
  a = [1, 2, 3, 4]
  for (_i = 0, _len = a.length; _i < _len; _i++) {
    i = a[_i]
    alert(i)
  }
  for (_j = 0, _len1 = a.length; _j < _len1; _j++) {
    i = a[_j]
    alert(i)
  }
  return null
})
```

Woo.. woo... why does it have to use different looping variables? and unfortunately this goes on as you add more loop. While by using jquery (in CoffeeScript syntax), it can simply be written as :

```js
a = [1, 2, 3, 4]
$(a).each -> alert this
$(a).each -> alert this
Which translate into

var a;

a = [1, 2, 3, 4];

$(a).each(function() {
  return alert(this);
});

$(a).each(function() {
  return alert(this);
});
```

No garbage variables. Which one do you think is better?

### The Braces

Notice how, like in Ruby, function call in CoffeeScript does not need braces, in most cases.. unless.. it doesn't have parameter, on which CoffeeScript will treat it as getting a reference to the function. This small but annoying fact, can really get you into trouble. Personally, I would prefer it to be consistent, if braces in function call is optional, then make it optional in all case, and we can use other syntax for getting the reference, e.g:

```js
a = -> "do something"
a # function call
&a # get function reference
```

yup, I'm borrowing from C there..

### TERNARY OPERATOR (?:)

Yup, that little operator that works perfectly in JavaScript. Try to put it in CoffeeScript.. and don't be surprised when you got this instead

```js
// use "if a > b then a else b" for the intended effect
// "a > b ? a : b" becomes...
var _ref

if ((_ref = a > b) != null) {
  _ref
} else {
  ;({
    a: b,
  })
}
```

Weird... Isn't CoffeeScript... is just JavaScript?
