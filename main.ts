input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    listax.push(x)
    listay.push(y)
    radio.sendValue("x", x)
    radio.sendValue("y", y)
})
input.onButtonPressed(Button.A, function () {
    x += 1
    if (x > 5) {
        x = 1
    }
})
input.onButtonPressed(Button.AB, function () {
    rx = x
    ry = y
})
input.onButtonPressed(Button.B, function () {
    y += 1
    if (y > 5) {
        y = 1
    }
})
radio.onReceivedValue(function (name, value) {
    if (name == "x") {
        tx = value
    }
    if (name == "y") {
        ty = value
    }
    if (tx == rx && ty == ry) {
        basic.clearScreen()
        basic.showIcon(IconNames.Fabulous)
        basic.pause(2000)
        control.reset()
    }
})
let ty = 0
let tx = 0
let listay: number[] = []
let listax: number[] = []
let y = 0
let x = 0
let ry = 0
let rx = 0
radio.setGroup(1)
rx = -1
ry = -1
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
    basic.pause(200)
    led.toggle(rx - 1, rx - 1)
})
