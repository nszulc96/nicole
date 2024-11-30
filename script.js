document.addEventListener("DOMContentLoaded", () => {
    const menuLinks = document.querySelectorAll(".header-menu a");
    const mainContent = document.querySelector(".main-content p");
    const mainFiles = document.querySelector(".main-files");

    // Conteúdos personalizados
    const aboutMeContent = `
        <div class="about-me-container">
            <img src="hi.png" alt="Bitmoji Picture" class="about-me-photo">
            <div class="about-me-text">
                Hi! <br>
                How are you? <br> <br>
                This is my simple portfolio where you can see my work and skills. <br> <br>
                I'm from São Paulo, Brazil, and I enjoy studying, listening to music, learning about programming languages, and playing games. <br>
                I started using a personal computer when I was about seven years old. It was my first computer, a Compaq Presario with Windows 98, and that's when I fell in love with technology.
                Back in the day, I used to use my computer every single day to learn something new. Since then, I've continued my studies, went to college, and started working in web development.
                Today, I'm truly grateful to my old computer for giving me a career and for being my best friend! :)
            </div>
        </div>
    `;

    const projectsContent = `
        <h3>Expresso Tecnologia <small>09/2018 - 10/2024</small></h3>
        <p>
            Acted in the development of ERP Mobili, ELO360 and JagOS projects, between 2018 and 2024, giving
            maintenance, refactoring and creating various features, such as integration with API,
            reports, graphs, image galleries, among others, in the management, logistics,
            financial and HR, in addition to playing a fundamental role in creating a complete module of
            order of services, demonstrating technical capacity, proactivity and teamwork.
        </p> <br>

        <h3>Biblio Mania (C# - 2015)</h3>
        <p>A library management project developed in C#. This system allows users to catalogue, search and track book loans in an intuitive way.</p>
        <img src="bibliomania/splash-screen.png" alt="Screen Biblio Mania" class="imgsBiblio">
        <img src="bibliomania/login-screen.png" alt="Screen Biblio Mania" class="imgsBiblio">
        <img src="bibliomania/rent.png" alt="Screen Biblio Mania" class="imgsBiblio">
    `;


    const skills = `
        <div class="skills-container">
            <ul>
                <li>HTML + CSS + Javascript (+ 10 years)
                    <div class="progressBar">
                        <div class="bar">█ █ █ █ █ █ █ █ █ █</div>
                    </div>
                </li>
                <li>PHP + Codeigniter (+ 7 years)
                    <div class="progressBar">
                        <div class="bar">█ █ █ █ █ █ █ █ █ █</div>
                    </div>
                </li>
                <li>Laravel + React.JS + Node.JS (+ 4 years)
                    <div class="progressBar">
                        <div class="bar">█ █ █ █ █ █ █</div>
                    </div>
                </li>
                <li>SQL Server + MySQL (+ 10 years)
                    <div class="progressBar">
                        <div class="bar">█ █ █ █ █ █ █ █ █ █</div>
                    </div>
                </li>
            </ul>

            <ul>
                <li>Windows (+ 20 years)
                    <div class="progressBar">
                        <div class="bar">█ █ █ █ █ █ █ █ █ █</div>
                    </div>
                </li>
                <li>Linux (+ 10 years)
                    <div class="progressBar">
                        <div class="bar">█ █ █ █ █ █ █ █ █ █</div>
                    </div>
                </li>
                <li>Microsoft Office & LibreOffice (+ 20 years)
                    <div class="progressBar">
                        <div class="bar">█ █ █ █ █ █ █ █ █ █</div>
                    </div>
                </li>
                <li>Hardware and Networking Management (+ 15 years)
                    <div class="progressBar">
                        <div class="bar">█ █ █ █ █ █ █ █ █ █</div>
                    </div>
                </li>
            </ul>

            <ul>
                <li>Agile Scrum - Daily
                    <div class="progressBar">
                        <div class="bar">█ █ █ █ █ █ █</div>
                    </div>
                </li>
                <li>LGPD
                    <div class="progressBar">
                        <div class="bar">█ █ █ █ █ █ █ █ █ █</div>
                    </div>
                </li>
                <li>Project Manager
                    <div class="progressBar">
                        <div class="bar">█ █ █ █ █ █ █ █ █ █</div>
                    </div>
                </li>
                <li>E-Commerce + ERP + CRM
                    <div class="progressBar">
                        <div class="bar">█ █ █ █ █ █ █ █ █ █</div>
                    </div>
                </li>
            </ul>
        </div>
    `;

    // Função para manipular o conteúdo
    const handleMenuClick = (event) => {
        event.preventDefault();
        const target = event.target;

        // Remover classe 'active' de todos os links
        menuLinks.forEach(link => link.classList.remove("active"));
        target.classList.add("active");

        // Atualizar conteúdo baseado no menu clicado
        switch (target.textContent.trim()) {
            case "About Me":
                mainContent.innerHTML = aboutMeContent;
                mainFiles.style.display = "none";
                break;
            case "Skills":
                mainContent.innerHTML = skills;
                mainFiles.style.display = "flex";
                break;
            case "Projects and Experiences":
                mainContent.innerHTML = projectsContent;
                mainFiles.style.display = "flex";
                break;
            default:
                mainContent.innerHTML = "Bem-vindo!";
                mainFiles.style.display = "none";
        }
    };

    // Adicionar eventos de clique aos links do menu
    menuLinks.forEach(link => link.addEventListener("click", handleMenuClick));

    // Definir "About Me" como conteúdo padrão
    mainContent.innerHTML = aboutMeContent;
    mainFiles.style.display = "none";
});
