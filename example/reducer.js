export default (state = 0, action) => {
    switch (action.type) {
        case 'NEXT': return state + 1;
        case 'PREV': return state - 1;
        case 'GO_TO': return action.index;
        default: return state;
    }
};
