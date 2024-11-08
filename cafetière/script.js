document.getElementById("buttonMachine").addEventListener("click", function () {
  //Récupére la marque de la machine

  const machine = document.getElementById("machine").value;

  if (machine == "augusto") {
    document.getElementById("Reponse").textContent =
      " Tu fais partie de la team, toi ! ";
  } else {
    document.getElementById("Reponse").textContent =
      " Pas besoin de continuer, tu dégages ";
  }
});

document.getElementById("buttonCafe").addEventListener("click", function () {
  // Récupére la valeur au click du buttonCafe

  let cafe = document.getElementById("cafe").value;

  // Vérifier si la valeur est valide et afficher un message
  if (cafe >= 7 && cafe <= 8) {
    document.getElementById("reponse").textContent = " Tes un bon toi ! ";
  } else if (cafe <= 6) {
    document.getElementById("reponse").textContent =
      "Sérieux ? Bois de l'eau, ne t'embête pas !";
  } else {
    document.getElementById("reponse").textContent = "T'as pas mal au ventre ?";
  }
});
