export declare class Timespan {
    private _milliseconds;
    private constructor(milliseconds);
    readonly milliseconds: number;
    readonly seconds: number;
    readonly minutes: number;
    readonly hours: number;
    readonly days: number;
    static fromDays(days: number): Timespan;
    static fromHours(hours: number): Timespan;
    static fromMinutes(minutes: number): Timespan;
    static fromSeconds(seconds: number): Timespan;
    static fromMilliseconds(milliseconds: number): Timespan;
    static compare(t1: Timespan, t2: Timespan): 1 | 0 | -1;
    static equals(t1: Timespan, t2: Timespan): boolean;
    addMutable(timespan: Timespan): void;
    subtractMutable(timespan: Timespan): void;
    add(timespan: Timespan): Timespan;
    substract(timespan: Timespan): Timespan;
    negate(): Timespan;
}
