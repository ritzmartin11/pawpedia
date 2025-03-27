document.addEventListener("DOMContentLoaded", function () {
    const tips = document.querySelectorAll(".tip");
    const modal = document.getElementById("tipModal");
    const modalTitle = document.getElementById("modalTitle");
    const modalDescription = document.getElementById("modalDescription");
    const closeModal = document.querySelector(".close");

    // Sample content for each tip
    const tipDetails = [
        { 
            title: "Smart Feeders for Better Nutrition", 
            description: "• Cats thrive on routine, and an automatic feeder ensures they receive meals at the same time daily, even when you're not home.\n• Portion-controlled feeding helps prevent obesity, a common issue in indoor cats.\n• Some smart feeders have features like app control, voice recording, and personalized feeding schedules.\nIf your cat eats too fast, opt for a slow feeder to encourage slower, healthier eating habits."
        },
        { 
            title: "Hydration Solutions", 
            description: "• Many cats instinctively prefer running water over stagnant water, which is why pet water fountains are highly effective.\n• Switching to a wet food diet or mixing water with dry food can also help keep your cat hydrated.\n• Place multiple water bowls around the house to encourage drinking.\nTry adding ice cubes to water in warm weather to make it more appealing."
        },
        { 
            title: "Interactive Play for Mental Stimulation", 
            description: "Indoor cats require mental engagement to prevent boredom and destructive behaviors.\n• Rotate different toys weekly to keep things exciting.\n• Puzzle feeders provide entertainment while encouraging problem-solving skills.\n• Introduce training activities—cats can learn commands like 'sit' and 'high five' with positive reinforcement.\n• DIY enrichment: Try hiding treats around the house for your cat to 'hunt'."
        },
        { 
            title: "Grooming for Shedding Control", 
            description: "• Regular brushing helps reduce hairballs, prevents matting, and keeps their coat clean.\n• Use a de-shedding brush, especially during peak shedding seasons.\n\n• Bathing is usually unnecessary unless your cat gets dirty, but some breeds (e.g., Sphynx) require regular skin care.\n• Keep nails trimmed to avoid scratching injuries and furniture damage."
        },
        { 
            title: "Stress Reduction Techniques", 
            description: "Cats are highly sensitive to changes in their environment. Minimize stress by maintaining a stable routine.\n• If you’re moving or introducing a new pet, create a safe space where your cat can retreat.\n• Calming products like pheromone diffusers (Feliway), anti-anxiety wraps, or calming treats can help reduce stress.\n• Play soft music or white noise to create a relaxing environment, especially during loud events like thunderstorms or fireworks."
        },
        { 
            title: "Dental Health Improvements", 
            description: "• Dental disease is common in cats and often goes unnoticed. Signs include bad breath, drooling, and difficulty eating.\n• Start brushing your cat’s teeth early using a cat-specific toothbrush and toothpaste.\n• Dental treats and chew toys can help reduce plaque buildup.\n• Schedule annual vet dental checkups to ensure healthy gums and teeth."
        },
        { 
            title: "Safe Outdoor Exploration", 
            description: "Indoor cats live longer and healthier lives, but they can still enjoy safe outdoor experiences.\n• Set up a catio (an enclosed patio for cats) to let them enjoy fresh air while staying protected.\n• Train your cat to walk on a leash with a harness for supervised outdoor adventures.\n• If you let your cat roam in a fenced yard, ensure it is escape-proof and free from toxic plants."
        },
        { 
            title: "Litter Box Hygiene & Placement", 
            description: "• Keep the litter box clean—scoop daily and change the litter weekly to prevent odors and bacteria buildup.\n• Provide one litter box per cat, plus one extra, in different locations around the house.\n• Avoid scented litters if your cat is sensitive to strong smells.\n• Place the litter box in a quiet, low-traffic area for comfort."
        },
        { 
            title: "Senior Cat Care Adjustments", 
            description: "• Older cats need extra care, including joint supplements for arthritis and orthopedic bedding.\n• Increase vet visits to twice a year to monitor for age-related conditions like kidney disease and hyperthyroidism.\n• Adjust their diet to support aging organs—look for senior-specific cat food.\n• Ensure easy access to food, water, and the litter box by minimizing obstacles like stairs."
        },
        { 
            title: "Emergency Preparedness for Your Cat", 
            description: "• Keep a pet first aid kit with essentials like gauze, antiseptic, and tweezers.\n• Microchip your cat and ensure they wear an ID tag in case they ever escape.\n• Prepare an emergency bag with food, water, medications, and important vet records in case of natural disasters.\n• Know the signs of common health emergencies, such as difficulty breathing, sudden collapse, or excessive vomiting, and have your vet’s contact info readily available."
        }
    ];

    // Loop through each tip to add event listeners with the correct index
    tips.forEach((tip, index) => {
        tip.addEventListener("click", function () {
            console.log("Clicked index:", index, "Title:", tipDetails[index].title); // Debugging log
            modalTitle.textContent = tipDetails[index].title;
            modalDescription.textContent = tipDetails[index].description;
            modal.classList.add("show");
        });
    });

    // Close modal functionality
    closeModal.addEventListener("click", function () {
        modal.classList.remove("show");
    });

    // Close modal if user clicks outside content
    window.addEventListener("click", function (event) {
        if (event.target === modal) {
            modal.classList.remove("show");
        }
    });
});
