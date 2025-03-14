class SpecialHeader extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <!-- Navigation bar -->
        <nav class="navbar navbar-expand-lg bg-body-tertiary fixed-top">
            <div class="container-fluid">
                <div style="display: flex; align-items: center">
                    <img src="./images/AI-HUB.jpg" alt="AI-HUB@VVIT" width="35px" style="border-radius: 60%;">
                    <a class="navbar-brand" href="#">AI-HUB@VVIT</a>
                </div>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav">
                        <li class="nav-item">
                            <a class="nav-link" aria-current="page" href="index.html">Home</a>
                        </li>
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" href="#" id="projectsDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Projects
                            </a>
                            <ul class="dropdown-menu" aria-labelledby="projectsDropdown">
                                <li><a class="dropdown-item" href="Projects.html">Ongoing Projects</a></li>
                                <li class="dropdown-submenu">
                                    <a class="dropdown-item dropdown-toggle" href="#" id="completedProjectsDropdown" aria-expanded="false">
                                        Completed Projects
                                        <i class="fas fa-chevron-right submenu-arrow"></i>
                                    </a>
                                    <ul class="dropdown-menu submenu" aria-labelledby="completedProjectsDropdown">
                                        <li><a class="dropdown-item" href="Game.html">Games</a></li>
                                        <li><a class="dropdown-item" href="Projects.html#ml">Machine Learning</a></li>
                                        <li><a class="dropdown-item" href="Projects.html#dl">Deep Learning</a></li>
                                    </ul>
                                </li>
                            </ul>
                        </li>
                        
                        <li class="nav-item">
                            <a class="nav-link" href="blog.html">Blogs</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="Meetups.html">Meetups</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="Apps.html">Apps</a>
                        </li>
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" href="#" id="careerDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Career Catalysts
                            </a>
                            <ul class="dropdown-menu" aria-labelledby="careerDropdown">
                                <li><a class="dropdown-item" href="Career.html">Job Guide</a></li>
                                <li class="dropdown-submenu">
                                    <a class="dropdown-item dropdown-toggle" href="#" id="lifeSkillsDropdown" aria-expanded="false">
                                        Life Skills
                                        <i class="fas fa-chevron-right submenu-arrow"></i>
                                    </a>
                                    <ul class="dropdown-menu submenu" aria-labelledby="lifeSkillsDropdown">
                                        <li><a class="dropdown-item" href="#">Quantitative Aptitude</a></li>
                                        <li><a class="dropdown-item" href="#">Reasoning Ability</a></li>
                                        <li><a class="dropdown-item" href="#">Verbal Ability</a></li>
                                    </ul>
                                </li>
                                <li><a class="dropdown-item" href="Career.html">Web Dev</a></li>
                            </ul>
                        </li>
                        
                        <li class="nav-item">
                            <a class="nav-link" href="About.html">People</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
        
        <style>
            /* Dropdown Styling */
            @media (min-width: 992px) {
                .navbar .dropdown:hover .dropdown-menu {
                    display: block;
                }
            }

            @media (max-width: 991px) {
                .navbar .dropdown-menu {
                    position: static;
                    display: none;
                }

                .navbar .dropdown-menu.show {
                    display: block;
                }
            }

            .dropdown-submenu {
                position: relative;
            }
            
            .dropdown-submenu .submenu {
                top: 0;
                left: 100%;
                margin-top: -1px;
                display: none;
                position: absolute;
            }
            
            .submenu-arrow {
                float: right;
                margin-top: 4px;
            }
            
            @media (min-width: 992px) {
                .dropdown-submenu:hover .submenu {
                    display: block;
                }
            }
            
            @media (max-width: 991px) {
                .dropdown-submenu .submenu {
                    position: static;
                    margin-left: 15px;
                    margin-right: 15px;
                    margin-top: 0;
                    left: 0;
                    display: none;
                }
                
                .dropdown-submenu .dropdown-item {
                    padding-left: 20px;
                }
            }
        </style>`
    }
}

class Links extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet">
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"></script>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.7.2/css/all.min.css">
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200&icon_names=domain">
        <link rel="preconnect" href="https://fonts.googleapis.com">
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
        <link href="https://fonts.googleapis.com/css2?family=Lora:ital,wght@0,400..700;1,400..700&display=swap" rel="stylesheet">
        <link rel="stylesheet" href="./reuse_elements/common.css">
        <link rel="stylesheet" href="./reuse_elements/hover.css">
        `
    }
}

