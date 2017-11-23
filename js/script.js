var a = prompt("Wpisz wartość dla 'a'");
var b = prompt("Wpisz wartość dla 'b'");
var value = (a * a) - (2 * a * b) + (b * b);
console.log("Wynik działania: (" + a + " * " + a + ") - (" + 2 + " * " + a + " * " + b + ") + (" + b + " * " + b + ") to: " + value);
if (value > 0) {
  console.log("Wynik dodatni");
} else if (value < 0 ) {
  console.log("wynik ujemny");
}
value === 0 ? console.log("Wynik równy zeru.") : console.log("");