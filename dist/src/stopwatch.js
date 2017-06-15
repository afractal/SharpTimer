"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var constants_1 = require("./constants");
var Stopwatch = (function () {
    function Stopwatch() {
        // initializing in not needed because it is overriden in start function
        this._startedTimeInMillis = Date.now();
        this._intervalIds = new Array();
        this._elapsedMilliseconds = 0;
        this._isRunning = false;
    }
    Object.defineProperty(Stopwatch.prototype, "elapsed", {
        get: function () {
            var ms = this._elapsedMilliseconds % 1000;
            var s = (this._elapsedMilliseconds / constants_1.millisPerSecond) % 60;
            var secs = this.getDoubleDigit(s);
            var m = (this._elapsedMilliseconds / constants_1.millisPerMinute) % 60;
            var mins = this.getDoubleDigit(m);
            var h = (this._elapsedMilliseconds / constants_1.millisPerHour) % 60;
            var hrs = this.getDoubleDigit(h);
            return hrs + ":" + mins + ":" + secs + ":" + ms;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Stopwatch.prototype, "elapsedMilliseconds", {
        get: function () {
            return this._elapsedMilliseconds;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Stopwatch.prototype, "elapsedSeconds", {
        get: function () {
            return this._elapsedMilliseconds / constants_1.millisPerSecond;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Stopwatch.prototype, "elapsedMinutes", {
        get: function () {
            return Math.floor(this._elapsedMilliseconds / constants_1.millisPerMinute);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Stopwatch.prototype, "elapsedHours", {
        get: function () {
            return Math.floor(this._elapsedMilliseconds / constants_1.millisPerHour);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Stopwatch.prototype, "isRunning", {
        get: function () {
            return this._isRunning;
        },
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
        this._elapsedMilliseconds = 0;
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
exports.Stopwatch = Stopwatch;