class SpecialFooter extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <div class="bg-circle-container">
            <div class="bg-circle"></div>
            <div class="bg-circle secondary"></div>
            <div class="bg-circle tertiary"></div>
        </div>
        <nav class="navbar navbar-expand-lg fixed-bottom bg-body-tertiary">
            <div class="container-fluid" id="footer">
                <ul style="list-style: none;display:flex; justify-content: center;">
                    <div><li class="desc_item"><i class="fa-solid fa-building-columns"></i><a href="https://www.vvitguntur.com/">VVIT</a></li></div>
                    <div><li class="desc_item"><i class="fa-solid fa-location-dot"></i><a href="https://www.google.com/maps/place/Vasireddy+Venkatadri+Institute+of+Technology/data=!4m2!3m1!1s0x0:0x8c86e4f36490336b?sa=X&ved=1t:2428&ictx=111">Guntur</a></li></div>
                    <div><li class="desc_item"><i class="fas fa-envelope"></i><a href="mailto:">Mail</a></li></div>
                    <div><li class="desc_item"><i class="fa-brands fa-github"></i><a href="https://github.com/AIHUB-VVIT">Github</a></li></div>
                </ul>
            </div>
        </nav>
        <style>
            .desc_item {
                margin: 0 15px;
                display: flex;
                align-items: center;
            }
            
            .desc_item i {
                margin-right: 8px;
            }
            
            .desc_item a {
                text-decoration: none;
                color: inherit;
                transition: color 0.3s ease;
            }
            
            .desc_item a:hover {
                color:rgb(214, 219, 228);
            }
            
            #footer {
                justify-content: center;
                padding: 10px 0;
                position: relative;
                z-index: 10;
                background-color: rgba(248, 249, 250, 0.85);
                backdrop-filter: blur(5px);
                -webkit-backdrop-filter: blur(5px);
            }
            
            .bg-circle-container {
                position: fixed;
                bottom: 0;
                right: 0;
                width: 100%;
                height: 100%;
                pointer-events: none;
                z-index: -1;
                overflow: hidden;
            }
            
            .bg-circle {
                position: absolute;
                bottom: -35%;
                right: -15%;
                width: 75vw;
                height: 70vw;
                border-radius: 50%;
                background-image: url('./images/ch.jpg');
                background-size: cover;
                background-position: center;
                opacity: 0.15;
                z-index: -1;
                animation: pulse 20s infinite alternate;
                box-shadow: 0 0 30px rgba(255, 255, 255, 0.15), inset 0 0 60px rgba(0, 0, 0, 0.1);
                transition: all 0.8s ease;
                filter: saturate(1.2);
            }
            
            .bg-circle.secondary {
                bottom: -30%;
                right: -25%;
                width: 55vw;
                height: 55vw;
                background-image: url('#.jpg');
                opacity: 0.1;
                animation: pulse-reverse 25s infinite alternate;
                animation-delay: 3s;
                mix-blend-mode: screen;
                filter: hue-rotate(15deg);
            }
            
            .bg-circle.tertiary {
                bottom: -40%;
                right: 10%;
                width: 40vw;
                height: 40vw;
                background: radial-gradient(circle at center, rgba(100,150,255,0.2), rgba(20,80,200,0.05));
                opacity: 0.1;
                animation: float 30s infinite alternate;
                animation-delay: 5s;
                mix-blend-mode: overlay;
                backdrop-filter: blur(2px);
                border: 1px solid rgba(255,255,255,0.05);
            }
            
            @keyframes pulse {
                0% {
                    transform: scale(1) rotate(0deg);
                    box-shadow: 0 0 30px rgba(255, 255, 255, 0.1), inset 0 0 60px rgba(0, 0, 0, 0.1);
                }
                50% {
                    box-shadow: 0 0 40px rgba(255, 255, 255, 0.15), inset 0 0 70px rgba(0, 0, 0, 0.1);
                }
                100% {
                    transform: scale(1.08) rotate(3deg);
                    box-shadow: 0 0 50px rgba(255, 255, 255, 0.2), inset 0 0 80px rgba(0, 0, 0, 0.1);
                }
            }
            
            @keyframes pulse-reverse {
                0% {
                    transform: scale(1.05) rotate(-2deg);
                    opacity: 0.08;
                }
                100% {
                    transform: scale(0.95) rotate(1deg);
                    opacity: 0.12;
                }
            }
            
            @keyframes float {
                0% {
                    transform: translateY(0) scale(1);
                    opacity: 0.08;
                }
                50% {
                    transform: translateY(-10px) scale(1.05);
                    opacity: 0.12;
                }
                100% {
                    transform: translateY(5px) scale(0.95);
                    opacity: 0.1;
                }
            }
            
            /* Interactive states */
            .navbar.fixed-bottom:hover ~ .bg-circle-container .bg-circle {
                opacity: 0.25;
                filter: saturate(1.5) brightness(1.1);
            }
            
            /* Ensure content overlays background */
            .card, .container, .project-card, .app-card, .blog-card {
                position: relative;
                z-index: 5;
            }
            
            /* Mobile optimization */
            @media (max-width: 768px) {
                .desc_item {
                    margin: 0 8px;
                    font-size: 0.9em;
                }
                
                .bg-circle {
                    width: 120vw;
                    height: 120vw;
                    bottom: -60%;
                    right: -25%;
                    opacity: 0.09;
                    animation: mobile-pulse 15s infinite alternate;
                }
                
                .bg-circle.secondary {
                    width: 80vw;
                    height: 80vw;
                    bottom: -40%;
                    right: -20%;
                    opacity: 0.06;
                }
                
                .bg-circle.tertiary {
                    width: 60vw;
                    height: 60vw;
                    bottom: -30%;
                    right: 5%;
                    opacity: 0.04;
                    animation: none;
                    background: radial-gradient(circle at center, rgba(100,150,255,0.1), rgba(20,80,200,0.02));
                }
                
                @keyframes mobile-pulse {
                    0% {
                        transform: scale(1);
                    }
                    100% {
                        transform: scale(1.02);
                    }
                }
                
                /* Ensure footer is visible on mobile */
                #footer {
                    padding: 8px 0;
                }
                
                /* Fix for mobile browsers that don't support backdrop-filter */
                @supports not (backdrop-filter: blur(5px)) {
                    #footer {
                        background-color: rgba(248, 249, 250, 0.95);
                    }
                }
            }
        </style>
        
        <script>
            // Enhanced interactive background
            document.addEventListener('DOMContentLoaded', function() {
                const circles = document.querySelectorAll('.bg-circle');
                let lastScrollTop = 0;
                
                // Fix z-index for content elements to ensure they overlay the background
                const contentElements = document.querySelectorAll('.card, .container, .row, section');
                contentElements.forEach(element => {
                    if (getComputedStyle(element).position === 'static') {
                        element.style.position = 'relative';
                    }
                    element.style.zIndex = '5';
                });
                
                // Mouse movement effect
                document.addEventListener('mousemove', function(e) {
                    if (window.innerWidth > 992) {  // Only on larger screens
                        const mouseX = e.clientX / window.innerWidth;
                        const mouseY = e.clientY / window.innerHeight;
                        
                        circles.forEach((circle, index) => {
                            const factor = index === 0 ? 1 : (index === 1 ? -0.5 : 0.3);
                            const xMove = (mouseX - 0.5) * 8 * factor;
                            const yMove = (mouseY - 0.5) * 8 * factor;
                            
                            // Apply transform while preserving existing animations
                            circle.style.transform = \`translate(\${xMove}px, \${yMove}px)\`;
                        });
                    }
                });
                
                // Scroll effect
                window.addEventListener('scroll', function() {
                    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
                    const scrollDirection = scrollTop > lastScrollTop ? 'down' : 'up';
                    const scrollSpeed = Math.abs(scrollTop - lastScrollTop) / 10;
                    
                    if (scrollSpeed > 0.5) {  // Only apply for significant scroll amounts
                        circles.forEach((circle, index) => {
                            const factor = index === 0 ? 0.2 : (index === 1 ? -0.1 : 0.15);
                            const direction = scrollDirection === 'down' ? 1 : -1;
                            const currentOpacity = parseFloat(window.getComputedStyle(circle).getPropertyValue('opacity'));
                            
                            // Subtle opacity change based on scroll
                            const newOpacity = Math.max(0.08, Math.min(0.2, currentOpacity + (direction * factor * 0.01)));
                            circle.style.opacity = newOpacity;
                        });
                    }
                    
                    lastScrollTop = scrollTop <= 0 ? 0 : scrollTop; // For Mobile or negative scrolling
                });
                
                // Touch interaction for mobile
                document.addEventListener('touchmove', function(e) {
                    if (window.innerWidth <= 992 && e.touches.length > 0) {
                        const touch = e.touches[0];
                        const touchX = touch.clientX / window.innerWidth;
                        const touchY = touch.clientY / window.innerHeight;
                        
                        circles.forEach((circle, index) => {
                            if (index < 2) { // Only apply to first two circles for performance
                                const factor = index === 0 ? 0.5 : -0.3;
                                const xMove = (touchX - 0.5) * 5 * factor;
                                const yMove = (touchY - 0.5) * 5 * factor;
                                
                                circle.style.transform = \`translate(\${xMove}px, \${yMove}px)\`;
                            }
                        });
                    }
                });
            });
        </script>`
    }
}

// Define custom elements
customElements.define('special-header', SpecialHeader);
customElements.define('required-links', Links);
customElements.define('special-footer', SpecialFooter);

// Dropdown handling script
document.addEventListener('DOMContentLoaded', function() {
    // Function to handle dropdown toggling
    function setupDropdownToggle(dropdownToggle) {
        // Remove existing event listeners to prevent multiple bindings
        dropdownToggle.removeEventListener('click', dropdownClickHandler);
        
        // Add click event listener
        dropdownToggle.addEventListener('click', dropdownClickHandler);
    }

    // Dropdown click handler
    function dropdownClickHandler(e) {
        // Prevent default link behavior
        e.preventDefault();
        e.stopPropagation();

        // Close other open dropdowns
        document.querySelectorAll('.dropdown-toggle').forEach(function(otherToggle) {
            if (otherToggle !== this) {
                let otherDropdownMenu = otherToggle.closest('.dropdown').querySelector('.dropdown-menu');
                otherDropdownMenu.classList.remove('show');
                otherToggle.setAttribute('aria-expanded', 'false');
            }
        }.bind(this));

        // Toggle current dropdown
        let dropdownMenu = this.closest('.dropdown').querySelector('.dropdown-menu');
        let isCurrentlyShown = dropdownMenu.classList.contains('show');

        // Close all dropdowns first
        document.querySelectorAll('.dropdown-menu').forEach(function(menu) {
            menu.classList.remove('show');
        });
        document.querySelectorAll('.dropdown-toggle').forEach(function(toggle) {
            toggle.setAttribute('aria-expanded', 'false');
        });

        // If it wasn't shown, show it
        if (!isCurrentlyShown) {
            dropdownMenu.classList.add('show');
            this.setAttribute('aria-expanded', 'true');
        }
    }

    // Setup main dropdowns
    var mainDropdownToggles = document.querySelectorAll('.navbar .dropdown-toggle');
    mainDropdownToggles.forEach(setupDropdownToggle);

    // Handle submenu dropdowns
    var dropdownSubmenus = document.querySelectorAll('.dropdown-submenu');
    dropdownSubmenus.forEach(function(submenu) {
        var dropdownToggle = submenu.querySelector('.dropdown-toggle');
        var dropdownMenu = submenu.querySelector('.submenu');
        
        // Desktop hover effect
        submenu.addEventListener('mouseenter', function() {
            if (window.innerWidth >= 992) {
                dropdownMenu.style.display = 'block';
            }
        });
        
        submenu.addEventListener('mouseleave', function() {
            if (window.innerWidth >= 992) {
                dropdownMenu.style.display = 'none';
            }
        });
        
        // Mobile touch handling
        dropdownToggle.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            
            // Close all other open submenus first
            document.querySelectorAll('.dropdown-submenu .submenu').forEach(function(menu) {
                if (menu !== dropdownMenu) {
                    menu.style.display = 'none';
                }
            });
            
            // Toggle submenu visibility
            dropdownMenu.style.display = dropdownMenu.style.display === 'block' ? 'none' : 'block';
        });
    });

    // Close dropdowns when clicking outside
    document.addEventListener('click', function(e) {
        // Check if click is outside dropdowns
        if (!e.target.closest('.navbar-nav')) {
            // Close all dropdowns
            document.querySelectorAll('.dropdown-menu').forEach(function(menu) {
                menu.classList.remove('show');
            });
            document.querySelectorAll('.dropdown-toggle').forEach(function(toggle) {
                toggle.setAttribute('aria-expanded', 'false');
            });
            document.querySelectorAll('.dropdown-submenu .submenu').forEach(function(menu) {
                menu.style.display = 'none';
            });
        }
    });
});
