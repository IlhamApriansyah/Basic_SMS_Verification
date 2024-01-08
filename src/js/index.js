document.addEventListener('DOMContentLoaded', function() {
    const data = [
       { date: '2022-03-01', time: '12:30', contact: 'Ilham Apriansyah', code: '123456' },
       { date: '2022-03-02', time: '15:30', contact: 'Ilham', code: '234567' },
       { date: '2022-03-02', time: '15:30', contact: 'April', code: '234567' },
       //tambah aja disini, soalnya data static (bisa juga pake API)
    ];
   
    const tableBody = document.querySelector('#table tbody');
   
    data.forEach(function(rowData) {
       const row = document.createElement('tr');
   
       const dateCell = document.createElement('td');
       dateCell.textContent = rowData.date;
       row.appendChild(dateCell);
   
       const timeCell = document.createElement('td');
       timeCell.textContent = rowData.time;
       row.appendChild(timeCell);
   
       const contactCell = document.createElement('td');
       contactCell.textContent = rowData.contact;
       row.appendChild(contactCell);
   
       const codeCell = document.createElement('td');
       codeCell.textContent = rowData.code;
       row.appendChild(codeCell);
   
       tableBody.appendChild(row);
    });
   });