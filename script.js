let orqa = prompt("Fon rangini kiriting");
let text = prompt("Matn rangini kiriting");

const array = ["lorem", "ipsum", "dolor", "sit", "amet", "consectetur", "adipiscing", "elit", "sed", "do", "eiusmod", "tempor", "incididunt", "ut", "labore", "et", "dolore", "magna", "aliqua"];

let randomText = '';
for (let i = 0; i < 5000; i++) {
    randomText += array[Math.floor(Math.random() * array.length)] + ' ';
}

document.body.style.backgroundColor = orqa;
document.body.innerHTML = `<p style="color: ${text}; font-size: 18px;">${randomText}</p>`;