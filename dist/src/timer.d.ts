export declare type ElapsedEvent = () => void;
export declare type ElapsingEvent = (intervalValue: number) => void;
export declare class Timer {
    private _enabled;
    private _stopped;
    private _interval;
    private _intervalElapsedEvents;
    private _intervalElapsingEvents;
    constructor(interval: number);
    readonly enabled: boolean;
    readonly stopped: boolean;
    interval: number;
    start(): void;
    pause(): void;
    resume(): void;
    stop(): void;
    onIntervalElapsed(intervalElapsedHandler: any): void;
    onIntervalElapsing(intervalElapsingHandler: any): void;
    toString(): string;
    private getDoubleDigit(number);
    private checkForValidInterval(interval);
}
