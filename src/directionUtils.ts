const _changeDirection = (direction, counterDirection) => (state) => 
    state.direction === counterDirection
        ? counterDirection
        : direction;

export const toRight = _changeDirection('RIGHT', 'LEFT');
export const toLeft = _changeDirection('LEFT', 'RIGHT');
export const toTop = _changeDirection('TOP', 'BOTTOM');
export const toBottom = _changeDirection('BOTTOM', 'TOP');
