function calcularColor (numero) {
    let color;

    if (numero === 1) {
      color = "Negro";
    } else if (numero === 2) {
      color = "Blanco";
    } else if (numero === 3) {
      color = "Azul";
    } else {
      return "El color es Verde";
    }
  
    return "El color es " + color;
  }
  
  console.log(calcularColor(1)) 
  console.log(calcularColor(2)) 
  console.log(calcularColor(3)) 
  console.log(calcularColor(8)) 