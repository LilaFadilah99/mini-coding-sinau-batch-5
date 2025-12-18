// Store our transactions in a simple array
var transactions = [
  {
    id: 1,
    name: "Monthly Salary",
    amount: 5000000,
    type: "income",
    category: "salary",
    date: "2025-06-18",
  },
];

console.log(transactions);

// Wait for the DOM to load
document.addEventListener("DOMContentLoaded", function () {
  // Add event listener to prevent form submission and handle it manually
  var form = document.querySelector(".transaction-form");
  form.addEventListener("submit", function (e) {
    e.preventDefault(); // Prevent default form submission
    addTransaction();
  });

  // Display initial transactions
  displayTransactions();
});

function parseFormattedNumber(input) {
  // Remove any non-digit characters and convert to number
  return parseInt(input.replace(/[^\d]/g, "")) || 0;
}

function addTransaction() {
  var name = document.getElementById("transaction-name").value;
  var amountInput = document.getElementById("amount").value;
  var amount = parseFormattedNumber(amountInput);
  var type = document.querySelector('input[name="type"]:checked').value;
  var category = document.getElementById("category").value;
  var date = document.getElementById("date").value;

  // basic validation
  if (name === "" || amount <= 0 || category === "") {
    alert("Please fill all fields correctly!");
    return;
  }

  var newTransaction = {
    id: transactions.length + 1,
    name: name,
    amount: amount,
    type: type,
    category: category,
    date: date,
  };

  transactions.push(newTransaction);

  // Display updated transactions
  displayTransactions();

  // clear all form fields
  document.getElementById("transaction-name").value = "";
  document.getElementById("amount").value = "";
  document.getElementById("category").value = "";
  document.getElementById("date").value = "";

  // reset radio button to income (default)
  document.getElementById("income").checked = true;
  document.getElementById("expense").checked = false;
}

function displayTransactions() {
  var transactionList = document.getElementById("transaction-list");

  if (transactions.length === 0) {
    transactionList.innerHTML = "<p>No transactions yet.</p>";
    return;
  }

  var html = "<ul>";
  transactions.forEach(function (transaction) {
    var typeClass = transaction.type === "income" ? "income" : "expense";
    var sign = transaction.type === "income" ? "+" : "-";

    html += `
      <li>
        <strong>${transaction.name}</strong><br>
        Amount: <span class="${typeClass}">${sign} Rp ${transaction.amount.toLocaleString()}</span><br>
        Type: ${transaction.type}<br>
        Category: ${transaction.category}<br>
        Date: ${transaction.date}<br>
        <hr>
      </li>
    `;
  });
  html += "</ul>";

  transactionList.innerHTML = html;
}
