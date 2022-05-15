export var Event = {
    subscribe: function (event, callback) {
        console.log('triggered');
        document.addEventListener(event, function (e) { return callback(e.detail); });
    },
    dispatch: function (event, data) {
        document.dispatchEvent(new CustomEvent(event, { detail: data }));
    },
    unsubscribe: function (event, callback) {
        document.removeEventListener(event, callback);
    },
};
