import * as types from './types';

const initialState = [];

const reducers = (state = initialState, action) => {
    switch (action.type) {
        case types.ADD:
            initialState.push(action.payload);
            return Object.assign({}, initialState, {
                entries: initialState
            });
        default:
            return initialState;
    }
};

export default reducers;