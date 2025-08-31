// ===== PART 1: BASICS (Variables, Conditionals) =====
const userName = prompt("Hello! What's your name?") || "Guest";
let userThemeColor = "light";

let welcomeMessage;
if (userName.toLowerCase() === "guest") {
    welcomeMessage = "Welcome, Guest! Using a default theme.";
} else {
    welcomeMessage = `Welcome, ${userName}! Let's personalize your page.`;
    let likeDark = confirm("Do you prefer a dark theme?");
    if (likeDark) userThemeColor = "dark";
}

document.getElementById('user-message').textContent = welcomeMessage;

// ===== PART 2: FUNCTIONS (Reusable Logic) =====
function applyTheme(theme) {
    const body = document.body;
    if (theme === "dark") {
        body.classList.add('dark-theme');
    } else {
        body.classList.remove('dark-theme');
    }
    document.getElementById('theme-btn').textContent = theme === 'dark' ? 'Switch to Light Theme' : 'Switch to Dark Theme';
}

function calculateTotal() {
    const allPrices = document.querySelectorAll('.item-price');
    let total = 0;
    for (let priceElement of allPrices) {
        total += parseFloat(priceElement.textContent);
    }
    document.getElementById('total-display').textContent = `Total: £${total.toFixed(2)}`;
    return total;
}

function addItemToList(itemName, itemPrice) {
    const listContainer = document.getElementById('list-container');
    const newListItem = document.createElement('li');

    const itemText = document.createElement('span');
    itemText.textContent = itemName;

    const priceSpan = document.createElement('span');
    priceSpan.textContent = itemPrice;
    priceSpan.classList.add('item-price');

    newListItem.appendChild(itemText);
    newListItem.appendChild(priceSpan);
    listContainer.appendChild(newListItem);

    calculateTotal();
}

// ===== PART 3: LOOPS (Repetition) - USED IN calculateTotal() AND HERE =====
function clearEntireList() {
    const listContainer = document.getElementById('list-container');
    const listItems = listContainer.querySelectorAll('li');

    if (listItems.length === 0) {
        alert("The list is already empty!");
        return;
    }
	// This is the key loop for Part 3
    for (let item of listItems) {
        item.remove();
    }
    calculateTotal();
}

// ===== PART 4: DOM MANIPULATION (Interactivity) =====
document.addEventListener('DOMContentLoaded', function() {
    // Apply the initial theme from Part 1
    applyTheme(userThemeColor);

    // Add Item Button
    document.getElementById('add-item-btn').addEventListener('click', function() {
        const itemNameInput = document.getElementById('item-input');
        const itemPriceInput = document.getElementById('price-input');
        const itemName = itemNameInput.value.trim();
        const itemPrice = parseFloat(itemPriceInput.value);

        if (itemName === "" || isNaN(itemPrice)) {
            alert("Please enter both a valid item name and price.");
            return;
        }
        addItemToList(itemName, itemPrice);
        itemNameInput.value = "";
        itemPriceInput.value = "";
        itemNameInput.focus();
    });

    // Clear List Button
    document.getElementById('clear-list-btn').addEventListener('click', clearEntireList);

    // Theme Toggle Button
    document.getElementById('theme-btn').addEventListener('click', function() {
        userThemeColor = document.body.classList.contains('dark-theme') ? 'light' : 'dark';
        applyTheme(userThemeColor);
    });
});