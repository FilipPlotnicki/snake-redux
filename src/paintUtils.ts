export const paintBoard = (ctx, state) => {
    ctx.fillStyle = 'rgb(0, 0, 0)';

    // those too!!!
    ctx.fillRect(0, 0, 600, 600); 

    state.snakePositions.forEach((point, i, array) => {
        ctx.fillStyle = 'rgb(255, 255, 255)';

        // those by any means are not magic numbers!!!!!
        ctx.fillRect(point.x * 30, point.y * 30, 30, 30);
    });
};
