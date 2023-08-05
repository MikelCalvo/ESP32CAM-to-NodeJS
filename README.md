# ESP32-CAM Image Uploader and File Upload Server

This project consists of two modules: the ESP32-CAM Image Uploader and the File Upload Server.

## ESP32-CAM Image Uploader

The ESP32-CAM Image Uploader is an Arduino project that allows you to capture images using the ESP32-CAM and upload them to a server.

It utilizes the following technologies:

- [ESP32-CAM](https://www.espressif.com/en/products/socs/esp32-cam/overview): The ESP32-CAM is a development board with an ESP32-S chip, an OV2640 camera, and a microSD card slot.
- [Arduino IDE](https://www.arduino.cc/en/software): The Arduino IDE is used to write and upload the code to the ESP32-CAM board.

For more detailed information on how to set up and use the ESP32-CAM Image Uploader, please refer to the [README](https://github.com/MikelCalvo/ESP32CAM-to-NodeJS/blob/main/ESP32CAM/README.md) in the ESP32CAM folder.

## File Upload Server

The File Upload Server is a Node.js project built using Express.js and the express-fileupload middleware.

It provides a simple server that allows users to upload image files and saves them to a specified folder.

The technologies used in this module include:

- [Node.js](https://nodejs.org/): Node.js is a JavaScript runtime that allows you to run JavaScript on the server-side.
- [Express.js](https://expressjs.com/): Express.js is a web application framework for Node.js that simplifies the process of building web applications.
- [express-fileupload](https://www.npmjs.com/package/express-fileupload): express-fileupload is a middleware for Express.js that adds support for handling file uploads.

For more information on how to install, configure, and use the File Upload Server, please refer to the [README](https://github.com/MikelCalvo/ESP32CAM-to-NodeJS/blob/main/server/README.md) in the server folder.
