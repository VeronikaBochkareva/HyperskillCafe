document.getElementById("reviewButton").addEventListener('click', (e) => {
    e.preventDefault()

    let title = document.getElementById('reviewTitle');
    let text = document.getElementById('reviewText');
    let name = document.getElementById('reviewName');

    if (title.value !== "" && text.value !== "") {
        let card = "";

        if (name.value === "") {
            name.value = "Anonymous"
        }

        card = `
             <div class="col-lg-4 col-md-6 py-3">
                        <div class="card h-100">
                            <div class="card-body">
                                <h4 class="card-title">${title.value}</h4>
                                <blockquote class="blockquote mb-0">
                                    <p>${text.value}</p>
                                    <footer class="text-end blockquote-footer"><i title="Source Title">${name.value}</i></footer>
                                </blockquote>
                            </div>
                        </div>
             </div>
    `

        document.getElementById('reviewsRow').innerHTML += card
    }


})