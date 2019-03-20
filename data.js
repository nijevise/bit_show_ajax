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

    let baseUrl = 'http://api.tvmaze.com'
    function fetchShows(onSuccess) {
        const showUrl = `${baseUrl}/shows`
        $.get(showUrl, function (response) {
            const myShows = response.slice(0, 50).map(show => {
                const { id, name, image, rating } = show
                return new Show(id, name, image.medium, rating.average)
            })
            console.log(myShows)
            onSuccess(myShows)
        })
    }

    return {
        fetchShows
    }
})()