document.addEventListener('DOMContentLoaded', function() {
    fetch('http://localhost:8000/termproject/getstats')
        .then(response => response.json())
        .then(data => loadStats(data['data']));
});

function loadStats(data) {
    console.log(data);


    let innerHtml = "";

    data.forEach(function ({id, stat}) {
        innerHtml += "<tr>";
        innerHtml += `<td>${id}</td>`;
        innerHtml += "<td>GET</td><td>/termproject/api/getall</td>"
        innerHtml += `<td>${stat}</td>`;
        innerHtml += "</tr>"
    })

    document.querySelector('table tbody').innerHTML = innerHtml;
}