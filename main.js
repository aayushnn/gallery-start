const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

let light = false;

/* Declaring the array of image filenames */
const filenames = ["pic1.jpg", "pic2.jpg", "pic3.jpg", "pic4.jpg", "pic5.jpg"];

/* Declaring the alternative text for each image file */
const altText = {pic1:"Closeup of a human eye", 
                pic2:"Closeup of painting", 
                pic3:"Purple flowers", 
                pic4:"Ancient Egyptian art", 
                pic5:"A brown and white butterfly"};

/* Looping through images */
for (const file of filenames) {
    altSub = file.slice(0, 4);
    const elem = document.createElement("img");

    elem.src = `images/${file}`;
    elem.setAttribute("alt", altSub);

    elem.addEventListener("click", () => {
        displayedImage.src = elem.src;
        displayedImage.setAttribute("alt", altSub);
    })

    thumbBar.appendChild(elem);
}

/* Wiring up the Darken/Lighten button */
btn.addEventListener("click", () => {
    if(light) {
        overlay.style.backgroundColor = "rgba(0,0,0,0)";
        btn.textContent = "Darken";
        light = false;
    } else {
        overlay.style.backgroundColor = "rgba(0,0,0,0.5)";
        btn.textContent = "Lighten";
        light = true;
    }
})
