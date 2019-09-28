import { Stopwatch } from './stopwatch';

const increaseIntervalContinuosly = function (done: any) {
    let stopwatch = new Stopwatch();
    stopwatch.start();

    const expectedInterval = stopwatch.elapsedMilliseconds;
    const intervalId = setInterval(() => {
        expect(stopwatch.elapsedMilliseconds).not.toStrictEqual(expectedInterval);
    }, 10);

    setTimeout(() => {
        clearInterval(intervalId);
        done();
        stopwatch.dispose();
    }, 100);
};

const notIncreaseIntervalContinuosly = function (done: any) {
    let stopwatch = new Stopwatch();
    stopwatch.start();

    let expectedInterval = 0;
    setTimeout(() => {
        stopwatch.stop();
        expectedInterval = stopwatch.elapsedMilliseconds;
    }, 10);

    const intervalId = setInterval(() => {
        expect(stopwatch.elapsedMilliseconds).toStrictEqual(expectedInterval);
    }, 20);

    setTimeout(() => {
        clearInterval(intervalId);
        done();
        stopwatch.dispose();
    }, 100);
};

describe('ctor', () => {
    it('should initialize field properly', () => {
        const expectedMillis = 0,
            expectedIsRunning = false;

        let stopwatch = new Stopwatch();

        expect(stopwatch.elapsedMilliseconds).toStrictEqual(expectedMillis);
        expect(stopwatch.isRunning).toStrictEqual(expectedIsRunning);
        expect(stopwatch.elapsedMilliseconds).not.toBeNaN();
    });
});

describe('start', () => {
    it('should set the isRunning property to true', () => {
        const expectedIsRunning = true;
        let stopwatch = new Stopwatch();
        stopwatch.start();

        expect(stopwatch.isRunning).toStrictEqual(expectedIsRunning);

        stopwatch.dispose();
    });

    it('should increase elapsed milliseconds continuously', increaseIntervalContinuosly);
});

describe('startNew', () => {
    it('should create a new instance of the stopwatch class', () => {
        const expectedIsRunning = true;
        let stopwatch = Stopwatch.startNew();

        expect(stopwatch.isRunning).toStrictEqual(expectedIsRunning);
        expect(stopwatch).toBeInstanceOf(Stopwatch);

        stopwatch.dispose();
    });

    it('should increase elapsed milliseconds continuously', increaseIntervalContinuosly);
});

describe('stop', () => {
    it('should set the isRunning property to false', () => {
        const expectedIsRunning = false;
        let stopwatch = new Stopwatch();
        stopwatch.start();
        stopwatch.stop();

        expect(stopwatch.isRunning).toStrictEqual(expectedIsRunning);

        stopwatch.dispose();
    });

    it('should not increase elapsed milliseconds continuously', notIncreaseIntervalContinuosly);
});

describe('reset', () => {
    it('should set the isRunning property to false', () => {
        const expectedIsRunning = false;
        let stopwatch = new Stopwatch();
        stopwatch.start();
        stopwatch.reset();

        expect(stopwatch.isRunning).toStrictEqual(expectedIsRunning);

        stopwatch.dispose();
    });

    it('should reset the milliseconds elapsed property to false', function (done) {
        let expectedElapsedMillis = 0;
        let stopwatch = new Stopwatch();
        stopwatch.start();

        setTimeout(() => {
            stopwatch.reset();

            expect(stopwatch.elapsedMilliseconds).toStrictEqual(expectedElapsedMillis);

            done();
            stopwatch.dispose();
        }, 100);
    });
});

describe('restart', () => {
    it('should do the same thing as calling reset and then start', function (done) {
        let stopwatch = new Stopwatch();
        stopwatch.start();

        setTimeout(() => {
            stopwatch.restart();
        }, 100);

        setTimeout(() => {
            const expectedMillis = stopwatch.elapsedMilliseconds;
            const expectedIsRunning = true;

            const intervalId = setInterval(() => {
                expect(stopwatch.elapsedMilliseconds).not.toStrictEqual(expectedMillis);
                expect(stopwatch.isRunning).toStrictEqual(expectedIsRunning);
            }, 10);

            setTimeout(() => {
                clearInterval(intervalId);

                done();
                stopwatch.dispose();
            }, 100);
        }, 200);

    });
});

describe('dispose', () => {
    it('should set the isRunning property to false', () => {
        let stopwatch = new Stopwatch();
        stopwatch.start();
        stopwatch.dispose();

        expect(stopwatch.isRunning).toBeFalsy();
    });

    it('should not increase elapsed milliseconds continuously', notIncreaseIntervalContinuosly);
});




