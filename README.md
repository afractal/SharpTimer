[![npm version](https://badge.fury.io/js/sharp-timer.svg)](https://badge.fury.io/js/sharp-timer)
[![Build Status](https://travis-ci.com/afractal/SharpTimer.svg?token=sN9qiKvy34fJyhwzHohM&branch=master)](https://travis-ci.com/afractal/SharpTimer)
[![Build status](https://ci.appveyor.com/api/projects/status/grw42490qo9lnokb?svg=true)](https://ci.appveyor.com/project/hermesxgjini/sharptimer)
[![codebeat badge](https://codebeat.co/badges/4b996a15-b593-4b28-9c61-84e0029912fc)](https://codebeat.co/projects/github-com-afractal-sharptimer-master)

## Changes

*v.0.1.0*

- [x] added timer feature
- [x] added stopwatch feature
- [ ] added timespan feature
- [x] unit tests for timer
- [] unit tests for stopwatch
- [ ] unit tests for timespan


## Examples

### *Timer example*
---

Initializing a new timer and specifying an iterval of 5 min, specify the interval in seconds:

`let timer = new Timer(60 * 5);`

Register an interval elapsing event handler:
```language javascript
timer.onIntervalElapsing(i => {
    console.log(`remaing time in seconds: ${i}`);
    console.log(`time is elapsing: ${timer.toString()}`);
});
```

Register an interval elapsed event handler.
Alsp remember to dereference the timer instance when you are done
so the gc can easily collect it.
```language javascript
timer.onIntervalElapsed(() => {
    timer.stop();
    timer = null;
    console.log('time completely elapsed');
});
```

Finally, call the start instance method.

`timer.start();`

## License

This product is licensed under ther [MIT](https://choosealicense.com/licenses/mit/) license.

