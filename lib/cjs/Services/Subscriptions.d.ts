declare class SubscriptionsService {
    subscriptions: any;
    subscribed: string[];
    constructor();
    subscribe(event: string, callback: VoidFunction): void;
    unsubscribe(event: string, callback: VoidFunction): void;
    sync(): void;
}
declare const Subscriptions: SubscriptionsService;
export default Subscriptions;
