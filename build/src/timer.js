(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var Timer = (function () {
        function Timer(interval) {
            // autoReset: boolean;
            this._intervalElapsedEvents = new Array();
            this._intervalElapsingEvents = new Array();
            this.checkForValidInterval(interval);
            this.enabled = true;
            // this.autoReset = false;
            this.interval = interval;
            this._isTimerStopped = false;
        }
        Object.defineProperty(Timer.prototype, "interval", {
            get: function () { return this._interval; },
            set: function (value) {
                this.checkForValidInterval(value);
                if (this._interval !== value) {
                    this._interval = value;
                    for (var _i = 0, _a = this._intervalElapsingEvents; _i < _a.length; _i++) {
                        var intervalElapsingEvent = _a[_i];
                        intervalElapsingEvent(this._interval);
                    }
                    if (this._interval === 0) {
                        for (var _b = 0, _c = this._intervalElapsedEvents; _b < _c.length; _b++) {
                            var intervalElapsedEvent = _c[_b];
                            intervalElapsedEvent();
                        }
                    }
                }
            },
            enumerable: true,
            configurable: true
        });
        Timer.prototype.start = function () {
            var _this = this;
            this.enabled = true;
            var decreaseTime = function () {
                if (_this.enabled && !_this._isTimerStopped && _this.interval > 0) {
                    _this.interval--;
                    setTimeout(decreaseTime, 1000);
                }
                else if (!_this.enabled) {
                    setTimeout(decreaseTime, 1000);
                }
                else if (_this._isTimerStopped)
                    return;
            };
            setTimeout(decreaseTime, 1000);
        };
        Timer.prototype.pause = function () {
            this.enabled = false;
        };
        Timer.prototype.stop = function () {
            this._isTimerStopped = true;
        };
        Timer.prototype.onIntervalElapsed = function (intervalElapsedHandler) {
            this._intervalElapsedEvents.push(intervalElapsedHandler);
        };
        Timer.prototype.onIntervalElapsing = function (intervalElapsingHandler) {
            this._intervalElapsingEvents.push(intervalElapsingHandler);
        };
        Timer.prototype.toString = function () {
            var endTime = new Date();
            endTime.setSeconds(endTime.getSeconds() + this.interval);
            var now = Date.now();
            var diffMinutes = new Date((+endTime) - now).getMinutes();
            var diffSeconds = new Date((+endTime) - now).getSeconds();
            return this.getDoubleDigit(diffMinutes) + ":" + this.getDoubleDigit(diffSeconds);
        };
        Timer.prototype.getDoubleDigit = function (number) {
            var filledNumber = '0' + number.toString();
            return filledNumber.length >= 3 ? filledNumber.slice(1, filledNumber.length) : filledNumber;
        };
        Timer.prototype.checkForValidInterval = function (interval) {
            if (interval < 0) {
                throw new Error('Interval can not be less than zero.');
            }
        };
        return Timer;
    }());
    exports.Timer = Timer;
});
//# sourceMappingURL=timer.js.map