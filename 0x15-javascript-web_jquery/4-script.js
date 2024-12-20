$(document).ready(function() {
    // Attach a click event listener to the DIV#toggle_header
    $('#toggle_header').click(function() {
        // Toggle between red and green classes on the <header> element
        $('header').toggleClass('red green');
    });
});

