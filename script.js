const slideValue1 = document.getElementById("firstValue");
const inputSlider1 = document.getElementById("tax");

inputSlider1.oninput = () => {
  let value = inputSlider1.value;
  slideValue1.textContent = value + ' %';
  slideValue1.style.left = value; 
  slideValue1.classList.add("show");
};

inputSlider1.onblur = () => {
  slideValue1.classList.remove("show");
};

const slideValue2 = document.getElementById("secondValue");
const inputSlider2 = document.getElementById("loan");

inputSlider2.oninput = () => {
  let value = inputSlider2.value;
  slideValue2.textContent = value + " Dhs";
  slideValue2.style.left = value; 
  slideValue2.classList.add("show");
};

inputSlider2.onblur = () => {
  slideValue2.classList.remove("show");
};

const slideValue3 = document.getElementById("thirdValue");
const inputSlider3 = document.getElementById("duration");

inputSlider3.oninput = () => {
  let value = inputSlider3.value;
  slideValue3.textContent = value + ' M';
  slideValue3.style.left = value; 
  slideValue3.classList.add("show");
};

inputSlider3.onblur = () => {
  slideValue3.classList.remove("show");
};



document.getElementById("tax").addEventListener("input", function () {
  let interestValue = parseFloat(document.getElementById("tax").value);
  document.getElementById("taxValue").value = interestValue + "%";
  calculateTotalAmount();
});

document.getElementById("loan").addEventListener("input", function () {
  let loanValue = parseFloat(document.getElementById("loan").value);
  document.getElementById("loanValue").value = loanValue + " Dh";
  calculateTotalAmount();
});

document.getElementById("duration").addEventListener("input", function () {
  let durationValue = parseFloat(document.getElementById("duration").value);
  document.getElementById("durValue").value = durationValue + " Mois";
  calculateTotalAmount();
});



function calculateTotalAmount() {
  let interestValue = parseFloat(document.getElementById("taxValue").value);
  let loanValue = parseFloat(document.getElementById("loanValue").value);
  let durationValue = parseFloat(document.getElementById("durValue").value);

        if (interestValue < 5 || interestValue > 13) {
          alert("Interest value must be between 5 and 13.");
          console.log("Interest value must be between 5 and 13")
          return;
        }

        if (loanValue < 5000 || loanValue > 5000000) {
          alert("Loan value must be between 5000 and 5000000.");
          return;
        }

        if (durationValue < 6 || durationValue > 300) {
          alert("Duration value must be between 6 and 300.");
          return;
        }

  let rate = interestValue / 12 / 100;
  let tenure = durationValue;

  let emi =
    (loanValue * rate * Math.pow(1 + rate, tenure)) /
    (Math.pow(1 + rate, tenure) - 1);
  let total = emi * tenure;

  document.getElementById("totalAmount").textContent = emi.toFixed(2) + " Dh";
}
