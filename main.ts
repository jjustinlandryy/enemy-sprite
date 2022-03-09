input.onButtonPressed(Button.A, function () {
    Player.change(LedSpriteProperty.Y, 1)
})
input.onGesture(Gesture.TiltLeft, function () {
    Player.change(LedSpriteProperty.X, -1)
})
input.onButtonPressed(Button.B, function () {
    Player.change(LedSpriteProperty.Y, -1)
})
input.onGesture(Gesture.TiltRight, function () {
    Player.change(LedSpriteProperty.X, 1)
})
let Player: game.LedSprite = null
Player = game.createSprite(randint(0, 4), randint(0, 4))
let Enemy = game.createSprite(randint(0, 4), randint(0, 4))
basic.forever(function () {
    if (Player.isTouching(Enemy)) {
        Player.delete()
        Enemy.delete()
        game.addScore(1)
        Player = game.createSprite(randint(0, 4), randint(0, 4))
        Enemy = game.createSprite(randint(0, 4), randint(0, 4))
    }
})
