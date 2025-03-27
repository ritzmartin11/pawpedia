document.addEventListener("DOMContentLoaded", function () {
    const tips = document.querySelectorAll(".tip"); // Get all tip elements
    const modal = document.getElementById("tipModal");
    const modalTitle = document.getElementById("modalTitle");
    const modalDescription = document.getElementById("modalDescription");
    const closeModal = document.querySelector(".modal .close");

    const tipDetails = [
        { 
            title: "Wearable Pet Technology for Health Monitoring", 
            description: "• Smart collars and GPS trackers help keep an eye on your dog’s activity levels, heart rate, and location.\n• Fitness trackers monitor steps and calories burned, ensuring your dog gets enough exercise.\n• Some devices include temperature alerts to prevent overheating in hot weather."
        },
        { 
            title: "Dental Health Awareness", 
            description: "• Dental disease is one of the most overlooked health issues in dogs.\n• Brush your dog’s teeth at least 2–3 times per week using pet-safe toothpaste.\nProvide dental chews or toys that help reduce plaque and tartar buildup.\n• Schedule professional dental cleanings as recommended by your vet."
        },
        { 
            title: "Hydration and Nutrition Upgrades", 
            description: "• Keep fresh water available at all times, and consider using a pet water fountain to encourage drinking.\n• Opt for high-quality, balanced dog food suited to your pet’s age, breed, and health needs.\n• Consider supplementing with probiotics, glucosamine (for joints), and fish oil (for coat health).\n• If switching to a raw or home-cooked diet, consult a vet to ensure proper nutrition."
        },
        { 
            title: "Safe Outdoor Adventures", 
            description: "• If hiking or walking in unfamiliar areas, always use a sturdy leash and harness for control.\n• Invest in dog boots to protect paws from rough terrain, hot pavement, or snow.\n• Keep vaccinations and flea/tick prevention up to date to protect against outdoor risks.\n• Carry a pet first aid kit in case of injuries while exploring."
        },
        { 
            title: "Mental Stimulation and Interactive Play", 
            description: "• Dogs need both physical and mental challenges to stay happy and prevent behavioral problems.\n• Rotate toys weekly to keep playtime exciting and introduce puzzle feeders to challenge their intelligence.\n• Try scent-based games like hiding treats for your dog to find.\n• Obedience training, agility courses, and new tricks help stimulate their mind while strengthening your bond."
        },
        { 
            title: "Aging and Senior Dog Care", 
            description: "• Senior dogs require extra care for mobility, joint health, and overall well-being.\n• Provide orthopedic beds for joint support and comfort.\n• Add glucosamine and omega-3 supplements to support joint health.\n• Schedule biannual vet checkups to monitor age-related conditions like arthritis and kidney disease.\n• Adjust diet to include easy-to-digest proteins and more fiber for gut health."
        },
        { 
            title: "Grooming and Seasonal Care", 
            description: "• Regular brushing prevents matting, reduces shedding, and keeps the coat healthy.\n• Use pet-safe wipes or dry shampoo between baths to keep your dog fresh.\n• Check and clean ears regularly, especially for floppy-eared breeds prone to infections.\n• In winter, moisturize paw pads to prevent cracking from the cold, and use dog-safe sunscreen in the summer."
        },
        { 
            title: "Litter-Free and Safe Home Environment", 
            description: "• Keep floors free of small objects that could be swallowed.\n• Use pet-safe household cleaning products to avoid toxic exposure.\n• Secure trash cans to prevent your dog from ingesting harmful foods like chocolate or bones.\n• Provide a designated dog space with a cozy bed and toys for relaxation."
        }
    ];
    
    tips.forEach((tip) => {
        tip.addEventListener("click", function (event) {
            const tipElement = event.target.closest(".tip");
            if (!tipElement) return; // Skip if no tip element found
    
            const tipIndex = parseInt(tipElement.getAttribute("data-index"), 10);
            if (!isNaN(tipIndex) && tipDetails[tipIndex]) {
                modalTitle.textContent = tipDetails[tipIndex].title;
                modalDescription.innerHTML = tipDetails[tipIndex].description.replace(/\n/g, "<br>");
                modal.classList.add("show");
            }
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

function closeContainer() {
    window.location.href = "latestPetCareTip.html";
}
