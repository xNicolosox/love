function responderSim() {
    window.location.replace("felicidade.html");
  }
  
  function responderNao() {
    var naoBtn = document.getElementById("nao");
    naoBtn.style.position = "absolute";
    naoBtn.style.left = Math.floor(Math.random() * (window.innerWidth - naoBtn.offsetWidth)) + "px";
    naoBtn.style.top = Math.floor(Math.random() * (window.innerHeight - naoBtn.offsetHeight)) + "px";
  }
  
  