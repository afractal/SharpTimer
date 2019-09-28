import { Timespan } from './timespan';

describe('fromMilliseconds', () => {
    const expectedMillis = 7000;
    let timespan = Timespan.fromMilliseconds(expectedMillis);

    it('should set the milliseconds property to the specified value', () => {
        expect(timespan.milliseconds).not.toBeNaN();
        expect(timespan.milliseconds).toBeDefined();
        expect(timespan.milliseconds).toStrictEqual(expectedMillis);
    });

    it('should return a new Timespan instance', () => {
        expect(timespan).toBeInstanceOf(Timespan);
        expect(timespan).not.toBeNull();
    });
});

describe('fromSeconds', () => {
    const expectedSeconds = 7000;
    let timespan = Timespan.fromSeconds(expectedSeconds);

    it('should set the seconds property to the specified value', () => {
        expect(timespan.seconds).not.toBeNaN();
        expect(timespan.seconds).toBeDefined();
        expect(timespan.seconds).toStrictEqual(expectedSeconds);
    });

    it('should return a new Timespan instance', () => {
        expect(timespan).toBeInstanceOf(Timespan);
        expect(timespan).not.toBeNull();
    });
});

describe('fromMinutes', () => {
    const expectedMinutes = 34;
    let timespan = Timespan.fromMinutes(expectedMinutes);

    it('should set the minutes property to the specified value', () => {
        expect(timespan.minutes).not.toBeNaN();
        expect(timespan.minutes).toBeDefined();
        expect(timespan.minutes).toStrictEqual(expectedMinutes);
    });

    it('should return a new Timespan instance', () => {
        expect(timespan).toBeInstanceOf(Timespan)
        expect(timespan).not.toBeNull();
    });
});

describe('fromHours', () => {
    const expectedHours = 20;
    let timespan = Timespan.fromHours(expectedHours);

    it('should set the hours property to the specified value', () => {
        expect(timespan.hours).not.toBeNaN();
        expect(timespan.hours).toBeDefined();
        expect(timespan.hours).toStrictEqual(expectedHours);
    });

    it('should return a new Timespan instance', () => {
        expect(timespan).toBeInstanceOf(Timespan);
        expect(timespan).toBeDefined();
    });
});

describe('fromDays', () => {
    const expectedDays = 3;
    let timespan = Timespan.fromDays(expectedDays);

    it('should set the days property to the specified value', () => {
        expect(timespan.days).not.toBeNaN();
        expect(timespan.days).toBeDefined;
        expect(timespan.days).toStrictEqual(expectedDays);
    });

    it('should return a new Timespan instance', () => {
        expect(timespan).toBeInstanceOf(Timespan);
        expect(timespan).not.toBeNull();
    });
});

describe('equals', () => {
    it('should return true if two object have the same milliseconds', () => {
        const millis = 1;
        let timer1 = Timespan.fromMilliseconds(millis);
        let timer2 = Timespan.fromMilliseconds(millis);

        expect(Timespan.equals(timer1, timer2)).toBeTruthy();
    });
});

describe('compare', () => {
    it('should return 1 if the first object has a higher milliseconds number than the second object', () => {
        const expectedCompareNumber = 1;
        let timer1 = Timespan.fromMilliseconds(2);
        let timer2 = Timespan.fromMilliseconds(1);

        expect(Timespan.compare(timer1, timer2)).toStrictEqual(expectedCompareNumber);
    });

    it('should return -1 if the first object has a lower milliseconds number than the second object', () => {
        const expectedCompareNumber = -1;

        let timer1 = Timespan.fromMilliseconds(1);
        let timer2 = Timespan.fromMilliseconds(2);

        expect(Timespan.compare(timer1, timer2)).toStrictEqual(expectedCompareNumber);
    });

    it('should return 0 if the first object has the same milliseconds number as the second object', () => {
        const expectedCompareNumber = 0;
        let timer1 = Timespan.fromMilliseconds(1);
        let timer2 = Timespan.fromMilliseconds(1);

        expect(Timespan.compare(timer1, timer2)).toStrictEqual(expectedCompareNumber);
    });
});

describe('addMutable', () => {
    it('should add the supplied value to the instance', () => {
        const expectedMilliseconds = 8000;
        let timer = Timespan.fromMilliseconds(4000);
        timer.addMutable(Timespan.fromMilliseconds(4000));

        expect(timer).not.toBeNull();
        expect(timer.milliseconds).toStrictEqual(expectedMilliseconds);
    });
})

describe('add', () => {
    it('should add the supplied value to the newly created instance', () => {
        const expectedMilliseconds = 8000;
        let timer = Timespan.fromMilliseconds(4000);
        let newTimer = timer.add(Timespan.fromMilliseconds(4000));

        expect(newTimer).not.toBeNull();
        expect(newTimer).toBeInstanceOf(Timespan);
        expect(timer.milliseconds).not.toStrictEqual(expectedMilliseconds);
        expect(newTimer.milliseconds).toStrictEqual(expectedMilliseconds);
    });
})

describe('addMutable', () => {
    it('should substract the supplied value to the instance', () => {
        const expectedMilliseconds = 4000;
        let timer = Timespan.fromMilliseconds(8000);
        timer.substractMutable(Timespan.fromMilliseconds(4000));

        expect(timer).not.toBeNull();
        expect(timer.milliseconds).toStrictEqual(expectedMilliseconds);
    });
})

describe('substract', () => {
    it('should substract the supplied value to the newly created instance', () => {
        const expectedMilliseconds = 4000;
        let timer = Timespan.fromMilliseconds(8000);
        let newTimer = timer.substract(Timespan.fromMilliseconds(4000));

        expect(newTimer).not.toBeNull();
        expect(newTimer).toBeInstanceOf(Timespan);
        expect(timer.milliseconds).not.toStrictEqual(expectedMilliseconds);
        expect(newTimer.milliseconds).toStrictEqual(expectedMilliseconds);
    });
})

describe('negate', () => {
    it('should negate the value from a timespan', () => {
        const expectedMilliseconds = 4000;
        let timer = Timespan.fromMilliseconds(4000);
        timer.substractMutable(Timespan.fromMilliseconds(8000));
        let newTimer = timer.negate();

        expect(newTimer.milliseconds).toStrictEqual(expectedMilliseconds);
    });
});
