var Segundo=0;
var SegundoText="";
var Minuto=2;
var MinutoText="";

var Contador=document.getElementById('timer');
function InicioJuego(){
  if(document.getElementById('btn-reinicio').innerHTML=="Iniciar"){
    document.getElementById('btn-reinicio').innerHTML="Reiniciar";
    DibujarTablero();
    //ControlConteo();
  }else{
    location.reload();
  }
}

function ControlConteo(){
  window.setTimeout(ConteoRegresivo, 1000);
}

function ConteoRegresivo(){
  if(Segundo>0){
    Segundo=Segundo-1;
  }else{
    if(Minuto>0){
      Minuto=Minuto-1;
      Segundo=59;
    }
  }
  if(Minuto<10){
    MinutoText="0"+Minuto;
  }else{
  MinutoText=Minuto;
  }
  if(Segundo<10){
    SegundoText="0"+Segundo;
  }else{
  SegundoText=Segundo;
  }
  document.getElementById('timer').innerHTML=MinutoText+":"+SegundoText;
  if(Minuto==0 && Segundo==0){
    FinDelJuego();
  }else{
    ControlConteo();
  }
}
function FinDelJuego(){
  var Tablero = document.getElementById('Tablero');
  Tablero.style.width = '0%';
  Tablero.style.height = '0px';
  Tablero.style.border = '0px';
  var Tablero = document.getElementsByClassName('time');
  Tablero[0].style.width = '0%';
  Tablero[0].style.height = '0px';
  Tablero[0].style.border = '0px';
  Tablero[0].style.display = 'none';
  var TableroPuntaje = document.getElementById('PanelScore');
  TableroPuntaje.style.width = '100%';
  var TableroPuntaje = document.getElementsByClassName('TituloFinJuego');
  TableroPuntaje[0].style.opacity = '1';
  TableroPuntaje[0].style.display = 'block';

}
