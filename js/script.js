function konversi() {
    let celcius = document.getElementById("celcius").value;
    let fahrenheit = (celcius * 9) / 5 + 32;
    let kalkulasi = celcius + "°C * 9/5 + 32 = " + fahrenheit + "°F";
    document.getElementById("fahrenheit").value = fahrenheit.toFixed(2);
    document.getElementById("kalkulasi").value = kalkulasi;
}

function reset() {
    document.getElementById("celcius").value = "";
    document.getElementById("fahrenheit").value = "";
    document.getElementById("kalkulasi").value = "";
}

//   function reverse() {
//     let celcius = document.getElementById("celcius").value;
//     let fahrenheit = document.getElementById("fahrenheit").value;
//     let kalkulasi = document.getElementById("kalkulasi").value;
//     document.getElementById("celcius").value = fahrenheit;
//     document.getElementById("fahrenheit").value = celcius;
//     document.getElementById("kalkulasi").value = kalkulasi;
//   }

function reverse() {
    let fahrenheit = document.getElementById("fahrenheit").value;
    let celcius = Math.floor((parseFloat(fahrenheit) - 32) * 5 / 9);
    let kalkulasi = "(" + fahrenheit + "°F - 32) * 5 / 9 = " + celcius + "°C";
    document.getElementById("celcius").value = celcius.toFixed(1);
    document.getElementById("kalkulasi").value = kalkulasi;
}