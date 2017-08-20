[![npm version](https://badge.fury.io/js/sharp-timer.svg)](https://badge.fury.io/js/sharp-timer)
[![npm](https://img.shields.io/npm/dt/sharp-timer.svg)]()
[![Build Status](https://travis-ci.com/afractal/SharpTimer.svg?token=sN9qiKvy34fJyhwzHohM&branch=master)](https://travis-ci.com/afractal/SharpTimer)
[![Build status](https://ci.appveyor.com/api/projects/status/grw42490qo9lnokb?svg=true)](https://ci.appveyor.com/project/hermesxgjini/sharptimer)
[![Coverage Status](https://coveralls.io/repos/github/afractal/SharpTimer/badge.svg?branch=master)](https://coveralls.io/github/afractal/SharpTimer?branch=master)
[![codebeat badge](https://codebeat.co/badges/4b996a15-b593-4b28-9c61-84e0029912fc)](https://codebeat.co/projects/github-com-afractal-sharptimer-master)

## Changes

*v.0.1.2*

- [x] timer feature
- [x] stopwatch feature
- [x] timespan feature
- [x] [type definitions](https://www.npmjs.com/package/@types/sharp-timer)
- [x] tests for timer, stopwatch and timespan


## Examples

### *Timer example*

Initializing a new timer and specifying an iterval of 5 min, specify the interval in seconds:

`let timer = new Timer(60 * 5);`

Register an interval elapsing event handler:
```javascript
timer.onIntervalElapsing(i => {
    console.log(`remaing time in seconds: ${i}`);
    console.log(`time is elapsing: ${timer.toString()}`);
});
```

Register an interval elapsed event handler.
```javascript
timer.onIntervalElapsed(() => {
    timer.stop();
    console.log('time completely elapsed');
});
```

Finally, call the start instance method.

`timer.start();`

### *Stopwatch example*

Initializing a new Stopwatch by calling the ctor

`let stopwatch = new Stopwatch();`

`stopwatch.start();`

or the static `startNew` function

`let stopwatch = Stopwatch.startNew();`

Remember to call dispose on the stopwatch after your done with that instance:
```javascript
const intervalId = setInterval(() => {
    console.log(`elapsedMilliseconds: ${stopwatch.elapsedMilliseconds}`);
}, 10);

setTimeout(() => {
    clearInterval(intervalId);
    stopwatch.dispose();
}, 100);
```

### *Timespan example*

Constructs a Timespan object by calling of its static functions
```javascript
const {
    days,
    hours,
    minutes,
    seconds,
    milliseconds
} = Timespan.fromDays(3);
```

and access its instance properties
```javascript
console.log(`milliseconds: ${milliseconds}`); // 259200000
console.log(`seconds: ${seconds}`); // 259200
console.log(`minutes: ${minutes}`); // 4320
console.log(`hours: ${hours}`); // 72
console.log(`days: ${days}`); // 3
```

## License

This product is licensed under ther [MIT](./LICENSE.md) license.

