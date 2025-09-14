// Tab switching functionality
const tabBtns = document.querySelectorAll(".tab-btn");
const tabContents = document.querySelectorAll(".tab-content");

tabBtns.forEach(btn => {
  btn.addEventListener("click", () => {
    // Remove active state
    tabBtns.forEach(b => b.classList.remove("active"));
    tabContents.forEach(c => c.classList.remove("active"));

    // Add active state to clicked tab
    btn.classList.add("active");
    document.getElementById(btn.dataset.tab).classList.add("active");
  });
});

const path = window.location.pathname;
const isProjectsPage = path.endsWith("/projects/");

console.log("isProjectsPage:", isProjectsPage);

const swiper = new Swiper('.swiper', {
  slidesPerView: isProjectsPage ? 1 : 3,
  slidesPerGroup: 1,
  spaceBetween: 20,
  navigation: {
    nextEl: '.next-button',
    prevEl: '.prev-button',
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  allowTouchMove: false,
  loop: false,
});


// Project Viewer

// Store project content
const projectData = {
  technl: `
    <div class="project-overview">
      <div class="project-header">
          <h1>TechNL Challenge Project</h1>
          <h4>Summer 2022</h4>

          <p><strong>Skills:</strong> Python, Git, Project Management</p>
          <p><strong>Libraries:</strong> PyGame</p>
          <div class="link-buttons-container">
               <a href="https://github.com/Team-3-TechNL/challenge-project-game" class="link-btn" target="_blank">
                <img src="./assets/github.png" alt="GitHub logo">
                <span>GitHub</span>
               </a>
          </div>
      </div>
      <hr>
      <div class="project-layout">
        <div class="project-description">
          <p>Completed during the TechNL High School Immersion Program while at Compusult Ltd. Students participated in a Python course through Keyin College, and this project was the final submission of my group.</p>
          <ul>
            <li>Developed a 2D platformer game, Bring Back the King, as part of the TechNL High School Immersion Program at Compusult Ltd.</li>
            <li>Completed the project as a final submission for a Keyin College Python course, collaborating online with a team of three via Microsoft Teams.</li>
            <li>Designed and implemented core gameplay systems using PyGame, including:</li>
              <ul>
                <li>Gravity and movement system for realistic platforming</li>
                <li>Collision detection with platforms and objects</li>
                <li>Player input handling with attack mechanics (hitboxes, health system)</li>
                <li>NPC and boss enemy AI (movement, attacks, patterns)</li>
                <li>Tile-based level creation</li>
                <li>Animated sprites for players and enemies.</li>
              </ul>
 
            <li>Created original hand-drawn character sprites and integrated free online assets.</li>
            <li>Applied modular programming practices to structure game files and assets.</li>
            <li>Utilized Git/GitHub for version control and team collaboration.</li>
            <li>Led team coordination, task management, and troubleshooting during development.</li>
          </ul>
        </div>
        <div class="proj-images">
          <img src="./assets/project-assets/technl-challenge-project/bbtk1.png" alt="Screenshot of starting area.">
          <img src="./assets/project-assets/technl-challenge-project/bbtk2.png" alt="Screenshot of player holding sword.">
          <img src="./assets/project-assets/technl-challenge-project/bbtk3.png" alt="Screenshot of final boss.">
        </div>
      </div>
    </div>
  `
  ,boxbot: `
    <div class="project-overview">
      <div class="project-header">
          <h1>BoxBot Interface (HackFrost 3.0)</h1>
          <h4>Spring 2023</h4>

          <p><strong>Skills:</strong> Python, Git, Project Management, UI Design, App Development</p>
          <p><strong>Libraries:</strong> Tkinter, Custom Tkinter</p>
          <div class="link-buttons-container">
               <a href="https://github.com/ZhangYichang235/Hackathon-B.A.D/" class="link-btn" target="_blank">
                <img src="./assets/github.png" alt="GitHub logo">
                <span>GitHub</span>
               </a>
              <a href="https://www.youtube.com/watch?v=ZxZ8vhf7Hk0" class="link-btn" target="_blank">
                  <img src="./assets/youtube.png" alt="Youtube logo" class="youtube-logo">
                  <span>Demo Video</span>
              </a>    
              <a href="https://devpost.com/software/boxbot-lb3cg6" class="link-btn" target="_blank">
                  <img src="./assets/link.png" alt="Link icon">
                  <span>Devpost</span>
              </a>   
          </div>
      </div>
      <hr>
      <div class="project-layout">
        <div class="project-description">
          <p>At HackFrostNL 3.0, our team addressed the challenge of reducing the carbon footprint of industry deliveries. We proposed an automated box-cutting system that optimized cardboard packaging to minimize unused space. The project was presented through two rounds of judging, placing third overall among 27 teams and 127 participants.</p>
          <ul>
            <li>Coordinated with team members under time constraints to ideate, build, and present within the hackathon time period.</li>
            <li>Developed a front-end user interface using the CustomTkinter/Tkinter library.</li>
            <li>Implemented the interface using Tkinter classes and object-oriented programming, improving code organization and reusability.</li>
            <li>Built input functionality for product dimensions and fragile-item handling.</li>
            <li>Connected front-end with backend algorithm code, displaying the final packed box pattern when the user is done inputting the dimensions.</li>
            <li>Worked on troubleshooting both front and back ends of the application, creating a MVP in time for presentation.</li>
            <li>Delivered a live demonstration and project pitch to judging panels, emphasizing environmental and cost-saving impacts.</li>
          </ul>
        </div>
        <div class="proj-images">
          <img src="./assets/project-assets/boxbot/boxbot.png" alt="Image of BoxBot concept.">
          <img src="./assets/project-assets/boxbot/boxbot-app.png" alt="Screenshot of BoxBot user interface.">
        </div>
      </div>
    </div>
  `

  ,borebot: `
    <div class="project-overview">
      <div class="project-header">
          <h1>BoreBot Concept (HackFrost 4.0)</h1>
          <h4>Winter 2024</h4>

          <p><strong>Skills:</strong> Python, PowerPoint, Data Visualization, Database Design</p>
          <p><strong>Libraries:</strong> Matplotlib</p>
          <div class="link-buttons-container">
               <a href="./assets/project-assets/borebot/hackfrostpresF1.pptx" class="link-btn" target="_blank">
                <img src="./assets/powerpoint-logo.png" alt="PowerPoint logo">
                <span>Presentation</span>
               </a>
          </div>
      </div>
      <hr>
      <div class="project-layout">
        <div class="project-description">
          <p>At HackFrostNL 4.0, our team addressed the challenges faced by Arctic communities due to climate change. We proposed BoreBot, a conceptual autonomous, solar-powered rover designed to measure permafrost depth for scientific research. The project focused on system design, workflow development, and a database mockup, and was awarded first place overall.</p>
          <ul>
            <li>Coordinated with team members under time constraints to ideate, build, and present within the hackathon time period.</li>
            <li>Built a database mockup with Matplotlib to map permafrost data by region and generate detailed heatmaps.</li>
            <li>Designed a data pipeline concept linking rover measurements to a centralized database for integration with predictive models.</li>
            <li>Conducted a competitive analysis, identifying existing players, and positioning BoreBot as the only mobile, autonomous data-collection system.</li>
            <li>Outlined future development pathways, including higher-resolution data capture and AI-based predictive modeling.</li>
            <li>Produced and delivered a professional PowerPoint presentation to judging panels, securing first place among all participating teams.</li>
          </ul>
        </div>
        <div class="proj-images">
          <img src="./assets/project-assets/borebot/borebot.png" alt="Image of BoreBot concept.">
          <img src="./assets/project-assets/borebot/borebot-data.png" alt="Screenshot of permafrost data collection.">
        </div>
      </div>
    </div>
  `
  ,apphys1: `
    <div class="project-overview">
      <div class="project-header">
          <h1>AP Physics 1 Practice Exam Maker</h1>
          <h4>Winter 2024</h4>

          <p><strong>Skills:</strong> Python, File Organization</p>
          <p><strong>Libraries:</strong> Python-docx, OS, Random</p>
          <div class="link-buttons-container">
               <a href="https://github.com/DipStudios/AP-Physics-1-Practice" class="link-btn" target="_blank">
                <img src="./assets/github.png" alt="GitHub logo">
                <span>GitHub</span>
               </a>
          </div>
      </div>
      <hr>
      <div class="project-layout">
        <div class="project-description">
          <p>I created this program as a tool used to help with studying for my AP Physics 1 Exam. Based on screenshots of an existing resource, it randomizes the questions and outputs a final practice test with an answer key.</p>
          <ul>
            <li>Automated document creation with python-docx, embedding questions and answers directly as images.</li>
            <li>Used Python’s os and random libraries to handle file selection and randomization logic.</li>
            <li>Implemented file organization by unit, allowing the program to fairly distribute questions across different units.</li>
            <li>Built reusable code, using a key structure that tracked selected questions and linked them to their solutions.</li>
          </ul>
        </div>
        <div class="proj-images">
          <img src="./assets/project-assets/ap-phys-1/apphys-test.png" alt="Example of AP Physics MCQ.">
        </div>
      </div>
    </div>
  `
  ,gonzagarov: `
    <div class="project-overview">
      <div class="project-header">
          <h1>ROV Control Systems</h1>
          <h4>Winter 2022 - Summer 2024</h4>

          <p><strong>Skills:</strong> Python, Arduino, Raspberry Pi, GUI Development, Hardware Communication, Remote System Control, Control System Design</p>
          <p><strong>Libraries:</strong> PyFirmata, Tkinter/CustomTkinter, PyGame, Serial</p>

          <div class="link-buttons-container">
               <a href="https://github.com/Viking-Industries" class="link-btn" target="_blank">
                <img src="./assets/github.png" alt="GitHub logo">
                <span>GitHub</span>
               </a>
          </div>
          <p class="short-description">This project page details the work I did on the Gonzaga Robotics team, Viking Industries. As the lead programmer, I designed the main control systems for each ROV, including motor/tool control, video streaming, and the pilot interface.</p>

      </div>
      <hr>
      <div class="project-layout">
        <div class="project-description">
          <h3>2023-24</h3>
          <ul>
            <li>Built a system monitor application with Tkinter, providing a compact and organized dashboard to display relative motor speeds and water sensor activity in real time.</li>
            <li>Used PyGame to obtain pilot inputs from the joystick controller, translating them into PWM signals for accurate control of motor speed and direction. Mapped inputs to motors for a vectored thrust format.li>
            <li>Programmed communication between the Raspberry Pi and Arduino via PyFirmata, transmititng commands/data to and from ESCs, servo motors, and sensor modules.</li>
            <li>Implemented long-range pilot control using an Ethernet tether, with SSH and VNC protocols for remote access, allowing the pilot to view and stream live data from the Raspberry Pi to the main laptop during missions.</li>
            <li>Piloted the ROV during competition runs, coordinating with team members to complete assigned underwater tasks while adapting to real-time challenges.</li>
          </ul>
        </div>
        <div class="proj-images">
          <img src="./assets/project-assets/gonzaga-rov/gonzaga-rov.png" alt="ROV 2023-24">
          <div class="side-by-side">
            <img class="long-img" src="./assets/project-assets/gonzaga-rov/rov2023controlbox.png" alt="ROV control box.">
            <img src="./assets/project-assets/gonzaga-rov/rov2023motorgui.png" alt="Motors GUI">
          </div>
        </div>
      </div>
      <hr>
      <div class="project-layout">
        <div class="project-description">
          <h3>2022-23</h3>        
          <ul>
            <li>Switched to Python as the primary programming language, improving maintainability and onboarding for new members.</li>
            <li>Used Arduino Python library to establish a serial connection with the bot via USB.</li>
            <li>Designed a real-time system monitor with CustomTkinter, displaying motor speeds and water sensor status.</li>
            <li>Programmed joystick input handling with PyGame, converting signals into PWM outputs for precise ESC motor control and servo control.</li>
            <li>Used a USB-Ethernet-USB connection as the tether, communicating with the Arduino remotely.</li>
            <li>Served as copilot for the MATE ROV 2023 Ranger Competition, troubleshooting the bot on deck.</li>
          </ul>
        </div>
        <div class="proj-images">
          <img src="./assets/project-assets/gonzaga-rov/rov2022.png" alt="ROV 2022-23">
          <img src="./assets/project-assets/gonzaga-rov/rov2022motorgui.png" alt="Motor GUI">
        </div>
      </div>
      <hr>
      <div class="project-layout">
        <div class="project-description">
          <h3>2021-22</h3>        
          <ul>
            <li>Used the Firmata protocol with Java Processing to develop the GUI and handle communication with the Arduino.</li>
            <li>Programmed keyboard input handling for control of ESCs, motors, and the servo-driven claw mechanism.</li>
            <li>Implemented a leak detection system using a water-level sensor inside the bot, and connecting it to the user interface so the crew could take immediate action.</li>
            <li>Established a connection to the ROV using a long USB tether.</li>
            <li>Implemented a picture-capturing feature to complete the competition task of photographing designated props.</li>
          </ul>
        </div>
        <div class="proj-images">
          <img src="./assets/project-assets/gonzaga-rov/rov2021.png" alt="ROV 2021-22 and GUI">
        </div>
      </div>
    </div>
  `
  ,plarecycler: `
    <div class="project-overview">
      <div class="project-header">
          <h1>PLA Filament Recycling Project</h1>
          <h4>Fall 2024</h4>

          <p><strong>Skills:</strong> 3D CAD (Onshape), Prototyping and 3D Printing, Engineering Design, Research Skills, Technical Writing, Project Management</p>
          <div class="link-buttons-container">
              <a href="https://cad.onshape.com/documents/a25751871882ed8e7f368e32/w/360e91a94c810ae7ba2e593c/e/d15f12f3991e29b771d71398" class="link-btn" target="_blank">
                  <img src="./assets/link.png" alt="Link icon">
                  <span>Onshape File</span>
              </a>   
          </div>          

          
      </div>
      <hr>
      <div class="project-layout">
        <div class="project-description">
          <p>This project was for my Engineering Graphics and Design Course, where my team took on the challenge of finding a use for the excess plastic from 3D printed scraps in the Student Design Hub. The solution we came up with was to develop a PLA granulator, which would shred the plastics into a fine granulate. The granulate could then be moulded into building blocks, which can be donated to local schools.</p>
          <ul>
            <li>Conducted material research on PLA and existing recycling methods to develop sustainable solutions for 3D-printed plastic waste.</li>
            <li>Defined design objectives, constraints, and specifications for a pelletizer and recycling system to convert scrap filament into reusable products.</li>
            <li>Designed a hand-powered grinder and remoulding system to recycle scrap PLA from the MUN Student Design Hub.</li>
            <li>Developed 3D models of grinder blades and enclosure using Onshape and 3D printed a prototype of the 7-blade assembly.</li>
            <li>Hosted meetings with team and client to ensure project specifications.</li>
            <li>Developed a detailed design report with background research, CAD drawings, and client recommendations.</li>
            <li>Proposed practical solutions for recycling PLA into building blocks, cups, and reusable filament, emphasizing safety, social, environmental, and economic sustainability.</li>
          </ul>
        </div>
        <div class="proj-images">
          <img src="./assets/project-assets/pla-recycler/filament-recycler.png" alt="CAD Model of grinder.">
          <img src="./assets/project-assets/pla-recycler/recycler-prototype.png" alt="3D Printed Prototype.">
        </div>
      </div>
    </div>
  `
  ,rccar: `
    <div class="project-overview">
      <div class="project-header">
          <h1>Remote-Controlled Rescue Car</h1>
          <h4>Winter 2025</h4>

          <p><strong>Skills:</strong> Python, Arduino, Hardware Communication, Remote System Control, Control System Design</p>
          <p><strong>Libraries:</strong> PyGame, Matplotlib</p>
          <div class="link-buttons-container">
              <a href="https://www.youtube.com/watch?v=1ZoeJQ7MzsI" class="link-btn" target="_blank">
                <img src="./assets/youtube.png" alt="Youtube logo" class="youtube-logo">
                <span>Demo Video</span>
              </a>    
          </div>
      </div>
      <hr>
      <div class="project-layout">
        <div class="project-description">
          <p>This project was made for my Introduction to Programming Course. The task was to create something with the Grove Arduino Kit given to us, and we decided to develop a remote-controlled rescue car. The vehicle features manual and autonomous control, a USB camera, horn, and headlights, along with temperature and ultrasonic sensors for data collection and autopilot. Future applications include mapping hazardous areas, such as locating people in unsafe environments like fires.</p>
            <li>Used the given library for the Arduino Grove kit to integrate hardware components with Python. This included :</li>
              <ul>
                <li>Writing digital signals to the four DC motors, allowing the car to move around.</li>
                <li>Enabling and disabling the headlights/horn.</li>
                <li>Reading the temperature sensor values</li>
                <li>Changing the angle of the servo motor "head".</li>
              </ul>
            <li>Implemented controller input using the PyGame library, including a sequence code which enables the autopilot feature.</li>
            <li>Developed the car's autopilot based on the readings of the ultrasonic sensor. The car goes forward until it meets an obstacle, then the servo turns the sensor left and right. The car will take the clearest path.</li>
            <li>Used the Matplotlib library to visualize the temperature readings over time, adding a functionality to display or clear the graph.</li>
          </ul>
        </div>
        <div class="proj-images">
          <img src="./assets/project-assets/rc-rescue-car/rc-car.png" alt="Image of RC Rescue Car">
          <img src="./assets/project-assets/rc-rescue-car/control-scheme.png" alt="Screenshot of Control Scheme">
          <img src="./assets/project-assets/rc-rescue-car/car-autopilot.png" alt="Image of car in autopilot">
        </div>
      </div>
    </div>
  `


  ,website: `
    <div class="project-overview">
      <div class="project-header">
          <h1>Personal Website</h1>
          <h4>Summer 2025</h4>

          <p><strong>Skills:</strong> HTML, CSS, JavaScript, Web Development, UI Design, Frontend Programming</p>
          <p><strong>Libraries:</strong> Swiper.js</p>
          <div class="link-buttons-container">
              <a href="https://www.youtube.com/watch?v=1ZoeJQ7MzsI" class="link-btn" target="_blank">
                <img src="./assets/youtube.png" alt="Youtube logo" class="youtube-logo">
                <span>Demo Video</span>
              </a>    
          </div>
      </div>
      <hr>
      <div class="project-layout">
        <div class="project-description">
          <p>This static website serves as a portfolio to showcase my experience, projects, and technical skills as a computer engineering student. It is my first major project working with HTML, CSS, and JS.</p>
            <li>Used HTML to build the structure of the site. This included:</li>
              <ul>
                <li>Creating individual sections and text that can be linked via the navbar.</li>
                <li>Structuring descriptions of about, experience, and projects.</li>
                <li>Embedding external links such as GitHub repos.</li>
              </ul>
            <li>Used the Swiper libary to build the project carousel to view my projects easily.</li>
            <li>Used CSS flexbox and grid layouts to place images and information boxes/cards.</li>
            <li>Implemented dynamic project viewing with JavaScript by attaching event listeners to project buttons, and displaying the project details in a separate viewer.</li>
          </ul>
        </div>
        <div class="proj-images">
          <img src="./assets/project-assets/personal-website/websitehome.png" alt="Screenshot of Homepage">
          <img src="./assets/project-assets/personal-website/projectsbar.png" alt="Screenshot of Projects Carousel">
        </div>
      </div>
    </div>
  `
};

// Function to initialize project viewer
function initProjectViewer() {
  const viewer = document.getElementById("project-viewer");
  const details = document.getElementById("project-details");
  const closeBtn = viewer.querySelector(".close-btn");

  // Handle "View More" button clicks
  document.querySelectorAll(".view-more").forEach(btn => {
    btn.addEventListener("click", () => {
      const projKey = btn.getAttribute("data-project");
      details.innerHTML = projectData[projKey] || "<p>Project not found.</p>";
      viewer.classList.add("active");
    });
  });

  // Close
  closeBtn.addEventListener("click", () => {
    viewer.classList.remove("active");
    details.innerHTML = "";
  });
  viewer.addEventListener("click", (e) => {
    if (e.target === viewer) {
      viewer.classList.remove("active");
      details.innerHTML = "";
    }
  });
}

document.addEventListener("DOMContentLoaded", initProjectViewer);
