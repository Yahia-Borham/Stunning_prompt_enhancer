import { useState } from "react";
import Header from "./Component/Header";
import Input from "./Component/Input";
import Button from "./Component/Button";
import Output from "./Component/Output";





function App() {

  const [output, setOutput] = useState('');

  const [prompt, setPrompt] = useState('');

  const ReadPrompt = (e) => {

    setPrompt(e)

  }

  const handleCreate = async () => {

    console.log(prompt)
    setOutput("")

    try {
      const response = await fetch('http://localhost:3000/promptEnhancer', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ prompt: prompt }),
      });
      const reader = response.body.getReader();
      const decoder = new TextDecoder();
      let done = false;
      while (!done) {
        const { value, done: readerDone } = await reader.read();
        done = readerDone;
        const chunk = decoder.decode(value, { stream: true });
        setOutput(prev => prev + chunk.replace(/:/g, '\n\n').replace(/\*\*\*\*/g, '\n\n'));
      }
    } catch (error) {
      console.error('Error:', error);
    }

  }



  return (
    <div className="app">
      <Header />
      <Input prompt={prompt} ReadPrompt={ReadPrompt} />
      <Button handleCreate={handleCreate} />
      <Output output={output} />
    </div>

  );
}

export default App;