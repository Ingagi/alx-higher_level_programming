$(document).ready(function() {
    // Function to fetch translation and update UI
    function fetchTranslation() {
        let languageCode = $('#language_code').val(); // Get language code from input

        // API URL with language code parameter
        let apiUrl = 'https://www.fourtonfish.com/hellosalut/hello/?lang=' + languageCode;

        // AJAX request to fetch translation
        $.ajax({
            url: apiUrl,
            success: function(response) {
                // Display translation in DIV#hello
                $('#hello').text(response.hello);
            },
            error: function() {
                // Display error message if translation fails
                $('#hello').text('Error: Translation not found');
            }
        });
    }

    // Event handler for button click
    $('#btn_translate').click(fetchTranslation);

    // Event handler for pressing Enter key in input field
    $('#language_code').keypress(function(event) {
        // Check if Enter key is pressed (keyCode 13)
        if (event.keyCode === 13) {
            fetchTranslation();
        }
    });
});

