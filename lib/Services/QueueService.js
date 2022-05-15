var Queue = /** @class */ (function () {
    function Queue() {
    }
    Queue.enqueue = function (promise) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.queue.push({ promise: promise, resolve: resolve, reject: reject });
            // this.dequeue();
        });
    };
    Queue.dequeue = function () {
        var _this = this;
        if (this.workingOnPromise) {
            return false;
        }
        var item = this.queue.shift();
        if (!item) {
            return false;
        }
        try {
            this.workingOnPromise = true;
            item.promise()
                .then(function (value) {
                _this.workingOnPromise = false;
                item.resolve(value);
                _this.dequeue();
            })
                .catch(function (err) {
                _this.workingOnPromise = false;
                item.reject(err);
                _this.dequeue();
            });
        }
        catch (err) {
            this.workingOnPromise = false;
            item.reject(err);
            this.dequeue();
        }
        return true;
    };
    Queue.queue = [];
    Queue.pendingPromise = false;
    Queue.workingOnPromise = false;
    return Queue;
}());
export { Queue };
