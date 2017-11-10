const baseUrl = 'http://localhost:3000'

export default {
  getNotes() {
    // return fetch(`${baseUrl}/notes`, { mode: 'no-cors' })
    return fetch(`${baseUrl}/notes`)
    // return xhr({
    //   uri: `${baseUrl}/notes`
    // })
  }

  // getStoryByUser(id) {
  //   return xhr({
  //     url: `/v2/stories?user_id=${id}`,
  //   });
  // },
}
