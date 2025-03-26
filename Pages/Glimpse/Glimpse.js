const words = ["Engineering", "Excellence", "Eminence"];
let index = 0;

const currentWord = document.getElementById("current-word");
const nextWord = document.getElementById("next-word");

// Function to initialize words immediately on page load
function initializeWords() {
    currentWord.innerText = words[0];
    nextWord.innerText = words[1];
    currentWord.style.opacity = 1;
    currentWord.style.transform = "rotateX(0deg)";
}

function updateWords() {
    // Set current word to fade out
    currentWord.style.opacity = 1;
    currentWord.style.transform = "rotateX(0deg)";
    currentWord.style.transition = "transform 0.8s ease-in-out, opacity 0.8s ease-in-out";
    currentWord.style.transform = "rotateX(90deg)";
    currentWord.style.opacity = 0;

    // Set next word to fade in
    setTimeout(() => {
        index = (index + 1) % words.length;
        currentWord.innerText = words[index];
        nextWord.innerText = words[(index + 1) % words.length];

        currentWord.style.transition = "none";
        currentWord.style.transform = "rotateX(-90deg)";
        currentWord.style.opacity = 0;

        setTimeout(() => {
            currentWord.style.transition = "transform 0.8s ease-in-out, opacity 0.8s ease-in-out";
            currentWord.style.transform = "rotateX(0deg)";
            currentWord.style.opacity = 1;
        });
    }, 800);
}

// Initialize words immediately
initializeWords();
// Start rotation after 3 seconds
setInterval(updateWords, 3000);

// New Service Page Script
document.addEventListener("DOMContentLoaded", function () {
  const serviceCards = document.querySelectorAll(".service-card");

  serviceCards.forEach((card) => {
    card.style.margin = "20px"; // Add more space between service cards

    card.addEventListener("mouseover", () => {
      card.classList.add("hovered");
      card.style.transition = "transform 0.5s ease, box-shadow 0.5s ease";
      card.style.transform = "scale(1.05)";
      card.style.boxShadow = "0 12px 24px rgba(0, 0, 0, 0.3)";
    });

    card.addEventListener("mouseout", () => {
      card.classList.remove("hovered");
      card.style.transition = "transform 0.5s ease, box-shadow 0.5s ease";
      card.style.transform = "scale(1)";
      card.style.boxShadow = "0 4px 8px rgba(0, 0, 0, 0.1)";
    });
  });

  // Carousel Initialization
  updateCarousel();
  startAutoSlide();

  // Added Service Grid Section
  const serviceGrid = document.getElementById('serviceGrid');
  const isMobile = window.innerWidth <= 1024; // Check if the device is mobile/tablet

  const services = [
      { category: 'E-commerce', tagline: 'Where Clicks Create Commerce', description: 'Clicks summon boundless marketplace, desires meet discovery, stitching vibrant digital trade tapestry.', backgroundImage: '/Company-Website/assets/ecommerce.png' },
      { category: 'Ed-Tech', tagline: 'Light the Mind', description: 'Lighting the mind through technology, education transforms with interactive and immersive learning.', backgroundImage: '/Company-Website/assets/edtech.png' },
      { category: 'GenAI', tagline: 'Engineered to Inspire', description: 'AI sculpts solutions, inspiration fuels smarter tomorrow, driving transformative innovative change forward.', backgroundImage: '/Company-Website/assets/Genai.png' },
      { category: 'Civil', tagline: 'Push limits, Building Legacies', description: 'Building resilient infrastructures, shaping sustainable cities through innovative engineering solutions always.', backgroundImage: '/Company-Website/assets/civil.png' },
      { category: 'EV', tagline: 'Fused for the Future', description: 'Digital tools sync with hardware, weaving motion through the electric dawn seamlessly.', backgroundImage: '/Company-Website/assets/EV.png' },
      { category: 'IoT', tagline: 'Precision in Every Link', description: 'Sensors weave intellect, sparking impact for a vibrant, connected digital world community.', backgroundImage: '/Company-Website/assets/iot.png' }
  ];

  services.forEach(service => {
      const card = document.createElement('div');
      card.classList.add('service-card');
      card.style.backgroundImage = `url(${service.backgroundImage})`;

      card.innerHTML = `
          <div class="content-overlay"></div>
          <div class="service-content">
              <h2>${service.category}</h2>
              <p class="tagline">${service.tagline}</p>
              <p class="description">${service.description}</p>
          </div>
      `;

      serviceGrid.appendChild(card);

      // Click to Expand for Mobile & Tablets
      if (isMobile) {
          card.addEventListener("click", function () {
              const isActive = card.classList.contains('active');

              // Hide all descriptions before showing the clicked one
              document.querySelectorAll('.service-card').forEach(c => c.classList.remove('active'));

              if (!isActive) card.classList.add('active');
          });
      }
  });

  // Lazy Load Backgrounds
  const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
          if (entry.isIntersecting) {
              const card = entry.target;
              card.style.backgroundImage = `url(${card.style.backgroundImage})`;
              observer.unobserve(card);
          }
      });
  }, { rootMargin: "50px" });

  document.querySelectorAll(".service-card").forEach(card => lazyLoadObserver.observe(card));
});

