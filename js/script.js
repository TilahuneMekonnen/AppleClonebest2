// $(document).ready(function () {
if ($(window).width() <= 768) {
  $(".footer-links-wrapper h3").click(function () {
    $(this).next("ul").slideToggle(500);
    $(this).toggleClass("active");
  });
}
// });

// document.addEventListener("DOMContentLoaded", function () {
//   if (window.innerWidth <= 768) {
//     document
//       .querySelectorAll(".footer-links-wrapper h3")
//       .forEach(function (header) {
//         header.addEventListener("click", function () {
//           let list = this.nextElementSibling;
//           if (list.style.display === "none" || list.style.display === "") {
//             list.style.display = "block";
//             list.style.transition = "all 0.5s ease"; // Toggle speed
//             this.classList.add("active");
//           } else {
//             list.style.display = "none";
//             this.classList.remove("active");
//           }
//         });
//       });
//   }
// });
