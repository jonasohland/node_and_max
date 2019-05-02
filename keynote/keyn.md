---
title:
  - Node for Max
author:
  - Jonas Ohland
theme:
  - metropolis
institute:
  - Hochschule Darmstadt
---

# Das Internet

# Chrome V8 und Node

# NPM

# Javascript

## Basic Syntax - Variablen

### Arduino / C

```cpp
int           x = 1;
const char*   y = "Hello!";
const char*[] z = {"This", "is", "an", "Array"};
```


### Javascript

```javascript
var x = 1;
var y = "Hello!";
var z = ["This", "is", "an", "Array"];
```

## Basic Syntax - Schleifen - Arduino/C


```cpp

int[] numbers = {1, 2, 3, 4};

for(int i = 0; i < 4; ++i){
    Serial.println(numbers[i]);
}

```

## Basic Syntax - Schleifen - Javascript

```javascript

var numbers = [1,2,3,4];

for(i in numbers){
    console.log(numbers[i]);
}

```

## Basic Syntax - Objekte

```javascript
var object = {
    key: "value",
    other_key: 10,
};

console.log(object.key); // value
console.log(object.other_key) // 10
```

## Basic Syntax - Objekte

```javascript
var object = {

    sub_obj: {
        key: "value"
    },

    sub_array: ["element 1", "element 2"]
}

console.log(object.sub_object.key)  // value
console.log(object.sub_arr[1])      // element 2

```
## Basic Syntax - Funktionen

```javascript
function doSomething(){
    console.log("Hello!");
}

function doSomethingWithArg(argument){
    console.log("Got Argument: " + argument);
}

doSomething();                  // Hello!
doSomethingWithArg("Dings");    // Got Argument: Dings
```

## Beispiel Telegram Bot

```javascript
const TelegramBot = require('node-telegram-bot-api');
var bot = new TelegramBot('YOUR_API_TOKEN');

function printMessage(msg){
    console.log(msg.text);
}

bot.on('message', printMessage);

```

# Node and Max