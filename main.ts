input.onButtonPressed(Button.A, function () {
    basic.showIcon(IconNames.StickFigure)
})
input.onSound(DetectedSound.Loud, function () {
    music.playMelody("A - - C C C D F ", 126)
})
input.onButtonPressed(Button.B, function () {
    basic.showIcon(IconNames.Skull)
})
input.onGesture(Gesture.Shake, function () {
    music.playMelody("C5 B A G F E D C ", 120)
})
basic.showIcon(IconNames.Yes)
