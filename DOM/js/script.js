// your JavaScript file
const container = document.querySelector("#container");

const content = document.createElement("div");
content.classList.add("content");
content.textContent = "This is the glorious text-content!";

const par = document.createElement("p");
par.classList.add("par");
par.textContent = "Hey I'm red!";
par.style.color = "red";

const header3 = document.createElement("h3");
header3.textContent = "I'm a blue h3!";
header3.style.color = "blue";

const content2 = document.createElement("div");
content2.classList.add("content2");
content2.style.border = "5px solid black";

const header1 = document.createElement("h1");
header1.textContent = "I'm in a div";

const btn = document.querySelector("#btn");
btn.onclick = () => alert("Hello World");

const btn2 = document.querySelector("#btn2");
btn2.addEventListener("click", () => {
    alert("Hello World 2!");
});

btn.addEventListener("click", function (e) {
  e.target.style.background = "blue";
});

container.append(content, par, header3, content2);
content2.append(header1)
