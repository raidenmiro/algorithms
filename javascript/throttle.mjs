function throttle(fn , timeout) {
    let lastRun, lastTimer;

    return function (...args) {
        const ctx = this;

        if (!lastRun) {
            fn.apply(ctx, args);
            lastRun = Date.now();
        } else {
            clearTimeout(lastTimer);
            lastTimer = setTimeout(() => {
                if (Date.now() - lastRun >= timeout) {
                    fn.apply(ctx, args);
                    lastRun = Date.now();
                }
            }, timeout - (Date.now() - lastRun));
        }
    }
}