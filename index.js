const reset = document.querySelector("#reset");
const send = document.querySelector("#send")

function resetPage(){
    return confirm("All process will be lost. Do you want to continue?")
}

function sendForm(){
    return confirm("The job application will be submitted. Do you confirm?")
}