// Carousel Script
const projects = [
  {
    title: "T Dex",
    description:
      "T–Dex is a heritage exploration app for Tamil Nadu, featuring a multilingual LLM, location alerts, and BLE tags for offline artifact info. Users can customize languages for a personalized experience.",
    image: "/Company-Website/assets/tdex.webp",
  },
  {
    title: "AgroHive",
    description:
      "AgroHive is a smart marketplace connecting farmers directly with buyers. With AI-powered crop identification and multilingual support, it streamlines sales and empowers farmers.",
    image: "/Company-Website/assets/agrohive.webp",
  },
  {
    title: "MotoSpec-Genie",
    description:
      "MotoSpec-Genie is an AI-driven web app providing detailed car and bike specs and comparisons. It utilizes Generative AI for accurate insights, features an AI chatbot, and offers downloadable PDF reports.",
    image: "/Company-Website/assets/ecotrack.webp",
  },
  {
    title: "Framers",
    description:
      "FRAMERS is a smart eyewear solution that uses AI-powered face shape detection and Virtual Try-On to recommend personalized frames. Its intuitive interface enhances the online shopping experience, making it convenient and stylish.",
    image: "/Company-Website/assets/Framers.webp",
  },
  {
    title: "Eatsy",
    description:
      "Eatsy is an online food ordering platform that simplifies dining by reducing wait times, eliminating errors, and providing real-time updates.",
    image: "/Company-Website/assets/Eatsy.webp",
  },
];

let currentIndex = 0;
let intervalId = null;

function updateCarousel() {
  const title = document.getElementById("project-title");
  const description = document.getElementById("project-description");
  const featuredImage = document.getElementById("featured-image");
  const queueContainer = document.getElementById("queue-container");

  // Update featured project
  title.textContent = projects[currentIndex].title;
  description.textContent = projects[currentIndex].description;
  featuredImage.src = projects[currentIndex].image;

  // Update queue
  queueContainer.innerHTML = "";
  const queueItems = projects
    .slice(currentIndex + 1)
    .concat(projects.slice(0, currentIndex))
    .slice(0, 3);

  queueItems.forEach((project, index) => {
    const item = document.createElement("div");
    item.classList.add("queue-item");
    if (index === 0) item.classList.add("active");

    const img = document.createElement("img");
    img.src = project.image;
    img.alt = project.title;

    item.appendChild(img);
    queueContainer.appendChild(item);
  });
}

function startAutoSlide() {
  if (intervalId) clearInterval(intervalId);
  intervalId = setInterval(() => {
    currentIndex = (currentIndex + 1) % projects.length;
    updateCarousel();
  }, 3500);
}

function stopAutoSlide() {
  if (intervalId) clearInterval(intervalId);
}

