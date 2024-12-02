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
                    <li><span class="nameSkillDev">HTML + CSS + JavaScript + Bootstrap - React Bootstrap - Materialize (+ 10 years)</span>
                        <div class="progressBar">
                            <div class="bar" style="width: 100%;">█ █ █ █ █ █ █ █ █ █</div>
                        </div>
                    </li>
                    <li><span class="nameSkillDev">PHP + Codeigniter + GIT (+ 7 years)</span>
                        <div class="progressBar">
                            <div class="bar" style="width: 70%;">█ █ █ █ █ █ █ █ █ █</div>
                        </div>
                    </li>
                    <li><span class="nameSkillDev">Laravel (with Blade) + React.JS + Node.JS (+ 4 years)</span>
                        <div class="progressBar">
                            <div class="bar" style="width: 60%;">█ █ █ █ █ █ █</div>
                        </div>
                    </li>
                    <li><span class="nameSkillDev">SQL Server + MySQL (+ 10 years)</span>
                        <div class="progressBar">
                            <div class="bar" style="width: 100%;">█ █ █ █ █ █ █ █ █ █</div>
                        </div>
                    </li>
                </ul>
                <ul>
                    <li><span class="skillPC">Windows (+ 20 years)</span>
                        <div class="progressBar">
                            <div class="bar" style="width: 100%;">█ █ █ █ █ █ █ █ █ █</div>
                        </div>
                    </li>
                    <li><span class="skillPC">Linux (+ 10 years)</span>
                        <div class="progressBar">
                            <div class="bar" style="width: 90%;">█ █ █ █ █ █ █ █ █ █</div>
                        </div>
                    </li>
                    <li><span class="skillPC">Microsoft Office & LibreOffice (+ 20 years)</span>
                        <div class="progressBar">
                            <div class="bar" style="width: 100%;">█ █ █ █ █ █ █ █ █ █</div>
                        </div>
                    </li>
                    <li><span class="skillPC">Hardware and Networking Management (+ 15 years)</span>
                        <div class="progressBar">
                            <div class="bar" style="width: 85%;">█ █ █ █ █ █ █ █ █ █</div>
                        </div>
                    </li>
                </ul>
                <ul>
                    <li><span class="skillG">Agile Scrum - Daily</span>
                        <div class="progressBar">
                            <div class="bar" style="width: 75%;">█ █ █ █ █ █ █</div>
                        </div>
                    </li>
                    <li><span class="skillG">LGPD</span>
                        <div class="progressBar">
                            <div class="bar" style="width: 80%;">█ █ █ █ █ █ █ █ █ █</div>
                        </div>
                    </li>
                    <li><span class="skillG">Project Manager</span>
                        <div class="progressBar">
                            <div class="bar" style="width: 70%;">█ █ █ █ █ █ █ █ █ █</div>
                        </div>
                    </li>
                    <li><span class="skillG">E-Commerce + ERP + CRM</span>
                        <div class="progressBar">
                            <div class="bar" style="width: 90%;">█ █ █ █ █ █ █ █ █ █</div>
                        </div>
                    </li>
                </ul>
            </div>
        `,
        projects: `
            <div class="project">
                <h3><b>Expresso Tecnologia <small>09/2018 - 10/2024</small></b></h3>
                <p>
                    Acted in the development of ERP Mobili, ELO360 and JagOS projects, between 2018 and 2024, giving
                    maintenance, refactoring and creating various features, such as integration with API,
                    reports, graphs, image galleries, among others, in the management, logistics,
                    financial and HR, in addition to playing a fundamental role in creating a complete module of
                    order of services, demonstrating technical capacity, proactivity and teamwork.
                </p>
            </div>

            <div class="project">
                <h3><b>Biblio Mania (C# - 2015)</b></h3>
                <p>
                    A library management project developed in C#. This system allows users to catalogue, search and track book loans in an intuitive way.
                </p>
            </div>
        `,
        social: `
            <div class="social-media">
                <h3>Let's make it together, beign a partnership!</h3>
                <h5>
                    Contact me through these communication channels and let's get to know each other!
                </h5>
                <center>
                    <img src="heartpc.gif" alt="gif of a computer" style="max-width: 190px;">
                </center>
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
        clear: ''
    };

    function processCommand(command) {
        $(".typing").remove();
        output.append(`<p><b><span class="text-warning">guest@nickszulc1996</span>:~$ <span class="text-info">${command}</span></b></p>`);

        const normalizedCommand = command.toLowerCase();

        if (normalizedCommand === 'clear') {
            output.html(`
                <pre id="signature">
█░░░█ █▀▀ █░░ █▀▀ █▀▀█ █▀▄▀█ █▀▀
█▄█▄█ █▀▀ █░░ █░░ █░░█ █░▀░█ █▀▀
░▀░▀░ ▀▀▀ ▀▀▀ ▀▀▀ ▀▀▀▀ ▀░░░▀ ▀▀▀
                </pre>
                <p><b>Welcome to my portfolio! Type 'help' to start!</b></p>
            `);
        } else if (commands[normalizedCommand]) {
            output.append(`<p>${commands[normalizedCommand]}</p>`);
        } else {
            output.append(`<p class="text-danger"><b>Command not found: ${command}</b></p>`);
        }

        $('#current-command').text('');
        input.focus();

        $('html, body').animate({
            scrollTop: $('#footer').offset().top
        }, 1000);
    }

    function getAutocompleteSuggestion(currentText) {
        if (!currentText) return null;

        const suggestions = Object.keys(commands).filter(cmd =>
            cmd.startsWith(currentText.toLowerCase())
        );

        return suggestions.length > 0 ? suggestions[0] : null;
    }

    function handleAutocomplete() {
        const currentText = input.val();
        const suggestion = getAutocompleteSuggestion(currentText);

        if (suggestion && currentText.toLowerCase() !== suggestion) {
            const completion = suggestion.substring(currentText.length);
            const autocompletedText = currentText + completion;

            input.val(autocompletedText);
            input[0].setSelectionRange(currentText.length, autocompletedText.length);
        }
    }

    input.on('input', function () {
        handleAutocomplete();
    });

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
