game.splash("Lets calculate the area and perimeter of the trapezoid")
let Length = game.askForNumber("Enter the length of the trapezoid (cm)")
let Width = game.askForNumber("Enter the width of the trapezoid (cm)")
let height = game.askForNumber("Enter the height of the trapezoid (cm)")
let Trapezoid_Area = (Length + Width) / 2 * height
game.splash("The area of trapezoid " + Length + "cm add by " + Width + "cm divide by " + "2 " + "cm by " + height + convertToText(Trapezoid_Area) + "cm2 ")
