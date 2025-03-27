document.addEventListener('DOMContentLoaded', () => {
    // Initialize sidebar elements
    const sidebar = document.querySelector('.sidebar');
    const sidebarLogo = document.getElementById('sidebarLogo');
    const toggleBtn = document.getElementById('toggleSidebar');
    const menuItems = document.querySelectorAll('.menu-item');
    const currentHash = window.location.hash || '#breed';

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

    // Handle active menu item
    menuItems.forEach(item => {
        if (item.getAttribute('href') === currentHash) {
            item.classList.add('active');
        }
        
        item.addEventListener('click', (e) => {
            menuItems.forEach(i => i.classList.remove('active'));
            item.classList.add('active');
        });
    });

    // Load content based on hash
    loadContent(currentHash);
});

function loadContent(hash) {
    const contentArea = document.querySelector('.dashboard-content');
    
    // Clear current content
    contentArea.innerHTML = '';

    // Load appropriate content based on hash
    switch(hash) {
        case '#breed':
            contentArea.innerHTML = `
                <div class="content-header">
                    <h1>Breed Encyclopedia</h1>
                    <p>Explore different breeds of cats and dogs</p>
                </div>
                <div class="content-section">
                    <div class="breed-header">
                        <div class="breed-tabs">
                            <button class="breed-tab active" data-tab="dogs">Dogs</button>
                            <button class="breed-tab" data-tab="cats">Cats</button>
                        </div>
                        <div class="search-container">
                            <i class="fas fa-search search-icon"></i>
                            <input type="text" class="search-input" placeholder="Search breeds..." id="breedSearch">
                        </div>
                    </div>
                    
                    <div class="breed-section active" id="dogs">
                        <div class="breed-grid">
                            <div class="breed-card" data-breed="german shepherd">
                                <div class="breed-image"><i class="fas fa-image"></i></div>
                                <div class="breed-info">
                                    <h3 class="breed-name">German Shepherd</h3>
                                    <p class="breed-description">Intelligent and versatile working dog</p>
                                </div>
                            </div>
                            <div class="breed-card" data-breed="golden retriever">
                                <div class="breed-image"><i class="fas fa-image"></i></div>
                                <div class="breed-info">
                                    <h3 class="breed-name">Golden Retriever</h3>
                                    <p class="breed-description">Friendly and intelligent family companion</p>
                                </div>
                            </div>
                            <div class="breed-card" data-breed="labrador retriever">
                                <div class="breed-image"><i class="fas fa-image"></i></div>
                                <div class="breed-info">
                                    <h3 class="breed-name">Labrador Retriever</h3>
                                    <p class="breed-description">Outgoing and even-tempered breed</p>
                                </div>
                            </div>
                            <div class="breed-card" data-breed="siberian husky">
                                <div class="breed-image"><i class="fas fa-image"></i></div>
                                <div class="breed-info">
                                    <h3 class="breed-name">Siberian Husky</h3>
                                    <p class="breed-description">Energetic and athletic working dog</p>
                                </div>
                            </div>
                            <div class="breed-card" data-breed="poodle">
                                <div class="breed-image"><i class="fas fa-image"></i></div>
                                <div class="breed-info">
                                    <h3 class="breed-name">Poodle</h3>
                                    <p class="breed-description">Elegant and highly intelligent breed</p>
                                </div>
                            </div>
                            <div class="breed-card" data-breed="rottweiler">
                                <div class="breed-image"><i class="fas fa-image"></i></div>
                                <div class="breed-info">
                                    <h3 class="breed-name">Rottweiler</h3>
                                    <p class="breed-description">Loyal and confident guardian</p>
                                </div>
                            </div>
                            <div class="breed-card" data-breed="bulldog">
                                <div class="breed-image"><i class="fas fa-image"></i></div>
                                <div class="breed-info">
                                    <h3 class="breed-name">Bulldog</h3>
                                    <p class="breed-description">Calm and friendly companion</p>
                                </div>
                            </div>
                            <div class="breed-card" data-breed="beagle">
                                <div class="breed-image"><i class="fas fa-image"></i></div>
                                <div class="breed-info">
                                    <h3 class="breed-name">Beagle</h3>
                                    <p class="breed-description">Merry and friendly scent hound</p>
                                </div>
                            </div>
                        </div>
                        <div class="no-results" style="display: none;">No matching breeds found</div>
                    </div>

                    <div class="breed-section" id="cats">
                        <div class="breed-grid">
                            <div class="breed-card" data-breed="persian">
                                <div class="breed-image"><i class="fas fa-image"></i></div>
                                <div class="breed-info">
                                    <h3 class="breed-name">Persian</h3>
                                    <p class="breed-description">Sweet and gentle lap cat</p>
                                </div>
                            </div>
                            <div class="breed-card" data-breed="siamese">
                                <div class="breed-image"><i class="fas fa-image"></i></div>
                                <div class="breed-info">
                                    <h3 class="breed-name">Siamese</h3>
                                    <p class="breed-description">Vocal and social companion</p>
                                </div>
                            </div>
                            <div class="breed-card" data-breed="maine coon">
                                <div class="breed-image"><i class="fas fa-image"></i></div>
                                <div class="breed-info">
                                    <h3 class="breed-name">Maine Coon</h3>
                                    <p class="breed-description">Large and gentle giant</p>
                                </div>
                            </div>
                            <div class="breed-card" data-breed="bengal">
                                <div class="breed-image"><i class="fas fa-image"></i></div>
                                <div class="breed-info">
                                    <h3 class="breed-name">Bengal</h3>
                                    <p class="breed-description">Active and exotic-looking breed</p>
                                </div>
                            </div>
                            <div class="breed-card" data-breed="british shorthair">
                                <div class="breed-image"><i class="fas fa-image"></i></div>
                                <div class="breed-info">
                                    <h3 class="breed-name">British Shorthair</h3>
                                    <p class="breed-description">Easy-going and affectionate</p>
                                </div>
                            </div>
                            <div class="breed-card" data-breed="ragdoll">
                                <div class="breed-image"><i class="fas fa-image"></i></div>
                                <div class="breed-info">
                                    <h3 class="breed-name">Ragdoll</h3>
                                    <p class="breed-description">Relaxed and affectionate companion</p>
                                </div>
                            </div>
                            <div class="breed-card" data-breed="scottish fold">
                                <div class="breed-image"><i class="fas fa-image"></i></div>
                                <div class="breed-info">
                                    <h3 class="breed-name">Scottish Fold</h3>
                                    <p class="breed-description">Sweet-tempered and adaptable</p>
                                </div>
                            </div>
                            <div class="breed-card" data-breed="sphynx">
                                <div class="breed-image"><i class="fas fa-image"></i></div>
                                <div class="breed-info">
                                    <h3 class="breed-name">Sphynx</h3>
                                    <p class="breed-description">Energetic and attention-loving</p>
                                </div>
                            </div>
                        </div>
                        <div class="no-results" style="display: none;">No matching breeds found</div>
                    </div>
                </div>
            `;

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
                    const breedName = card.dataset.breed.toLowerCase();
                    const description = card.querySelector('.breed-description').textContent.toLowerCase();
                    const isVisible = breedName.includes(searchTerm) || description.includes(searchTerm);
                    card.classList.toggle('hidden', !isVisible);
                    if (isVisible) hasVisibleCards = true;
                });

                noResults.style.display = hasVisibleCards ? 'none' : 'block';
            }
            break;
        case '#body-language':
            contentArea.innerHTML = `
                <div class="content-header">
                    <h1>Pet Body Language</h1>
                    <p>Learn to understand your pet's behavior</p>
                </div>
                <div class="content-section">
                    <!-- Body language content will be loaded here -->
                </div>
            `;
            break;
        case '#pet-care':
            contentArea.innerHTML = `
                <div class="content-header">
                    <h1>Latest Pet Care Tips</h1>
                    <p>Stay updated with the best practices in pet care</p>
                </div>
                <div class="content-section">
                    <!-- Pet care tips content will be loaded here -->
                </div>
            `;
            break;
        case '#essential':
            contentArea.innerHTML = `
                <div class="content-header">
                    <h1>Essential Care</h1>
                    <p>Basic care requirements for your pets</p>
                </div>
                <div class="content-section">
                    <!-- Essential care content will be loaded here -->
                </div>
            `;
            break;
        case '#community':
            contentArea.innerHTML = `
                <div class="content-header">
                    <h1>Pet Community</h1>
                    <p>Connect with other pet lovers</p>
                </div>
                <div class="content-section">
                    <!-- Community content will be loaded here -->
                </div>
            `;
            break;
        default:
            contentArea.innerHTML = `
                <div class="content-header">
                    <h1>Welcome to Your Dashboard</h1>
                    <p>Select a section from the navigation menu to get started</p>
                </div>
                <div class="content-section">
                    <p>Here you can explore various features of our pet care platform.</p>
                </div>
            `;
    }
}

// Listen for hash changes
window.addEventListener('hashchange', () => {
    const hash = window.location.hash;
    loadContent(hash);
    
    // Update active state
    const menuItems = document.querySelectorAll('.menu-item');
    menuItems.forEach(item => {
        item.classList.remove('active');
        if (item.getAttribute('href') === hash) {
            item.classList.add('active');
        }
    });
});
