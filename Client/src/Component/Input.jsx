



const Input = ({ ReadPrompt, prompt }) => {



    return (

        <input
            type="text"
            value={prompt}
            onChange={(e) => ReadPrompt(e.target.value)}
            placeholder="Enter your prompt"
            className="input"
        />

    )

}
export default Input 