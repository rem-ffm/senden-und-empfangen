input.onGesture(Gesture.ScreenDown, function () {
    radio.sendString(Text)
    basic.clearScreen()
    Text = ""
})
input.onButtonPressed(Button.A, function () {
    Position += -1
    if (Position == -1) {
        Position = 27
    }
    Buchstabe = ABC.charAt(Position)
    basic.showString(Buchstabe)
})
input.onButtonPressed(Button.AB, function () {
    Text += Buchstabe
})
radio.onReceivedString(function (receivedString) {
    alter_Text = ""
    basic.showString(receivedString)
})
input.onButtonPressed(Button.B, function () {
    Position += 1
    if (Position == 28) {
        Position = 0
    }
    Buchstabe = ABC.charAt(Position)
    basic.showString(Buchstabe)
})
let alter_Text = ""
let Buchstabe = ""
let Text = ""
let Position = 0
let ABC = ""
ABC = "ABCDEFGHIJKLMNOPQRSTUVWXYZ!?123"
Position = 0
radio.setGroup(10)
