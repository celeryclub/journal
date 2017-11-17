const baseUrl = 'http://localhost:3000'

const fetchJSON = (uri, options = {}) => {
  return fetch(uri, options).then((response) => response.json())
}

export default {
  getNotes() {
    return fetchJSON(`${baseUrl}/notes`)
  },

  getNoteById(noteId) {
    return fetchJSON(`${baseUrl}/notes2`)
  },

  updateNoteById(noteId, data) {
    return fetchJSON(
      `${baseUrl}/notes2`,
      {
        method: 'PUT',
        body: data,
      }
    )
  },
}
