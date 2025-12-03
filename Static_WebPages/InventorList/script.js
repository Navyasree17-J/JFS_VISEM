function showInventor() {
    const select = document.getElementById("inventorSelect").value;
    const image = document.getElementById("inventorImage");
    const details = document.getElementById("inventorDetails");
    const imageBox = document.querySelector(".image-circle");

    const data = {
        guido: {
            img: "images/guido.jpg",
            text: "Inventor of Python.\nFocused on simplicity.\nReleased in 1991."
        },
        dennis: {
            img: "images/dennis.jpg",
            text: "Inventor of C language.\nCo-creator of UNIX.\nSystem programming pioneer."
        },
        james: {
            img: "images/james.jpg",
            text: "Inventor of Java.\nPlatform independent.\nWidely used language."
        },
        bjarne: {
            img: "images/bjarne.jpg",
            text: "Inventor of C++.\nObject-oriented extension of C.\nHigh-performance language."
        },
        brendan: {
            img: "images/brendan.jpg",
            text: "Inventor of JavaScript.\nUsed for web development.\nCreated in 1995."
        },
        linus: {
            img: "images/linus.jpg",
            text: "Creator of Linux.\nOpen-source kernel.\nInfluential in OS design."
        },
        john: {
            img: "images/john.jpg",
            text: "Inventor of LISP.\nAI pioneer.\nCoined the term AI."
        },
        niklaus: {
            img: "images/niklaus.jpg",
            text: "Inventor of Pascal.\nFocused on structured programming.\nEducational language."
        },
        ken: {
            img: "images/ken.jpg",
            text: "Co-creator of UNIX.\nB language inventor.\nInfluenced C."
        },
        rasmus: {
            img: "images/rasmus.jpg",
            text: "Inventor of PHP.\nServer-side scripting.\nWeb applications."
        }
    };

    if (select === "") {
        image.src = "";
        details.innerText = "";
        imageBox.style.borderRadius = "50%"; // reset to circle
        return;
    }

    // Set image & text
    image.src = data[select].img;
    details.innerText = data[select].text;

    // Special condition for James Gosling
    if (select === "james") {
        imageBox.style.borderRadius = "0";   // square
    } else {
        imageBox.style.borderRadius = "50%"; // circle
    }
}
