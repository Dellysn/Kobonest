
/*
@params(toggle) 
*/  
const faqList = document.querySelectorAll(".list-group-item > a");
const faqListArray = [...faqList];
faqListArray.forEach(faq => {
  faq.addEventListener("click", e => {
    let li = faq.parentElement;
    let i = faq.children[1];
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


/*
@params (accordion arrows) changing directions
@params (Initial accordion) element tweak
*/ 

var initial = document.querySelector("#initial-arrow");
if (initial.classList.contains("active")) {
  this.classList.remove("active");
  initial.classList.add("inactive");
}else{
  initial.classList.add("active");
}
