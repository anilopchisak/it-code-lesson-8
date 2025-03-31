let lastCall: number | null = null;
let lastCallTimer: ReturnType<typeof setTimeout> | undefined = undefined;

export const debounce = (callee: () => Promise<void>, timeoutMs = 250) => {
    return function perform(): void {
        let previousCall: number | null = lastCall;
        lastCall = Date.now();
        if (previousCall && lastCall - previousCall <= timeoutMs) {
            clearTimeout(lastCallTimer);
        }
        lastCallTimer = setTimeout(async () => {
            callee();
        }, timeoutMs);
    }
}
