const controller = ((ui, data) => {

    function init() {
        console.log('Aplication is initialized')

        data.fetchShows((response) => {
            ui.displayShows(response)
        })
    }

    return {
        init
    }
})(uiModule, dataModule)


