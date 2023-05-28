function trocarIcone(elementId) {
    var iconeElement = document.getElementById("favorito" + elementId);
    if (iconeElement.classList.contains("bi-heart-fill")) {
      iconeElement.classList.remove("bi-heart-fill");
      iconeElement.classList.add("bi-heart");
    } else {
      iconeElement.classList.remove("bi-heart");
      iconeElement.classList.add("bi-heart-fill");
    }
  }
  
  