document.addEventListener("DOMContentLoaded", () => {
  // Header part
  const header = document.getElementById("headerPart");
  if (header) {
    fetch("/header.html")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.text();
      })
      .then((data) => {
        header.innerHTML = data;
      })
      .catch((error) => console.error("Error loading header:", error));
  }

  // Footer part
  const footer = document.getElementById("footerPart");
  if (footer) {
    fetch("/footer.html")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.text();
      })
      .then((data) => {
        footer.innerHTML = data;
      })
      .catch((error) => console.error("Error loading footer:", error));
  }
});
