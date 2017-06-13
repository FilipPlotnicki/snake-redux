const _moveHeadBottom = (el) => ({
    ...el,
    y: el.y + 1 >= 20
        ? 0
        : el.y + 1
});

const _moveHeadTop = (el) => ({
    ...el,
    y: el.y - 1 <= -1
        ? 19
        : el.y - 1
});

const _moveHeadLeft = (el) => ({
    ...el,
    x: el.x - 1 <= -1
        ? 19
        : el.x - 1
});

const _moveHeadRight = (el) => ({
    ...el,
    x: el.x + 1 >= 20
        ? 0
        : el.x + 1
});

const _moveSnakeHead = (dir, head) => {
    switch (dir) {
        case 'RIGHT':
            return _moveHeadRight(head);
        case 'LEFT':
            return _moveHeadLeft(head);
        case 'TOP':
            return _moveHeadTop(head);
        case 'BOTTOM':
            return _moveHeadBottom(head);
    }
};

export const move = (state) =>
    state.snakePositions.map((pos, i, arr) => {
        if (i === arr.length - 1) 
            return _moveSnakeHead(state.direction, pos);

        return arr[i+1];
    });
