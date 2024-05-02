// script that adds, removes and clears LI elements from a list when the user clicks

$(document).ready(function() {
            // Add item to the list
            $('#add_item').click(function() {
                $('<li>Item</li>').appendTo('ul.my_list');
            });

            // Remove last item from the list
            $('#remove_item').click(function() {
                $('ul.my_list li:last-child').remove();
            });

            // Clear the list
            $('#clear_list').click(function() {
                $('ul.my_list').empty();
            });
        });
