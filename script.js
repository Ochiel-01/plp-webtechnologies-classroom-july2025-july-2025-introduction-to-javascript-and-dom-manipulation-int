// ====================
// 🎯 Part 1: Basics
// ====================
// Check if tenant has paid rent
function checkRentStatus() {
  let amount = prompt("Enter tenant's rent payment amount:");
  amount = parseInt(amount);

  if (isNaN(amount)) {
    document.getElementById("basic-output").textContent = "❌ Invalid input!";
  } else if (amount >= 15000) {
    document.getElementById("basic-output").textContent = "✅ Rent fully paid!";
  } else if (amount > 0 && amount < 15000) {
    document.getElementById("basic-output").textContent = "⚠️ Rent partially paid.";
  } else {
    document.getElementById("basic-output").textContent = "❌ No rent payment received.";
  }
}

// ====================
// ❤️ Part 2: Functions
// ====================

// Function 1: Greet Tenant
function greetTenant(name) {
  const message = `Hello ${name}, welcome to your REMIS dashboard!`;
  document.getElementById("function-output").textContent = message;
}

// Function 2: Calculate Rent with service fee
function calculateRent(baseRent, serviceFee) {
  const total = baseRent + serviceFee;
  document.getElementById("function-output").textContent = 
    `Total Rent (including service fee): KES ${total}`;
}

// ====================
// 🔁 Part 3: Loops
// ====================

// Loop through properties
function listProperties() {
  let properties = ["Apartment A - KES 15,000", "Apartment B - KES 20,000", "House C - KES 30,000"];
  let output = document.getElementById("loop-output");
  output.innerHTML = ""; // Clear previous
  properties.forEach(property => {
    let li = document.createElement("li");
    li.textContent = property;
    output.appendChild(li);
  });
}

// Loop to remind tenants
function rentReminder() {
  let tenants = ["Mary", "James", "Lucy", "Peter"];
  let output = document.getElementById("loop-output");
  output.innerHTML = ""; // Clear previous
  for (let i = 0; i < tenants.length; i++) {
    let li = document.createElement("li");
    li.textContent = `Reminder sent to ${tenants[i]}: Please clear your rent.`;
    output.appendChild(li);
  }
}

// ====================
// 🌐 Part 4: DOM Manipulation
// ====================

// Toggle highlight on tenant status
document.getElementById("toggleBtn").addEventListener("click", function() {
  let text = document.getElementById("dom-text");
  text.classList.toggle("highlight");
});

// Add tenant dynamically
document.getElementById("addTenantBtn").addEventListener("click", function() {
  let ul = document.getElementById("tenant-list");
  let tenantName = prompt("Enter new tenant name:");
  if (tenantName) {
    let li = document.createElement("li");
    li.textContent = tenantName + " (New Tenant)";
    ul.appendChild(li);
  }
});
