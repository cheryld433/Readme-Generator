const api = {
  async getUser (username, reponame) {
    const axios = require('axios')
    const { data } = await axios.get(`https://api.github.com/search/repositories?q=${reponame}+user:${username}`)
    //console.log results to get the specific location of the data needed
  }
};

module.exports = api;

