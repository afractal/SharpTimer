import { assert } from 'chai';
import { Timer } from '../src/timer';

describe('Timer', () => {
    describe('ctor', () => {
        it('should throw exception when interval is negative', () => {
            const fn = () => {
                let timer = new Timer(-1);
            };
            assert.throws(fn);
        });

        it('should set the interval property to the interval parameter', () => {
            const expectedInterval = 20;
            let timer = new Timer(expectedInterval);
            assert.equal(timer.interval, expectedInterval);

            timer = null;
        });

        it('should set the enabled property to true', () => {
            const expectedEnabled = true;
            let timer = new Timer(20);
            assert.equal(timer.enabled, expectedEnabled);

            timer = null;
        });

        it('should set the stopped property to false', () => {
            const expectedIsStopped = false;
            let timer = new Timer(20);
            assert.equal(timer.stopped, expectedIsStopped);

            timer = null;
        });
    });

    describe('start', () => {
        it('should set the enable property to true', () => {
            const expectedEnabled = true;
            let timer = new Timer(20);
            timer.start();
            assert.equal(timer.enabled, expectedEnabled);

            timer = null;
        });

        it('should decrease interval continuously', function (done) {
            const expectedInterval = 20;
            let timer = new Timer(expectedInterval);
            timer.start();

            timer.onIntervalElapsing(elapsedTime => {
                assert.equal(timer.interval, elapsedTime);
                assert.notEqual(expectedInterval, elapsedTime);
                assert.notEqual(timer.interval, expectedInterval);
                done();
                timer.stop();
                timer = null;
            });
        });

        it('should set the enabled property to false when interval elapsed completely', function (done) {
            this.timeout(3000);
            const expectedEnabled = false;
            let timer = new Timer(1);
            timer.onIntervalElapsed(() => {
                assert.strictEqual(timer.enabled, expectedEnabled);
                done();

                timer.stop();
                timer = null;
            });
            timer.start();
        });
    });

    describe('pause', () => {
        it('should set enabled property to enabled to false', () => {
            const expectedEnabled = false;
            let timer = new Timer(20);
            timer.start();
            timer.pause();
            assert.equal(timer.enabled, expectedEnabled);

            timer = null;
        });

        it('should not set the stopped property to true', () => {
            const expectedStopped = false;
            let timer = new Timer(20);
            timer.start();
            timer.pause();
            assert.equal(timer.stopped, expectedStopped);

            timer = null;
        });
    });

    describe('resume', () => {
        it('should set enabled property to true');
    });

    describe('stop', () => {
        it('should set stopped property to true', () => {
            const expectedStopped = true;
            let timer = new Timer(20);
            timer.start();
            timer.stop();
            assert.equal(timer.stopped, expectedStopped);

            timer = null;
        });

        it('should not set the enabled property to false', () => {
            const expectedEnabled = true;
            let timer = new Timer(20);
            timer.start();
            timer.stop();
            assert.equal(timer.enabled, expectedEnabled);

            timer = null;
        });
    });

    describe('toString', () => {
        it('should return a valid string representation', () => {
            const interval = 20;
            const expectedTimerStr = `00:${interval}`;
            let timer = new Timer(interval);
            assert.strictEqual(timer.toString(), expectedTimerStr);

            timer = null;
        });

        it('should return a valid double digit representation of the time', () => {
            const interval1 = 20 * 60;
            const interval2 = 20 * 24;
            const interval3 = 20 * 13;

            const expectedTimerStr1 = '20:00';
            const expectedTimerStr2 = '08:00';
            const expectedTimerStr3 = '04:20';

            let timer1 = new Timer(interval1);
            const timerStr1 = timer1.toString();

            let timer2 = new Timer(interval2);
            const timerStr2 = timer2.toString();

            let timer3 = new Timer(interval3);
            const timerStr3 = timer3.toString();

            assert.strictEqual(timerStr1, expectedTimerStr1);
            assert.strictEqual(timerStr2, expectedTimerStr2);
            assert.strictEqual(timerStr3, expectedTimerStr3);

            timer1 = null;
            timer2 = null;
            timer3 = null;
        });
    });
});
