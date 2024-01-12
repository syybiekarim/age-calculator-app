// inputs
const dayInp = document.getElementById("day");
const monthInp = document.getElementById("month");
const yearInp = document.getElementById("year");

// outputs
const dayOtp = document.getElementById("DD");
const monthOtp = document.getElementById("MM");
const yearOtp = document.getElementById("YY");

const date = new Date();
let day = date.getDate();
let month = 1 + date.getMonth();
let year = date.getFullYear();

const months = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

function validate() {
  const inputs = document.querySelectorAll("input");
  const image = document.querySelector("img");
  let validator = true;
  inputs.forEach((i) => {
    const parent = i.parentElement;
    if (!i.value) {
      i.style.borderColor = "red";
      parent.querySelector("small").innerText = "this field is required.";
      image.style.top = "350px";
      validator = false;
    } else if (monthInp.value > 12 || !monthInp.value) {
      monthInp.style.borderColor = "red";
      monthInp.parentElement.querySelector("small").innerText =
        "must be valid month.";
      image.style.top = "350px";
      validator = false;
    } else if (dayInp.value > 31 || dayInp.value < 1) {
      dayInp.style.borderColor = "red";
      dayInp.parentElement.querySelector("small").innerText =
        "must be valid day.";
      image.style.top = "350px";
      validator = false;
    } else {
      i.style.borderColor = "grey";
      parent.querySelector("small").innerText = "";
      image.style.top = "302px";
      validator = true;
    }
  });
  return validator;
}

function animateOutput(outputElement, finalValue) {
  let currentValue = 0;
  const duration = 1200;
  const interval = 10;
  const steps = duration / interval;
  const stepsvalue = finalValue / steps;
  const IntervalId = setInterval(() => {
    currentValue += stepsvalue;
    outputElement.innerHTML = Math.round(currentValue);
    if (currentValue >= finalValue) {
      outputElement.innerHTML = finalValue;
      clearInterval(IntervalId);
    }
  }, interval);
}

function outputValue(e) {
  // e.preventDefault();
  if (validate()) {
    if (dayInp.value > day) {
      day = day + months[month - 1];
      month = month - 1;
    }
    if (monthInp.value > month) {
      month = month + 12;
      year = year - 1;
    }

    const d = day - dayInp.value;
    const m = month - monthInp.value;
    const y = year - yearInp.value;

    // dayOtp.innerHTML = d;
    // monthOtp.innerHTML = m;
    // yearOtp.innerHTML = y;
    animateOutput(dayOtp, d);
    animateOutput(monthOtp, m);
    animateOutput(yearOtp, y);
  }
}
