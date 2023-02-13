function visi_eq1() {
  document.getElementById("equipo1").style.visibility = "";
}
function visi_eq2() {
  document.getElementById("equipo2").style.visibility = "";
}

function invisible() {
  document.getElementById("equipo1").style.visibility = "hidden";
  document.getElementById("equipo2").style.visibility = "hidden";
  document.getElementById("alain").style.visibility = "hidden";
  document.getElementById("cuentas").style.visibility = "hidden";
  document.getElementById("valor1").style.visibility = "hidden";
  document.getElementById("valor2").style.visibility = "hidden";
  document.getElementById("total").style.visibility = "hidden";
  document.getElementById("24").style.visibility = "hidden";
  document.getElementById("48").style.visibility = "hidden";
  document.getElementById("mila").style.visibility = "hidden";
}
function valor1ver() {
  document.getElementById("cuentas").style.visibility = "";
  document.getElementById("valor1").style.visibility = "";
  document.getElementById("mila").style.visibility = "";
}
function nover() {}

function valor2ver() {
  document.getElementById("cuentas").style.visibility = "";
  document.getElementById("valor2").style.visibility = "";
  document.getElementById("total").style.visibility = "";
  document.getElementById("24").style.visibility = "";
  document.getElementById("48").style.visibility = "";
  document.getElementById("mila").style.visibility = "";
}

function precios() {

  document.getElementById('48').value="0"
  /* IC6 */
  if (document.getElementById("option-1").checked) {
    document.getElementById("valor1").value = "1995" + "€";
    document.getElementById("total").value =
      document.getElementById("valor1").value;
      document.getElementById("alain").style.visibility = "";
    calcular();
    valor1ver();
  }
  /* IC8 */
  if (document.getElementById("option-2").checked) {
    document.getElementById("valor1").value = "3200" + "€";
    document.getElementById("total").value =
      document.getElementById("valor1").value;

    document.getElementById("alain").style.visibility = "";
    calcular();
    valor1ver();
  }
  /* IC16 */
  if (document.getElementById("option-3").checked) {
    document.getElementById("valor1").value = "3800" + "€";
    document.getElementById("total").value =
      document.getElementById("valor1").value;

    document.getElementById("alain").style.visibility = ""
    calcular();
    valor1ver();
  }

  /* Q6 */
  if (document.getElementById("option-4").checked) {
    document.getElementById("valor1").value = "1995" + "€";
    document.getElementById("total").value =
      document.getElementById("valor1").value;
      document.getElementById("alain").style.visibility = "";
      calcular();
    valor1ver();
  
}
  /* Q8 */
  if (document.getElementById("option-5").checked) {
    document.getElementById("valor1").value = "3200" + "€";
    document.getElementById("total").value =
      document.getElementById("valor1").value;
      document.getElementById("alain").style.visibility = "";
      calcular();
    valor1ver();
  }
  /* Q16 */
  if (document.getElementById("option-6").checked) {
    document.getElementById("valor1").value = "3800" + "€";
    document.getElementById("total").value =
      document.getElementById("valor1").value;
      document.getElementById("alain").style.visibility = "";
      calcular();
    valor1ver();
  }
  /* R1200*/
  if (document.getElementById("option-7").checked) {
    document.getElementById("valor1").value = "3400" + "€";
    document.getElementById("total").value =
      document.getElementById("valor1").value;
      document.getElementById("alain").style.visibility = "";
      calcular();
    valor1ver();
  } 
  /* R1600 */
  if (document.getElementById("option-8").checked) {
    document.getElementById("valor1").value = "3850" + "€";
    document.getElementById("total").value =
      document.getElementById("valor1").value;
      document.getElementById("alain").style.visibility = "";
      calcular();
    valor1ver();
  }
  /* R2400 */
  if (document.getElementById("option-9").checked) {
    document.getElementById("valor1").value = "4200" + "€";
    document.getElementById("total").value =
      document.getElementById("valor1").value;
      document.getElementById("alain").style.visibility = "";
      calcular();
    valor1ver();
  }
  /* ACTIVE*/
  if (document.getElementById("option-10").checked) {
    document.getElementById("valor1").value = "3400" + "€";
    document.getElementById("total").value =
      document.getElementById("valor1").value;
      document.getElementById("alain").style.visibility = "";
      calcular();
    valor1ver();
  } 
  /* ACTIVE PRO */
  if (document.getElementById("option-11").checked) {
    document.getElementById("valor1").value = "3990" + "€";
    document.getElementById("total").value =
      document.getElementById("valor1").value;
      document.getElementById("alain").style.visibility = "";
      calcular();

    valor1ver();
  }
  /* NIVEL 8*/
  if (document.getElementById("option-12").checked) {
    document.getElementById("valor1").value = "3200" + "€";
    document.getElementById("total").value =
      document.getElementById("valor1").value;
      document.getElementById("alain").style.visibility = "";
      calcular();
    valor1ver();
  } else {
    document.getElementById("valor1").value = "";
  }
  /* NIVEL 12*/
  if (document.getElementById("option-13").checked) {
    document.getElementById("valor1").value = "3600" + "€";
    document.getElementById("total").value =
      document.getElementById("valor1").value;
      calcular();
    valor1ver();
  }
  /* NIVEL 16 */
  if (document.getElementById("option-14").checked) {
    document.getElementById("valor1").value = "3800" + "€";
    document.getElementById("total").value =
      document.getElementById("valor1").value;
      document.getElementById("alain").style.visibility = "";
      calcular();
    valor1ver();
  }
  /* STARKEY*/
  if (document.getElementById("option-15").checked) {
    document.getElementById("valor1").value = "4400" + "€";
    document.getElementById("total").value =
      document.getElementById("valor1").value;
      document.getElementById("alain").style.visibility = "";
      calcular();
    valor1ver();
  }
  /*STILINE*/
  if (document.getElementById("option-16").checked) {
    document.getElementById("valor1").value = "3990" + "€";
    document.getElementById("total").value =
      document.getElementById("valor1").value;
      document.getElementById("alain").style.visibility = "";
      calcular();
    valor1ver();
  } 
}

