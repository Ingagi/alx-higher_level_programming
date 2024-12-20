$(document).ready(function() {
    // Attach a click event listener to the DIV#update_header
    $('#update_header').click(function() {
        // Update the text of the <header> element to "New Header!!!"
        $('header').text('New Header!!!');
    });
});

