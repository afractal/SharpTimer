import { assert } from 'chai';
import { Timer } from './timer';

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
    });

    it('should set the enabled property to true', () => {
        const expectedEnabled = true;
        let timer = new Timer(20);
        assert.equal(timer.enabled, expectedEnabled);
    });

    it('should set the stopped property to false', () => {
        const expectedIsStopped = false;
        let timer = new Timer(20);
        assert.equal(timer.stopped, expectedIsStopped);

    });
});

describe('start', () => {
    it('should set the enable property to true', () => {
        const expectedEnabled = true;
        let timer = new Timer(20);
        timer.start();
        assert.equal(timer.enabled, expectedEnabled);
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
        });
    });

    it('should set the enabled property to false when interval elapsed completely', function (done) {
        const expectedEnabled = false;
        let timer = new Timer(1);
        timer.onIntervalElapsed(() => {
            assert.strictEqual(timer.enabled, expectedEnabled);
            done();

            timer.stop();
        });
        timer.start();
    }, 3000);
});

describe('pause', () => {
    it('should set enabled property to enabled to false', () => {
        const expectedEnabled = false;
        let timer = new Timer(20);
        timer.start();
        timer.pause();
        assert.equal(timer.enabled, expectedEnabled);
    });

    it('should not set the stopped property to true', () => {
        const expectedStopped = false;
        let timer = new Timer(20);
        timer.start();
        timer.pause();
        assert.equal(timer.stopped, expectedStopped);
    });
});

describe('resume', () => {
    it('should set enabled property to true', () => {
        const expectedStopped = true;
        let timer = new Timer(20);
        timer.start();
        timer.stop();
        timer.resume();
        assert.equal(timer.enabled, expectedStopped);
    });
});

describe('stop', () => {
    it('should set stopped property to true', () => {
        const expectedStopped = true;
        let timer = new Timer(20);
        timer.start();
        timer.stop();
        assert.equal(timer.stopped, expectedStopped);
    });

    it('should not set the enabled property to false', () => {
        const expectedEnabled = true;
        let timer = new Timer(20);
        timer.start();
        timer.stop();
        assert.equal(timer.enabled, expectedEnabled);
    });
});

describe('toString', () => {
    it('should return a valid string representation', () => {
        const interval = 20;
        const expectedTimerStr = `00:${interval}`;

        let timer = new Timer(interval);
        const parsedValue = parseInt(timer.toString().slice(3));
        assert.closeTo(parsedValue, interval, 1);
    });

    it('should return a valid double digit representation of the time', () => {
        const interval1 = 20 * 60;
        const interval2 = 20 * 24;
        const interval3 = 20 * 13;

        const expectedTimerStr1 = '20:00';
        const expectedTimerStr2 = '08:00';
        const expectedTimerStr3 = '04:20';

        let timer1 = new Timer(interval1);
        const parsedSecondsTimer1 = parseInt(timer1.toString().slice(3));
        const parsedMinutesTimer1 = parseInt(timer1.toString().slice(0, 3));

        let timer2 = new Timer(interval2);
        const parsedSecondsTimer2 = parseInt(timer2.toString().slice(3));
        const parsedMinutesTimer2 = parseInt(timer2.toString().slice(0, 3));

        let timer3 = new Timer(interval3);
        const parsedSecondsTimer3 = parseInt(timer3.toString().slice(3));
        const parsedMinutesTimer3 = parseInt(timer3.toString().slice(0, 3));

        assert.closeTo(parsedSecondsTimer1, 0, 1);
        assert.closeTo(parsedMinutesTimer1, 20, 1);

        assert.closeTo(parsedSecondsTimer2, 0, 1);
        assert.closeTo(parsedMinutesTimer2, 8, 1);

        assert.closeTo(parsedSecondsTimer3, 20, 1);
        assert.closeTo(parsedMinutesTimer3, 4, 1);
    });
});
