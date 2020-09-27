export function setDestinations (state, text) {
  state.destinations = text
}

export function setHotels (state, text) {
  state.hotels = text
}

export function setSearchObject (state, text) {
  state.searchObjects.push(text)
}

export function setPreviousSearchObject (state, text) {
  state.searchObjects = text
}
