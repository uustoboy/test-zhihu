export default {
  updateCount (state, num) {
    // state.count = num
  },
  updateThemes (state, data) {
    console.log(data)
    state.isThemes = data
  },
  updateHomePage (state, data) {
    state.honePage = data
  }
}
