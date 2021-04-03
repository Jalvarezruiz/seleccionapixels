input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    listax.push(x)
    listay.push(y)
})
input.onButtonPressed(Button.A, function () {
    x += 1
    if (x > 5) {
        x = 1
    }
})
input.onButtonPressed(Button.B, function () {
    y += 1
    if (y > 5) {
        y = 1
    }
})
let listay: number[] = []
let listax: number[] = []
let y = 0
let x = 0
x = 1
y = 1
listax = []
listay = []
basic.forever(function () {
    basic.clearScreen()
    led.plot(x - 1, y - 1)
    for (let index = 0; index <= listax.length - 1; index++) {
        led.plot(listax[index] - 1, listay[index] - 1)
    }
})
