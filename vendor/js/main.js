document.querySelectorAll("h5 a").forEach(function(elem) {
  document.addEventListener("click", function(e) {
    if (!e.target.matches(".collapsed")) {
      return;
    } else {
      if (elem.classList.contains("collapsed")) {
        elem.classList.add("active");
        console.log("Yes");
      }
    }
  });
});