// Why Choose Us Script
const boxWrapper = document.querySelector(".box-wrapper");
const visionContent = document.getElementById("vision-content");
const missionContent = document.getElementById("mission-content");
const visionExplanation = document.getElementById("vision-explanation");
const missionExplanation = document.getElementById("mission-explanation");
const visionBox = document.getElementById("vision-box");
const missionBox = document.getElementById("mission-box");
const Title = document.getElementById("vision-title");
const Title2 = document.getElementById("mission-title");

// Function to check if the screen is mobile
const isMobile = () => window.matchMedia("(max-width: 480px)").matches;

// Desktop Hover Events
const enableHoverEffect = () => {
  visionContent.addEventListener("mouseenter", showVision);
  visionContent.addEventListener("mouseleave", hideVision);
  missionContent.addEventListener("mouseenter", showMission);
  missionContent.addEventListener("mouseleave", hideMission);
};

// Mobile Click Events
const enableClickEffect = () => {
  visionContent.addEventListener("click", toggleVision);
  missionContent.addEventListener("click", toggleMission);
};

// Remove Events
const removeHoverEffect = () => {
  visionContent.removeEventListener("mouseenter", showVision);
  visionContent.removeEventListener("mouseleave", hideVision);
  missionContent.removeEventListener("mouseenter", showMission);
  missionContent.removeEventListener("mouseleave", hideMission);
};

const removeClickEffect = () => {
  visionContent.removeEventListener("click", toggleVision);
  missionContent.removeEventListener("click", toggleMission);
};

// Show Explanation (Desktop)
const showVision = () => {
  if (!isMobile()) {
    missionBox.appendChild(visionExplanation);
    updateVisibility(visionExplanation, true);
    updateVisibility(missionExplanation, false);

    // Change Background Color
    visionContent.style.backgroundColor = "#232637";
    boxWrapper.style.backgroundColor = "#232637";
    Title.style.color = "#ffff";
  }
};

const hideVision = () => {
  if (!isMobile()) {
    visionBox.appendChild(visionExplanation);
    updateVisibility(visionExplanation, false);

    // Reset Background Color
    visionContent.style.backgroundColor = "";
    boxWrapper.style.backgroundColor = "";
    Title.style.color = "";
  }
};

const showMission = () => {
  if (!isMobile()) {
    visionBox.appendChild(missionExplanation);
    updateVisibility(missionExplanation, true);
    updateVisibility(visionExplanation, false);

    // Change Background Color
    missionContent.style.backgroundColor = "#232637";
    boxWrapper.style.backgroundColor = "#232637";
    Title2.style.color = "#ffff";
  }
};

const hideMission = () => {
  if (!isMobile()) {
    missionBox.appendChild(missionExplanation);
    updateVisibility(missionExplanation, false);

    // Reset Background Color
    missionContent.style.backgroundColor = "";
    boxWrapper.style.backgroundColor = "";
    Title2.style.color = "";
  }
};

// Toggle Explanation (Mobile)
const toggleVision = () => {
  if (isMobile()) {
    const isVisible = visionExplanation.classList.contains("visible");
    updateVisibility(visionExplanation, !isVisible);
    updateVisibility(missionExplanation, false);
    missionBox.style.marginTop = isVisible ? "0px" : "60px";
  }
};

const toggleMission = () => {
  if (isMobile()) {
    const isVisible = missionExplanation.classList.contains("visible");
    updateVisibility(missionExplanation, !isVisible);
    updateVisibility(visionExplanation, false);
  }
};

// Utility Function to Toggle Visibility
const updateVisibility = (element, show) => {
  element.classList.toggle("visible", show);
  boxWrapper.classList.toggle("bg-gray-40", show);
};

// Initialize Event Listeners
const initEventListeners = () => {
  if (isMobile()) {
    removeHoverEffect();
    enableClickEffect();
  } else {
    removeClickEffect();
    enableHoverEffect();
  }
};

// Run event initialization on page load & update on resize
initEventListeners();
window.addEventListener("resize", initEventListeners);

// This is to prevent img downloading
document.addEventListener("contextmenu", function (event) {
  if (event.target.tagName === "IMG") {
    event.preventDefault(); // Block right-click on images
    // alert("Image download is disabled!");
  }
});