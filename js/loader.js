window.addEventListener("load", () => {
  document.body.classList.add("page-loaded");
  const loader = document.getElementById("page-loader");
  if (loader) loader.classList.add("hidden");
});

// Smooth page transition
document.querySelectorAll("a[href]").forEach(link => {
  const url = link.getAttribute("href");
  if (url && !url.startsWith("#") && !url.startsWith("http")) {
    link.addEventListener("click", e => {
      e.preventDefault();
      document.body.classList.remove("page-loaded");
      setTimeout(() => {
        window.location.href = url;
      }, 300);
    });
  }
});
