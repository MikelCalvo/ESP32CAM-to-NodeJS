# File Upload Server

This is a simple file upload server built using Express.js and the express-fileupload middleware. It allows users to upload image files and saves them to a specified folder.

## Installation

1. Clone the repository: `git clone https://github.com/MikelCalvo/ESP32CAM-to-NodeJS.git`
2. Navigate to the project directory: `cd server`
3. Install the dependencies: `npm install`

## Usage

1. Start the server: `npm start`
2. The server will be running on port 80 by default. You can change the port in the `index.js` file if needed.
3. Access the server in your browser at `http://localhost:80`.
4. The server has two endpoints:
   - GET `/`: Returns a "Hello World!" message.
   - POST `/upload`: Expects a file named "image" to be uploaded. If the file is successfully uploaded, it will be saved to the `./images` folder with a timestamp appended to its name.

## Configuration

You can configure the server by modifying the following options in the `index.js` file:

- `fileSize`: The maximum file size allowed in bytes. Default is 10,000,000 (10MB).
- `abortOnLimit`: Whether to abort the upload if the file size exceeds the limit. Default is true.
- `uploadFolder`: The folder where uploaded files will be saved. Default is `./images`.

## License

This project is licensed under the WTFPL License - see the [LICENSE.md](LICENSE.md) file for details.
