"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var chai_1 = require("chai");
var timer_1 = require("../src/timer");
describe('Timer', function () {
    describe('ctor', function () {
        it('should throw exception when interval is negative', function () {
            var fn = function () {
                var timer = new timer_1.Timer(-1);
            };
            chai_1.assert.throws(fn);
        });
        it('should set the interval property to the interval parameter', function () {
            var expectedInterval = 20;
            var timer = new timer_1.Timer(expectedInterval);
            chai_1.assert.equal(timer.interval, expectedInterval);
            timer = null;
        });
        it('should set the enabled property to true', function () {
            var expectedEnabled = true;
            var timer = new timer_1.Timer(20);
            chai_1.assert.equal(timer.enabled, expectedEnabled);
            timer = null;
        });
        it('should set the stopped property to false', function () {
            var expectedIsStopped = false;
            var timer = new timer_1.Timer(20);
            chai_1.assert.equal(timer.stopped, expectedIsStopped);
            timer = null;
        });
    });
    describe('start', function () {
        it('should set the enable property to true', function () {
            var expectedEnabled = true;
            var timer = new timer_1.Timer(20);
            timer.start();
            chai_1.assert.equal(timer.enabled, expectedEnabled);
            timer = null;
        });
        it('should decrease interval continuously', function (done) {
            var expectedInterval = 20;
            var timer = new timer_1.Timer(expectedInterval);
            timer.start();
            timer.onIntervalElapsing(function (elapsedTime) {
                chai_1.assert.equal(timer.interval, elapsedTime);
                chai_1.assert.notEqual(expectedInterval, elapsedTime);
                chai_1.assert.notEqual(timer.interval, expectedInterval);
                done();
                timer.stop();
                timer = null;
            });
        });
        it('should set the enabled property to false when interval elapsed completely', function (done) {
            this.timeout(3000);
            var expectedEnabled = false;
            var timer = new timer_1.Timer(1);
            timer.onIntervalElapsed(function () {
                chai_1.assert.strictEqual(timer.enabled, expectedEnabled);
                done();
                timer.stop();
                timer = null;
            });
            timer.start();
        });
    });
    describe('pause', function () {
        it('should set enabled property to enabled to false', function () {
            var expectedEnabled = false;
            var timer = new timer_1.Timer(20);
            timer.start();
            timer.pause();
            chai_1.assert.equal(timer.enabled, expectedEnabled);
            timer = null;
        });
        it('should not set the stopped property to true', function () {
            var expectedStopped = false;
            var timer = new timer_1.Timer(20);
            timer.start();
            timer.pause();
            chai_1.assert.equal(timer.stopped, expectedStopped);
            timer = null;
        });
    });
    describe('stop', function () {
        it('should set stopped property to true', function () {
            var expectedStopped = true;
            var timer = new timer_1.Timer(20);
            timer.start();
            timer.stop();
            chai_1.assert.equal(timer.stopped, expectedStopped);
            timer = null;
        });
        it('should not set the enabled property to false', function () {
            var expectedEnabled = true;
            var timer = new timer_1.Timer(20);
            timer.start();
            timer.stop();
            chai_1.assert.equal(timer.enabled, expectedEnabled);
            timer = null;
        });
    });
    describe('toString', function () {
        it('should return a valid string representation', function () {
            var interval = 20;
            var expectedTimerStr = "00:" + interval;
            var timer = new timer_1.Timer(interval);
            chai_1.assert.strictEqual(timer.toString(), expectedTimerStr);
            timer = null;
        });
        it('should return a valid double digit representation of the time', function () {
            var interval1 = 20 * 60;
            var interval2 = 20 * 24;
            var interval3 = 20 * 13;
            var expectedTimerStr1 = '20:00';
            var expectedTimerStr2 = '08:00';
            var expectedTimerStr3 = '04:20';
            var timer1 = new timer_1.Timer(interval1);
            var timerStr1 = timer1.toString();
            var timer2 = new timer_1.Timer(interval2);
            var timerStr2 = timer2.toString();
            var timer3 = new timer_1.Timer(interval3);
            var timerStr3 = timer3.toString();
            chai_1.assert.strictEqual(timerStr1, expectedTimerStr1);
            chai_1.assert.strictEqual(timerStr2, expectedTimerStr2);
            chai_1.assert.strictEqual(timerStr3, expectedTimerStr3);
            timer1 = null;
            timer2 = null;
            timer3 = null;
        });
    });
});
//# sourceMappingURL=timer.spec.js.map