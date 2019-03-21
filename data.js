const dataModule = (() => {

    class Show {
        constructor(id, name, image, rating) {
            this.id = id
            this.name = name
            this.image = image
            this.rating = rating
        }
        getInfo() {
            return `${this.id}, ${this.name}, ${this.rating}`
        }
    }

    class singleShow {
        constructor(name, image, description) {
            this.name = name
            this.image = image
            this.description = description
        }
    }

    class additionalShow {
        constructor(seasson, cast) {
            this.seasson = seasson
            this.cast = cast
        }
    }

    let baseUrl = 'http://api.tvmaze.com'

    // onSuccess = (response) => { ui.displayShows(response)};
    function fetchShows(onSuccess) {
        const showUrl = `${baseUrl}/shows`

        $.get(showUrl, function (response) {
            const myShows = response.slice(0, 50).map(show => {
                const { id, name, image, rating } = show
                return new Show(id, name, image.medium, rating.average)
            })

            onSuccess(myShows)

        })
    }

    function fetchShow(id) {
        let myShow
        const showUrl = 'http://api.tvmaze.com/shows/' + id
        $.get(showUrl, function (response) {
            myShow = new singleShow(response.name, response.image.original, response.summary)
            return myShow
        })
    }

    function fetchAdditional() {
        const showUrl = 'http://api.tvmaze.com/shows/1?embed[]=seasons&embed[]=cast'
        $.get(showUrl, function (response) {
            console.log(response)
        })
    }

    return {
        fetchShows,
        fetchShow,
        fetchAdditional
    }
})()