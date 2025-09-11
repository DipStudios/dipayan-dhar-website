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
const isProjectsPage = path.endsWith("/projects/"); // exact match

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


// =========================
// Project Viewer Script
// =========================

// Store project content (add more keys for more projects)
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
                <span>Link to GitHub</span>
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
  // Add more projects like "rc-car", "borebot", etc.
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

  // Close button
  closeBtn.addEventListener("click", () => {
    viewer.classList.remove("active");
    details.innerHTML = "";
  });

  // Optional: close on background click
  viewer.addEventListener("click", (e) => {
    if (e.target === viewer) {
      viewer.classList.remove("active");
      details.innerHTML = "";
    }
  });
}

// Run after DOM is ready
document.addEventListener("DOMContentLoaded", initProjectViewer);
