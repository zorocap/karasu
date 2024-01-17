const searchBox = document.querySelector('#discover-search');

function onChange(e) {
    console.log(this.value);
    var searchValue = this.value;
    var url = "https://yugenanime.tv/api/discover/?q=" + searchValue;
    fetch(url, {
        method: 'GET',
    })
    .then(response => response.json())
    .then(data => {
        // Display the result from Python
        console.log(data.result);
    })
    .catch(error => console.error('Error:', error));
}

searchBox.addEventListener("input", onChange, false)