document.addEventListener('DOMContentLoaded', function () {
    // Get the elements
    var navbar = document.getElementById('nav');
    var menuButton = document.querySelector('.menu');

    // Add click event listener to the menu button
    menuButton.addEventListener('click', function () {
        // Toggle the 'show' class on the navbar
        navbar.classList.toggle('show');

        // Toggle between menu and close icons
        var icon = menuButton.querySelector('i');
        icon.classList.toggle('fa-bars');
        icon.classList.toggle('fa-times');
    });

    // Add click event listener to navbar links using event delegation
    navbar.addEventListener('click', function (event) {
        // Check if the clicked element or its parent is a link
        if (event.target.tagName === 'A' || event.target.parentElement.tagName === 'A') {
            // Close the navbar
            navbar.classList.remove('show');

            // Toggle back to the menu icon
            var icon = menuButton.querySelector('i');
            icon.classList.remove('fa-times');
            icon.classList.add('fa-bars');
        }
    });
});




// document.addEventListener('DOMContentLoaded', function () {
//     // Get the elements
//     var navbar = document.getElementById('nav');
//     var menuButton = document.querySelector('.menu');

//     // Add click event listener to the menu button
//     menuButton.addEventListener('click', function () {
//         // Toggle the 'show' class on the navbar
//         navbar.classList.toggle('show');

//         // Toggle between menu and close icons
//         var icon = menuButton.querySelector('i');
//         icon.classList.toggle('fa-bars');
//         icon.classList.toggle('fa-times');
//     });
// });
