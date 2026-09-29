const transactions = [
    {
        id: "TRX-001",
        date: "09/29/2026",
        items: 3,
        total: 850,
        payment: "Cash"
    },
    {
        id: "TRX-002",
        date: "09/29/2026",
        items: 2,
        total: 1200,
        payment: "GCash"
    },
    {
        id: "TRX-003",
        date: "09/30/2026",
        items: 5,
        total: 650,
        payment: "Cash"
    }
];

const reportTable = document.getElementById("reportTable");

function updateSummary(data) {

    let totalTransactions = data.length;
    let totalSales = 0;
    let totalItems = 0;

    for (let i = 0; i < data.length; i++) {
        totalSales += data[i].total;
        totalItems += data[i].items;
    }

    document.getElementById("totalTransactions").textContent =
        totalTransactions;

    document.getElementById("totalSales").textContent =
        "₱" + totalSales.toLocaleString("en-PH", {
            minimumFractionDigits: 2
        });

    document.getElementById("totalItems").textContent =
        totalItems;
}

function displayTransactions(data) {

    reportTable.innerHTML = "";

    for (let i = 0; i < data.length; i++) {

        const row = document.createElement("tr");

        row.innerHTML = `
            <td>${data[i].id}</td>
            <td>${data[i].date}</td>
            <td>${data[i].items}</td>
            <td>₱${data[i].total.toLocaleString("en-PH", {
                minimumFractionDigits: 2
            })}</td>
            <td>${data[i].payment}</td>
        `;

        reportTable.appendChild(row);
    }

    updateSummary(data);
}

function filterReport() {

    const selectedDate =
        document.getElementById("reportDate").value;

    if (selectedDate === "") {
        showAll();
        return;
    }

    const formattedDate =
        selectedDate.split("-").reverse().join("/");

    const filteredTransactions =
        transactions.filter(function(transaction) {
            return transaction.date === formattedDate;
        });

    displayTransactions(filteredTransactions);
}

function showAll() {
    displayTransactions(transactions);
}

displayTransactions(transactions);
