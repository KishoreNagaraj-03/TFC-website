document.addEventListener("DOMContentLoaded", function () {
    const teamMembers = [
      {
        image: "../../assets/images/Abinaya.WEBP",
        name: "Abinaya Narayanan",
        role: "Aspiring Architect",
        description: "Connecting solutions with success.",
        linkedin: "https://www.linkedin.com/in/abinaya-narayanan",
        github: "https://github.com/Abinayanarayanan",
      },
      {
        image: "../../assets/images/Ajay.WEBP",
        name: "Ajay J",
        role: "Aspiring Architect",
        description: "Connecting solutions with success.",
        linkedin: "https://www.linkedin.com/in/ajay-jx/",
        github: "https://github.com/ajax-j",
      },
      {
        image: "../../assets/images/Anit M Varghese.WEBP",
        name: "Anit",
        role: "Aspiring Architect",
        description: "Code that connects ideas with impact.",
        linkedin: "https://www.linkedin.com/in/anitmv",
        github: "https://github.com/AnitVarghese",
      },
      {
        image: "../../assets/images/Barath Kumar.WEBP",
        name: "Barathkumar",
        role: "Aspiring Architect",
        description: "I wrestle APIs into submission.",
        linkedin: "https://www.linkedin.com/in/barath-kumar-m",
        github: "https://github.com/Barathkumar30",
      },
      {
        image: "../../assets/images/bhackya_bharathi.webp",
        name: "Bhackya bharathi M",
        role: "Aspiring Architect",
        description: "Crafting digital elegance with every pixel!",
        linkedin: "https://www.linkedin.com/in/bhackya-bharathi/",
        github: "https://github.com/bhackya",
      },
      {
        image: "../../assets/images/Bharathidasan.webp",
        name: "Bharathidasan R",
        role: "Aspiring Architect",
        description: "Design. Develop. Dominate.",
        linkedin: "https://www.linkedin.com/in/bharathi-dasan-r/",
        github: "https://github.com/Bharathi7688",
      },
      {
        image: "../../assets/images/Deepak.webp",
        name: "Deepak M",
        role: "Aspiring Architect",
        description: "Code with purpose, build with passion",
        linkedin: "https://www.linkedin.com/in/deepakmaragathavel",
        github: "https://github.com/Itz-me-deepak/",
      },
      {
        image: "../../assets/images/Deepthi.webp",
        name: "Deepthi G",
        role: "Aspiring Architect",
        description: "Code. Break. Panic. Fix. Repeat.",
        linkedin: "http://www.linkedin.com/in/deepthi-ganesan",
        github: "https://github.com/deepthi013g",
      },
      {
        image: "../../assets/images/Dhanush.webp",
        name: "Dhanush kumar E",
        role: "Aspiring Architect",
        description: "I adore to orchestrate visual experiences.",
        linkedin: "https://www.linkedin.com/in/dhanushkumarwebdeveloper",
        github: "https://github.com/Dhanush-dk2003/",
      },
      {
        image: "../../assets/images/Gaja.webp",
        name: "Gaja Lakshmi R J",
        role: "Aspiring Architect",
        description: "Insights that drive impactful change.",
        linkedin: "https://www.linkedin.com/in/gaja-lakshmi",
        github: "https://github.com/Gaja7311",
      },
      {
        image: "../../assets/images/Gokul.webp",
        name: "Gokul",
        role: "Aspiring Architect",
        description:
          "Building simple and effective solutions through technology",
        linkedin: "https://www.linkedin.com/in/gokulparthiban/",
        github: "https://github.com/gokulbalasundari",
      },
      {
        image: "../../assets/images/Gouri Parvathy.WEBP",
        name: "Gouri Parvathy A",
        role: "Aspiring Architect",
        description: "Bringing your vision to life, pixel by pixel",
        linkedin: "https://www.linkedin.com/in/gouri-parvathy/",
        github: "https://github.com/Gouri-Parvathy",
      },
      {
        image: "../../assets/images/Gowsica.webp",
        name: "Gowsica S",
        role: "Aspiring Architect",
        description: "Connecting strategy with execution.",
        linkedin: "http://linkedin.com/in/gowsica-sangeetha/",
        github: "https://github.com/Gowsica",
      },
      {
        image: "../../assets/images/Gowtham.webp",
        name: "Gowtham R",
        role: "Aspiring Architect",
        description: "The architect of actionable insights.",
        linkedin: "https://www.linkedin.com/in/gowtham-rs",
        github: "https://github.com/Gowthamrengaraj",
      },
      {
        image: "../../assets/images/Hema Kumar.WEBP",
        name: "Hema Kumar RA",
        role: "Aspiring Architect",
        description: "Insights that drive impactful change.",
        linkedin: "https://www.linkedin.com/in/hemakumarra/",
        github: "https://github.com/HEMA-KUMAR10",
      },
      {
        image: "../../assets/images/Jerin.webp",
        name: "Jerin Flavio J",
        role: "Aspiring Architect",
        description: "Turning dreams into deployable realities.",
        linkedin: "www.linkedin.com/in/jerin-flavio",
        github: "https://github.com/Jerinflavio",
      },
      {
        image: "../../assets/images/Johann.webp",
        name: "Johann Manuel Kenneth",
        role: "Aspiring Architect",
        description: "Code’s my language, chaos my playground",
        linkedin: "https://www.linkedin.com/in/johann-kenneth0518/",
        github: "https://github.com/Johann-Kenneth",
      },
      {
        image: "../../assets/images/Kanishka.webp",
        name: "Kanishka Preethi K",
        role: "Aspiring Architect",
        description: "Pioneering connectivity, node to network",
        linkedin: "www.linkedin.com/in/kanishka-preethi-k/",
        github: "https://github.com/kanishkaPreethik",
      },
      {
        image: "../../assets/images/Karthi.webp",
        name: "Karthi S",
        role: "Aspiring Architect",
        description: "Where logic meets creativity",
        linkedin: "https://www.linkedin.com/in/karthi-s-78b9bb228/",
        github: "https://github.com/Karthi788",
      },
      {
        image: "../../assets/images/Kishore.webp",
        name: "Kishore N",
        role: "Aspiring Architect",
        description: "Defying logic, designing magic",
        linkedin: "https://www.linkedin.com/in/kishorenagaraj",
        github: "https://github.com/KishoreNagaraj-03",
      },
      {
        image: "../../assets/images/Krishna.webp",
        name: "Krishna",
        role: "Aspiring Architect",
        description: "Designing solutions, coding progress.",
        linkedin:
          "https://www.linkedin.com/in/krishna-p-%E3%82%AF%E3%83%AA%E3%82%B7%E3%83%A5%E3%83%8A%E3%83%BB%E3%83%91/",
        github: "https://github.com/KrishnaParthiban",
      },
      {
        image: "../../assets/images/Gouse.WEBP",
        name: "Mohammed Gouse B",
        role: "Aspiring Architect",
        description: "I write the code that runs the world.",
        linkedin: "https://www.linkedin.com/in/1709-mdgouse",
        github: "https://github.com/MohammmmedgouseB",
      },
      {
        image: "../../assets/images/Nandhini.webp",
        name: "Nandhini P",
        role: "Finance",
        description: "Bridging the gap between data and dollars",
        linkedin: "http://www.linkedin.com/in/nandhini-",
        github: "https://github.com/nandhini-palanimuthu",
      },
      {
        image: "../../assets/images/Navaneeth.webp",
        name: "Navaneeth T",
        role: "Aspiring Architect",
        description: "Turning raw ideas into digital masterpieces.",
        linkedin: "https://www.linkedin.com/in/navaneeththangavelu/",
        github: "https://github.com/NAVANEETH03",
      },
      {
        image: "../../assets/images/Nishanth.webp",
        name: "Nishanth. R",
        role: "Aspiring Architect",
        description: "Mess to flow, making it grow",
        linkedin: "https://www.linkedin.com/in/nishanth24",
        github: "https://github.com/Nishanth-Nhub",
      },
      {
        image: "../../assets/images/Pradeesh.webp",
        name: "Pradeesh Kovalan",
        role: "Aspiring Architect",
        description: "Turning Vision into Code, and Code into Impact.",
        linkedin: "https://www.linkedin.com/in/pradeesh-kovalan",
        github: "https://github.com/pradeesh-kovalan",
      },
      {
        image: "../../assets/images/Prasanth.webp",
        name: "Prasanth.M",
        role: "Aspiring Architect",
        description: "Challenge your limits",
        linkedin: "https://www.linkedin.com/in/prasanth-marimuthu",
        github: "https://github.com/PrasanthMarimuthuk",
      },
      {
        image: "../../assets/images/Prince Abishek.WEBP",
        name: "Prince abishek A",
        role: "Aspiring Architect",
        description: "Unlocking Possibilities Through Code.",
        linkedin: "https://www.linkedin.com/in/prince-abishek/",
        github: "https://github.com/princeabishek",
      },
      {
        image: "../../assets/images/Ragul.webp",
        name: "Ragul. R",
        role: "Aspiring Architect",
        description: "Bugs fear me, features love me.)",
        linkedin: "https://www.linkedin.com/in/iamragulr",
        github: "https://github.com/Ragulcodes",
      },
      {
        image: "../../assets/images/Ranjith.webp",
        name: "Ranjith S",
        role: "Aspiring Architect",
        description: "I turn ideas into 1s and 0s.",
        linkedin: "",
        github: "",
      },
      {
        image: "../../assets/images/Sivapprakash.webp",
        name: "Sivapprakash. C",
        role: "Aspiring Architect",
        description: "Without Infra, Everything is just an Idea",
        linkedin: "https://linkedin.com/in/sivapprakash-chinnaraj/",
        github: "https://github.com/sivapprakash-chinnaraj",
      },
      {
        image: "../../assets/images/Sree Baarath.webp",
        name: "Sree Baarath B",
        role: "Aspiring Architect",
        description: "Code with purpose, build with passion.",
        linkedin: "https://linkedin.com/in/sreebaarathb/",
        github: "https://github.com/sreebaarath411",
      },
      {
        image: "../../assets/images/Sudharsun.webp",
        name: "Sudharsun",
        role: "Aspiring Architect",
        description: "Building the bridge between ideas and reality",
        linkedin: "https://www.linkedin.com/in/sudharsun-balamurugan/",
        github: "https://github.com/SudharsunBalamurugan",
      },
      {
        image: "../../assets/images/Tharaneetharan.webp",
        name: "Tharaneetharan M",
        role: "Aspiring Architect",
        description: "Turning Data into Epic Wins",
        linkedin: "linkedin.com/in/tharanee-tharan-m",
        github: "https://github.com/Tharaneetharan19",
      },
    ];
  
    const cardList = document.getElementById("card-list");
  
    teamMembers.forEach((member) => {
      const card = document.createElement("div");
      card.classList.add("card");
  
      card.innerHTML = `
        <div class="image-container">
            <img class="card-image" src="${member.image}" alt="${member.name}">
        </div>
        <div class="card-content">
            <h3 class="name">${member.name}</h3>
            <p class="role">${member.role}</p>
            <p class="card-description">${member.description}</p>
        </div>
        <div class="card-social-icons">
            <a href="${member.linkedin}" target="_blank">
                <i class="fab fa-linkedin"></i>
            </a>
            <a href="${member.github}" target="_blank">
                <i class="fab fa-github"></i>
            </a>
        </div>
      `;
  
      cardList.appendChild(card);
    });
  });

  
// This is to prevent img downloading
  document.addEventListener("contextmenu", function (event) {
    if (event.target.tagName === "IMG") {
      event.preventDefault(); // Block right-click on images
      // alert("Image download is disabled!");
    }
  });