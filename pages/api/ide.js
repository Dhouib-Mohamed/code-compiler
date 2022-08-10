export default async function handler(code, language, input) {
    const axios = require("axios");
    const qs = require("qs");
    const data = qs.stringify({
        code: code,
        language: language,
        input: input,
    });
    const config = {
        method: "post",
        url: "https://codex-api.herokuapp.com/",
        headers: {
            "Content-Type": "application/x-www-form-urlencoded",
        },
        data: data,
    };
    try {
        const response =await  axios(config)
        return response.data
    }
    catch (error) {
        console.log(error);
    }
}