export interface QueuedRequest {
    promise: any;
    resolve: (value: unknown) => void;
    reject: (err: unknown) => void;
}

export class Queue {
    static queue: QueuedRequest[] = [];
    static pendingPromise = false;
    static workingOnPromise = false;

    static enqueue(promise: any): any {
        return new Promise((resolve, reject) => {
            this.queue.push({ promise, resolve, reject });
            // this.dequeue();
        });
    }

    static dequeue(): boolean {
        if (this.workingOnPromise) {
            return false;
        }
        const item = this.queue.shift();
        if (!item) {
            return false;
        }
        try {
            this.workingOnPromise = true;
            item.promise()
                .then((value: unknown) => {
                    this.workingOnPromise = false;
                    item.resolve(value);
                    this.dequeue();
                })
                .catch((err: unknown) => {
                    this.workingOnPromise = false;
                    item.reject(err);
                    this.dequeue();
                });
        } catch (err) {
            this.workingOnPromise = false;
            item.reject(err);
            this.dequeue();
        }
        return true;
    }
}
