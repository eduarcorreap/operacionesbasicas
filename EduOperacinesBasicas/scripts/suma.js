function Sumar()
{
    numero1 = document.getElementById("numero1").value;
    numero2 = document.getElementById("numero2").value;
    contenedor_salida = document.getElementById("contenedor-salida");
    contenedor_salida.innerHTML = "La Suma de los Números es: " +(parseInt(numero1) + parseInt(numero2));
}
function Restar()
{
    numero1 = document.getElementById("numero1").value;
    numero2 = document.getElementById("numero2").value;
    contenedor_salida = document.getElementById("contenedor-salida");
    contenedor_salida.innerHTML = "La Resta de los Números es:" +(parseInt(numero1) - parseInt(numero2));
}
function Multiplicar()
{
    numero1 = document.getElementById("numero1").value;
    numero2 = document.getElementById("numero2").value;
    contenedor_salida = document.getElementById("contenedor-salida");
    contenedor_salida.innerHTML = "La Multiplicacion de los Números es:" +(parseInt(numero1) * parseInt(numero2));
}
function Dividir()
{
    numero1 = document.getElementById("numero1").value;
    numero2 = document.getElementById("numero2").value;
    contenedor_salida = document.getElementById("contenedor-salida");
    contenedor_salida.innerHTML = "La Division de los Números es:" +(parseInt(numero1) / parseInt(numero2));
}

