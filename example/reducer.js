export default (state = {
    visibleSlides: 3,
    currentSlide: 1,
    loadedList: [1, 2, 3, 4]
}, action) => {
    switch (action.type) {
        case 'NEXT': {
            const nextSlide = state.currentSlide + 1;
            const newLoadedList = state.loadedList.slice();
            const nextLoadSlide = state.visibleSlides + nextSlide;

            if (newLoadedList.indexOf(nextLoadSlide) === -1) {
                newLoadedList.push(nextLoadSlide);
            }

            return Object.assign({}, state, {
                currentSlide: nextSlide,
                loadedList: newLoadedList,
            });
        }
        case 'PREV': {
            const prevSlide = state.currentSlide - 1;
            const newLoadedList = state.loadedList.slice();

            if (newLoadedList.indexOf(prevSlide) !== -1) {
                newLoadedList.push(prevSlide);
            }

            return Object.assign({}, state, {
                currentSlide: prevSlide,
                loadedList: newLoadedList,
            });
        }
        case 'GO_TO': {
            return {
                currentSlide: action.index,
            };
        }
        default: return state;
    }
};
