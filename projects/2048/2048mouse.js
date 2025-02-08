document.addEventListener("DOMContentLoaded", () => {
    const grid = document.querySelector(".grid");
    let startX, startY, endX, endY;

    function handleSwipe() {
        let deltaX = endX - startX;
        let deltaY = endY - startY;

        if (Math.abs(deltaX) > Math.abs(deltaY)) {
            if (deltaX > 0) move("right");
            else move("left");
        } else {
            if (deltaY > 0) move("down");
            else move("up");
        }
    }

    function move(direction) {
        console.log("Move:", direction);
        // Add logic here to update the game grid
    }

    document.addEventListener("keydown", (e) => {
        switch (e.key) {
            case "ArrowUp": move("up"); break;
            case "ArrowDown": move("down"); break;
            case "ArrowLeft": move("left"); break;
            case "ArrowRight": move("right"); break;
        }
    });

    grid.addEventListener("touchstart", (e) => {
        startX = e.touches[0].clientX;
        startY = e.touches[0].clientY;
    });

    grid.addEventListener("touchend", (e) => {
        endX = e.changedTouches[0].clientX;
        endY = e.changedTouches[0].clientY;
        handleSwipe();
    });

    grid.addEventListener("click", () => {
        console.log("Click detected on the grid");
        // Implement click-based interaction if needed
    });
});
document.getElementById("retry-btn").addEventListener("click", function () {
    // Reset the grid
    const gridItems = document.querySelectorAll(".grid-item p");
    gridItems.forEach(item => item.textContent = ""); // Clear all tiles

    // Reset the score
    document.querySelector(".score-value").textContent = "0";

    // Initialize a new game (you may need to replace this with your actual game initialization function)
    if (typeof initializeGame === "function") {
        initializeGame();
    }
});
