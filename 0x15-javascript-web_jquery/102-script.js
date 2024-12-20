$(document).ready(function() {
    $('#btn_translate').click(function() {
        // Get language code from input field
        let languageCode = $('#language_code').val();

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
    });
});

