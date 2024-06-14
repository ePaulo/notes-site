$("#html-section").load("./htmlNotes.html", {}, () => {
    const htmlSubjectBtn = document.getElementById("html-subject");
    const htmlSectionEl = document.getElementById("html-section");
    htmlSubjectBtn.addEventListener('click', () =>
        switchTitle(htmlSubjectBtn, htmlSectionEl),
        // $("#html-section").load("htmlNotes.html")
    )
    // Do all the things that reference the dom in this file
    // Functions used by click listeners and events that willf ire later can be outside
});

/**change title to reflect current subject */
//DOM references for buttons

const cssSubjectBtn = document.getElementById("css-subject");
const jsSubjectBtn = document.getElementById("js-subject");
const firebaseSubjectBtn = document.getElementById("firebase-subject");
const reactSubjectBtn = document.getElementById("react-subject");
const codeReviewSubjectBtn = document.getElementById("code-reviews-subject");
const miscSubjectBtn = document.getElementById("misc-subject");

//DOM references for sections
const cssSectionEl = document.getElementById("css-section");
const jsSectionEl = document.getElementById("js-section");
const firebaseSectionEl = document.getElementById("firebase-section");
const reactSectionEl = document.getElementById("react-section");
const codeReviewSectionEl = document.getElementById("code-review-section");
const miscSectionEl = document.getElementById("misc-section");

//DOM reference for current subject
const currentSubjectEl = document.getElementById("current-subject");

console.log(htmlSubjectBtn)

//Initial state
currentSubjectEl.textContent = htmlSubjectBtn.textContent;
htmlSectionEl.removeAttribute("hidden");

//Event listeners


cssSubjectBtn.addEventListener('click', () =>
    switchTitle(cssSubjectBtn, cssSectionEl),
)

jsSubjectBtn.addEventListener('click', () =>
    switchTitle(jsSubjectBtn, jsSectionEl),
)

firebaseSubjectBtn.addEventListener('click', () =>
    switchTitle(firebaseSubjectBtn, firebaseSectionEl),
)

reactSubjectBtn.addEventListener('click', () =>
    switchTitle(reactSubjectBtn, reactSectionEl),
)

codeReviewSubjectBtn.addEventListener('click', () =>
    switchTitle(codeReviewSubjectBtn, codeReviewSectionEl),
)

miscSubjectBtn.addEventListener('click', () =>
    switchTitle(miscSubjectBtn, miscSectionEl),
)

// Functions
function switchTitle(subjectBtn, sectionEl) {
    currentSubjectEl.textContent = subjectBtn.textContent

    htmlSectionEl.hidden = true
    cssSectionEl.hidden = true
    jsSectionEl.hidden = true
    firebaseSectionEl.hidden = true
    reactSectionEl.hidden = true
    codeReviewSectionEl.hidden = true
    miscSectionEl.hidden = true

    sectionEl.hidden = false
}

/**Accordion */
let accordionContainer = document.getElementsByClassName("accordion");
let accordionName = document.getElementsByClassName("accordion-name");
let accordionArrow = document.getElementsByClassName("accordion-arrow");
let firstAccordionEl = document.getElementsByClassName("first-accordion");
let firstAccordionArrow = document.getElementsByClassName("first-arrow");

for (let i = 0; i < accordionContainer.length; i++) {
    accordionArrow[i].innerHTML = `<i class="fa-solid fa-angle-down"></i>`;
    accordionName[i].addEventListener("click", function () {
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


/***TODOs
 * 1. take mentos advice and refactor notes
 * 2. set up notes to use separate pages
 * 3. set up firebase for inputs
 * 4. move header menu
 * 5. refactor background to be in separate div
 * 6. make mobile friendly
 * 7. make mobile "app"
 */