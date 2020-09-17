input.onButtonPressed(Button.A, function () {
    basic.showNumber(Pesos)
    basic.showString("MXN")
    Dolar = Pesos / 21.2917
    basic.showNumber(Dolar)
    basic.showString("USD")
})
input.onButtonPressed(Button.B, function () {
    basic.showNumber(Pesos)
    basic.showString("MXN")
    Euros = Pesos / 25.2917
    basic.showNumber(Euros)
    basic.showString("EUR")
})
let Euros = 0
let Dolar = 0
let Pesos = 0
basic.showString("Patrcio A01285201")
Pesos = 257
basic.forever(function () {
	
})
