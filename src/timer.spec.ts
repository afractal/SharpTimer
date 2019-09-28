import { Timer } from './timer';

describe('ctor', () => {
    it('should throw exception when interval is negative', () => {
        const fn = () => {
            let timer = new Timer(-1);
        };

        expect(fn).toThrow();
    });

    it('should set the interval property to the interval parameter', () => {
        const expectedInterval = 20;
        let timer = new Timer(expectedInterval);

        expect(timer.interval).toEqual(expectedInterval);
    });

    it('should set the enabled property to true', () => {
        let timer = new Timer(20);

        expect(timer.enabled).toBeTruthy();
    });

    it('should set the stopped property to false', () => {
        let timer = new Timer(20);

        expect(timer.stopped).toBeFalsy();
    });
});

describe('start', () => {
    it('should set the enable property to true', () => {
        let timer = new Timer(20);
        timer.start();

        expect(timer.enabled).toBeTruthy();
    });

    it('should decrease interval continuously', function (done) {
        const expectedInterval = 20;
        let timer = new Timer(expectedInterval);
        timer.start();

        timer.onIntervalElapsing(elapsedTime => {
            expect(timer.interval).toEqual(elapsedTime);
            expect(expectedInterval).not.toEqual(elapsedTime);
            expect(timer.interval).not.toEqual(expectedInterval);
            done();
            timer.stop();
        });
    });

    it('should set the enabled property to false when interval elapsed completely', function (done) {
        let timer = new Timer(1);
        timer.onIntervalElapsed(() => {
            expect(timer.enabled).toBeFalsy();
            done();

            timer.stop();
        });
        timer.start();
    }, 3000);
});

describe('pause', () => {
    it('should set enabled property to enabled to false', () => {
        let timer = new Timer(20);
        timer.start();
        timer.pause();

        expect(timer.enabled).toBeFalsy();
    });

    it('should not set the stopped property to true', () => {
        let timer = new Timer(20);
        timer.start();
        timer.pause();

        expect(timer.stopped).toBeFalsy();
    });
});

describe('resume', () => {
    it('should set enabled property to true', () => {
        let timer = new Timer(20);
        timer.start();
        timer.stop();
        timer.resume();

        expect(timer.enabled).toBeTruthy();
    });
});

describe('stop', () => {
    it('should set stopped property to true', () => {
        let timer = new Timer(20);
        timer.start();
        timer.stop();

        expect(timer.stopped).toBeTruthy();
    });

    it('should not set the enabled property to false', () => {
        let timer = new Timer(20);
        timer.start();
        timer.stop();

        expect(timer.enabled).toBeTruthy();
    });
});

describe('toString', () => {
    it('should return a valid string representation', () => {
        const interval = 20;

        let timer = new Timer(interval);
        const parsedValue = Number.parseInt(timer.toString().slice(3));

        expect(parsedValue).toBeCloseTo(interval, -1);
    });

    it('should return a valid double digit representation of the time', () => {
        const interval1 = 20 * 60;
        const interval2 = 20 * 24;
        const interval3 = 20 * 13;

        const expectedTimerStr1 = '20:00';
        const expectedTimerStr2 = '08:00';
        const expectedTimerStr3 = '04:20';

        let timer1 = new Timer(interval1);
        const parsedSecondsTimer1 = Number.parseInt(timer1.toString().slice(3));
        const parsedMinutesTimer1 = Number.parseInt(timer1.toString().slice(0, 3));

        let timer2 = new Timer(interval2);
        const parsedSecondsTimer2 = Number.parseInt(timer2.toString().slice(3));
        const parsedMinutesTimer2 = Number.parseInt(timer2.toString().slice(0, 3));

        let timer3 = new Timer(interval3);
        const parsedSecondsTimer3 = Number.parseInt(timer3.toString().slice(3));
        const parsedMinutesTimer3 = Number.parseInt(timer3.toString().slice(0, 3));

        expect(parsedSecondsTimer1).toBeCloseTo(0, -1);
        expect(parsedMinutesTimer1).toBeCloseTo(20, - 1);

        expect(parsedSecondsTimer2).toBeCloseTo(0, -1);
        expect(parsedMinutesTimer2).toBeCloseTo(8, -1);

        expect(parsedSecondsTimer3).toBeCloseTo(20, - 1);
        expect(parsedMinutesTimer3).toBeCloseTo(4, -1);
    });
});
