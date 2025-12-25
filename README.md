# Stunning Prompt Enhancer

A tool that helps users transform rough website ideas into clear, detailed prompts for building websites. This project consists of a React frontend and a Node.js backend that uses AI to enhance prompts.

## Prerequisites

- Node.js (version 14 or higher)
- npm (comes with Node.js)
- A GitHub account with access to GitHub Models (for AI inference)

## Installation

1. Clone the repository:
   ```
   git clone <repository-url>
   cd Stunning_prompt_enhancer
   ```

2. Install dependencies for the server:
   ```
   cd Server
   npm install
   ```

3. Install dependencies for the client:
   ```
   cd ../Client
   npm install
   ```

## Setup

1. In the `Server` directory, create a file named `config.env`:
   ```
   TOKEN=your_github_personal_access_token
   PORT=3000
   ```

2. Obtain a GitHub Personal Access Token (PAT):
   - Go to [GitHub Settings > Developer settings > Personal access tokens](https://github.com/settings/tokens)
   - Generate a new token with access to GitHub Models
   - Copy the token and paste it as the value for `TOKEN` in `config.env`

## Running the Project

1. Start the backend server:
   ```
   cd Server
   npm start
   ```
   The server will run on `http://localhost:3000`

2. In a new terminal, start the frontend:
   ```
   cd Client
   npm run dev
   ```
   The client will be available at `http://localhost:5173` (or the port shown in the terminal)

## Usage

1. Open the client in your browser
2. Enter your rough website idea in the input field
3. Click the enhance button to get a detailed, actionable prompt
4. Use the enhanced prompt to guide your website development

## Technologies Used

- **Frontend**: React, Vite
- **Backend**: Node.js, Express
- **AI**: GitHub Models (OpenAI GPT-4o-mini)
- **Styling**: CSS

## Contributing

Feel free to submit issues and pull requests.

## License

ISC</content>
<parameter name="filePath">d:\Stunning_prompt_enhancer\README.md
