const uiModule = (() => {
    function displayShows(showsArr) {
        let $output = document.getElementById('output')
        let $outputMovie
        let idMovie
        showsArr.forEach(show => {
            $outputMovie = document.createElement('div')
            $outputMovie.classList.add('movieOutput')
            $outputMovie.id = show.id
            $outputMovie.innerHTML = `<img src=${show.image} title="moviePoster">`;
            $outputMovie.innerHTML += `<p>${show.name}</p>`;
            $output.appendChild($outputMovie)
        });

    }
    return {
        displayShows,
    }
})()