/**
    Copyright (c) 2024 Mostafa Sabry
    https://github.com/DoomAccount/masonry-filter-layout
    All rights reserved.
    This code is released under the [MIT] license.
    You can freely use and modify it for personal or commercial purposes, as long as you provide credit to the original author.
 */

/**
 * @function filterMasonry
 * 
 * This function sets up a masonry layout and handles filtering logic for elements in containers marked with `.have-filter-masonry`. 
 * It dynamically calculates column layouts based on screen size, applies the Masonry effect, and manages filtering of portfolio items.
 * 
 * Key functionalities include:
 * - Dynamically adjusting grid layout based on screen size (mobile, tablet, desktop, etc.).
 * - Filtering items based on categories, triggered by buttons with specific `data-filter` attributes.
 * - Maintaining responsiveness by recalculating the Masonry layout on window resize.
 * 
 * Usage:
 * - Attach this function to containers with the `.have-filter-masonry` class to enable the Masonry layout and filtering system.
 */
const filterMasonry = () => {
    // Code for setting up the masonry layout and handling filter logic
    // This may include applying filters to the portfolio items based on the category (e.g., 'video', 'branding', etc.)

    // Select all containers with the class '.have-filter-masonry'
    const masonryContainers = document.querySelectorAll(".have-filter-masonry");

    // Exit if no containers are found
    if (!masonryContainers.length) return;

    masonryContainers.forEach((container) => {
        // Find the grid container with the 'data-filter-masonry' attribute
        const gridContainer = container.querySelector('[data-filter-masonry]');
        const filterContainer = container.querySelector('.filter-buttons');

        // Skip if no grid container is found
        if (!gridContainer) return;

        // Attempt to parse the JSON data stored in 'data-filter-masonry'
        let obj;
        try {
            obj = JSON.parse(gridContainer.getAttribute('data-filter-masonry')) || {};
        } catch (e) {
            // Log an error if parsing fails and fall back to an empty object
            console.error("Error parsing data-filter-masonry attribute:", e);
            obj = {}; // Fallback to an empty object if parsing fails
        }

        // Set default screen values from parsed data
        const default_screen = typeof obj.default === "number" ? obj.default : 1;
        const mobile_screen = typeof obj.mobile === "number" ? obj.mobile : 1;
        const tablet_screen = typeof obj.tablet === "number" ? obj.tablet : 2;
        const desktop_screen = typeof obj.desktop === "number" ? obj.desktop : 3;
        const xlarge_screen = typeof obj.xlarge === "number" ? obj.xlarge : 4;

        // Function to apply Masonry layout
        const applyMasonryLayout = () => {
            // Get all grid items inside the grid container
            const gridItems = Array.from(gridContainer.querySelectorAll('.grid-item'));
            let item_width = '100%'; // Default item width

            // Dynamically calculate the number of columns based on screen size
            let columnCount = default_screen; // Default column count
            if (window.innerWidth < 480) {
                columnCount = mobile_screen; // For mobile screens
                item_width = 100 / mobile_screen;
            } else if (window.innerWidth < 768) {
                columnCount = tablet_screen; // For tablets
                item_width = 100 / tablet_screen;
            } else if (window.innerWidth < 1280) {
                columnCount = desktop_screen; // For small desktops
                item_width = 100 / desktop_screen;
            } else {
                columnCount = xlarge_screen; // For large screens
                item_width = 100 / xlarge_screen;
            }

            const columnHeights = Array(columnCount).fill(0);

            gridItems.forEach((item) => {
                item.style.position = 'absolute'; // Set position to absolute for Masonry effect
                item.style.width = `${item_width}%`;
                // Find the shortest column and position the item there
                const minHeightIndex = columnHeights.indexOf(Math.min(...columnHeights));
                const leftPosition = `${minHeightIndex * (100 / columnCount)}%`;
                item.style.left = leftPosition;
                item.style.top = `${columnHeights[minHeightIndex]}px`;

                // Update the column height where the item is placed
                columnHeights[minHeightIndex] += item.offsetHeight;
            });

            // Set the grid container height to the maximum column height
            gridContainer.style.position = 'relative';
            gridContainer.style.height = `${Math.max(...columnHeights)}px`;
        };

        // Apply the initial Masonry layout
        applyMasonryLayout();

        // Function to filter items based on the selected filter
        const filterItems = (filterValue) => {
            const gridItems = Array.from(gridContainer.querySelectorAll('.grid-item'));

            gridItems.forEach((item) => {
                if (filterValue === '*' || item.classList.contains(filterValue)) {
                    item.style.display = ''; // Show the item if it matches the filter

                    setTimeout(() => {
                        item.classList.add('active');
                        item.classList.remove('hidden');
                    }, 300);
                    return;
                }
                item.classList.remove('active');
                item.classList.add('hidden');

                setTimeout(() => {
                    if (!item.classList.contains('active')) {
                        item.style.display = 'none'; // Hide the item if it doesn't match the filter
                    }
                    applyMasonryLayout(); // Reapply Masonry layout after hiding items
                }, 200);
            });

            // Reapply Masonry layout after filtering
            applyMasonryLayout();
        };

        // If filter container exists, setup filter buttons
        if (filterContainer) {
            const filterButtons = filterContainer.querySelectorAll('button');

            filterButtons.forEach((button) => {
                button.addEventListener('click', () => {
                    // Remove active class from all buttons
                    filterButtons.forEach((btn) => btn.classList.remove("active"));

                    // Add active class to the clicked button
                    button.classList.add("active");

                    // Get the filter value and apply filtering
                    const filterValue = button.getAttribute('data-filter') === '*' ? '*' : button.getAttribute('data-filter').toLowerCase();
                    filterItems(filterValue);

                });
            });
        }
        // Event listener for window resize to recalculate and reapply the masonry layout
        window.addEventListener('resize', () => {
            requestAnimationFrame(() => {
                applyMasonryLayout(); // Recalculate Masonry layout on resize
            });
        });
    });
};

document.addEventListener("DOMContentLoaded", () => {
    filterMasonry();
});
