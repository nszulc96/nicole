$(document).ready(function () {
    const output = $('#output');
    const input = $('#terminal-input');

    const commands = {
        about: `
            <div style="display: flex; align-items: center;">
                <img src="hi.png" alt="Hi" style="width: 80px; height: auto; margin-right: 15px;">
                <p><b>Hi!</b></p>
            </div>
            <p>How are you?</p>
            <p>This is my simple portfolio where you can see my work and skills.</p>
            <p>I'm from São Paulo, Brazil, and I enjoy studying, listening to music, learning about programming languages, and playing games.</p>
            <p>I started using a personal computer when I was about seven years old. It was my first computer, a <span class="highlight-computers">Compaq Presario</span> with <span class="highlight-os">Windows 98</span>, and that's when I fell in love with technology.</p>
            <p>Back in the day, I used to use my computer every single day to learn something new. Since then, I've continued my studies, went to college, and started working in web development.</p>
            <p>Today, I'm truly grateful to my old computer for giving me a career and for being my best friend! :)</p>
        `,
        skills: `
            <div class="skills-container">
                <ul>
                    <li>HTML + CSS + JavaScript (+ 10 years)
                        <div class="progressBar">
                            <div class="bar" style="width: 100%;">█ █ █ █ █ █ █ █ █ █</div>
                        </div>
                    </li>
                    <li>PHP + Codeigniter + GIT (+ 7 years)
                        <div class="progressBar">
                            <div class="bar" style="width: 70%;">█ █ █ █ █ █ █ █ █ █</div>
                        </div>
                    </li>
                    <li>Laravel + React.JS + Node.JS (+ 4 years)
                        <div class="progressBar">
                            <div class="bar" style="width: 60%;">█ █ █ █ █ █ █</div>
                        </div>
                    </li>
                    <li>SQL Server + MySQL (+ 10 years)
                        <div class="progressBar">
                            <div class="bar" style="width: 100%;">█ █ █ █ █ █ █ █ █ █</div>
                        </div>
                    </li>
                </ul>
                <ul>
                    <li>Windows (+ 20 years)
                        <div class="progressBar">
                            <div class="bar" style="width: 100%;">█ █ █ █ █ █ █ █ █ █</div>
                        </div>
                    </li>
                    <li>Linux (+ 10 years)
                        <div class="progressBar">
                            <div class="bar" style="width: 90%;">█ █ █ █ █ █ █ █ █ █</div>
                        </div>
                    </li>
                    <li>Microsoft Office & LibreOffice (+ 20 years)
                        <div class="progressBar">
                            <div class="bar" style="width: 100%;">█ █ █ █ █ █ █ █ █ █</div>
                        </div>
                    </li>
                    <li>Hardware and Networking Management (+ 15 years)
                        <div class="progressBar">
                            <div class="bar" style="width: 85%;">█ █ █ █ █ █ █ █ █ █</div>
                        </div>
                    </li>
                </ul>
                <ul>
                    <li>Agile Scrum - Daily
                        <div class="progressBar">
                            <div class="bar" style="width: 75%;">█ █ █ █ █ █ █</div>
                        </div>
                    </li>
                    <li>LGPD
                        <div class="progressBar">
                            <div class="bar" style="width: 80%;">█ █ █ █ █ █ █ █ █ █</div>
                        </div>
                    </li>
                    <li>Project Manager
                        <div class="progressBar">
                            <div class="bar" style="width: 70%;">█ █ █ █ █ █ █ █ █ █</div>
                        </div>
                    </li>
                    <li>E-Commerce + ERP + CRM
                        <div class="progressBar">
                            <div class="bar" style="width: 90%;">█ █ █ █ █ █ █ █ █ █</div>
                        </div>
                    </li>
                </ul>
            </div>
        `,
        projects: `
            <div class="project">
                <h3>Expresso Tecnologia <small>09/2018 - 10/2024</small></h3>
                <p>
                    Acted in the development of ERP Mobili, ELO360 and JagOS projects, between 2018 and 2024, giving
                    maintenance, refactoring and creating various features, such as integration with API,
                    reports, graphs, image galleries, among others, in the management, logistics,
                    financial and HR, in addition to playing a fundamental role in creating a complete module of
                    order of services, demonstrating technical capacity, proactivity and teamwork.
                </p>
            </div>

            <div class="project">
                <h3>Biblio Mania (C# - 2015)</h3>
                <p>
                    A library management project developed in C#. This system allows users to catalogue, search and track book loans in an intuitive way.
                </p>
                <div class="project-images">
                    <a href="bibliomania/splash-screen.png" target="_blank">
                        <img src="bibliomania/splash-screen.png" alt="Screen Biblio Mania" class="imgsBiblio">
                    </a>
                    <a href="bibliomania/login-screen.png" target="_blank">
                        <img src="../bibliomania/login-screen.png" alt="Screen Biblio Mania" class="imgsBiblio">
                    </a>
                    <a href="bibliomania/rent.png" target="_blank">
                        <img src="../bibliomania/rent.png" alt="Screen Biblio Mania" class="imgsBiblio">
                    </a>
                </div>
            </div>
        `,
        social: `
            <div class="social-media">
                <h3>Work with me!</h3>
                <div class="social-icons">
                    <a href="https://www.instagram.com/nickszulc1996" target="_blank" class="social-icon instagram">
                        <img src="https://cdn.jsdelivr.net/npm/simple-icons@v4/icons/instagram.svg" alt="Instagram">
                    </a>
                    <a href="https://www.facebook.com/nicoleszulc16" target="_blank" class="social-icon facebook">
                        <img src="https://cdn.jsdelivr.net/npm/simple-icons@v4/icons/facebook.svg" alt="Facebook">
                    </a>
                    <a href="https://github.com/nszulc96" target="_blank" class="social-icon github">
                        <img src="https://cdn.jsdelivr.net/npm/simple-icons@v4/icons/github.svg" alt="GitHub">
                    </a>
                    <a href="https://www.linkedin.com/in/nicole-szulc-medeiros-390098107/" target="_blank" class="social-icon linkedin">
                        <img src="https://cdn.jsdelivr.net/npm/simple-icons@v4/icons/linkedin.svg" alt="LinkedIn">
                    </a>
                    <a href="mailto:nszulc96@outlook.com" target="_blank" class="social-icon email">
                        <img src="https://cdn.jsdelivr.net/npm/simple-icons@v4/icons/mail-dot-ru.svg" alt="E-Mail">
                    </a>
                </div>
            </div>
        `,
        help: `
            <p><b>Available Commands:</b></p>
            <ul>
                <li><b>about</b> - Learn more about me</li>
                <li><b>skills</b> - See my skill set</li>
                <li><b>projects</b> - View my projects and experiences</li>
                <li><b>social</b> - Find my social media profiles</li>
                <li><b>help</b> - Show available commands</li>
                <li><b>clear</b> - Clear the terminal</li>
            </ul>
        `,
        clear: '',
    };

    function processCommand(command) {
        output.append(`<p><span class="text-warning">guest@portfolio</span>:~$ <span class="text-success">${command}</span></p>`);

        if (command === 'clear') {
            output.html('');
        } else if (commands[command]) {
            output.append(`<p>${commands[command]}</p>`);
        } else {
            output.append(`<p class="text-danger">Command not found: ${command}</p>`);
        }

        output.append('<p><span class="text-warning">guest@portfolio</span>:~$ <span id="current-command"></span></p>');
        $('#current-command').text('');
        input.focus();

        $('html, body').animate({
            scrollTop: $('#footer').offset().top
        }, 1000);
    }

    input.on('keypress', function (e) {
        if (e.which === 13) {
            const command = $(this).val().trim();
            if (command !== '') {
                processCommand(command);
                $(this).val('');
                $('.terminal-body').scrollTop($('.terminal-body')[0].scrollHeight);
                input.focus();
            }
        }
    });

    input.focus();
});
