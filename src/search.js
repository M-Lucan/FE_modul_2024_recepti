document.addEventListener('DOMContentLoaded', () => {
    const searchBar = document.getElementById('searchBar');
    const recipes = document.querySelectorAll('.recipe');

    searchBar.addEventListener('input', () => {
        const searchTerm = searchBar.value.toLowerCase();
        recipes.forEach(recipe => {
            const recipeName = recipe.getAttribute('data-recipe-name').toLowerCase();
            const tags = Array.from(recipe.querySelectorAll('.tags button')).map(button => button.textContent.toLowerCase());
            const tagString = tags.join(' ');
            if (recipeName.includes(searchTerm) || tagString.includes(searchTerm)) {
                recipe.style.display = '';
            } else {
                recipe.style.display = 'none';
            }
        });
    });
});