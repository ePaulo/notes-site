/**change title to reflect current subject */
const currentSubjectEl = document.getElementById("current-subject");
const htmlSubjectBtn = document.getElementById("html-subject");
const cssSubjectBtn = document.getElementById("css-subject");
const jsSubjectBtn = document.getElementById("js-subject");
const firebaseSubjectBtn = document.getElementById("firebase-subject");
const reactSubjectBtn = document.getElementById("react-subject");
const codeReviewSubjectBtn = document.getElementById("code-reviews-subject");
const miscSubjectBtn = document.getElementById("misc-subject");

const htmlSectionEl = document.getElementById("html-section");
const cssSectionEl = document.getElementById("css-section");
const jsSectionEl = document.getElementById("js-section");
const firebaseSectionEl = document.getElementById("firebase-section");
const reactSectionEl = document.getElementById("react-section");
const codeReviewSectionEl = document.getElementById("code-review-section");
const miscSectionEl = document.getElementById("misc-section");

currentSubjectEl.textContent = htmlSubjectBtn.textContent;
htmlSectionEl.removeAttribute("hidden");

htmlSubjectBtn.addEventListener("click", function(){
    switchTitle(htmlSubjectBtn);
    
    htmlSectionEl.hidden = false;
    
    cssSectionEl.hidden = true;
    jsSectionEl.hidden = true;
    firebaseSectionEl.hidden = true;
    reactSectionEl.hidden = true;
    codeReviewSectionEl.hidden = true;
    miscSectionEl.hidden = true;
});

cssSubjectBtn.addEventListener("click", function(){
    switchTitle(cssSubjectBtn);

    cssSectionEl.hidden = false;

    htmlSectionEl.hidden = true;
    jsSectionEl.hidden = true;
    firebaseSectionEl.hidden = true;
    reactSectionEl.hidden = true;
    codeReviewSectionEl.hidden = true;
    miscSectionEl.hidden = true;
});

jsSubjectBtn.addEventListener("click", function(){
    switchTitle(jsSubjectBtn);

    jsSectionEl.hidden = false;
    
    htmlSectionEl.hidden = true;
    cssSectionEl.hidden = true;
    firebaseSectionEl.hidden = true;
    reactSectionEl.hidden = true;
    codeReviewSectionEl.hidden = true;
    miscSectionEl.hidden = true;
});

firebaseSubjectBtn.addEventListener("click", function(){
  switchTitle(firebaseSubjectBtn);

  firebaseSectionEl.hidden = false;
  
  htmlSectionEl.hidden = true;
  cssSectionEl.hidden = true;
  jsSectionEl.hidden = true;
  reactSectionEl.hidden = true;
  codeReviewSectionEl.hidden = true;
  miscSectionEl.hidden = true;
});

reactSubjectBtn.addEventListener("click", function(){
    switchTitle(reactSubjectBtn);

    reactSectionEl.hidden = false;
    
    htmlSectionEl.hidden = true;
    cssSectionEl.hidden = true;
    jsSectionEl.hidden = true;
    firebaseSectionEl.hidden = true;
    codeReviewSectionEl.hidden = true;
    miscSectionEl.hidden = true;
});

codeReviewSubjectBtn.addEventListener("click", function(){
    switchTitle(codeReviewSubjectBtn);

    codeReviewSectionEl.hidden = false;
    
    htmlSectionEl.hidden = true;
    cssSectionEl.hidden = true;
    jsSectionEl.hidden = true;
    firebaseSectionEl.hidden = true;
    reactSectionEl.hidden = true;
    miscSectionEl.hidden = true;
});

miscSubjectBtn.addEventListener("click", function(){
    switchTitle(miscSubjectBtn);

    miscSectionEl.hidden = false;

    htmlSectionEl.hidden = true;
    cssSectionEl.hidden = true;
    jsSectionEl.hidden = true;
    firebaseSectionEl.hidden = true;
    codeReviewSectionEl.hidden = true;
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
let firstAccordionArrow = document.getElementsByClassName("first-arrow");

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

for (let i = 0; i < firstAccordionArrow.length; i++) {
    firstAccordionArrow[i].innerHTML = `<i class="fa-solid fa-angle-up"></i>`; 
}

/***LOADS CONTENT */
$(function(){
  $("#html-section").load("htmlNotes.html"); 
});

$(function(){
  $("#css-section").load("cssNotes.html"); 
});

$(function(){
  $("#js-section").load("jsNotes.html"); 
});

$(function(){
  $("#firebase-section").load("firebaseNotes.html"); 
});

$(function(){
  $("#react-section").load("reactNotes.html"); 
});

$(function(){
  $("#code-reviews-section").load("codeReviewsNotes.html"); 
});

$(function(){
  $("#misc-section").load("miscNotes.html"); 
});


/***TODOs
 * 1. take mentos advice and refactor notes
 * 2. set up notes to use separate pages
 * 3. set up firebase for inputs
 * 4. move header menu
 * 5. refactor background to be in separate div
 * 6. make mobile friendly
 * 7. make mobile "app"
 */