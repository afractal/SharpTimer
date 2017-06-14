"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var chai_1 = require("chai");
var timespan_1 = require("../src/timespan");
describe('Timespan', function () {
    describe('fromMilliseconds', function () {
        var expectedMillis = 7000;
        var timespan = timespan_1.Timespan.fromMilliseconds(expectedMillis);
        it('should set the milliseconds property to the specified value', function () {
            chai_1.assert.isNotNaN(timespan.milliseconds);
            chai_1.assert.isNumber(timespan.milliseconds);
            chai_1.assert.deepEqual(timespan.milliseconds, expectedMillis);
        });
        it('should return a new Timespan instance', function () {
            chai_1.assert.instanceOf(timespan, timespan_1.Timespan);
            chai_1.assert.isNotNull(timespan);
        });
    });
    describe('fromSeconds', function () {
        var expectedSeconds = 7000;
        var timespan = timespan_1.Timespan.fromSeconds(expectedSeconds);
        it('should set the seconds property to the specified value', function () {
            chai_1.assert.isNotNaN(timespan.seconds);
            chai_1.assert.isNumber(timespan.seconds);
            chai_1.assert.deepEqual(timespan.seconds, expectedSeconds);
        });
        it('should return a new Timespan instance', function () {
            chai_1.assert.instanceOf(timespan, timespan_1.Timespan);
            chai_1.assert.isNotNull(timespan);
        });
    });
    describe('fromMinutes', function () {
        var expectedMinutes = 34;
        var timespan = timespan_1.Timespan.fromMinutes(expectedMinutes);
        it('should set the minutes property to the specified value', function () {
            chai_1.assert.isNotNaN(timespan.minutes);
            chai_1.assert.isNumber(timespan.minutes);
            chai_1.assert.deepEqual(timespan.minutes, expectedMinutes);
        });
        it('should return a new Timespan instance', function () {
            chai_1.assert.instanceOf(timespan, timespan_1.Timespan);
            chai_1.assert.isNotNull(timespan);
        });
    });
    describe('fromHours', function () {
        var expectedHours = 20;
        var timespan = timespan_1.Timespan.fromHours(expectedHours);
        it('should set the hours property to the specified value', function () {
            chai_1.assert.isNotNaN(timespan.hours);
            chai_1.assert.isNumber(timespan.hours);
            chai_1.assert.deepEqual(timespan.hours, expectedHours);
        });
        it('should return a new Timespan instance', function () {
            chai_1.assert.instanceOf(timespan, timespan_1.Timespan);
            chai_1.assert.isNotNull(timespan);
        });
    });
    describe('fromDays', function () {
        var expectedDays = 3;
        var timespan = timespan_1.Timespan.fromDays(expectedDays);
        it('should set the days property to the specified value', function () {
            chai_1.assert.isNotNaN(timespan.days);
            chai_1.assert.isNumber(timespan.days);
            chai_1.assert.deepEqual(timespan.days, expectedDays);
        });
        it('should return a new Timespan instance', function () {
            chai_1.assert.instanceOf(timespan, timespan_1.Timespan);
            chai_1.assert.isNotNull(timespan);
        });
    });
    describe('equals', function () {
        it('should return true if two object have the same milliseconds', function () {
            var millis = 1;
            var timer1 = timespan_1.Timespan.fromMilliseconds(millis);
            var timer2 = timespan_1.Timespan.fromMilliseconds(millis);
            chai_1.assert.isTrue(timespan_1.Timespan.equals(timer1, timer2));
        });
    });
    describe('compare', function () {
        it('should return 1 if the first object has a higher milliseconds number than the second object', function () {
            var expectedCompareNumber = 1;
            var timer1 = timespan_1.Timespan.fromMilliseconds(2);
            var timer2 = timespan_1.Timespan.fromMilliseconds(1);
            chai_1.assert.deepEqual(timespan_1.Timespan.compare(timer1, timer2), expectedCompareNumber);
        });
        it('should return -1 if the first object has a lower milliseconds number than the second object', function () {
            var expectedCompareNumber = -1;
            var timer1 = timespan_1.Timespan.fromMilliseconds(1);
            var timer2 = timespan_1.Timespan.fromMilliseconds(2);
            chai_1.assert.deepEqual(timespan_1.Timespan.compare(timer1, timer2), expectedCompareNumber);
        });
        it('should return 0 if the first object has the same milliseconds number as the second object', function () {
            var expectedCompareNumber = 0;
            var timer1 = timespan_1.Timespan.fromMilliseconds(1);
            var timer2 = timespan_1.Timespan.fromMilliseconds(1);
            chai_1.assert.deepEqual(timespan_1.Timespan.compare(timer1, timer2), expectedCompareNumber);
        });
    });
    describe('addMutable', function () {
        it('should add the supplied value to the instance', function () {
            var expectedMilliseconds = 8000;
            var timer = timespan_1.Timespan.fromMilliseconds(4000);
            timer.addMutable(timespan_1.Timespan.fromMilliseconds(4000));
            chai_1.assert.isNotNull(timer);
            chai_1.assert.deepEqual(timer.milliseconds, expectedMilliseconds);
        });
    });
    describe('add', function () {
        it('should add the supplied value to the newly created instance', function () {
            var expectedMilliseconds = 8000;
            var timer = timespan_1.Timespan.fromMilliseconds(4000);
            var newTimer = timer.add(timespan_1.Timespan.fromMilliseconds(4000));
            chai_1.assert.isNotNull(newTimer);
            chai_1.assert.instanceOf(newTimer, timespan_1.Timespan);
            chai_1.assert.notDeepEqual(timer.milliseconds, expectedMilliseconds);
            chai_1.assert.deepEqual(newTimer.milliseconds, expectedMilliseconds);
        });
    });
    describe('addMutable', function () {
        it('should substract the supplied value to the instance', function () {
            var expectedMilliseconds = 4000;
            var timer = timespan_1.Timespan.fromMilliseconds(8000);
            timer.substractMutable(timespan_1.Timespan.fromMilliseconds(4000));
            chai_1.assert.isNotNull(timer);
            chai_1.assert.deepEqual(timer.milliseconds, expectedMilliseconds);
        });
    });
    describe('substract', function () {
        it('should substract the supplied value to the newly created instance', function () {
            var expectedMilliseconds = 4000;
            var timer = timespan_1.Timespan.fromMilliseconds(8000);
            var newTimer = timer.substract(timespan_1.Timespan.fromMilliseconds(4000));
            chai_1.assert.isNotNull(newTimer);
            chai_1.assert.instanceOf(newTimer, timespan_1.Timespan);
            chai_1.assert.notDeepEqual(timer.milliseconds, expectedMilliseconds);
            chai_1.assert.deepEqual(newTimer.milliseconds, expectedMilliseconds);
        });
    });
    describe('negate', function () {
        it('should negate the value from a timespan', function () {
            var expectedMilliseconds = 4000;
            var timer = timespan_1.Timespan.fromMilliseconds(4000);
            timer.substractMutable(timespan_1.Timespan.fromMilliseconds(8000));
            var newTimer = timer.negate();
            chai_1.assert.deepEqual(newTimer.milliseconds, expectedMilliseconds);
        });
    });
});
