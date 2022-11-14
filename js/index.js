// grab elements from the DOM
const wrappers = document.querySelectorAll(".question-wrapper")
const questions = document.querySelectorAll("h3")
const answers = document.querySelectorAll(".answer")

// toggle function
function toggleAccordion() {
    // parent node of the clicked element
    const parent = this.parentNode
    wrappers.forEach(wrapper => {
        if(parent == wrapper) {

            answers.forEach(answer => {

                if(answer.parentNode == parent) {
                    answer.toggleAttribute("hidden")
                    return
                }                
                answer.hidden = true
            })
            parent.classList.toggle("active")
            return 
        }
        wrapper.classList.remove("active")
    })
}

// Listen for a click on questions and call the toggle function
questions.forEach(question => question.addEventListener("click", toggleAccordion))

