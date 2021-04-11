document.addEventListener('DOMContentLoaded', function() {
    fetch('http://localhost:8000/getstats')
        .then(response => response.json())
        .then(data => loadStats(data['data']));
});

function loadStats(data) {
    console.log(data);


    let innerHtml = "";

    data.forEach(function ({id, type, link, stat}) {
        innerHtml += "<tr>";
        innerHtml += `<td>${id}</td>`;
        innerHtml += `<td>${type}</td>`;
        innerHtml += `<td>${link}</td>`;
        innerHtml += `<td>${stat}</td>`;
        innerHtml += "</tr>"
    })

    document.querySelector('table tbody').innerHTML = innerHtml;
}
