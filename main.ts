input.onButtonPressed(Button.A, function () {
    radio.sendNumber(-25)
})
input.onButtonPressed(Button.AB, function () {
    radio.sendString("\"POWER\"")
})
radio.onReceivedString(function (receivedString) {
    let receivedstring = 0
    if (receivedstring == 0) {
    	
    }
})
input.onButtonPressed(Button.B, function () {
    radio.sendNumber(25)
})
radio.setGroup(1)
