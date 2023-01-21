const title = document.getElementById("title");
title.textContent = "Mini Library Eduwork";

class Table {
  constructor(init) {
    console.info("Membuat tabel grid");
    this.init = init;
  }

  createHeader(data) {
    let open = "<thead><tr>";
    let close = "</tr></thead>";
    data.forEach((d) => {
      open += `<th>${d}</th>`;
    });

    return open + close;
  }

  createBody(data) {
    let open = "<tbody>";
    let close = "</tbody>";

    data.forEach((d) => {
      open += `
        <tr>
          <td>${d[0]}</td>
          <td>${d[1]}</td>
          <td>${d[2]}</td>
          <td>${d[3]}</td>
        </tr>
      `;
    });

    return open + close;
  }

  render(element) {
    let table =
      "<table class='table table-hover'>" +
      this.createHeader(this.init.columns) +
      this.createBody(this.init.data) +
      "</table>";
    element.innerHTML = table;
  }
}

const table = new Table({
  columns: ["Name", "Email", "Telp.", "Alamat"],
  data: [
    ["Muhammad Zufri", "zufrii@gmail.com", "085 336 154 384", "Semarang"],
    ["Dian Fajarudin", "dian@gmail.com", "087 224 322 444", "Jakarta"],
    ["Eko Budi", "eko12@gmail.com", "081 543 543 033", "Bandung"],
    ["Anita", "anitaaa@gmail.com", "089 873 293 875", "Semarang"],
    ["Dean Intan", "deanitan@mail.com", "082 475 665 356", "Padang"],
    ["Fajar Aminudin", "fajarkim098@gmail.com", "085 762 536 132", "Jogjakarta"],
    ["Ummi Okta", "ummi24@gmail.com", "089 724 165 274", "Jakarta"],
    ["Angga Adi", "angga@gmail.com", "081 253 845 954", "Semarang"],
    ["Dion Muhammad", "dion_mahendra@gmail.com", "083 648 954 323", "Surabaya"],
    ["Feby Febianti", "febyanti@gmail.com", "082 758 846 968", "Bali"],
    ["Dela Parmitta", "adela@gmail.com", "086 836 749 323", "Jakarta"],
    ["Jerome", "jjj89@gmail.com", "097 876 564 345", "Jakarta"],
    ["Adi Subianto", "adi78@gmail.com", "081 543 234 321", "Palembang"],
    ["Budian Santosa", "buudy@gmail.com", "085 676 445 434", "Jakarta"],
    ["Bella Nurira", "bellanurira@gmail.com", "081 232 234 121", "Bandung"],
    ["Jennie Arumita", "jennie@gmail.com", "086 765 768 987", "Jakarta"],

  ],
});
const myTable = document.getElementById("myTable");
table.render(myTable);
document.getElementById("myTable").style.backgroundColor = "#e9ecef";

export default table;