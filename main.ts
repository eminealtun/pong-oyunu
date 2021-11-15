input.onButtonPressed(Button.A, function () {
    if (solled.get(LedSpriteProperty.X) > 0) {
        solled.move(-1)
        sagled.move(-1)
    }
})
input.onButtonPressed(Button.AB, function () {
    basic.showNumber(puan)
    game.gameOver()
})
input.onButtonPressed(Button.B, function () {
    if (sagled.get(LedSpriteProperty.X) < 4) {
        solled.move(1)
        sagled.move(1)
    }
})
let puan = 0
let sagled: game.LedSprite = null
let solled: game.LedSprite = null
solled = game.createSprite(2, 4)
sagled = game.createSprite(3, 4)
let top = game.createSprite(randint(0, 4), 0)
puan = 0
let can = 5
basic.pause(500)
basic.forever(function () {
    for (let index = 0; index < 4; index++) {
        top.change(LedSpriteProperty.Y, 1)
        basic.pause(500)
        if (top.isTouching(solled) || top.isTouching(sagled)) {
            puan += 1
        } else if (top.get(LedSpriteProperty.Y) == 4) {
            puan += -1
            can += -1
        }
    }
    if (can == 0) {
        basic.showNumber(puan)
        basic.pause(1000)
        game.gameOver()
    }
    top.set(LedSpriteProperty.X, randint(0, 4))
    top.set(LedSpriteProperty.Y, 0)
})
