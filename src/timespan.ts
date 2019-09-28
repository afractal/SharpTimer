import {
    MILLIS_PER_DAY,
    MILLIS_PER_HOUR,
    MILLIS_PER_MINUTE,
    MILLIS_PER_SECOND
} from './constants';

export class Timespan {
    private _milliseconds: number;

    private constructor(milliseconds: number) {
        this._milliseconds = milliseconds;
    }

    get milliseconds(): number {
        return this._milliseconds;
    }

    get seconds() {
        return this._milliseconds / MILLIS_PER_SECOND;
    }

    get minutes() {
        return Math.floor(this._milliseconds / MILLIS_PER_MINUTE);
    }

    get hours() {
        return Math.floor(this._milliseconds / MILLIS_PER_HOUR);
    }

    get days() {
        return Math.floor(this._milliseconds / MILLIS_PER_DAY);
    }

    static fromDays(days: number) {
        return new Timespan(days * MILLIS_PER_DAY);
    }

    static fromHours(hours: number) {
        return new Timespan(hours * MILLIS_PER_HOUR);
    };

    static fromMinutes(minutes: number) {
        return new Timespan(minutes * MILLIS_PER_MINUTE);
    }

    static fromSeconds(seconds: number) {
        return new Timespan(seconds * MILLIS_PER_SECOND);
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

    static equals(timespan1: Timespan, timespan2: Timespan) {
        return (timespan1.milliseconds === timespan2.milliseconds);
    }

    addMutable(timespan: Timespan) {
        this._milliseconds += timespan.milliseconds;
    }

    substractMutable(timespan: Timespan) {
        this._milliseconds -= timespan.milliseconds;
    }

    add(timespan: Timespan) {
        return new Timespan(this._milliseconds + timespan.milliseconds);
    }

    substract(timespan: Timespan) {
        return new Timespan(this._milliseconds - timespan.milliseconds);
    }

    negate() {
        return new Timespan(-this._milliseconds);
    }
}
