AOS.init();

//  Work experience cards

const experiencecards = document.querySelector(".experience-cards");
const exp = [
  {
    title: "The Thousand Bloom: A Chrysanthemum Grows in Chinatown",
    cardImage: "assets/images/experience-page/ongoing-projects/MemoryLane.png",
    place: "Public art installation",
    time: "2024 - present",
    desp: "This temporary installation entails 1000 silk chrysanthemums wrapped up in bouquets of nine. These individual bouquets will be arranged along the fence to collectively create a larger visual image of a chrysanthemum. I plan to invite the community to engage in the process and bring the community, residents and business included, together to celebrate the symbolism and festivities around chrysanthemums. Actively applying to grants to make this happen in 2024 (<a href='https://docs.google.com/presentation/d/1mvADflDsE6Yk_vJMBNEq07I_xl4lqwGoD7jnG_l7CUQ/edit?usp=sharing' target='_blank'>see PPT</a>).",
  },
  {
    title: "Memory Lane: Chronicles of Boston Chinatown",
    cardImage: "assets/images/experience-page/ongoing-projects/MemoryLane.png",
    place: "Role-playing video game",
    time: "2023 - present",
    desp: "Centered on the personal histories of Chinatown, I blend immersive gameplay with narratives that preserve and celebrate Boston Chinatown's rich legacy and cultural heritage. In doing so, I compel players to consider the complexities of institutional expansion, gentrification, and environmental injustices and their profound impact on the community.",
  },
  {
    title: "Unapologetic Aspirations",
    cardImage: "assets/images/experience-page/ongoing-projects/IHT_photo.png",
    place: "Published Articles",
    time: "2024 - present",
    desp: "I contribute <a href='https://sampan.org/2024/boston/preview-immigrant-history-trail-paves-way-for-chinatowns-legacy/' target='blank'>investigative articles</a> that aim to disrupt conventional narratives and shed light on overlooked voices and perspectives within the Boston Chinatown and broader Asian American community to Sampan newspaper, the only bilingual Chinese-English newspaper in New England.",
  },
  {
    title: "Reggie Wong Park Web Site",
    cardImage: "assets/images/experience-page/ongoing-projects/RWP_photo.png",
    place: "Web Site Development",
    time: "2024 - present",
    desp: "In collaboration with nonprofit organization Friends of Reggie Wong Park, I'm volunteering to create a Web site that offers visitors a glimpse into the vital work and vibrant community at Reggie Wong Park and that amplify the organization's mission, impact, and visibility.",
  },
  {
    title: "DocuSnap",
    cardImage: "assets/images/experience-page/ongoing-projects/DocuSnap.jpg",
    place: "Open Source Web Site",
    time: "2024 - present",
    desp: "I'm creating a template for a community-maintained open source project that makes setting up a platform for documentary photographers, photojournalists, and archivists simple, fast, and less cumbersome. I want to enable people to have a full-fledged website to showcase meaningful images so that they can spend time capturing moments of time and history.",
  },
];

const showCards2 = () => {
  let output = "";
  exp.forEach(
    ({ title, cardImage, place, time, desp }) =>
      (output += `        
    <div class="col gaap" data-aos="fade-up" data-aos-easing="linear" data-aos-delay="100" data-aos-duration="400"> 
      <div class="card card1">
        <img src="${cardImage}" class="featured-image"/>
        <article class="card-body">
          <header>
            <div class="title">
              <h3>${title}</h3>
            </div>
            <p class="meta">
              <span class="pre-heading">${place}</span><br>
              <span class="author">${time}</span>
            </p>
            <ol>
              ${desp}
            </ol>
          </header>
        </article>
      </div>
    </div>
      `)
  );
  experiencecards.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards2);

// Volunteership Cards

const volunteership = document.querySelector(".volunteership");
const volunteershipcards = [
  {
    title: "GirlScript Summer Of Code 2020",
    cardImage: "assets/images/experience-page/1.jpg",
    description:
      "Responsible for handling the projects GirlScript App and GirlScript Website Boilerplate.",
  },
  {
    title: "StudentCode-in 2020",
    cardImage: "assets/images/experience-page/2.jpg",
    description:
      "Responsible for handling open source contributions for the project Awesome Developer Portfolio.",
  },
  {
    title: "PClub Summer Of Code 2020",
    cardImage: "assets/images/experience-page/3.jpg",
    description:
      "Mentoring for the projects Deep Pixel, AutoVaidya, Just Resume and Doc2pen.",
  },
  {
    title: "Hakin-Codes",
    cardImage: "assets/images/experience-page/4.jpg",
    description:
      "Mentoring for the open source projects Deeppixel, Awesome Developer Portfolios and Doc2Pen.",
  },
];

const showCards = () => {
  let output = "";
  volunteershipcards.forEach(
    ({ title, cardImage, description }) =>
      (output += `        
      <div class="card volunteerCard" data-aos="fade-down" data-aos-easing="linear" data-aos-delay="100" data-aos-duration="600" style="height: 550px;width:400px">
      
      <img src="${cardImage}" height="250" width="65" class="card-img" style="border-radius:10px">
      <div class="content">
          <h2 class="volunteerTitle">${title}</h2><br>
          <p class="copy">${description}</p></div>
      
      </div>
      `)
  );
  volunteership.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards);

