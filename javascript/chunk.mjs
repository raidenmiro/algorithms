function chunk(array, size) {
    let buffer = [];

    for (let i = 0; i < array.length; i += size) {
        buffer.push(array.slice(i, i + size));
    }

    return buffer;
}