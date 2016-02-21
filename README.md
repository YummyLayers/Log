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

### Handle
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

![Logging in Google Chrome console](https://raw.githubusercontent.com/YummyLayers/Log/dev/Demo/imgs/handler.png)

### Asserting
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

![Logging in Google Chrome console](https://raw.githubusercontent.com/YummyLayers/Log/dev/Demo/imgs/assert.png)
