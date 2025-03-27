document.addEventListener('DOMContentLoaded', () => {
    // Initialize sidebar elements
    const sidebar = document.querySelector('.sidebar');
    const sidebarLogo = document.getElementById('sidebarLogo');
    const toggleBtn = document.getElementById('toggleSidebar');
    const menuItems = document.querySelectorAll('.menu-item');

    // Set up tooltips for menu items
    menuItems.forEach(item => {
        const text = item.querySelector('span').textContent;
        item.setAttribute('data-tooltip', text);
    });

    // Handle logo click
    sidebarLogo.addEventListener('click', () => {
        sidebar.classList.add('minimized');
        localStorage.setItem('sidebarMinimized', 'true');
    });

    // Handle burger icon click
    toggleBtn.addEventListener('click', () => {
        sidebar.classList.remove('minimized');
        localStorage.setItem('sidebarMinimized', 'false');
    });

    // Restore sidebar state from localStorage
    if (localStorage.getItem('sidebarMinimized') === 'true') {
        sidebar.classList.add('minimized');
    }

    // Add tab switching functionality
    const breedTabs = document.querySelectorAll('.breed-tab');
    const breedSections = document.querySelectorAll('.breed-section');

    breedTabs.forEach(tab => {
        tab.addEventListener('click', () => {
            breedTabs.forEach(t => t.classList.remove('active'));
            breedSections.forEach(s => s.classList.remove('active'));
            tab.classList.add('active');
            document.getElementById(tab.dataset.tab).classList.add('active');
            const searchInput = document.getElementById('breedSearch');
            if (searchInput) {
                searchInput.value = '';
                filterBreeds('');
            }
        });
    });

    // Add search functionality
    const searchInput = document.getElementById('breedSearch');
    if (searchInput) {
        searchInput.addEventListener('input', (e) => {
            filterBreeds(e.target.value.toLowerCase());
        });
    }

    function filterBreeds(searchTerm) {
        const activeSection = document.querySelector('.breed-section.active');
        const breedCards = activeSection.querySelectorAll('.breed-card');
        const noResults = activeSection.querySelector('.no-results');
        let hasVisibleCards = false;

        breedCards.forEach(card => {
            const breedName = card.querySelector('.breed-name').textContent.toLowerCase();
            const description = card.querySelector('.breed-description').textContent.toLowerCase();
            const isVisible = breedName.includes(searchTerm) || description.includes(searchTerm);
            card.classList.toggle('hidden', !isVisible);
            if (isVisible) hasVisibleCards = true;
        });

        noResults.style.display = hasVisibleCards ? 'none' : 'block';
    }

    // Load breed data and initialize modal functionality
    fetch('data/breeds.json')
        .then(response => response.json())
        .then(data => {
            initializeBreedCards(data);
        })
        .catch(error => {
            console.error('Error loading breed data:', error);
            document.querySelectorAll('.breed-section').forEach(section => {
                section.innerHTML = '<p class="error-message">Failed to load breed data. Please try again later.</p>';
            });
        });

    function initializeBreedCards(breedData) {
        const modal = document.getElementById('breedModal');
        const closeModal = document.querySelector('.close-modal');
        const breedCards = document.querySelectorAll('.breed-card');
        const infoTabs = document.querySelectorAll('.info-tab');
        const infoPanels = document.querySelectorAll('.info-panel');

        // Add click event to breed cards
        breedCards.forEach(card => {
            card.style.cursor = 'pointer';
            
            card.addEventListener('click', () => {
                const breedId = card.dataset.breed;
                const breedType = card.closest('.breed-section').id; // 'dogs' or 'cats'
                const breedInfo = breedData[breedType][breedId];

                if (!breedInfo) {
                    console.error('Breed data not found:', breedId);
                    return;
                }

                // Update modal content
                document.getElementById('modalBreedImage').src = breedInfo.image;
                document.getElementById('modalBreedName').textContent = breedInfo.name;
                
                // History
                document.getElementById('modalHistory').textContent = breedInfo.history;
                
                // Characteristics
                document.getElementById('modalHeight').textContent = breedInfo.height;
                document.getElementById('modalWeight').textContent = breedInfo.weight;
                document.getElementById('modalCoat').textContent = breedInfo.coat;
                document.getElementById('modalColor').textContent = breedInfo.color;
                
                // Other Names
                const otherNamesList = document.getElementById('modalOtherNames');
                otherNamesList.innerHTML = breedInfo.otherNames.split(', ').map(name => 
                    `<li>${name}</li>`
                ).join('');

                // Reset to first tab
                infoTabs.forEach(t => t.classList.remove('active'));
                infoPanels.forEach(p => p.classList.remove('active'));
                infoTabs[0].classList.add('active');
                infoPanels[0].classList.add('active');

                // Show modal with animation
                modal.style.display = 'flex';
                requestAnimationFrame(() => {
                    modal.classList.add('show');
                    document.body.style.overflow = 'hidden';
                });
            });
        });

        // Handle tab switching in modal
        infoTabs.forEach(tab => {
            tab.addEventListener('click', () => {
                infoTabs.forEach(t => t.classList.remove('active'));
                infoPanels.forEach(p => p.classList.remove('active'));

                tab.classList.add('active');
                const panelId = tab.dataset.tab + 'Panel';
                document.getElementById(panelId).classList.add('active');
            });
        });

        // Close modal function with animation
        function closeModalFunction() {
            modal.classList.remove('show');
            setTimeout(() => {
                modal.style.display = 'none';
                document.body.style.overflow = '';
            }, 300);
        }

        // Close modal when clicking the close button
        if (closeModal) {
            closeModal.addEventListener('click', closeModalFunction);
        }

        // Close modal when clicking outside
        window.addEventListener('click', (event) => {
            if (event.target === modal) {
                closeModalFunction();
            }
        });

        // Close modal with escape key
        document.addEventListener('keydown', (event) => {
            if (event.key === 'Escape' && modal.classList.contains('show')) {
                closeModalFunction();
            }
        });
    }
});
