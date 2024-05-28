/**change title to reflect current subject */
const currentSubjectEl = document.getElementById("current-subject");
const htmlSubjectBtn = document.getElementById("html-subject");
const cssSubjectBtn = document.getElementById("css-subject");
const jsSubjectBtn = document.getElementById("js-subject");
const reactSubjectBtn = document.getElementById("react-subject");
const miscSubjectBtn = document.getElementById("misc-subject");

const htmlSectionEl = document.getElementById("html-section");
const cssSectionEl = document.getElementById("css-section");
const jsSectionEl = document.getElementById("js-section");
const reactSectionEl = document.getElementById("react-section");
const miscSectionEl = document.getElementById("misc-section");

currentSubjectEl.textContent = htmlSubjectBtn.textContent;
htmlSectionEl.removeAttribute("hidden");

htmlSubjectBtn.addEventListener("click", function(){
    switchTitle(htmlSubjectBtn);
    
    htmlSectionEl.hidden = false;
    
    cssSectionEl.hidden = true;
    jsSectionEl.hidden = true;
    reactSectionEl.hidden = true;
    miscSectionEl.hidden = true;
});
cssSubjectBtn.addEventListener("click", function(){
    switchTitle(cssSubjectBtn);

    cssSectionEl.hidden = false;

    htmlSectionEl.hidden = true;
    jsSectionEl.hidden = true;
    reactSectionEl.hidden = true;
    miscSectionEl.hidden = true;
});
jsSubjectBtn.addEventListener("click", function(){
    switchTitle(jsSubjectBtn);

    jsSectionEl.hidden = false;
    
    htmlSectionEl.hidden = true;
    cssSectionEl.hidden = true;
    reactSectionEl.hidden = true;
    miscSectionEl.hidden = true;
});
reactSubjectBtn.addEventListener("click", function(){
    switchTitle(reactSubjectBtn);

    reactSectionEl.hidden = false;
    
    htmlSectionEl.hidden = true;
    cssSectionEl.hidden = true;
    jsSectionEl.hidden = true;
    miscSectionEl.hidden = true;
});
miscSubjectBtn.addEventListener("click", function(){
    switchTitle(miscSubjectBtn);

    miscSectionEl.hidden = false;

    htmlSectionEl.hidden = true;
    cssSectionEl.hidden = true;
    jsSectionEl.hidden = true;
    reactSectionEl.hidden = true;
});

function switchTitle(text) {
    currentSubjectEl.textContent = text.textContent;
}

/**Accordion */
let accordionContainer = document.getElementsByClassName("accordion");
let accordionName = document.getElementsByClassName("accordion-name");
let accordionArrow = document.getElementsByClassName("accordion-arrow");
let firstAccordionEl = document.getElementsByClassName("first-accordion");

for (let i = 0; i < accordionContainer.length; i++){
  accordionArrow[i].innerHTML = `<i class="fa-solid fa-angle-down"></i>`;
  accordionName[i].addEventListener("click", function() {
    let accordionContent = document.getElementsByClassName("inner-accordion-content");
    accordionName[i].classList.toggle("active");
    if (accordionContent[i].style.display === "block") {
      accordionContent[i].style.display = "none";
      accordionArrow[i].innerHTML = `<i class="fa-solid fa-angle-down"></i>`;
    } else {
      accordionContent[i].style.display = "block";
      accordionArrow[i].innerHTML = `<i class="fa-solid fa-angle-up"></i>`;
    }
  });
  
};
