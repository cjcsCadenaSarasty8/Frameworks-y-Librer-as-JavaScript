var XInicial="";
var YInicial="";
var XFinal="";
var YFinal="";
var Dulces=new Array(7);
var ContadorMovimientos=0;
  function DibujarTablero(){

    var NumeroDulce=0;
    var Retorno="";
    Contador=0;
    for(var y=0;y<7;y++)
    {
      Dulces[y]=new Array(7);
      Retorno="";
      for(var x=0;x<7;x++)
      {
        NumeroDulce=Math.floor((Math.random()*4)+1);
        Dulces[y][x]='<img src="image/'+NumeroDulce+'.png">';
        Retorno+='<div id="'+Contador+'" class="contenedor" ondrop="drop(event,'+y+','+x+')" ondragover="allowDrop(event)"><div id="'+y+','+x+'" class="caja" ondragstart="dragStart(event,'+y+','+x+')" ondragend="dragEnd(event)" draggable="true">'+Dulces[y][x]+'</div></div>';
        Contador++;
      }
      var Columna=document.getElementsByClassName('col-'+(y+1));
      Columna[0].innerHTML='<div class="container" width="100%" height="100%">'+Retorno+'</div>';
    }
    EliminaciónDulces();

  }
  function dragStart(event,y,x) {
      event.dataTransfer.setData("dulce", y+","+x);
      console.log("Started to drag the p element");
  }

  function dragEnd(event) {
      console.log( "Finished dragging the p element.");
  }

  function allowDrop(event,i,j) {
      event.preventDefault();
  }

  function drop(event,y,x) {

      event.preventDefault();
      var data = event.dataTransfer.getData("dulce");
      Dulce=data.split(',');
      YInicial=Dulce[0];
      XInicial=Dulce[1];
      YFinal=y;
      XFinal=x;
      if(XInicial!=XFinal || YInicial!=YFinal){
        if(XInicial-XFinal==1 || XFinal-XInicial==1 || YInicial-YFinal==1 || YFinal-YInicial==1){
          ContadorMovimientos++;
          document.getElementById('movimientos-text').innerHTML=ContadorMovimientos;
          var Dulce1=document.getElementById(data);
          var Dulce2=document.getElementById(y+","+x);
          var Temp=Dulce2.innerHTML;
          Dulce2.innerHTML=Dulce1.innerHTML;
          Dulce1.innerHTML=Temp;
        }
      }
  }
  function EliminaciónDulces(){
      var ContadorRepeticiones=0;
      for(var Fila=0;Fila<7;Fila++){
        for(var Col=0;Col<7;Col++){
          if(Col==0 && Fila==0){

          }
        }
      }
  }
