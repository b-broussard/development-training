/**
 * This is my refactored first attempt of a CodeSignal challenge. The last time
 * I visited the service was over two years ago, when it was known as CodeFights.
 */

function firstDuplicate(a) {
    let count = [];
    
    for (let i = 0; i < a.length; i++) {
        if (count[a[i]] > 0) {
            return a[i];
        } else if (count[a[i]] === undefined) {
        count[a[i]] = 1;
        }
    }
    
    return -1;
}