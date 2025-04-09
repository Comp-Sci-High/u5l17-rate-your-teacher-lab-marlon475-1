// Add an event listener to the form that upon submits creates a new rating
const createForm = document.querySelector("form")

createForm.addEventListener("submit", async(e)=>{
	e.preventDefault()

    const formData = new FormData(createForm)
	const reqBody = Object.fromEntries(formData)

    const response = await fetch('/add/rating', {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(reqBody)
    })
})

// When the rating is created redirect to the ratings page
window.location.href = "/teachers"