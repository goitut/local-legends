const data = require('./data.json')
document.addEventListener('DOMContentLoaded', function() {
    const searchInput = document.getElementById('search-input');
    const searchButton = document.getElementById('search-button');
    const searchResults = document.getElementById('search-results');
    
    // Sample data to search through
    const data = [
        { title: "How to make a website", content: "Learn HTML, CSS, and JavaScript" },
        { title: "JavaScript basics", content: "Variables, functions, and loops" },
        { title: "CSS styling tips", content: "Make your website beautiful" },
        { title: "React tutorial", content: "Building modern web applications" }
    ];
    
    function performSearch() {
        const query = searchInput.value.toLowerCase();
        searchResults.innerHTML = '';
        
        if (query.trim() === '') {
            searchResults.innerHTML = '<p>Please enter a search term</p>';
            return;
        }
        
        const results = data.filter(item => 
            item.title.toLowerCase().includes(query) || 
            item.content.toLowerCase().includes(query)
        );
        
        if (results.length === 0) {
            searchResults.innerHTML = '<p>No results found</p>';
        } else {
            results.forEach(item => {
                const resultElement = document.createElement('div');
                resultElement.className = 'search-item';
                resultElement.innerHTML = `
                    <h3>${item.title}</h3>
                    <p>${item.content}</p>
                `;
                searchResults.appendChild(resultElement);
            });
        }
    }
    
    // Event listeners
    searchButton.addEventListener('click', performSearch);
    searchInput.addEventListener('keyup', function(e) {
        if (e.key === 'Enter') {
            performSearch();
        }
    });
});