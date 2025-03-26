// script.js
$(document).ready(function() {
    function handleScroll() {
        if ($(window).scrollTop() < 200) {
            $('.text').addClass('hidden');
            $('.description').addClass('hidden');
        } else {
            $('.text').removeClass('hidden');
            $('.description').removeClass('hidden');
        }
    }

    // Initial check
    handleScroll();

    // Add scroll event listener
    $(window).on('scroll', handleScroll);
});
const section = document.querySelector('.why-choose-us');

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('section-animate');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0 }
  );

  if (section) {
    observer.observe(section);
  }
  // Services data (optional, if you want to generate cards dynamically)
const services = [
    {
      id: 1,
      title: "Web Development",
      description: "Create exceptional web experiences with our cutting-edge development services. We build responsive, scalable, and user-friendly websites that drive results for your business.",
      imagePath: "https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      imagePosition: "right"
    },
    {
      id: 2,
      title: "App Development",
      description: "Transform your ideas into powerful mobile applications that users love. Our team specializes in creating native and cross-platform apps with intuitive interfaces and robust functionality.",
      imagePath: "https://images.unsplash.com/photo-1621839673705-6617adf9e890?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1632&q=80",
      imagePosition: "left"
    },
    {
      id: 3,
      title: "Digital Marketing",
      description: "Amplify your online presence with our comprehensive digital marketing strategies. From SEO and content marketing to social media and paid advertising, we help you reach and engage your target audience.",
      imagePath: "https://images.unsplash.com/photo-1533750349088-cd871a92f312?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      imagePosition: "right"
    },
    {
      id: 4,
      title: "Designing",
      description: "Elevate your brand with our expert design services. We create stunning visuals, from brand identities and UI/UX designs to print materials and digital assets that captivate your audience.",
      imagePath: "https://images.unsplash.com/photo-1561070791-2526d30994b5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1464&q=80",
      imagePosition: "left"
    }
  ];
  
  // Intersection Observer for animation
  document.addEventListener('DOMContentLoaded', () => {
    console.log('Script loaded'); // Add this line
    const section = document.querySelector('.services-section');
    console.log('Section found:', section); // Add this line
  
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            console.log('Section is intersecting'); // Add this line
            entry.target.classList.add('section-animate');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0}
    );
  
    if (section) {
      observer.observe(section);
    }
  });

  // This is to prevent img downloading
  document.addEventListener("contextmenu", function (event) {
    if (event.target.tagName === "IMG") {
      event.preventDefault(); // Block right-click on images
      // alert("Image download is disabled!");
    }
  });