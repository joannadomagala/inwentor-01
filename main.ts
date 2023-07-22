input.onPinPressed(TouchPin.P0, function () {
    basic.showIcon(IconNames.Surprised)
    if (light2 == 0) {
        light2 = 1
    } else {
        light2 = 0
    }
})
let light2 = 0
basic.showIcon(IconNames.Happy)
basic.forever(function () {
    if (light2 == 1) {
        pins.analogWritePin(AnalogPin.P2, pins.analogReadPin(AnalogPin.P1))
    } else {
        pins.digitalWritePin(DigitalPin.P2, 0)
    }
})
