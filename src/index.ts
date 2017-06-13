import { createStore } from 'redux';
import {
    toRight,
    toLeft,
    toBottom,
    toTop
} from './directionUtils';

import {
    move
} from './moveUtils';

import {
    paintBoard
} from './paintUtils';

const initialState = {
    board: {
        width: 20,
        height: 20
    },
    direction: 'RIGHT',

    snakePositions: [
        {
            x: 1,
            y: 10
        },
        {
            x: 2,
            y: 10
        },
        {
            x: 3,
            y: 10
        },
        {
            x: 4,
            y: 10
        }
    ]
};

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case 'MOVE': 
            return {
                ...state,
                snakePositions: move(state)
            };

        case 'DIR_RIGHT':
            return {
                ...state,
                direction: toRight(state)
            };
        case 'DIR_LEFT':
            return {
                ...state,
                direction: toLeft(state)
            };
        case 'DIR_TOP':
            return {
                ...state,
                direction: toTop(state)
            };
        case 'DIR_BOTTOM':
            return {
                ...state,
                direction: toBottom(state)
            };
    }
};

const store = createStore(reducer);

const onDirectionChange = (e) => {
    if (e.key === 'w')
        return store.dispatch({
            type: 'DIR_TOP'
        });
    if (e.key === 's')
        return store.dispatch({
            type: 'DIR_BOTTOM'
        });
    if (e.key === 'a')
        return store.dispatch({
            type: 'DIR_LEFT'
        });
    if (e.key === 'd')
        return store.dispatch({
            type: 'DIR_RIGHT'
        });
};

document.body.addEventListener('keypress', onDirectionChange);

const ctx = document.getElementById('game-board').getContext('2d');

const render = () => {

    store.dispatch({ type: 'MOVE' });

    paintBoard(ctx, store.getState());

    setTimeout(() => {
        requestAnimationFrame(render);
    }, 400);
};

requestAnimationFrame(render);
