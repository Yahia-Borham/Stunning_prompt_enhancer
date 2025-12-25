


const ai_module = require("./../Utilities/ai_module")



const promptEnhancer = async (req, res) => {


    console.log(req.body.prompt)
    const response = await ai_module(req.body.prompt);
    for await (const chunk of response) {
        const content = chunk.choices[0]?.delta?.content || "";
        process.stdout.write(content);
        res.write(content);
    }



}


module.exports = promptEnhancer