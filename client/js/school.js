document.addEventListener('DOMContentLoaded', function() {
    fetch('https://zoltanbi.com/termproject/getallschool')
        .then(response => response.json())
        .then(data => loadTable(data['data']));

});

function loadTable(data) {
    console.log(data);

    if (data.length === 0) {
        let noDataHtml = "<tr><td class='no-data' colspan='5'>No Data</td></tr>"
        document.querySelector('table tbody').innerHTML = noDataHtml;
        return;
    }

    let innerHtml = "";

    data.forEach(function ({id, name, item}) {
        innerHtml += "<tr>";
        innerHtml += `<td>${id}</td>`;
        innerHtml += `<td>${name}</td>`;
        innerHtml += `<td>${item}</td>`;
        innerHtml += `<td><button class="delete-row-btn btn-danger" data-id="${id}">Delete</button></td>`;
        innerHtml += `<td><button class="edit-row-btn btn-primary" data-id="${id}">Edit</button></td>`;
        innerHtml += "</tr>"
    });
    document.querySelector('table tbody').innerHTML = innerHtml;

}
//add data button

const addBtn = document.getElementById('add-item-btn');

addBtn.onclick = function () {
    const nameInput = document.getElementById('name-input');
    const name = nameInput.value;
    nameInput.value = "";

    const itemInput = document.getElementById('item-input');
    const item = itemInput.value;
    itemInput.value = "";

    fetch('https://zoltanbi.com/termproject/insertschool', {
        headers: {
            'Content-type': 'application/json'
        },
        method: 'POST',
        body: JSON.stringify({name : name, item: item})
    }).then(response => response.json()).then(data => insertRowToTable(data['data']));
}
// remove data button and edit data button

document.querySelector('table tbody').addEventListener('click', function(event) {
    if (event.target.className === "delete-row-btn btn-danger") {
        deleteTableRow(event.target.dataset.id);
    }
    if (event.target.className === "edit-row-btn btn-primary") {
        editTableRow(event.target.dataset.id);
    }
});

const updateBtn = document.querySelector('#update-row-btn');

//delete function
function deleteTableRow(id) {
    fetch('https://zoltanbi.com/termproject/deleteschool/' + id, {
        method: 'DELETE'
    })
        .then(response => response.json())
        .then(data => {
            if (data.success) {
                location.reload();
            }
        });
}

//update function
function editTableRow(id) {
    const editSection = document.querySelector('#edit-row');
    editSection.hidden = false;
    document.querySelector('#update-item-input').dataset.id = id;
}

updateBtn.onclick = function() {
    const updateNameInput = document.querySelector('#update-name-input');
    const updateItemInput = document.querySelector('#update-item-input');

    fetch('https://zoltanbi.com/termproject/updateschool/', {
        method: 'PATCH',
        headers: {
            'Content-type' : 'application/json'
        },
        body: JSON.stringify({
            id: updateItemInput.dataset.id,
            name: updateNameInput.value,
            item: updateItemInput.value,
        })
    })
        .then(response => response.json())
        .then(data => {
            if (data.success) {
                location.reload();
            }
        })
}

const deleteBtn = document.getElementById('');


function insertRowToTable (data){
    const tableDataExist = document.querySelector('table tbody').querySelector(".no-data");

    let innerHtml = "<tr>";

    for (let key in data) {
        if (data.hasOwnProperty(key)) {
            innerHtml += `<td>${data[key]}</td>`;
        }
    }

    innerHtml += `<td><button class="delete-row-btn btn-danger" data-id="${data.id}">Delete</button></td>
                <td><button class="edit-row-btn btn-primary" data-id="${data.id}">Edit</button></td></tr>`;

    if (tableDataExist) {
        document.querySelector('table tbody').innerHTML = innerHtml;
    } else {
        const newRow = document.querySelector('table tbody').insertRow();
        newRow.innerHTML = innerHtml
    }
}