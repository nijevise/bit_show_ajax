const uiModule = (() => {
    function displayShows(showsArr) {
        let $output = document.getElementById('output')
        showsArr.forEach(show => {
            let $outputMovie = document.createElement('div')
            $outputMovie.classList.add('movieOutput')
            $outputMovie.innerHTML = `<img src=${show.image} title="moviePoster">`;
            $outputMovie.innerHTML += `<p>${show.name}</p>`;
            $output.appendChild($outputMovie)
        });
    }
    return {
        displayShows
    }
})()