input.onButtonPressed(Button.A, function () {
    dot.change(LedSpriteProperty.X, -1)
})
input.onButtonPressed(Button.B, function () {
    dot.change(LedSpriteProperty.X, 1)
})
let newObstacles = 0
let ticks = 0
let dot: game.LedSprite = null
let index = 0
dot = game.createSprite(2, 3)
let obstacles: game.LedSprite[] = []
dot.set(LedSpriteProperty.Blink, 300)
basic.forever(function () {
    while (obstacles.length > 0 && obstacles[0].get(LedSpriteProperty.Y) == 4) {
        obstacles.removeAt(0).delete()
    }
    for (let obstacle2 of obstacles) {
        obstacle2.change(LedSpriteProperty.Y, 1)
    }
    if (ticks % 3 == 0) {
        newObstacles = randint(0, 4)
        for (let index2 = 0; index2 <= 4; index2++) {
            if (index2 != newObstacles) {
                obstacles.push(game.createSprite(index2, 0))
            }
        }
    }
    for (let obstacle3 of obstacles) {
        if (obstacle3.get(LedSpriteProperty.X) == dot.get(LedSpriteProperty.X) && obstacle3.get(LedSpriteProperty.Y) == dot.get(LedSpriteProperty.Y)) {
            game.setScore(ticks / 3 - 1)
            game.gameOver()
        }
    }
    ticks += 1
    basic.pause(1000)
})
