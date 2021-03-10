/* 
    1. Write a fat arrow async function that does the following:
        - uses await to fetch data from this endpoint - 'https://swapi.co/api/people/<number here>'
        - uses await to jsonify the response received from the fetch
        - console.log's the results of the fetch before console.logging a message saying 'this should print last'
*/

//NOTE: Write your code below and push back to your github branch.  SUBMIT YOUR GITHUB URL IN CANVAS

let challenge = async (id) => {
    await fetch (`https://swapi.dev/api/people/${id}/`)
        .then (res => res.json())
        .then (json => console.log (json))
    console.log ('this should print last')
}

challenge(3);