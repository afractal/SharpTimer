export declare class Stopwatch {
    private _isRunning;
    private _elapsedMilliseconds;
    private _startedTimeInMillis;
    private _intervalIds;
    private static readonly millisPerSecond;
    private static readonly millisPerMinute;
    private static readonly millisPerHour;
    constructor();
    readonly elapsed: string;
    readonly elapsedMilliseconds: number;
    readonly elapsedSeconds: number;
    readonly elapsedMinutes: number;
    readonly elapsedHours: number;
    readonly isRunning: boolean;
    static startNew(): Stopwatch;
    start(): void;
    stop(): void;
    reset(): void;
    restart(): void;
    dispose(): void;
    private getDoubleDigit(num);
}
