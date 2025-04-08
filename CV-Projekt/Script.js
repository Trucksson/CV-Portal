document.addEventListener("DOMContentLoaded", function () {
    // Aktiverar aktuell meny länk
    let currentPage = window.location.pathname.split("/").pop();
    let navLinks = document.querySelectorAll("nav ul li a");

    navLinks.forEach(link => {
        if (link.getAttribute("href") === currentPage) {
            link.classList.add("active");
        }
    });

    // Hitta rätt path 
    let pathPrefix = window.location.pathname.includes("CV-Projekt") ? "" : "CV-Projekt/";

    // Peter Griffin Easteregg
    let inputBuffer = "";

    document.addEventListener("keydown", function (event) {
        inputBuffer += event.key;
        if (inputBuffer.length > 4) {
            inputBuffer = inputBuffer.slice(-4);
        }

        if (inputBuffer.includes("1337")) {
            document.body.style.backgroundImage = `url('${pathPrefix}Pictures/PeterGriffin.jpg')`;
            document.body.style.backgroundSize = "cover";

            alert("Du vart just Peter Griffind");
            inputBuffer = "";
        }
    });

    // Rock Emoji easter egg (klick)
    const rockEmoji = document.getElementById("easteregg2");

    if (rockEmoji) {
        rockEmoji.addEventListener("click", function () {
            document.body.style.backgroundImage = `url('${pathPrefix}Pictures/GameOver.jpg')`;
            document.body.style.backgroundSize = "cover";

        });
    }
});
