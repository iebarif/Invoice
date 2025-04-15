const invoiceData = {
  title: "Invoice From office Supplies",
  invoiceNumber: "INV-001",
  date: "2023-10-01",
  dueDate: "2023-10-15",
  client: {
    name: "Johe Doe",
    address: "1234 Elm Street, Springfield, USA",
  },
  items: [
    {
      description: "Web Design Services ",
      quantity: 10,
      unitPrice: 50,
    },
    {
      description: "Hosting (1 years) ",
      quantity: 1,
      unitPrice: 100,
    },

    {
      description: "Domain Name (1 years) ",
      quantity: 1,
      unitPrice: 10,
    },
  ],
  notes: "Thank you for your business!",
};

function populateCommonItems() {
  document.getElementById("invoiceTitle").innerText = invoiceData.title;
  document.getElementById("invoiceNumber").innerText =
    invoiceData.invoiceNumber;
  document.getElementById("invoiceDate").innerText = invoiceData.date;
  document.getElementById("invoiceDueDate").innerText = invoiceData.dueDate;
  document.getElementById("clientName").innerText = invoiceData.client.name;
  document.getElementById("clientAddress").innerText =
    invoiceData.client.address;
  document.getElementById("InvoiceNotes").innerText = invoiceData.notes;
}
function populateItems() {
  const itemsBody = document.getElementById("itemsBody");
  let grandTotal = 0;
  invoiceData.items.forEach((item) => {
    const row = document.createElement("tr");
    row.innerHTML = `
      <td>${item.description}</td>
      <td>${item.quantity}</td>
      <td>$${item.unitPrice}</td>
      <td>$${item.quantity * item.unitPrice}</td>
      `;
    itemsBody.appendChild(row);
    grandTotal += item.quantity * item.unitPrice;
    document.getElementById(
      "grandTotal"
    ).innerText = `Grand Total: $ ${grandTotal}`;
  });
}

populateCommonItems();
populateItems();
