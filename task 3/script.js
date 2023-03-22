function convert() {
    let input = document.getElementById("input").value;
    let unit = document.getElementById("unit").value;
    let output;
  
    if (unit === "Celsius") {
      output = input * 9 / 5 + 32;
      output = output.toFixed(2) + " °F";
    } else if (unit === "Fahrenheit") {
      output = (input - 32) * 5 / 9;
      output = output.toFixed(2) + " °C";
    } else if (unit === "Kelvin") {
      output = input - 273.15;
      output = output.toFixed(2) + " °C";
    }
  
    document.getElementById("output").innerHTML = output;
  }