dinero_cofla = prompt("Cuanto dinero tiene cofla ");
dinero_roberto = prompt("Cuanto dinero tiene roberto ");
dinero_pedro = prompt("Cuanto dinero tiene pedro ");

// Para cofla 

if(dinero_cofla>=0,6 && dinero_cofla<1){
    alert("COFLA compra el helado de agua")
    din_vuelto = dinero_cofla-0.6;
    alert("COFLA tu vuelto es "+ din_vuelto +"usd")
}

else if(dinero_cofla>=1 && dinero_cofla<1.6){
    alert("COFLA  compra el helado de crema")
    din_vuelto = dinero_cofla-1;
    alert("COFLA tu vuelto es "+ din_vuelto +"usd")
}

else if(dinero_cofla>=1.6 && dinero_cofla<1.7){
    alert("COFLA compra el helado de heladix")
    din_vuelto = dinero_cofla-1.6;
    alert("COFLA tu vuelto es "+ din_vuelto +"usd")
}
else if(dinero_cofla>=1.7 && dinero_cofla<1.8){
    alert("COFLA compra el helado de heldovich")
    din_vuelto = dinero_cofla-1.7;
    alert("COFLA tu vuelto es "+ din_vuelto +"usd")
}
else if(dinero_cofla>=1.8 && dinero_cofla<2.9){
    alert("COFLA compra el helado de helardo")
    din_vuelto = dinero_cofla-1.8;
    alert("COFLA tu vuelto es "+ din_vuelto +"usd")
}
else if(dinero_cofla>=2.9 ){
    alert("COFLA compra el helado de confites o pote de un  1/4 kg")
    din_vuelto = dinero_cofla-2.9;
    alert("COFLA tu vuelto es "+ din_vuelto +"usd")
}

else{
    alert("COFLA No puedes comprar ningun helado")
}

// Para ROBERTO 

if(dinero_pedro>=0,6 && dinero_roberto<1){
    alert("ROBERTO Compra el helado de agua")
}

else if(dinero_pedro>=1 && dinero_roberto<1.6){
    alert("ROBERTO compra el helado de crema")
}

else if(dinero_pedro>=1.6 && dinero_roberto<1.7){
    alert("ROBERTO compra el helado de heladix")
}
else if(dinero_roberto>=1.7 && dinero_roberto<1.8){
    alert("ROBERTO compra el helado de heldovich")
}
else if(dinero_roberto>=1.8 && dinero_roberto<2.9){
    alert("ROBERTO compra el helado de helardo")
}
else if(dinero_roberto>=2.9 ){
    alert("ROBERTO compra el helado de confites o pote de un  1/4 kg")
}

else{
    alert("ROBERTO No puedes comprar ningun helado")
}

// Para pedro 

if(dinero_pedro>=0,6 && dinero_pedro<1){
    alert("PEDRO compra el helado de agua")
}

else if(dinero_pedro>=1 && dinero_pedro<1.6){
    alert("PEDRO compra el helado de crema")
}

else if(dinero_pedro>=1.6 && dinero_pedro<1.7){
    alert("PEDRO compra el helado de heladix")
}
else if(dinero_pedro>=1.7 && dinero_pedro<1.8){
    alert("PEDRO compra el helado de heldovich")
}
else if(dinero_pedro>=1.8 && dinero_pedro<2.9){
    alert("PEDRO compra el helado de helardo")
}
else if(dinero_pedro>=2.9 ){
    alert("PEDRO compra el helado de confites o pote de un  1/4 kg")
}

else{
    alert(" PEDRO No puedes comprar ningun helado")
}