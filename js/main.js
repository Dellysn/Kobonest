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

// var active = null;

// $(".list-group li >  a").click(function(evt) {
//   active = $(this).attr("class");
//   console.log(this);
//   if (active != null) {
//     $("a." + active).focus();
//   }
// });
// $("body").click(function(evt) {});

const faqList = document.querySelectorAll(".list-group-item > a");
// console.log(faqList);
//
const faqListArray = [...faqList];
console.log(faqListArray);

faqListArray.forEach(faq => {
  faq.addEventListener("click", e => {
    let li = faq.parentElement;
    let i = faq.children[1];
    console.log(i);
    if (li.classList.contains("active")) {
      li.classList.remove("active");
      i.style.display = "none";
    } else {
      li.classList.add("active");
      i.style.display = "block";
    }
  });
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
