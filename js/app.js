var XInicial="";
var YInicial="";
var XFinal="";
var YFinal="";
var ContadorMovimientos=0;
var ContadorPuntos=0;
  function DibujarTablero(){

    var NumeroDulce=0;
    var Retorno="";
    Contador=0;
    for(var x=0;x<7;x++)
    {
      Retorno="";
      for(var y=0;y<7;y++)
      {
        NumeroDulce=Math.floor((Math.random()*6)+1);
        Retorno+='<div id="'+Contador+'" class="contenedor" ondrop="drop(event,'+x+','+y+')" ondragover="allowDrop(event)"><div id="'+x+','+y+'" class="caja" ondragstart="dragStart(event,'+x+','+y+')" ondragend="dragEnd(event)" draggable="true">'+GenerarDulce()+'</div></div>';
        Contador++;
      }
      var Columna=document.getElementsByClassName('col-'+(x+1));
      Columna[0].innerHTML='<div class="container" width="100%" height="100%">'+Retorno+'</div>';
    }



  }
  function dragStart(event,x,y) {
      event.dataTransfer.setData("dulce", x+","+y);
      console.log("Started to drag the p element");
  }

  function dragEnd(event) {
      console.log( "Finished dragging the p element.");
  }

  function allowDrop(event,i,j) {
      event.preventDefault();
  }

  function drop(event,x,y) {
      event.preventDefault();
      var data = event.dataTransfer.getData("dulce");
      Dulce=data.split(',');
      XInicial=Dulce[0];
      YInicial=Dulce[1];
      XFinal=x;
      YFinal=y;
      if(XInicial!=XFinal || YInicial!=YFinal){
        //if(XInicial-XFinal==1 || XFinal-XInicial==1 || YInicial-YFinal==1 || YFinal-YInicial==1){
        if((XInicial-XFinal==1 && YInicial-YFinal==0) || (XInicial-XFinal==0 && YInicial-YFinal==1) ||
           (XFinal-XInicial==1 && YFinal-YInicial==0) || (XFinal-XInicial==0 && YFinal-YInicial==1)){
          ContadorMovimientos++;
          document.getElementById('movimientos-text').innerHTML=ContadorMovimientos;
          var Dulce1=document.getElementById(data);
          var Dulce2=document.getElementById(x+","+y);
          var Temp=Dulce2.innerHTML;
          Dulce2.innerHTML=Dulce1.innerHTML;
          Dulce1.innerHTML=Temp;
          //if(false){
          if(EliminacionMovimiento(XFinal,YFinal)){
            var Temp=Dulce2.innerHTML;
            Dulce2.innerHTML=Dulce1.innerHTML;
            Dulce1.innerHTML=Temp;

          }
        }
      }
  }

  function EliminacionMovimiento(Fila,Col){
    var PosicionesEliminadas=[];
    var ReducirX=true;
    var ReducirY=true;
    var AumentarX=true;
    var AumentarY=true;
    PosicionesEliminadas.push(Fila+","+Col);
    var AdelanteX=Col;
    var AtrasX=Col;
    do{
    var Continuar=false;
    ReducirX=AtrasX>0;
    if(ReducirX){
    AtrasX--;
    }
    AumentarX=AdelanteX<6;
    if(AumentarX){
    AdelanteX++;
    }
    var Dulce1=document.getElementById(Fila+","+Col).innerHTML;
    var Dulce2=document.getElementById(Fila+","+AtrasX).innerHTML;
    if(Dulce1==Dulce2 && (Fila+","+Col)!=(Fila+","+AtrasX) && AtrasX){
      PosicionesEliminadas.push(Fila+","+AtrasX);
      Continuar=true;
    }

    Dulce2=document.getElementById(Fila+","+AdelanteX).innerHTML;
    if(Dulce1==Dulce2 && (Fila+","+Col)!=(Fila+","+AdelanteX) && AdelanteX){
      PosicionesEliminadas.push(Fila+","+AdelanteX);
      Continuar=true;
    }
    if(Continuar){
      if(!(ReducirX ||AumentarX )){
        Continuar=false;
      }
    }
  }while (Continuar)
  if(PosicionesEliminadas.length>=3){
    console.log("Eliminacion primera");
    Eliminacion=true;
  }else{
    PosicionesEliminadas=[];
  }
  if(PosicionesEliminadas.length==0){
      PosicionesEliminadas.push(Fila+","+Col);
      var AdelanteY=Fila;
      var AtrasY=Fila;
      do{
      var Continuar=false;

      ReducirY=AtrasY>0;
      if(ReducirY){
      AtrasY++;
      }

      AumentarY=AdelanteY<6;
      if(AumentarY){
      AdelanteY++;
      }
      var Dulce1=document.getElementById(Fila+","+Col).innerHTML;
      var Dulce2=document.getElementById(AtrasY+","+Col).innerHTML;
      if(Dulce1==Dulce2 && (Fila+","+Col)!=(AtrasY+","+Col) && AtrasY){
        PosicionesEliminadas.push(AtrasY+","+Col);
        Continuar=true;
      }

      Dulce2=document.getElementById(AdelanteY+","+Col).innerHTML;
      if(Dulce1==Dulce2 && (Fila+","+Col)!=(AdelanteY+","+Col) && AdelanteY){
        PosicionesEliminadas.push(AdelanteY+","+Col);
        Continuar=true;
      }
      if(Continuar){
        if(!(ReducirY ||AumentarY )){
          Continuar=false;
        }
      }
    }while (Continuar)
    if(PosicionesEliminadas.length>=3){
      console.log("Eliminacion Segunda");
      Eliminacion=true;
    }else{
      PosicionesEliminadas=[];
    }
  }
  if(Eliminacion){
    for(var i=0; i<PosicionesEliminadas.length;i++){
      document.getElementById(PosicionesEliminadas[i]).innerHTML="";
      ContadorPuntos+=20;
      document.getElementById('score-text').innerHTML=ContadorPuntos;
    }
      RemplazarDulces(PosicionesEliminadas);
  }
}

  function EliminaciónDulces(){
      var PosicionesEliminadas=[];
      var Eliminacion=false;
      var ReducirX=true;
      var ReducirY=true;
      var AumentarX=true;
      var AumentarY=true;
      for(var Fila=0;Fila<7;Fila++){
        for(var Col=0;Col<7;Col++){
          PosicionesEliminadas.push(Fila+","+Col);
          var AdelanteX=Col;
          do{
          var Continuar=false;
          AumentarX=AdelanteX<6;
          if(AumentarX){
          AdelanteX++;
          }
          var Dulce1=document.getElementById(Fila+","+Col).innerHTML;
          var Dulce2=document.getElementById(Fila+","+AdelanteX).innerHTML;
          if(Dulce1==Dulce2 && (Fila+","+Col)!=(Fila+","+AdelanteX) && AdelanteX){
            PosicionesEliminadas.push(Fila+","+AdelanteX);
            Continuar=true;
          }
          if(Continuar){
            if(!(ReducirX ||AumentarX )){
              Continuar=false;
            }
          }
        }while (Continuar)
        if(PosicionesEliminadas.length>=3){
          console.log("Eliminacion primera");
          Eliminacion=true;
          break;
        }else{
          PosicionesEliminadas=[];
        }
        if(PosicionesEliminadas.length==0){
            PosicionesEliminadas.push(Fila+","+Col);
            var AdelanteY=Fila;
            do{
            var Continuar=false;

            AumentarY=AdelanteY<6;
            if(AumentarY){
            AdelanteY++;
            }
            var Dulce1=document.getElementById(Fila+","+Col).innerHTML;
            var Dulce2=document.getElementById(AdelanteY+","+Col).innerHTML;
            if(Dulce1==Dulce2 && (Fila+","+Col)!=(AdelanteY+","+Col) && AdelanteY){
              PosicionesEliminadas.push(AdelanteY+","+Col);
              Continuar=true;
            }
            if(Continuar){
              if(!(ReducirY ||AumentarY )){
                Continuar=false;
              }
            }
          }while (Continuar)
          if(PosicionesEliminadas.length>=3){
            console.log("Eliminacion Segunda");
            Eliminacion=true;
            break;
          }else{
            PosicionesEliminadas=[];
          }
        }

        }
        if(Eliminacion){
          break;
        }
      }
      if(Eliminacion){
        for(var i=0; i<PosicionesEliminadas.length;i++){
          document.getElementById(PosicionesEliminadas[i]).innerHTML="";
          ContadorPuntos+=20;
          document.getElementById('score-text').innerHTML=ContadorPuntos;
        }
		      RemplazarDulces(PosicionesEliminadas);
      }
      RevisarJuego();
    }

	    function RemplazarDulces(PosicionesDulce){

      for(var i=0; i<PosicionesDulce.length;i++){
        var Coordenadas=PosicionesDulce[i].split(',');
        var X=Coordenadas[0];
        var Y=Coordenadas[1];
        var SiguienteY=Y;
          do
          {
            var Repetir=false;
            if(document.getElementById(X+","+Y).innerHTML==""){
               if(SiguienteY==0)
               {
                 document.getElementById(X+","+Y).innerHTML=GenerarDulce();
                 Repetir=false;
               }else{
               SiguienteY--;
               if(document.getElementById(X+","+SiguienteY).innerHTML!=""){
                 document.getElementById(X+","+Y).innerHTML=document.getElementById(X+","+SiguienteY).innerHTML;
                 document.getElementById(X+","+SiguienteY).innerHTML="";
                 PosicionesDulce.push(X+","+SiguienteY);
               }else{
                 Repetir=true;
               }
               }
           }
          }while (Repetir);
      }

    }
    function GenerarDulce(){
      NumeroDulce=Math.floor((Math.random()*6)+1);
      return '<img src="image/'+NumeroDulce+'.png">';
    }
