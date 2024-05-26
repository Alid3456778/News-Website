document.addEventListener("DOMContentLoaded", function() {
    const searchInput = document.getElementById('keyworddds');
    const recommendationsContainer = document.getElementById('recommendations');

    const data = [
        "Tesla",
        "Apple",
        "Microsoft",
        "Google",
        "Amazon",
        "Facebook",
        "Twitter",
        "LinkedIn",
        "Instagram",
        "Snapchat"
    ];

    searchInput.addEventListener('input', () => {
        const query = searchInput.value.toLowerCase();
        recommendationsContainer.innerHTML = '';

        if (query) {
            const filteredData = data.filter(item => item.toLowerCase().includes(query));

            filteredData.forEach(item => {
                const div = document.createElement('div');
                div.textContent = item;
                div.addEventListener('click', () => {
                    searchInput.value = item;
                    recommendationsContainer.innerHTML = '';
                    recommendationsContainer.classList.remove('show');
                });
                recommendationsContainer.appendChild(div);
            });

            if (filteredData.length > 0) {
                recommendationsContainer.classList.add('show');
            } else {
                recommendationsContainer.classList.remove('show');
            }
        } else {
            recommendationsContainer.classList.remove('show');
        }
    });

    document.addEventListener('click', (event) => {
        if (!searchInput.contains(event.target) && !recommendationsContainer.contains(event.target)) {
            recommendationsContainer.classList.remove('show');
        }
    });
});
