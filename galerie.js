document.addEventListener("DOMContentLoaded", function () {

  var gallery = document.getElementById("gallery");
  var allItems = Array.from(gallery.querySelectorAll(".gallery-item"));
  var lightbox = document.getElementById("lightbox");
  var lightboxImg = lightbox.querySelector(".lightbox-img");
  var lightboxCaption = lightbox.querySelector(".lightbox-caption");
  var closeBtn = lightbox.querySelector(".lightbox-close");
  var itemsPerPage = 5;
  var currentPage = 1;
  var currentFilter = "all";

  /* ===== PAGINATION + FILTRES ===== */
  function getFilteredItems() {
    if (currentFilter === "all") return allItems;
    return allItems.filter(function (item) {
      return item.getAttribute("data-category") === currentFilter;
    });
  }

  function render() {
    var filtered = getFilteredItems();
    var totalPages = Math.max(1, Math.ceil(filtered.length / itemsPerPage));

    if (currentPage > totalPages) currentPage = totalPages;

    var start = (currentPage - 1) * itemsPerPage;
    var end = start + itemsPerPage;

    allItems.forEach(function (item) { item.style.display = "none"; });

    filtered.slice(start, end).forEach(function (item) {
      item.style.display = "block";
    });

    var pageBtns = document.querySelectorAll(".page-btn");
    pageBtns.forEach(function (btn) {
      var p = parseInt(btn.getAttribute("data-page"));
      if (p <= totalPages) {
        btn.style.display = "inline-block";
        btn.classList.toggle("active", p === currentPage);
      } else {
        btn.style.display = "none";
      }
    });
  }

  document.querySelectorAll(".page-btn").forEach(function (btn) {
    btn.addEventListener("click", function () {
      currentPage = parseInt(btn.getAttribute("data-page"));
      render();
    });
  });

  render();

  /* ===== LIGHTBOX ===== */
  allItems.forEach(function (item) {
    item.addEventListener("click", function () {
      var img = item.querySelector("img");
      var title = item.querySelector(".overlay h3");
      lightboxImg.src = img.src;
      lightboxImg.alt = img.alt;
      lightboxCaption.textContent = title ? title.textContent : "";
      lightbox.classList.add("open");
    });
  });

  function closeLightbox() {
    lightbox.classList.remove("open");
  }

  closeBtn.addEventListener("click", closeLightbox);
  lightbox.addEventListener("click", function (e) {
    if (e.target === lightbox) closeLightbox();
  });
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") closeLightbox();
  });

  /* ===== FILTERS ===== */
  document.querySelectorAll(".filter-btn").forEach(function (btn) {
    btn.addEventListener("click", function () {
      document.querySelectorAll(".filter-btn").forEach(function (b) { b.classList.remove("active"); });
      btn.classList.add("active");
      currentFilter = btn.getAttribute("data-filter");
      currentPage = 1;
      render();
    });
  });
});