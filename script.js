let yesButton = document.getElementById("yes");
let noButton = document.getElementById("no");
let size = 1;

function acceptLove() {
    document.body.innerHTML = `
        <div class="card">
            <h1>¡Sabía que dirías que sí! 💕🥰</h1>
            <p>¡Te quiero mucho! 💖</p>
        </div>
    `;
}

function resizeYes() {
    size += 0.3;
    yesButton.style.transform = `scale(${size})`;
}
