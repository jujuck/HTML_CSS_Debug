const button = document.getElementById("cookie-button");

const hideBanner = () => {
  const banner = document.getElementById("cookie-banner");
  banner.style.display = "none";
};

button.addEventListener("click", hideBanner);
