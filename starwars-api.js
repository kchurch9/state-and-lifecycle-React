const fetch = require('node-fetch')

const BASE_URL = `https://swapi.co/api`

const fetchParsed = async uri => await ((await fetch(uri)).json())

const run = async () => {
  const luke = await fetchParsed(`${BASE_URL}/people/1`)
  const second = await fetchParsed(`${BASE_URL}/people/2`)
  console.log(luke)
  console.log(second)

}


run()