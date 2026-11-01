
let employees = [];
let employeeId = 1;

const form = document.getElementById("employeeForm");

form.addEventListener("submit", function(event) {
    event.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const department = document.getElementById("department").value;

    const employee = {
        id: employeeId++,
        name: name,
        email: email,
        department: department
    };

    employees.push(employee);

    displayEmployees();
    form.reset();
});

function displayEmployees() {
    const list = document.getElementById("employeeList");

    list.innerHTML = "";

    employees.forEach(function(employee) {
        const row = document.createElement("tr");

        [employee.id, employee.name, employee.email, employee.department]
            .forEach(function(value) {
                const cell = document.createElement("td");
                cell.textContent = value;
                row.appendChild(cell);
            });

        const actionCell = document.createElement("td");
        const deleteButton = document.createElement("button");

        deleteButton.textContent = "Delete";
        deleteButton.className = "delete-btn";

        deleteButton.addEventListener("click", function() {
            employees = employees.filter(function(item) {
                return item.id !== employee.id;
            });

            displayEmployees();
        });

        actionCell.appendChild(deleteButton);
        row.appendChild(actionCell);
        list.appendChild(row);
    });

    document.getElementById("totalEmployees").textContent = employees.length;
    document.getElementById("activeEmployees").textContent = employees.length;
}

document.getElementById("search").addEventListener("input", function() {
    const value = this.value.toLowerCase();

    document.querySelectorAll("#employeeList tr").forEach(function(row) {
        row.style.display = row.textContent.toLowerCase().includes(value)
            ? ""
            : "none";
    });
});
