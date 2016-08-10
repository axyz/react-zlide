export function next() {
    return {
        type: 'NEXT',
    };
}

export function prev() {
    return {
        type: 'PREV',
    };
}

export function goTo(n) {
    return {
        type: 'GO_TO',
        index: n,
    };
}
