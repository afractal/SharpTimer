declare namespace SharpTimer {

    export interface ITimer {
        enabled: boolean;
        stopped: boolean;
        // autoReset: boolean;
        interval: number;

        stop(): void;
        pause(): void;
        start(): void;
        toString(): string;

        onIntervalElapsed(intervalElapsedHandler: () => void);
        onIntervalElapsing(intervalElapsingHandler: (interval: number) => void);
    }
}


