/* =====================================
   OPEN BIRTHDAY MESSAGE
===================================== */

function openLetter() {

    const letter =
        document.getElementById("letter");

    letter.classList.add("show-section");

    setTimeout(() => {

        letter.scrollIntoView({
            behavior: "smooth"
        });

    }, 150);

}


/* =====================================
   SCROLL REVEAL
===================================== */

const sections =
    document.querySelectorAll(".hidden-section");

const observer =
    new IntersectionObserver(

        (entries) => {

            entries.forEach((entry) => {

                if (entry.isIntersecting) {

                    entry.target.classList.add(
                        "show-section"
                    );

                }

            });

        },

        {
            threshold: 0.15
        }

    );


sections.forEach((section) => {

    observer.observe(section);

});


/* =====================================
   MUSIC
===================================== */

const music =
    document.getElementById(
        "birthdayMusic"
    );

const playButton =
    document.getElementById(
        "playButton"
    );


function toggleMusic() {

    if (music.paused) {

        music.play();

        playButton.textContent = "❚❚";

    } else {

        music.pause();

        playButton.textContent = "▶";

    }

}


/* Reset button when song finishes */

music.addEventListener(
    "ended",
    () => {

        playButton.textContent = "▶";

    }
);


/* =====================================
   FLOATING HEARTS
===================================== */

const heartsContainer =
    document.querySelector(
        ".hearts-container"
    );


function createHeart() {

    const heart =
        document.createElement("div");

    heart.classList.add(
        "floating-heart"
    );

    heart.innerHTML =
        Math.random() > 0.5
            ? "♥"
            : "♡";

    heart.style.left =
        Math.random() * 100 + "%";

    heart.style.fontSize =
        12 + Math.random() * 18 + "px";

    heart.style.animationDuration =
        5 + Math.random() * 6 + "s";

    heartsContainer.appendChild(
        heart
    );


    setTimeout(() => {

        heart.remove();

    }, 11000);

}


/* Create hearts periodically */

setInterval(
    createHeart,
    700
);


/* =====================================
   REPLAY
===================================== */

function replayWebsite() {

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });


    music.pause();

    music.currentTime = 0;

    playButton.textContent = "▶";

}