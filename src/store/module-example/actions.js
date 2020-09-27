export async function getDestinations (context) {
  fetch('http://localhost:3000/Destinations')
    .then(response => {
      response.json().then(list => {
        context.commit('setDestinations', list)
      })
    })
}

export async function getHotels (context) {
  fetch('http://localhost:3000/Hotels')
    .then(response => {
      response.json().then(list => {
        context.commit('setHotels', list)
      })
    })
}

export async function getPreviousSearchCriteria (context) {
  fetch('http://localhost:3000/Search-criteria')
    .then(response => {
      response.json().then(list => {
        context.commit('setPreviousSearchObject', list)
      })
    })
}
