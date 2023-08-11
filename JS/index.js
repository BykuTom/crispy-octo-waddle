class User {
  constructor(name, email, password) {
    this.name = name;
    this.email = email;
    this.password = password;
  }
}

class UserTable {
  constructor(tableId) {
    this.tableId = tableId;
    this.users = [];
    this.table = document.querySelector(`#${tableId} tbody`);
  }

  addUser(user) {
    this.users.push(user);
    this.renderUsers();
  }

  createRow(user) {
    const row = document.createElement("tr");
    const nameCol = document.createElement("td");
    const emailCol = document.createElement("td");
    const passwordCol = document.createElement("td");

    nameCol.textContent = user.name;
    emailCol.textContent = user.email;
    passwordCol.textContent = user.password;

    row.appendChild(nameCol);
    row.appendChild(emailCol);
    row.appendChild(passwordCol);

    return row;
  }

  renderUsers() {
    this.table.textContent = "";
    const rows = this.users.map(this.createRow.bind(this));

    rows.forEach((row) => {
      this.table.appendChild(row);
    });
  }

  initForm() {
    const firstForm = document.querySelector("#firstForm");
    firstForm.addEventListener("submit", (event) => {
      event.preventDefault();
      const { name, email, password } = event.target.elements;

      try {
        if (!name.value == "" && !email.value == "" && !password.value == "") {
          const newUser = new User(name.value, email.value, password.value);
          this.addUser(newUser);
        } else {
          throw "one of the values is empty";
        }
      } catch (error) {
        console.error(error);
      }

      name.value = "";
      email.value = "";
      password.value = "";
    });
  }
}

const usersTable = new UserTable("usersTable");
usersTable.initForm();
