function showError(year) {
  document.getElementById("portal").hidden = true;
  document.getElementById("error-page").hidden = false;

  document.getElementById("error-message").textContent =
    "The Pharm.D " + year +
    (year === 1 ? "st" : "nd") +
    " Year results service is temporarily unavailable.";
}

function goBack() {
  document.getElementById("error-page").hidden = true;
  document.getElementById("portal").hidden = false;
}
