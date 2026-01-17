module.exports = (arr, size, maxChars = 6000) => {
    const chunks = [];
    let currentChunk = [];
    let currentLength = 0;

    for (const item of arr) {
        const itemLength = item.length;
        if (
            currentChunk.length >= size ||
            currentLength + itemLength > maxChars
        ) {
            chunks.push(currentChunk);
            currentChunk = [];
            currentLength = 0;
        }

        currentChunk.push(item);
        currentLength += itemLength;
    }

    if (currentChunk.length > 0) {
        chunks.push(currentChunk);
    }

    return chunks;
};