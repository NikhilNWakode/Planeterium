const img = document.querySelector(".img-div img");
const details = document.querySelector(".content-right p");
const description = document.querySelector(".description p");



function findObject() {
    // Get the input value
    const inputName = document.getElementById('nameInput').value;

    // Find the object with the matching name
    const foundObject = planets.find(obj => obj.name === inputName);

   

    if (foundObject) {
        // Print the object if found
        details.innerHTML =
         `<p>
         Planet Name: ${foundObject.name},<br>
         Mass: ${foundObject.mass},<br>
         Radius:${foundObject.radius},<br>
         Period: ${foundObject.period},<br>
         Distance_light_year: ${foundObject.distance_light_year},<br>
         Temperature: ${foundObject.temperature}.
        </p>`;
        if (inputName === "Earth") {
            const newSrc = `images/Earth.jpeg`;
            img.src = newSrc;
        }else if (inputName === "Jupiter") {
            const newSrc = `images/Jupiter.jpg`;
            img.src = newSrc;
        }
         else if (inputName === "Uranus"){
            const newSrc =`images/Uranus.png`;
            img.src = newSrc;
        }else if (inputName === "Saturn"){
            const newSrc = `images/Saturn.jpg`;
            img.src = newSrc;
        }else {
            const newSrc = `images/${foundObject.name}.webp`;
            img.src = newSrc;
        };
        description.textContent = foundObject.description;
    } else {
        // Print a message if not found
        details.innerHTML =`<p></p>`
        description.innerHTML = '<p>No matching object found.<br>Please Try Again...</p>';
        img.src ="";
    }
}
