export default async function handler(code, language, input) {
    const axios = require("axios");
    const data = {
        code: code,
        language: language,
        input: input,
    }
    const options = {
        method: "POST",
        url: 'https://online-code-compiler.p.rapidapi.com/v1/',
        headers: {
            'content-type': 'application/json',
            'X-RapidAPI-Key': 'fc2d47be28msh7bc2e82f9cce802p12011bjsnc20ffb20974d',
            'X-RapidAPI-Host': 'online-code-compiler.p.rapidapi.com'
        },
        data: {
            version: 'latest',
            ...data
        },
    };
    try {
        const response =await  axios.request(options)
        console.log(response.data)
        return response.data
    }
    catch (error) {
        console.log(error);
    }
}