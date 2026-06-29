function debounce(fn, timeout) {
    let timer;

    return function (...args) {
        clearTimeout(timer)
        timer = setTimeout(()=>fn(...args), timeout)
    }
}
