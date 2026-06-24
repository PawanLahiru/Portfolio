// typing animation
const text = "Full stack Developer";
const typingElement = document.querySelector(".typing-animation");
let index = 0;
let isDeleting = false;

function type() {
    // Get the current text to display
    let displayText = text.slice(0, index);
    typingElement.textContent = displayText;

    // Determine if we are typing or deleting
    if (!isDeleting) {
        index++;
        // If we reach the end of the text, start deleting
        if (index === text.length) {
            isDeleting = true; 
        }
    } else {
        index--;
        // If we reach the beginning of the text, start typing again
        if (index === 0) {
            isDeleting = false; 
        }
    }

    // Set timeout based on whether we are typing or deleting
    setTimeout(type, isDeleting ? 50 : 200);
}

// Start the typing animation
type();



// Transition Animation Handler
const transitionOverlay = document.createElement("div");
transitionOverlay.classList.add("page-transition");
document.body.appendChild(transitionOverlay);

document.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", (e) => {
        e.preventDefault();
        const target = e.target.href;
        transitionOverlay.classList.add("active");
        setTimeout(() => {
            window.location.href = target;
        }, 500); // Match the CSS transition duration
    });
});



        // Project data (you can expand this easily)
        const projectData = {
            web1: {
              title: "Portfolio Website",
              image: "images/image1.jpg",
              description: "A responsive portfolio site built with HTML, CSS, and JavaScript.",
              gallery: ["images/image1.jpg", "images/image2.png"],
              link: "https://your-live-demo-link.com"
            },
            web2: {
              title: "E-Commerce App",
              image: "images/image2.png",
              description: "An e-commerce platform built with React and Node.js.",
              gallery: ["images/image2.png", "images/image1.jpg"],
              link: "https://your-live-demo-link.com"
            },
            web3: {
              title: "UI Design Showcase",
              image: "images/image1.jpg",
              description: "Collection of UI/UX prototypes created in Figma.",
              gallery: ["images/image1.jpg"],
              link: "#"
            },
            web4: {
              title: "Blog Platform",
              image: "images/image1.jpg",
              description: "A blogging platform with rich text editor and backend integration.",
              gallery: ["images/image1.jpg"],
              link: "#"
            }
          };
          
          // Open modal with project details
          function openProjectModal(id) {
            const project = projectData[id];
            if (!project) return;
          
            document.getElementById("modal-title").textContent = project.title;
            document.getElementById("modal-image").src = project.image;
            document.getElementById("modal-description").textContent = project.description;
          
            // gallery
            const galleryDiv = document.getElementById("modal-gallery");
            galleryDiv.innerHTML = "";
            project.gallery.forEach(img => {
              const imgEl = document.createElement("img");
              imgEl.src = img;
              galleryDiv.appendChild(imgEl);
            });
          
            document.getElementById("modal-link").href = project.link;
          
            document.getElementById("project-modal").style.display = "flex";
          }
          
          // Close modal
          function closeModal() {
            document.getElementById("project-modal").style.display = "none";
          }