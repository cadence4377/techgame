input.onButtonPressed(Button.A, function () {
    for (let index = 0; index < 10; index++) {
        timer += -1
        basic.pause(100)
        basic.showNumber(timer)
    }
    basic.showIcon(IconNames.Skull)
    basic.clearScreen()
})
let timer = 0
timer = 10
