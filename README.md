# SharpTimer

[![GPR](https://img.shields.io/github/release/afractal/SharpTimer.svg?label=GPR&logo=github)](https://github.com/afractal/SharpTimer/packages/28631) [![npm version](https://badge.fury.io/js/sharp-timer.svg)](https://badge.fury.io/js/sharp-timer) [![npm](https://img.shields.io/npm/dt/sharp-timer.svg)]() [![CircleCI](https://circleci.com/gh/afractal/SharpTimer.svg?style=svg)](https://circleci.com/gh/afractal/SharpTimer)

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

## Changes

*v.0.1.**

- [x] timer feature
- [x] stopwatch feature
- [x] timespan feature
- [x] [type definitions](https://www.npmjs.com/package/@types/sharp-timer)
- [x] tests for timer, stopwatch and timespan

## License

This product is licensed under ther [MIT](./LICENSE.md) license.

---

<p align="center">
    made with :heart: by <a href="https://github.com/afractal">me</a>
</p>


