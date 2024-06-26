document.getElementById('category-selector').addEventListener('change', function() {
    const selectedCategory = this.value;
    const cards = document.querySelectorAll('.card');

    cards.forEach(card => {
        if (selectedCategory === 'all') {
            card.style.display = 'block';
        } else if (card.classList.contains(selectedCategory)) {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    });
});
