// Add an event listener to the form that upon submits creates a new teacher
const createForm = document.querySelector("form")

createForm.addEventListener("submit", async(e)=>{
	e.preventDefault()

    const formData = new FormData(createForm)
	const reqBody = Object.fromEntries(formData)

    const response = await fetch('/add/teacher', {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(reqBody)
    })
})

// When the teacher is created redirect to the teachers page
window.location.href = "/teachers"