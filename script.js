    const toggleBtn = document.querySelector('.mobile-menu-toggle');
    const navMenu = document.querySelector('.nav-menu');
    const closeBtn = document.querySelector('.close-menu');

    toggleBtn.addEventListener('click', () => {
        navMenu.classList.toggle('active');
    });

    closeBtn.addEventListener('click', () => {
        navMenu.classList.remove('active');
    });

const menuContainer = document.getElementById('menu-items');

/**
 * Load menu items with optional filtering by category and featured status.
 * @param {Object} options - Options for filtering and sorting.
 * @param {string} [options.category="All"] - The category to filter by.
 * @param {boolean} [options.featuredOnly=false] - Whether to only show featured items.
 */
async function loadMenuItems({ category = "All", featuredOnly = false } = {}) {
    try {
        const response = await fetch('menu.json');
        const menuData = await response.json();
        menuContainer.innerHTML = '';

        let itemsToDisplay = menuData.items;

        // Filter by category if not "All"
        if (category !== "All") {
            itemsToDisplay = itemsToDisplay.filter(item => item.category === category);
        }

        // Apply featured filter if enabled
        if (featuredOnly) {
            itemsToDisplay = itemsToDisplay.filter(item => item.featured);
        }

        // If "Featured" is selected as category, override with only featured items
        if (category === "Featured") {
            itemsToDisplay = menuData.items.filter(item => item.featured);
        }

        itemsToDisplay.forEach((item, index) => {
            const menuItem = document.createElement('div');
            menuItem.className = 'menu-item-box';
            menuItem.id = `menu-item-${index + 1}`;

            menuItem.innerHTML = `
                <div class="menu-img-placeholder"></div>
                <h2 class="dish-name">${item.name}</h2>
                <p class="dish-price">${item.price} AED</p>
                <div class="dish-rating">★★★★★ ${item.rating}</div>
            `;

            menuContainer.appendChild(menuItem);
        });

    } catch (error) {
        console.error('Error loading menu items:', error);
    }
}

// Initial load: Show featured items only on non-menu pages
document.addEventListener('DOMContentLoaded', () => {
    const isMenuPage = window.location.pathname.includes('menu.html');

    // Load featured items by default on all pages except `menu.html`
    loadMenuItems({ featuredOnly: !isMenuPage });

    // Category filter event listeners for `menu.html`
    const categoryButtons = document.querySelectorAll('.category-btn');
    categoryButtons.forEach(button => {
        button.addEventListener('click', () => {
            const category = button.dataset.category;
            const isFeatured = category === "Featured";
            
            // If "Featured" is clicked, set featuredOnly to true
            loadMenuItems({ category, featuredOnly: isFeatured });
        });
    });
});

