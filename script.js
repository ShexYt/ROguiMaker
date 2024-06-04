document.addEventListener("DOMContentLoaded", () => {
    const dialog = document.getElementById("dialog");
    const yesButton = document.getElementById("yesButton");
    const noButton = document.getElementById("noButton");

    function moveDialogRandomly() {
        const randomX = Math.floor(Math.random() * (window.innerWidth - dialog.clientWidth));
        const randomY = Math.floor(Math.random() * (window.innerHeight - dialog.clientHeight));
        dialog.style.left = `${randomX}px`;
        dialog.style.top = `${randomY}px`;
    }

    yesButton.addEventListener("click", () => {
        moveDialogRandomly();
    });

    noButton.addEventListener("click", () => {
        alert("Okay, take your time!");
    });

    moveDialogRandomly();
});
                                                    
