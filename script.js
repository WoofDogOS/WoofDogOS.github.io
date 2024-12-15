document.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('.section');
    sections.forEach(section => {
        const rect = section.getBoundingClientRect();
        if (rect.top < window.innerHeight - 100 && rect.bottom > 0) {
            section.classList.add('in-view');
        } else {
            section.classList.remove('in-view');
        }
    });
});
