const axios = require('axios');

axios.post("https://penora-ai.herokuapp.com/ai/api/generate-custom", {
    query: "faça um resumo sobre a segunda guerra mundial",
    wordsToGenerate: 200,
    accessToken: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1ZTkzNGE5MmI4MTNiYjE4NGYyM2I2MiIsImlhdCI6MTcwOTc4MjE4NiwiZXhwIjoxNzEwOTkxNzg2fQ.tnqAsw_6FtoNlbUvZ1iLmlXw5puZPld1tsURsDdTo64",
    userId: "d5d774512a1d2d53ff4276232aecbd3c0b4dfc717a537efe7dbfaf98dafd0f47"
})
.then((response) => {

    setTimeout(() => { 
axios.post('https://penora-ai.herokuapp.com/ai/api/get-conch-response', {
    reqId: response.data,
    accessToken: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1ZTkzNGE5MmI4MTNiYjE4NGYyM2I2MiIsImlhdCI6MTcwOTc4MjE4NiwiZXhwIjoxNzEwOTkxNzg2fQ.tnqAsw_6FtoNlbUvZ1iLmlXw5puZPld1tsURsDdTo64",
    userId: "d5d774512a1d2d53ff4276232aecbd3c0b4dfc717a537efe7dbfaf98dafd0f47"
})
.then(r => {
    console.log(r.data.response)
})
    }, 10000)

})