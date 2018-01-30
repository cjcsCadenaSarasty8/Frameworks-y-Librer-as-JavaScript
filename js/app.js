
  function DibujarTablero(){
    var Contenido=new Array(7);
    var NumeroDulce=0;
    var Retorno="";
    for(var i=0;i<7;i++)
    {
      Contenido[i]=new Array(7);
      Retorno="";
      for(var j=0;j<7;j++)
      {
        NumeroDulce=Math.floor((Math.random()*4)+1);
        if(j<0){
          Contenido[i][j]='<div class="droptarget" ondrop="drop(event)" ondragover="allowDrop(event)"></div>';
        }else{
          Contenido[i][j]='<div class="droptarget" ondrop="drop(event)" ondragover="allowDrop(event)"><div ondragstart="dragStart(event)" ondragend="dragEnd(event)" draggable="true"><img id="'+i+','+j+'" src="./image/'+NumeroDulce+'.png"></div></div>';
        }
        Retorno+=Contenido[i][j];
      }
      var Columna=document.getElementsByClassName('col-'+(i+1));
      Columna[0].innerHTML='<div class="container" width="100%" height="100%">'+Retorno+'</div>';
    }
    //eval(dragable);
    console.log(Contenido[5]);
  }
  var prueba="alert('hola');";

var dragable='$(function(){'+
    '$(".caja").draggable()'+
    '$(".contenedor")'+
      '.droppable({'+
        'accept: ".izq",'+
        'drop: function(event, ui){'+
          '$(this).addClass("ui-state-highlight")'+
          'alert("Correcto!")'+
        '}'+
      '});';
