input.onSound(DetectedSound.Loud, function () {
    LightsOn = !(LightsOn)
    if (LightsOn) {
        basic.showLeds(`
            # # # # #
            # . . . #
            # . . . #
            # . . . #
            # # # # #
            `)
    } else {
        basic.clearScreen()
    }
})
let LightsOn = false
input.setSoundThreshold(SoundThreshold.Loud, 128)
