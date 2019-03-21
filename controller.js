const controller = ((ui, data) => {

    function initHomepage() {
        console.log('Aplication is initialized')

        data.fetchShows((shows) => { ui.displayShows(shows) })

        document.addEventListener('click', function (e) {
            e.preventDefault()
            if (e.target.className = 'movieOutput') {
                localStorage.setItem('id', e.target.parentElement.id)
                var movieId = e.target.parentElement.id
                window.location.href = 'movie.html'
            }
        })
    }

    function initMoviepage() {
        console.log('Aplication is initialized')
        let movieId = localStorage.getItem('id')
        data.fetchShow(movieId)
        data.fetchAdditional()

    }


    return {
        initHomepage,
        initMoviepage
    }
})(uiModule, dataModule)


