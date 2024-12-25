$(document).ready(function() {
    // URL of the API endpoint
    const apiUrl = 'https://swapi-api.alx-tools.com/api/people/5/?format=json';

    // Fetch the character data
    $.get(apiUrl, function(data) {
        // Display the character name in the DIV#character
        $('#character').text(data.name);
    });
});

