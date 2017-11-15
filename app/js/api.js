const baseUrl = 'http://localhost:3000'

const fetchJSON = (uri) => {
  return fetch(uri).then((response) => response.json())
}

export default {
  getNotes() {
    return fetchJSON(`${baseUrl}/notes`)
  }
}