/* PRECIOS EQUIPOS 2 */

function precios2() {
  if (document.getElementById("option-17").checked) {
    document.getElementById("valor2").value = "1" + "€";
    document.getElementById('48').style.visibility="";
    calcular();
    valor2ver();
    totalver();
  } else {
    document.getElementById("valor2").value = "";
    calcular2();
  }
  if (document.getElementById("option-18").checked) {
    document.getElementById("valor2").value = "1206" + "€";
    document.getElementById('48').style.visibility="";
    calcular();
    valor2ver();
    totalver();
  } else {
    document.getElementById("valor2").value = "";
    calcular2();
  }
  if (document.getElementById("option-19").checked) {
    document.getElementById("valor2").value = "1806" + "€";
    document.getElementById('48').style.visibility="";
    calcular();
    valor2ver();
    totalver();
  } else {
    document.getElementById("valor2").value = "";
    calcular2();
  }
  if (document.getElementById("option-20").checked) {
    document.getElementById("valor2").value = "1" + "€";
    document.getElementById('48').style.visibility="";
    calcular();
    valor2ver();
    totalver();
  } else {
    document.getElementById("valor2").value = "";
    calcular2();
  }
  if (document.getElementById("option-21").checked) {
    document.getElementById("valor2").value = "1206" + "€";
    document.getElementById('48').style.visibility="";
    calcular();
    valor2ver();
    totalver();
  } else {
    document.getElementById("valor2").value = "";
    calcular2();
  }
  if (document.getElementById("option-22").checked) {
    document.getElementById("valor2").value = "1806" + "€";
    document.getElementById('48').style.visibility="";
    calcular();
    valor2ver();
    totalver();
  } else {
    document.getElementById("valor2").value = "";
    calcular2();
  }
  if (document.getElementById("option-23").checked) {
    document.getElementById("valor2").value = "1405" + "€";
    document.getElementById('48').style.visibility="";
    calcular();
    valor2ver();
    totalver();
  } else {
    document.getElementById("valor2").value = "";
    calcular2();
  }
  if (document.getElementById("option-24").checked) {
    document.getElementById("valor2").value = "1855" + "€";
    document.getElementById('48').style.visibility="";
    calcular();
    valor2ver();
    totalver();
  } else {
    document.getElementById("valor2").value = "";
    calcular2();
  }
  if (document.getElementById("option-25").checked) {
    document.getElementById("valor2").value = "2205" + "€";
    document.getElementById('48').style.visibility="";
    calcular();
    valor2ver();
    totalver();
  } else {
    document.getElementById("valor2").value = "";
    calcular2();
  }
  if (document.getElementById("option-26").checked) {
    document.getElementById("valor2").value = "1405" + "€";
    document.getElementById('48').style.visibility="";
    calcular();
    valor2ver();
    totalver();
  } else {
    document.getElementById("valor2").value = "";
    calcular2();
  }
  if (document.getElementById("option-27").checked) {
    document.getElementById("valor2").value = "1995" + "€";
    document.getElementById('48').style.visibility="";
    calcular();
    valor2ver();
    totalver();
  } else {
    document.getElementById("valor2").value = "";
    calcular2();
  }
  if (document.getElementById("option-28").checked) {
    document.getElementById("valor2").value = "1205" + "€";
    document.getElementById('48').style.visibility="";
    calcular();
    valor2ver();
    totalver();
  } else {
    document.getElementById("valor2").value = "";
    calcular2();
  }
  if (document.getElementById("option-29").checked) {
    document.getElementById("valor2").value = "1605" + "€";
    document.getElementById('48').style.visibility="";
    calcular();
    valor2ver();
    totalver();
  } else {
    document.getElementById("valor2").value = "";
    calcular2();
  }

  if (document.getElementById("option-30").checked) {
    document.getElementById("valor2").value = "1805" + "€";
    document.getElementById('48').style.visibility="";
    calcular();
    valor2ver();
    totalver();
  } else {
    document.getElementById("valor2").value = "";
    calcular2();
  }
  if (document.getElementById("option-31").checked) {
    document.getElementById("valor2").value = "2405" + "€";
    document.getElementById('48').style.visibility="";
    calcular();
    valor2ver();
    totalver();
  } else {
    document.getElementById("valor2").value = "";
    calcular2();
  }
  if (document.getElementById("option-32").checked) {
    document.getElementById("valor2").value = "1995" + "€";
    document.getElementById('48').style.visibility="";
    calcular();
    valor2ver();
    totalver();
  } else {
    document.getElementById("valor2").value = "";
    calcular2();
  }
}

function calcular() {
  var a = parseFloat(document.getElementById("valor1").value);
  var b = parseFloat(document.getElementById("valor2").value);
  var ny24 = 24;
  var ny48 = 48;
  document.getElementById("total").value = a + b + "€";
  /* document.getElementById("24").value = ((a + b) / ny24).toFixed(2); */
  document.getElementById("48").value = ((a + b) / ny48).toFixed(2) + "€";
}
function calcular2() {
  document.getElementById("valor2").value = "";
  document.getElementById("total").value =
    document.getElementById("valor1").value;
  /* document.getElementById("24").value = ""; */
  document.getElementById("48").value = "";
}
