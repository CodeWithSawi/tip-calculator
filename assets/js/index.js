lucide.createIcons();

const calculate = document.getElementById("calculate");
const total = document.getElementById("total");

const calculateTotal = () => {
  const tipPercentage = +document.getElementById("tip-percentage").value;
  const amount = +document.getElementById("amount").value;

  const totalAmount = amount * (1 + tipPercentage / 100);
  const result = (total.innerHTML = totalAmount.toFixed(2));
  return result;
};

calculate.addEventListener("click", calculateTotal);
