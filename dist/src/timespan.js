"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var constants_1 = require("./constants");
var Timespan = (function () {
    function Timespan(milliseconds) {
        this._milliseconds = milliseconds;
    }
    Object.defineProperty(Timespan.prototype, "milliseconds", {
        get: function () {
            return this._milliseconds;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Timespan.prototype, "seconds", {
        get: function () {
            return this._milliseconds / constants_1.millisPerSecond;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Timespan.prototype, "minutes", {
        get: function () {
            return Math.floor(this._milliseconds / constants_1.millisPerMinute);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Timespan.prototype, "hours", {
        get: function () {
            return Math.floor(this._milliseconds / constants_1.millisPerHour);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Timespan.prototype, "days", {
        get: function () {
            return Math.floor(this._milliseconds / constants_1.millisPerDay);
        },
        enumerable: true,
        configurable: true
    });
    Timespan.fromDays = function (days) {
        return new Timespan(days * constants_1.millisPerDay);
    };
    Timespan.fromHours = function (hours) {
        return new Timespan(hours * constants_1.millisPerHour);
    };
    ;
    Timespan.fromMinutes = function (minutes) {
        return new Timespan(minutes * constants_1.millisPerMinute);
    };
    Timespan.fromSeconds = function (seconds) {
        return new Timespan(seconds * constants_1.millisPerSecond);
    };
    Timespan.fromMilliseconds = function (milliseconds) {
        return new Timespan(milliseconds);
    };
    Timespan.compare = function (t1, t2) {
        if (t1.milliseconds > t2.milliseconds) {
            return 1;
        }
        else if (t1.milliseconds < t2.milliseconds) {
            return -1;
        }
        else {
            return 0;
        }
    };
    Timespan.equals = function (t1, t2) {
        return (t1.milliseconds === t2.milliseconds);
    };
    Timespan.prototype.addMutable = function (timespan) {
        this._milliseconds += timespan.milliseconds;
    };
    Timespan.prototype.substractMutable = function (timespan) {
        this._milliseconds -= timespan.milliseconds;
    };
    Timespan.prototype.add = function (timespan) {
        return new Timespan(this._milliseconds + timespan.milliseconds);
    };
    Timespan.prototype.substract = function (timespan) {
        return new Timespan(this._milliseconds - timespan.milliseconds);
    };
    Timespan.prototype.negate = function () {
        return new Timespan(-this._milliseconds);
    };
    return Timespan;
}());
exports.Timespan = Timespan;
