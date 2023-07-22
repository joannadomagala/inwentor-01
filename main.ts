let duty = 0
basic.forever(function () {
    basic.showIcon(IconNames.Happy)
    while (duty < 1023) {
        pins.analogWritePin(AnalogPin.P0, duty)
        duty = duty + 1
        basic.pause(10)
        while (duty > 1023) {
            pins.analogWritePin(AnalogPin.P0, duty)
            duty = duty - 1
            basic.pause(10)
        }
    }
})
