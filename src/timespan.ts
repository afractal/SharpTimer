import { millisPerDay, millisPerHour, millisPerMinute, millisPerSecond } from './constants';

export class Timespan {
    private _milliseconds: number;
    private constructor(milliseconds: number) {
        this._milliseconds = milliseconds;
    }

    get milliseconds(): number {
        return this._milliseconds;
    }

    get seconds() {
        return this._milliseconds / millisPerSecond;
    }

    get minutes() {
        return Math.floor(this._milliseconds / millisPerMinute);
    }

    get hours() {
        return Math.floor(this._milliseconds / millisPerHour);
    }

    get days() {
        return Math.floor(this._milliseconds / millisPerDay);
    }

    static fromDays(days: number) {
        return new Timespan(days * millisPerDay);
    }

    static fromHours(hours: number) {
        return new Timespan(hours * millisPerHour);
    };

    static fromMinutes(minutes: number) {
        return new Timespan(minutes * millisPerMinute);
    }

    static fromSeconds(seconds: number) {
        return new Timespan(seconds * millisPerSecond);
    }

    static fromMilliseconds(milliseconds: number) {
        return new Timespan(milliseconds);
    }

    static compare(t1: Timespan, t2: Timespan) {
        if (t1.milliseconds > t2.milliseconds) {
            return 1;
        }
        else if (t1.milliseconds < t2.milliseconds) {
            return -1;
        }
        else {
            return 0;
        }
    }

    static equals(t1: Timespan, t2: Timespan) {
        return (t1.milliseconds === t2.milliseconds);
    }

    addMutable(timespan: Timespan) {
        this._milliseconds += timespan.milliseconds;
    }

    subtractMutable(timespan: Timespan) {
        this._milliseconds -= timespan.milliseconds;
    }

    add(timespan: Timespan) {
        return new Timespan(this._milliseconds += timespan.milliseconds);
    }

    substract(timespan: Timespan) {
        return new Timespan(this._milliseconds -= timespan.milliseconds);
    }

    negate() {
        return new Timespan(-this._milliseconds);
    }
}

// let timespan = Timespan.fromDays(3.5);
// let timespan2 = Timespan.fromDays(3.6);
// console.log('compare', Timespan.compare(timespan, timespan2));
// console.log('milliseconds', timespan.milliseconds);
// console.log('seconds', timespan.seconds);
// console.log('minutes', timespan.minutes);
// console.log('hours', timespan.hours);
// console.log('days', timespan.days);

// const {
//     days,
//     hours,
//     minutes,
//     seconds,
//     milliseconds
//  } = Timespan.fromDays(3.5);




/*
milliseconds 259200000
seconds 259200
minutes 4320
hours 72
days 3
*/
