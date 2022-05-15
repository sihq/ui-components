export interface QueuedRequest {
    promise: any;
    resolve: (value: unknown) => void;
    reject: (err: unknown) => void;
}
export declare class Queue {
    static queue: QueuedRequest[];
    static pendingPromise: boolean;
    static workingOnPromise: boolean;
    static enqueue(promise: any): any;
    static dequeue(): boolean;
}
