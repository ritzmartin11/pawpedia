// Team data
const teamData = {
    ritz: {
        name: 'Ritz Martin R. Dela Rosa',
        role: 'Asst. Programmer',
        image: 'image/team1.jpg',
        about: 'As the assistant programmer, my role is to support the front-end development of our website. I assist in system development, troubleshooting and debugging code, optimizing system performance, and ensuring code quality and efficiency. I work closely with the front-end developer to refine the user interface and enhance the website\'s responsiveness and functionality.'
    },
    charlon: {
        name: 'Charlon R. Sangoyo',
        role: 'Project Manager',
        image: 'image/team2.jpg',
        about: 'As the project manager, my primary contribution focuses on leading the team and ensuring the smooth progress of our project. I have coordinated tasks, set deadlines, and facilitated team discussions to keep everyone aligned with our goals. Additionally, I have gathered and analyzed important data related to pet care, training, and behavior from credible sources, such as veterinary studies, expert articles, and scientific research. This ensures that our website provides accurate and valuable information for pet owners.'
    },
    krizza: {
        name: 'Krizza Angela C. Barroga',
        role: 'UI/UX Designer',
        image: 'image/team3.jpg',
        about: 'As the UI/UX designer, my role is to create an intuitive and visually appealing design for our PawPedia learning website. I focus on user experience by designing layouts, color schemes, and interactive elements that enhance usability and engagement. Through wireframing and prototyping, I ensure a seamless and accessible interface, making it easy for users to navigate and absorb information effectively.'
    },
    hazel: {
        name: 'Ma. Hazel Z. Demorin',
        role: 'Lead Researcher',
        image: 'image/team4.jpg',
        about: 'As the researcher for our project, my primary contribution revolves around gathering and analyzing credible information to ensure the accuracy and relevance of the content on our website. I have conducted in-depth research on pet behavior, training techniques, and essential care tips from reputable sources, including veterinary studies, expert blogs, and scientific articles. This research ensures that our website provides reliable and well-structured educational material for pet owners.'
    },
    anne: {
        name: 'Hazel Anne J. Guanzing',
        role: 'Asst. Researcher',
        image: 'image/team5.jpg',
        about: 'As the assistant researcher, my role is to support the primary researcher by gathering supplementary information, verifying sources, and organizing data to ensure the accuracy and credibility of our website\'s content. I assist in compiling research from various reputable sources, such as veterinary experts, pet care organizations, and scientific studies, to enhance the depth and reliability of our educational materials.'
    },
    ricardo: {
        name: 'Ricardo Carlos C. Lizarondo',
        role: 'Lead Programmer',
        image: 'image/team6.jpg',
        about: 'As the Programmer, my role is to design and build a user-friendly interface for our website. I ensure the site is visually appealing, responsive, and easy to navigate using HTML, CSS, and JavaScript. Working closely with the researchers, I structure content effectively and incorporate interactive elements to enhance user engagement, creating an accessible and engaging learning platform for pet owners.'
    }
};

// Initialize Swiper
const swiper = new Swiper('.team-swiper', {
    slidesPerView: 1,
    spaceBetween: 20,
    loop: true,
    pagination: {
        el: '.swiper-pagination',
        clickable: true
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
    },
    breakpoints: {
        640: {
            slidesPerView: 2
        },
        1024: {
            slidesPerView: 3
        }
    }
});

// Modal functionality
document.addEventListener('DOMContentLoaded', () => {
    const teamModal = document.getElementById('teamModal');
    const modalClose = teamModal.querySelector('.close-modal');
    const prevButton = teamModal.querySelector('.modal-arrow.prev');
    const nextButton = teamModal.querySelector('.modal-arrow.next');
    const navDots = teamModal.querySelectorAll('.modal-nav-dot');
    let currentMemberIndex = 0;
    const memberIds = ['ritz', 'charlon', 'krizza', 'hazel', 'anne', 'ricardo'];

    function updateModal(memberId) {
        const memberData = teamData[memberId];
        if (!memberData) return;

        const modalImg = teamModal.querySelector('.modal-team-img');
        const modalName = teamModal.querySelector('.modal-profile h2');
        const modalRole = teamModal.querySelector('.modal-profile .role');
        const modalAbout = teamModal.querySelector('.about-section p.about');

        modalImg.src = memberData.image;
        modalImg.alt = memberData.name;
        
        // Format name as "Last Name, First Name Middle Initial"
        const nameParts = memberData.name.split(' ');
        const lastName = nameParts.pop();
        const formattedName = `${lastName}, ${nameParts.join(' ')}`;
        
        modalName.textContent = formattedName;
        modalRole.textContent = memberData.role;
        modalAbout.textContent = memberData.about;

        // Update nav dots
        navDots.forEach((dot, index) => {
            dot.classList.toggle('active', index === currentMemberIndex);
        });
    }

    // Add click event listeners to team members
    document.querySelectorAll('.team-member').forEach((member) => {
        member.addEventListener('click', () => {
            const memberId = member.dataset.member;
            if (memberId) {
                currentMemberIndex = memberIds.indexOf(memberId);
                updateModal(memberId);
                teamModal.classList.add('show');
            }
        });
    });

    // Navigation buttons
    prevButton.addEventListener('click', () => {
        currentMemberIndex = (currentMemberIndex - 1 + memberIds.length) % memberIds.length;
        updateModal(memberIds[currentMemberIndex]);
    });

    nextButton.addEventListener('click', () => {
        currentMemberIndex = (currentMemberIndex + 1) % memberIds.length;
        updateModal(memberIds[currentMemberIndex]);
    });

    // Navigation dots
    navDots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            currentMemberIndex = index;
            updateModal(memberIds[currentMemberIndex]);
        });
    });

    // Close modal
    modalClose.addEventListener('click', () => {
        teamModal.classList.remove('show');
    });

    // Close modal when clicking outside
    teamModal.addEventListener('click', (e) => {
        if (e.target === teamModal) {
            teamModal.classList.remove('show');
        }
    });
});

// Contact Form Handling
document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contactForm');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form data
            const formData = {
                name: document.getElementById('name').value,
                email: document.getElementById('email').value,
                subject: document.getElementById('subject').value,
                message: document.getElementById('message').value
            };
            
            // For now, just log the form data
            console.log('Form submitted:', formData);
            
            // Clear the form
            contactForm.reset();
            
            // Show success message (you can enhance this)
            alert('Thank you for your message! We will get back to you soon.');
        });
    }
});
