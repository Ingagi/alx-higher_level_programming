$(document).ready(function() {
    $('#add_item').click(function() {
        // Add new item to the list
        $('ul.my_list').append('<li>Item</li>');
    });

    $('#remove_item').click(function() {
        // Remove last item from the list
        $('ul.my_list li:last-child').remove();
    });

    $('#clear_list').click(function() {
        // Clear all items from the list
        $('ul.my_list').empty();
    });
});

