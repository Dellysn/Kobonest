// const faqList = document.querySelectorAll(".btn-group");
// console.log(faqList);
// faqList.forEach(list => {
//   list.addEventListener("click", function(e) {
//     const elem = e.target.parentElement;
//     elem.style.backgroundColor = "red";
//     const elemNext = e.target.nextElementSibling;
//     elemNext.style.color = "blue";
//   });
// });

faqBtn = document.querySelectorAll(".list-group-item");

faqBtn.forEach(faq => {
  faq.addEventListener(
    "click",
    e => {
      let active = document.querySelector(".active");
      if (e === null) {
        active.classList.add("active");
        console.log("remove");
      }
      e.target.className = "active";
    },
    false
  );
});

const collapse = document.querySelectorAll(" h5 [data-toggle]");

/*
@params (collapse) converted into  (collapseArray)
*/

const collapseArray = [...collapse];

collapseArray.forEach(collapse => {
  collapse.addEventListener("click", function(e) {
    const i = collapse.nextElementSibling;
    if (i.classList.contains("active")) {
      i.classList.remove("active");
    } else {
      i.classList.add("active");
    }
  });
});
// nextElementSibling
