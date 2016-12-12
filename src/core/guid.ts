const cache = [];
let count = 1;

export function getId(): number {
    let result = cache.shift();
    if (result === undefined) {
        result = count;
        count++;
    }
    return result;
}

export function removeId(id): void {
    cache.push(id);
}
