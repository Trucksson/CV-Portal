document.addEventListener("DOMContentLoaded", function () {
    // Aktiverarr aktuell meny länk
    let currentPage = window.location.pathname.split("/").pop();
    let navLinks = document.querySelectorAll("nav ul li a");

    navLinks.forEach(link => {
        if (link.getAttribute("href") === currentPage) {
            link.classList.add("active");
        }
    });

    // Easteregg 1337 Peter Griffin
    let code = [];
    const secretCode = [49, 51, 51, 55];

    document.addEventListener("keydown", function (e) {
        code.push(e.keyCode);
        if (code.length > 4) code.shift();

        if (code.join() === secretCode.join()) {
            document.body.style.backgroundImage = "url('Pictures/PeterGriffin.jpg')";
            alert("Du vart just Peter Griffind");
        }
    });

    // Easteregg2 – Rock emoji klick
    const rockEmoji = document.getElementById("easteregg2");

    if (rockEmoji) {
        rockEmoji.addEventListener("click", function () {
            document.body.style.backgroundImage = "url('Pictures/GameOver.jpg')";
            document.body.style.backgroundSize = "cover";
            document.body.style.backgroundPosition = "center";
            document.body.style.backgroundAttachment = "fixed";
        });
    }
});
