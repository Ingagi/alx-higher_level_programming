$(document).ready(function() {
    // Attach a click event listener to the DIV#red_header
    $('#red_header').click(function() {
        // Change the text color of the <header> element to red (#FF0000)
        $('header').css('color', '#FF0000');
    });
});

