import { assert } from 'chai';
import { Timespan } from './timespan';

describe('fromMilliseconds', () => {
    const expectedMillis = 7000;
    let timespan = Timespan.fromMilliseconds(expectedMillis);

    it('should set the milliseconds property to the specified value', () => {
        assert.isNotNaN(timespan.milliseconds);
        assert.isNumber(timespan.milliseconds);
        assert.deepEqual(timespan.milliseconds, expectedMillis);
    });

    it('should return a new Timespan instance', () => {
        assert.instanceOf<Timespan>(timespan, Timespan);
        assert.isNotNull(timespan);
    });
});

describe('fromSeconds', () => {
    const expectedSeconds = 7000;
    let timespan = Timespan.fromSeconds(expectedSeconds);

    it('should set the seconds property to the specified value', () => {
        assert.isNotNaN(timespan.seconds);
        assert.isNumber(timespan.seconds);
        assert.deepEqual(timespan.seconds, expectedSeconds);
    });

    it('should return a new Timespan instance', () => {
        assert.instanceOf<Timespan>(timespan, Timespan);
        assert.isNotNull(timespan);
    });
});

describe('fromMinutes', () => {
    const expectedMinutes = 34;
    let timespan = Timespan.fromMinutes(expectedMinutes);

    it('should set the minutes property to the specified value', () => {
        assert.isNotNaN(timespan.minutes);
        assert.isNumber(timespan.minutes);
        assert.deepEqual(timespan.minutes, expectedMinutes);
    });

    it('should return a new Timespan instance', () => {
        assert.instanceOf<Timespan>(timespan, Timespan);
        assert.isNotNull(timespan);
    });
});

describe('fromHours', () => {
    const expectedHours = 20;
    let timespan = Timespan.fromHours(expectedHours);

    it('should set the hours property to the specified value', () => {
        assert.isNotNaN(timespan.hours);
        assert.isNumber(timespan.hours);
        assert.deepEqual(timespan.hours, expectedHours);
    });

    it('should return a new Timespan instance', () => {
        assert.instanceOf<Timespan>(timespan, Timespan);
        assert.isNotNull(timespan);
    });
});

describe('fromDays', () => {
    const expectedDays = 3;
    let timespan = Timespan.fromDays(expectedDays);

    it('should set the days property to the specified value', () => {
        assert.isNotNaN(timespan.days);
        assert.isNumber(timespan.days);
        assert.deepEqual(timespan.days, expectedDays);
    });

    it('should return a new Timespan instance', () => {
        assert.instanceOf<Timespan>(timespan, Timespan);
        assert.isNotNull(timespan);
    });
});

describe('equals', () => {
    it('should return true if two object have the same milliseconds', () => {
        const millis = 1;
        let timer1 = Timespan.fromMilliseconds(millis);
        let timer2 = Timespan.fromMilliseconds(millis);
        assert.isTrue(Timespan.equals(timer1, timer2));
    });
});

describe('compare', () => {
    it('should return 1 if the first object has a higher milliseconds number than the second object', () => {
        const expectedCompareNumber = 1;
        let timer1 = Timespan.fromMilliseconds(2);
        let timer2 = Timespan.fromMilliseconds(1);
        assert.deepEqual(Timespan.compare(timer1, timer2), expectedCompareNumber);
    });

    it('should return -1 if the first object has a lower milliseconds number than the second object', () => {
        const expectedCompareNumber = -1;

        let timer1 = Timespan.fromMilliseconds(1);
        let timer2 = Timespan.fromMilliseconds(2);
        assert.deepEqual(Timespan.compare(timer1, timer2), expectedCompareNumber);
    });

    it('should return 0 if the first object has the same milliseconds number as the second object', () => {
        const expectedCompareNumber = 0;
        let timer1 = Timespan.fromMilliseconds(1);
        let timer2 = Timespan.fromMilliseconds(1);
        assert.deepEqual(Timespan.compare(timer1, timer2), expectedCompareNumber);
    });
});

describe('addMutable', () => {
    it('should add the supplied value to the instance', () => {
        const expectedMilliseconds = 8000;
        let timer = Timespan.fromMilliseconds(4000);
        timer.addMutable(Timespan.fromMilliseconds(4000));

        assert.isNotNull(timer);
        assert.deepEqual(timer.milliseconds, expectedMilliseconds);
    });
})

describe('add', () => {
    it('should add the supplied value to the newly created instance', () => {
        const expectedMilliseconds = 8000;
        let timer = Timespan.fromMilliseconds(4000);
        let newTimer = timer.add(Timespan.fromMilliseconds(4000));

        assert.isNotNull(newTimer);
        assert.instanceOf<Timespan>(newTimer, Timespan);
        assert.notDeepEqual(timer.milliseconds, expectedMilliseconds);
        assert.deepEqual(newTimer.milliseconds, expectedMilliseconds);
    });
})

describe('addMutable', () => {
    it('should substract the supplied value to the instance', () => {
        const expectedMilliseconds = 4000;
        let timer = Timespan.fromMilliseconds(8000);
        timer.substractMutable(Timespan.fromMilliseconds(4000));

        assert.isNotNull(timer);
        assert.deepEqual(timer.milliseconds, expectedMilliseconds);
    });
})

describe('substract', () => {
    it('should substract the supplied value to the newly created instance', () => {
        const expectedMilliseconds = 4000;
        let timer = Timespan.fromMilliseconds(8000);
        let newTimer = timer.substract(Timespan.fromMilliseconds(4000));

        assert.isNotNull(newTimer);
        assert.instanceOf<Timespan>(newTimer, Timespan);
        assert.notDeepEqual(timer.milliseconds, expectedMilliseconds);
        assert.deepEqual(newTimer.milliseconds, expectedMilliseconds);
    });
})

describe('negate', () => {
    it('should negate the value from a timespan', () => {
        const expectedMilliseconds = 4000;
        let timer = Timespan.fromMilliseconds(4000);
        timer.substractMutable(Timespan.fromMilliseconds(8000));
        let newTimer = timer.negate();

        assert.deepEqual(newTimer.milliseconds, expectedMilliseconds);
    });
});
