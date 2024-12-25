$(document).ready(function() {
    // URL of the API endpoint
    const apiUrl = 'https://hellosalut.stefanbohacek.dev/?lang=fr';

    // Fetch the hello data
    $.get(apiUrl, function(data) {
        // Display the value of "hello" in the DIV#hello
        $('#hello').text(data.hello);
    });
});

