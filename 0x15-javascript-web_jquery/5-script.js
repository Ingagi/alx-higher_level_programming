$(document).ready(function() {
    // Attach a click event listener to the DIV#add_item
    $('#add_item').click(function() {
        // Create a new <li> element and append it to UL.my_list
        $('ul.my_list').append('<li>Item</li>');
    });
});

