"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Stopwatch = (function () {
    function Stopwatch() {
        this._startedTimeInMillis = Date.now();
        this._intervalIds = new Array();
        this._elapsedMilliseconds = 0;
        this._isRunning = false;
    }
    Object.defineProperty(Stopwatch.prototype, "elapsed", {
        get: function () {
            var ms = this._elapsedMilliseconds % 1000;
            var s = (this._elapsedMilliseconds / Stopwatch.millisPerSecond) % 60;
            var secs = this.getDoubleDigit(s);
            var m = (this._elapsedMilliseconds / Stopwatch.millisPerMinute) % 60;
            var mins = this.getDoubleDigit(m);
            var h = (this._elapsedMilliseconds / Stopwatch.millisPerHour) % 60;
            var hrs = this.getDoubleDigit(h);
            return hrs + ":" + mins + ":" + secs + ":" + ms;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Stopwatch.prototype, "elapsedMilliseconds", {
        get: function () { return this._elapsedMilliseconds; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Stopwatch.prototype, "elapsedSeconds", {
        get: function () { return this._elapsedMilliseconds / 1000; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Stopwatch.prototype, "elapsedMinutes", {
        get: function () { return Math.floor(this.elapsedSeconds / 60); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Stopwatch.prototype, "elapsedHours", {
        get: function () { return Math.floor(this.elapsedMinutes / 60); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Stopwatch.prototype, "isRunning", {
        get: function () { return this._isRunning; },
        enumerable: true,
        configurable: true
    });
    Stopwatch.startNew = function () {
        var stopwatch = new Stopwatch();
        stopwatch.start();
        return stopwatch;
    };
    Stopwatch.prototype.start = function () {
        var _this = this;
        if (!this.isRunning) {
            this._isRunning = true;
        }
        var intervalId = setInterval(function () {
            if (_this.isRunning) {
                _this._elapsedMilliseconds = (Date.now() - _this._startedTimeInMillis);
            }
            else
                return;
        });
        this._intervalIds.push(intervalId);
    };
    Stopwatch.prototype.stop = function () {
        this._isRunning = false;
    };
    Stopwatch.prototype.reset = function () {
        this._isRunning = false;
        this._startedTimeInMillis = Date.now();
    };
    Stopwatch.prototype.restart = function () {
        this.reset();
        this.start();
    };
    Stopwatch.prototype.dispose = function () {
        this._isRunning = false;
        this._intervalIds.forEach(function (intervalId) {
            clearInterval(intervalId);
        });
    };
    Stopwatch.prototype.getDoubleDigit = function (num) {
        var str = num.toString().slice(0, 2);
        var filledNumber = (str[1] === '.') ? ('0' + str) : str;
        return filledNumber.length >= 3 ? filledNumber.slice(0, 2) : filledNumber;
    };
    return Stopwatch;
}());
Stopwatch.millisPerSecond = 1000;
Stopwatch.millisPerMinute = Stopwatch.millisPerSecond * 60;
Stopwatch.millisPerHour = Stopwatch.millisPerMinute * 60;
exports.Stopwatch = Stopwatch;
