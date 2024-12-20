$(document).ready(function() {
    // URL of the API endpoint
    const apiUrl = 'https://swapi-api.alx-tools.com/api/films/?format=json';

    // Fetch the movies data
    $.get(apiUrl, function(data) {
        // Iterate through the results and append each movie title to UL#list_movies
        data.results.forEach(function(movie) {
            $('#list_movies').append('<li>' + movie.title + '</li>');
        });
    });
});

