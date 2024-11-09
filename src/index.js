import "./styles.css";

const form = document.getElementById("carbonForm");
const input = document.querySelector("input");
const currentFootprint = document.getElementById("currentFootprint");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  let yearCarbonFootprint = input.value;

  currentFootprint.textContent = `Carbon Footprint (metric tons): ${yearCarbonFootprint}`;

  const tips = document.getElementById("tips");

  const tip1 = document.createElement("div");
  tip1.classList.add("tip");

  const p1 = document.createElement("p");
  p1.textContent = "Plant a tree and save 22kg of carbon dioxide per year";

  const button1 = document.createElement("button");
  button1.textContent = "Complete";

  button1.addEventListener("click", () => {
    yearCarbonFootprint = yearCarbonFootprint - 0.022;
    currentFootprint.textContent = `Carbon Footprint (metric tons): ${yearCarbonFootprint}`;
  });

  tip1.appendChild(p1);
  tip1.appendChild(button1);

  const tip2 = document.createElement("div");
  tip2.classList.add("tip");

  const p2 = document.createElement("p");
  p2.textContent =
    "Reduce your meat and dairy intake by 50% and save 1500kg of carbon dioxide per year";

  const button2 = document.createElement("button");
  button2.textContent = "Complete";

  button2.addEventListener("click", () => {
    yearCarbonFootprint = yearCarbonFootprint - 1.5;
    currentFootprint.textContent = `Carbon Footprint (metric tons): ${yearCarbonFootprint}`;
  });

  tip2.appendChild(p2);
  tip2.appendChild(button2);

  const tip3 = document.createElement("div");
  tip3.classList.add("tip");

  const p3 = document.createElement("p");
  p3.textContent =
    "Switch from paper to digital items and save 150kg of carbon dioxide per year";

  const button3 = document.createElement("button");
  button3.textContent = "Complete";

  button3.addEventListener("click", () => {
    yearCarbonFootprint = yearCarbonFootprint - 0.15;
    currentFootprint.textContent = `Carbon Footprint (metric tons): ${yearCarbonFootprint}`;
  });

  tip3.appendChild(p3);
  tip3.appendChild(button3);

  tips.appendChild(tip1);
  tips.appendChild(tip2);
  tips.appendChild(tip3);
});
