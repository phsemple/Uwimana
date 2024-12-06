



document.addEventListener('DOMContentLoaded', () => {
    const menuItems = document.querySelectorAll('.main-menu li');
    const sublists = document.querySelectorAll('.sublist');

    // Function to hide all sublists
    const hideAllSubLists = () => {
        sublists.forEach(sublist => {
            sublist.style.display = 'none';
        });
    };

    // Add event listeners to menu items
    menuItems.forEach(item => {
        item.addEventListener('click', () => {
            const targetId = item.getAttribute('data-target');
            const targetSublist = document.getElementById(targetId);

            // Toggle visibility of the clicked sublist
            if (targetSublist.style.display === 'block') {
                targetSublist.style.display = 'none';
            } else {
                hideAllSubLists(); // Hide other sublists
                targetSublist.style.display = 'block';
            }
        });
    });

    // Close sublist when clicking outside
    document.addEventListener('click', (event) => {
        if (!event.target.closest('.main-menu') && !event.target.closest('.sublist')) {
            hideAllSubLists();
        }
    });
});