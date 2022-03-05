export const Event = {
    subscribe(event: any, callback: any) {
        console.log('triggered');
        document.addEventListener(event, (e) => callback(e.detail));
    },
    dispatch(event: any, data: any) {
        document.dispatchEvent(new CustomEvent(event, { detail: data }));
    },
    unsubscribe(event: any, callback: any) {
        document.removeEventListener(event, callback);
    },
};
