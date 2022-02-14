"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
var SubscriptionsService = /** @class */ (function () {
    function SubscriptionsService() {
        this.subscriptions = {};
        this.subscribed = [];
    }
    SubscriptionsService.prototype.subscribe = function (event, callback) {
        var _a;
        var channels = ((_a = this.subscriptions[event]) !== null && _a !== void 0 ? _a : []);
        this.subscriptions[event] = __spreadArray(__spreadArray([], channels, true), [callback], false);
        this.sync();
    };
    SubscriptionsService.prototype.unsubscribe = function (event, callback) {
        var _a;
        var channels = ((_a = this.subscriptions[event]) !== null && _a !== void 0 ? _a : []);
        for (var i = channels.length - 1; i >= 0; i--) {
            if (channels[i] === callback) {
                channels.splice(i, 1);
            }
        }
        this.subscriptions[event] = channels;
        this.subscriptions = Object.entries(this.subscriptions).reduce(function (a, i) {
            var _a;
            return i[1].length > 0 ? __assign(__assign({}, a), (_a = {}, _a[i[0]] = i[1], _a)) : a;
        }, {});
        this.sync();
    };
    SubscriptionsService.prototype.sync = function () {
        var _this = this;
        var removableSubscriptions = this.subscribed.filter(function (x) { return !Object.keys(_this.subscriptions).includes(x); });
        var AddableSubscriptions = Object.keys(this.subscriptions).filter(function (x) { return !_this.subscribed.includes(x); });
        removableSubscriptions.map(function (channel) {
            console.log("%c unsubscribing to ".concat(channel), 'color: #eb4034');
            // @ts-ignore
            window.Echo.leave(channel);
        });
        AddableSubscriptions.map(function (channel) {
            console.log("%c subscribing to ".concat(channel), 'color: #25b045');
            // @ts-ignore
            window.Echo.channel(channel)
                .listen('.created', function () {
                _this.subscriptions[channel].map(function (fn) { return fn(); });
            })
                .listen('.updated', function () {
                _this.subscriptions[channel].map(function (fn) { return fn(); });
            })
                .listen('.deleted', function () {
                _this.subscriptions[channel].map(function (fn) { return fn(); });
            });
        });
        this.subscribed = Object.keys(this.subscriptions);
    };
    return SubscriptionsService;
}());
var Subscriptions = new SubscriptionsService();
exports.default = Subscriptions;
