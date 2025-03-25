window.addEventListener("DOMContentLoaded", () => {
    const closeBtn = document.getElementById("close-btn");
    const startBtn = document.getElementById("start-btn");
    const poisonivyclicked = document.getElementById("PoisonIvy");
    const snakeweedclicked = document.getElementById("SnakeWeed");
    const nightshadeclicked = document.getElementById("NightShade");
    const youthelixirclicked = document.getElementById("YouthElixir");
    const backBtn = document.getElementById("back-btn");
    const backToIndexBtn = document.getElementById("backtoindex-btn");

    if (closeBtn) {
        closeBtn.addEventListener("click", () => {
            window.close(); // Closes the window
        });
    }

    if (startBtn) {
        startBtn.addEventListener("click", () => {
            window.location.href = "menu.html"; // Opens menu.html in the same window
        });
    }

    if (poisonivyclicked) {
        poisonivyclicked.addEventListener("click", () => {
            window.location.href = "poisonivy.html"; // Opens menu.html in the same window
        });
    }

    if (snakeweedclicked) {
        snakeweedclicked.addEventListener("click", () => {
            window.location.href = "snakeweed.html"; // Opens menu.html in the same window
        });
    }

    if (nightshadeclicked) {
        nightshadeclicked.addEventListener("click", () => {
            window.location.href = "nightshade.html"; // Opens menu.html in the same window
        });
    }

    if (youthelixirclicked) {
        youthelixirclicked.addEventListener("click", () => {
            window.location.href = "youthelixir.html"; // Opens menu.html in the same window
        });
    }

    if (backBtn) {
        backBtn.addEventListener("click", () => {
            window.location.href = "menu.html";
        });
    }

    if (backToIndexBtn) {
        backToIndexBtn.addEventListener("click", () => {
            window.location.href = "index.html";
        });
    }
});
