  function InicioJuego(){
    Concurrent.Thread.create(ControlTiempo);
    Concurrent.Thread.create(DibujarTablero);
    setTimeout(function(){ RevisarJuego(); }, 1000);
  }

  function RevisarJuego(){
    Concurrent.Thread.create(EliminaciónDulces);
  }
