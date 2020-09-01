function servo () {
    pins.servoWritePin(AnalogPin.P0, randint(0, 360))
    basic.pause(1500)
    pins.servoWritePin(AnalogPin.P0, 0)
    basic.pause(1500)
    pins.servoWritePin(AnalogPin.P0, 180)
    basic.pause(1500)
}
basic.forever(function () {
    while (input.buttonIsPressed(Button.B)) {
        servo()
    }
})
