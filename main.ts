let sonar2 = 0
let countdown = 0
basic.forever(function () {
    sonar2 = sonar.ping(
    DigitalPin.P0,
    DigitalPin.P1,
    PingUnit.Centimeters
    )
    if (sonar2 >= 3 && sonar2 <= 10) {
        countdown = 20
        basic.showNumber(countdown)
        for (let index = 0; index < 20; index++) {
            sonar2 = sonar.ping(
            DigitalPin.P0,
            DigitalPin.P1,
            PingUnit.Centimeters
            )
            if (sonar2 < 3 || sonar2 > 10) {
                break;
            } else if (sonar2 >= 3 && sonar2 <= 10) {
                basic.pause(1000)
                countdown += -1
                basic.showNumber(countdown)
            }
        }
        basic.pause(5000)
    } else if ((sonar2 < 3 || sonar2 > 10) && countdown != 0) {
        music.playTone(784, music.beat(BeatFraction.Half))
        basic.showIcon(IconNames.No)
        basic.clearScreen()
        basic.pause(200)
        music.playTone(880, music.beat(BeatFraction.Half))
        basic.showIcon(IconNames.No)
    } else if (countdown == 0) {
        basic.clearScreen()
        basic.showIcon(IconNames.Heart)
        basic.pause(2000)
    }
})
