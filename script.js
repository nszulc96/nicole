document.addEventListener('DOMContentLoaded', () => {
    const toggleButton = document.getElementById('theme-toggle');
    const currentTheme = localStorage.getItem('theme');

    if (currentTheme) {
        document.body.classList.add(currentTheme);
        toggleButton.classList.toggle('dark-mode', currentTheme === 'dark-mode');
    }

    toggleButton.addEventListener('click', () => {
        if (document.body.classList.contains('dark-mode')) {
            document.body.classList.remove('dark-mode');
            document.body.classList.add('light-mode');
            toggleButton.classList.remove('dark-mode');
            toggleButton.innerHTML = '<i class="fas fa-sun"></i> <span>Light Mode</span>';
            localStorage.setItem('theme', 'light-mode');
        } else {
            document.body.classList.remove('light-mode');
            document.body.classList.add('dark-mode');
            toggleButton.classList.add('dark-mode');
            toggleButton.innerHTML = '<i class="fas fa-moon"></i> <span>Dark Mode</span>';
            localStorage.setItem('theme', 'dark-mode');
        }
    });
});
