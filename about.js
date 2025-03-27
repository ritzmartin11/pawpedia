document.addEventListener('DOMContentLoaded', () => {
    const teamMembers = [
        {
            name: 'Sangoyo, Charlon R.',
            role: 'Project Manager',
            image: 'image/team2.jpg',
            description: 'As the project manager, my primary contribution focuses on leading the team and ensuring the smooth progress of our project. I have coordinated tasks, set deadlines, and facilitated team discussions to keep everyone aligned with our goals. Additionally, I have gathered and analyzed important data related to pet care, training, and behavior from credible sources, such as veterinary studies, expert articles, and scientific research. This ensures that our website provides accurate and valuable information for pet owners.'
        },
        {
            name: 'Barroga, Krizza Angela C.',
            role: 'UI/UX Design',
            image: 'image/team3.jpg',
            description: 'As the UI/UX designer, my role is to create an intuitive and visually appealing design for our PawPedia learning website. I focus on user experience by designing layouts, color schemes, and interactive elements that enhance usability and engagement. Through wireframing and prototyping, I ensure a seamless and accessible interface, making it easy for users to navigate and absorb information effectively.'
        },
        {
            name: 'Demorin, Ma. Hazel Z.',
            role: 'Lead Researcher',
            image: 'image/team4.jpg',
            description: 'As the researcher for our project, my primary contribution revolves around gathering and analyzing credible information to ensure the accuracy and relevance of the content on our website. I have conducted in-depth research on pet behavior, training techniques, and essential care tips from reputable sources, including veterinary studies, expert blogs, and scientific articles. This research ensures that our website provides reliable and well-structured educational material for pet owners.'
        },
        {
            name: 'Guanzing, Hazel Anne J.',
            role: 'Asst. Researcher',
            image: 'image/team5.jpg',
            description: 'As the assistant researcher, my role is to support the primary researcher by gathering supplementary information, verifying sources, and organizing data to ensure the accuracy and credibility of our website’s content. I assist in compiling research from various reputable sources, such as veterinary experts, pet care organizations, and scientific studies, to enhance the depth and reliability of our educational materials.'
        },
        {
            name: 'Dela Rosa, Ritz Martin R.',
            role: 'Lead Programmer',
            image: 'image/team1.jpg',
            description: 'As the Programmer, my role is to design and build a user-friendly interface for our website. I ensure the site is visually appealing, responsive, and easy to navigate using HTML, CSS, and JavaScript. Working closely with the researchers, I structure content effectively and incorporate interactive elements to enhance user engagement, creating an accessible and engaging learning platform for pet owners.'
        },
        {
            name: 'Lizarondo, Ricardo Carlos C.',
            role: 'Asst. Programmer',
            image: 'image/team6.jpg',
            description: 'As the assistant programmer, my role is to support the front-end development of our website. I assist in system development, troubleshooting and debugging code, optimizing system performance, and ensuring code quality and efficiency. I work closely with the front-end developer to refine the user interface and enhance the website’s responsiveness and functionality.'
        }
    ];

    let currentSlide = 0;
    const totalSlides = teamMembers.length;

    const updateSlide = (index) => {
        const memberInfo = teamMembers[index];
        const memberInfoDiv = document.querySelector('.member-info');
        
        memberInfoDiv.innerHTML = `
            <div class="member-left">
                <img src="${memberInfo.image}" alt="${memberInfo.name}">
                <div class="member-text">
                    <h3>${memberInfo.name}</h3>
                    <p class="role">${memberInfo.role}</p>
                </div>
            </div>
            <div class="member-right">
                <p class="description">${memberInfo.description}</p>
            </div>
        `;

        // Update dots
        const dots = document.querySelectorAll('.dot');
        dots.forEach((dot, i) => {
            dot.classList.toggle('active', i === index);
        });
    };

    // Navigation buttons
    const prevBtn = document.querySelector('.nav-btn.prev');
    const nextBtn = document.querySelector('.nav-btn.next');

    prevBtn.addEventListener('click', () => {
        currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
        updateSlide(currentSlide);
    });

    nextBtn.addEventListener('click', () => {
        currentSlide = (currentSlide + 1) % totalSlides;
        updateSlide(currentSlide);
    });

    // Dot navigation
    const dots = document.querySelectorAll('.dot');
    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            currentSlide = index;
            updateSlide(currentSlide);
        });
    });

    // Initialize first slide
    updateSlide(currentSlide);
});
