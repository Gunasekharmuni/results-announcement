let requestTimer = null;

function showError(year) {
  const portal = document.getElementById("portal");
  const loading = document.getElementById("loading-page");
  const errorPage = document.getElementById("error-page");
  const progressBar = document.getElementById("progress-bar");

  if (requestTimer) clearTimeout(requestTimer);

  portal.hidden = true;
  errorPage.hidden = true;
  loading.hidden = false;

  document.getElementById("loading-message").textContent =
    `Connecting to the Pharm.D ${year}${year === 1 ? "st" : "nd"} Year results service…`;

  progressBar.style.transition = "none";
  progressBar.style.width = "0%";
  void progressBar.offsetWidth;
  progressBar.style.transition = "width 4.5s linear";

  requestAnimationFrame(() => { progressBar.style.width = "100%"; });

  requestTimer = setTimeout(() => {
    loading.hidden = true;
    document.getElementById("error-message").textContent =
      `The Pharm.D ${year}${year === 1 ? "st" : "nd"} Year results service is temporarily unavailable.`;
    errorPage.hidden = false;
    requestTimer = null;
  }, 5000);
}

function goBack() {
  if (requestTimer) {
    clearTimeout(requestTimer);
    requestTimer = null;
  }
  document.getElementById("loading-page").hidden = true;
  document.getElementById("error-page").hidden = true;
  document.getElementById("portal").hidden = false;
}
