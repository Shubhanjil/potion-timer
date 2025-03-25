document.addEventListener("DOMContentLoaded", function () {
    const timerDisplay = document.getElementById("timeleft");
    const hiddenElements = document.querySelectorAll(".hidden");
    const p1 = document.getElementById("p1");
    const p3 = document.getElementById("p3");
    const p4 = document.getElementById("p4");

    let frame = 0; // Animation frame index
    let animationInterval;
    const alarmSound = new Audio("static/audio/notif.mp3");

    // Function to extract time from HTML (HH : MM : SS format)
    function getTimeFromHTML() {
        let timeParts = timerDisplay.textContent.split(" : ");
        let hours = parseInt(timeParts[0], 10);
        let minutes = parseInt(timeParts[1], 10);
        let seconds = parseInt(timeParts[2], 10);
        return hours * 3600 + minutes * 60 + seconds; // Convert to total seconds
    }

    let timeLeft = getTimeFromHTML(); // Get initial time from HTML

    function updateTimerDisplay() {
        let hours = Math.floor(timeLeft / 3600).toString().padStart(2, '0');
        let minutes = Math.floor((timeLeft % 3600) / 60).toString().padStart(2, '0');
        let seconds = (timeLeft % 60).toString().padStart(2, '0');
        timerDisplay.textContent = `${hours} : ${minutes} : ${seconds}`;
    }

    function startAnimation() {
        animationInterval = setInterval(() => {
            if (frame <= 11) {
                p3.src = `static/images/${frame}.png`;
                frame++;
            } else {
                frame = 0;
            }
        }, 200); // Change image every 500ms
    }

    startAnimation();

    let countdown = setInterval(() => {
        if (timeLeft > 0) {
            timeLeft--;
            updateTimerDisplay();
        } else {
            clearInterval(countdown);
            clearInterval(animationInterval);
            hiddenElements.forEach(el => el.classList.remove("hidden"));
            p1.style.display = "none";
            p3.style.display = "none";
            p4.classList.add("reveal");

            alarmSound.play();
        }
    }, 1000);

    updateTimerDisplay();
});
