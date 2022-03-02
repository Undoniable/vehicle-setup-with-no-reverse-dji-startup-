enum RadioMessage {
    message1 = 49434,
    A = 18289,
    B = 9031
}
radio.onReceivedString(function (receivedString) {
    if (receivedString == "A") {
        if (left) {
            left = false
        } else {
            left = true
        }
    } else if (receivedString == "B") {
        if (right) {
            right = false
        } else {
            right = true
        }
    } else if (receivedString == "AB") {
        if (forward) {
            forward = false
        } else {
            forward = true
        }
    } else {
    	
    }
    if (receivedString == "fr") {
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            . . # . .
            `)
        basic.showLeds(`
            . . . # .
            . . . # .
            . . . # .
            . . # # .
            . . # # .
            `)
        basic.showLeds(`
            . . . . #
            . . . . #
            . . # . #
            . . # . #
            . . . . #
            `)
        basic.showLeds(`
            . . . . .
            . . # . .
            . . # . .
            . . . . .
            . . . . .
            `)
        basic.showLeds(`
            . . # # .
            . . # # .
            . . . # .
            . . . # .
            . . . # .
            `)
        basic.showLeds(`
            . . # . #
            . . . . #
            . . . . #
            . . . . #
            . . . . #
            `)
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            `)
    } else if (receivedString == "fl") {
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            . . # . .
            `)
        basic.showLeds(`
            . # . . .
            . # . . .
            . # . . .
            . # # . .
            . # # . .
            `)
        basic.showLeds(`
            # . . . .
            # . . . .
            # . # . .
            # . # . .
            # . . . .
            `)
        basic.showLeds(`
            . . . . .
            . . # . .
            . . # . .
            . . . . .
            . . . . .
            `)
        basic.showLeds(`
            . # # . .
            . # # . .
            . # . . .
            . # . . .
            . # . . .
            `)
        basic.showLeds(`
            # . # . .
            # . . . .
            # . . . .
            # . . . .
            # . . . .
            `)
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            `)
    } else if (receivedString == "l") {
        basic.showLeds(`
            . # . . .
            . # . . .
            . # . . .
            . # . . .
            . # . . .
            `)
        basic.showLeds(`
            # . . . .
            # . . . .
            # . . . .
            # . . . .
            # . . . .
            `)
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            `)
    } else if (receivedString == "r") {
        basic.showLeds(`
            . . . # .
            . . . # .
            . . . # .
            . . . # .
            . . . # .
            `)
        basic.showLeds(`
            . . . . #
            . . . . #
            . . . . #
            . . . . #
            . . . . #
            `)
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            `)
    } else if (receivedString == "f") {
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            . . # . .
            `)
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . # . .
            . . # . .
            `)
        basic.showLeds(`
            . . . . .
            . . . . .
            . . # . .
            . . # . .
            . . . . .
            `)
        basic.showLeds(`
            . . . . .
            . . # . .
            . . # . .
            . . . . .
            . . . . .
            `)
        basic.showLeds(`
            . . # . .
            . . # . .
            . . . . .
            . . . . .
            . . . . .
            `)
        basic.showLeds(`
            . . # . .
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            `)
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            `)
    } else if (receivedString == "a") {
        basic.showLeds(`
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            `)
    } else {
    	
    }
})
let sonar_alert = false
let front_sonar = 0
let forward = false
let right = false
let left = false
music.playTone(659, music.beat(BeatFraction.Eighth))
music.playTone(698, music.beat(BeatFraction.Eighth))
music.playTone(784, music.beat(BeatFraction.Eighth))
basic.showLeds(`
    # # # # #
    # # # # #
    # # # # #
    # # # # #
    # # # # #
    `)
servos.P0.run(1)
servos.P0.run(-1)
servos.P0.run(1)
servos.P0.run(0)
servos.P1.run(1)
servos.P1.run(-1)
servos.P1.run(1)
servos.P1.run(0)
servos.P2.run(1)
servos.P2.run(-1)
servos.P2.run(1)
servos.P2.run(0)
radio.setGroup(1)
radio.setTransmitPower(7)
basic.pause(500)
basic.showLeds(`
    . . . . .
    . . . . .
    . . . . .
    . . . . .
    . . . . .
    `)
basic.forever(function () {
    if (left && forward) {
        servos.P1.run(25)
        servos.P2.run(100)
    } else if (left && !(forward)) {
        servos.P1.run(-100)
        servos.P2.run(100)
    } else {
    	
    }
})
basic.forever(function () {
    if (forward && !(left) && right) {
        radio.sendString("fr")
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            . . # . .
            `)
        basic.showLeds(`
            . . . # .
            . . . # .
            . . . # .
            . . # # .
            . . # # .
            `)
        basic.showLeds(`
            . . . . #
            . . . . #
            . . # . #
            . . # . #
            . . . . #
            `)
        basic.showLeds(`
            . . . . .
            . . # . .
            . . # . .
            . . . . .
            . . . . .
            `)
        basic.showLeds(`
            . . # # .
            . . # # .
            . . . # .
            . . . # .
            . . . # .
            `)
        basic.showLeds(`
            . . # . #
            . . . . #
            . . . . #
            . . . . #
            . . . . #
            `)
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            `)
    } else if (forward && !(right) && left) {
        radio.sendString("fl")
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            . . # . .
            `)
        basic.showLeds(`
            . # . . .
            . # . . .
            . # . . .
            . # # . .
            . # # . .
            `)
        basic.showLeds(`
            # . . . .
            # . . . .
            # . # . .
            # . # . .
            # . . . .
            `)
        basic.showLeds(`
            . . . . .
            . . # . .
            . . # . .
            . . . . .
            . . . . .
            `)
        basic.showLeds(`
            . # # . .
            . # # . .
            . # . . .
            . # . . .
            . # . . .
            `)
        basic.showLeds(`
            # . # . .
            # . . . .
            # . . . .
            # . . . .
            # . . . .
            `)
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            `)
    } else if (left) {
        radio.sendString("l")
        basic.showLeds(`
            . # . . .
            . # . . .
            . # . . .
            . # . . .
            . # . . .
            `)
        basic.showLeds(`
            # . . . .
            # . . . .
            # . . . .
            # . . . .
            # . . . .
            `)
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            `)
    } else if (right) {
        radio.sendString("r")
        basic.showLeds(`
            . . . # .
            . . . # .
            . . . # .
            . . . # .
            . . . # .
            `)
        basic.showLeds(`
            . . . . #
            . . . . #
            . . . . #
            . . . . #
            . . . . #
            `)
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            `)
    } else if (forward && !(left || right)) {
        radio.sendString("f")
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            . . # . .
            `)
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . # . .
            . . # . .
            `)
        basic.showLeds(`
            . . . . .
            . . . . .
            . . # . .
            . . # . .
            . . . . .
            `)
        basic.showLeds(`
            . . . . .
            . . # . .
            . . # . .
            . . . . .
            . . . . .
            `)
        basic.showLeds(`
            . . # . .
            . . # . .
            . . . . .
            . . . . .
            . . . . .
            `)
        basic.showLeds(`
            . . # . .
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            `)
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            `)
    } else if (forward && left && right) {
        radio.sendString("a")
        basic.showLeds(`
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            `)
    } else {
    	
    }
})
basic.forever(function () {
    if (right && forward) {
        servos.P2.run(25)
        servos.P1.run(100)
    } else if (right && !(forward)) {
        servos.P2.run(-100)
        servos.P1.run(100)
    } else {
    	
    }
})
basic.forever(function () {
    if (forward) {
        servos.P0.run(100)
        servos.P1.run(100)
        servos.P2.run(100)
    } else {
        servos.P0.run(0)
        servos.P1.run(0)
        servos.P2.run(0)
    }
})
basic.forever(function () {
    front_sonar = sonar.ping(
    DigitalPin.P15,
    DigitalPin.P16,
    PingUnit.Centimeters
    )
})
basic.forever(function () {
    if (input.buttonIsPressed(Button.AB)) {
        radio.sendString("AB")
    } else if (input.buttonIsPressed(Button.B)) {
        radio.sendString("B")
    } else if (input.buttonIsPressed(Button.A)) {
        radio.sendString("A")
    } else {
    	
    }
})
basic.forever(function () {
    if (sonar_alert) {
        basic.showLeds(`
            # # # # #
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            `)
    }
})
basic.forever(function () {
    if (front_sonar <= 5) {
        sonar_alert = true
        servos.P0.run(-100)
        servos.P1.run(-100)
        servos.P2.run(-100)
    } else {
        sonar_alert = false
    }
})
