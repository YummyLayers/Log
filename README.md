# Log
Console.log wrapper with syntactic sugar and handlers


## Installation
Add the following to your `<head>` section:
```html
<script src="https://raw.githubusercontent.com/YummyLayers/Log/master/Log.min.js"></script>
```
or
```html
<script src="http://dist.yumlay.com/js/log/Log.min.js"></script>
```
Or just download [Log.js](https://raw.githubusercontent.com/YummyLayers/Log/master/Log.min.js) and reference it in your page

## Usage

### Logging
```js
Log.d("Debug message");

Log.i("Info message");

Log.w("Warn message");

Log.e("Error message");

Log.wtf("WTF message");
```
![Logging in Google Chrome console](https://raw.githubusercontent.com/YummyLayers/Log/dev/Demo/imgs/logging.png)


### Handler
```js
Log.addHandler(types, callback);
```
Example:
```js
Log.addHandler(Log.types.ERROR, function(message){
    // Send error on server
    $.post('/example/server/error/handler',{message:message});
});
```
or
```js
Log.addHandler([Log.types.WARN, Log.types.INFO], function(message){
    Log.d('Any message');
});

Log.w('Warning');
Log.i('Information');
```
![Handle in Google Chrome console](https://raw.githubusercontent.com/YummyLayers/Log/dev/Demo/imgs/handler.png)


### Assert
```js
Log.assert(expression, message, successLog);
```
Example:
```js
// correct expressions
Log.assert(1 == 1, 'assert 1');
Log.assert(1 == 1, 'assert 2', true);

// incorrect expression
Log.assert(2 == 1, 'assert 3', true);
```
![Assert in Google Chrome console](https://raw.githubusercontent.com/YummyLayers/Log/dev/Demo/imgs/assert.png)


### Count
```js
Log.count(label);
```
Example:
```js
Log.count("count1");

Log.count("count2");
Log.count("count2");

Log.count("count1");
```
![Count in Google Chrome console](https://raw.githubusercontent.com/YummyLayers/Log/dev/Demo/imgs/count.png)


### Dir
Displays an interactive list of the properties of the specified JavaScript object.
```js
Log.dir(object);
```
Displays an interactive tree of the descendant elements of the specified XML/HTML element if possible or the JavaScript Object view if it is not.
```js
Log.dirXML(object);
```
Example:
```js
Log.dir(document.body);

Log.dirXML(document.body);
```
![Dir in Google Chrome console](https://raw.githubusercontent.com/YummyLayers/Log/dev/Demo/imgs/dir.png)


### Group
```js
Log.group(label);

Log.groupCollapsed(label);

Log.groupEnd();

Log.table(data, filterColumns);
```
Example:
```js
Log.group('group1')
    .d('message1')
    .i('message2')
    .groupEnd();
    
Log.groupCollapsed('group2')
    .d('message1')
    .wtf('message2')
    .groupEnd();
    
var people = [["John", "Smith"], ["Jane", "Doe"], ["Emily", "Jones"]];
Log.table(people);
```
![Group in Google Chrome console](https://raw.githubusercontent.com/YummyLayers/Log/dev/Demo/imgs/group.png)


### Profile

Starts recording a performance profile
```js
Log.profile(label);
```
The profileEnd method stops recording a profile previously started
```js
Log.profileEnd(label);
```
Example:
```js
Log.profile('profile1');

var array= new Array(1000000);
for (var i = array.length - 1; i >= 0; i--) {
    array[i] = {};
}

Log.profileEnd();
```
![Profile in Google Chrome console](https://raw.githubusercontent.com/YummyLayers/Log/dev/Demo/imgs/profile.png)


### Trace
Outputs a stack trace
```js
Log.trace(label);
```
Example:
```js
function example(callback){
    callback();
}

function example2(){
    Log.trace('example2');
}

example(example2);
```
![Trace in Google Chrome console](https://raw.githubusercontent.com/YummyLayers/Log/dev/Demo/imgs/trace.png)


### Time
```js
Log.time(label);

// This method adds an event to the Timeline during a recording session
Log.timeStamp(label); 

Log.timeEnd(label);

Log.functionTime(label, callback);
```
Example:
```js
Log.time('time1');

var array1 = new Array(2000000);
for (var i = array1.length - 1; i >= 0; i--) {
    array1[i] = {};
}

Log.timeStamp('time1');

Log.functionTime('time2', function(){
    var array2 = new Array(1000000);
    for (var i = array2.length - 1; i >= 0; i--) {
        array2[i] = {};
    }
});

Log.timeEnd('time1');
```
![Trace in Google Chrome console](https://raw.githubusercontent.com/YummyLayers/Log/dev/Demo/imgs/time.png)


### Clear
Clears the console.
```js
Log.clear();
```


### Off
Off logging
```js
Log.off(types);
```
Example:
```js
Log.off(Log.types.DEBUG);

// or

Log.off([Log.types.DEBUG,Log.types.INFO]);
```
