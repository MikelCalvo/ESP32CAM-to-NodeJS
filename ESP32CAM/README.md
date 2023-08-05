# ESP32-CAM Image Uploader

This project allows you to capture images using the ESP32-CAM and upload them to a server. You can configure the camera model, WiFi credentials, and server information to suit your needs.

## Prerequisites

- ESP32-CAM board
- Arduino IDE
- ESP32 board support for Arduino IDE
- WiFi network

## Getting Started

1. Install the ESP32 board support for Arduino IDE by following the instructions in the [ESP32 Arduino Core repository](https://github.com/espressif/arduino-esp32).

2. Open the `esp32-cam-image-uploader.ino` file in Arduino IDE.

3. Uncomment the camera model you are using by selecting the appropriate `#define` statement. For example, if you are using the AI-Thinker model, uncomment the line `#define CAMERA_MODEL_AI_THINKER`.

4. Comment out any other camera model `#define` statements.

5. Enter your WiFi credentials by replacing the placeholders in the following lines:

   ```cpp
   const char* ssid = "YOUR_WIFI_SSID";
   const char* password = "YOUR_WIFI_PASSWORD";
   ```

6. Enter your server information by replacing the placeholders in the following lines:

   ```cpp
   String serverName = "YOUR_SERVER_IP_ADDRESS";
   const int serverPort = YOUR_SERVER_PORT;
   String serverPath = "/upload";
   String fileName = "ESP32-001";
   ```

   - `serverName`: The IP address or domain name of your server.
   - `serverPort`: The port number on which your server is running.
   - `serverPath`: The path on the server where the image will be uploaded.
   - `fileName`: The name to be given to the uploaded image (server will add a timestamp at the start).
     <br><br>

7. Upload the code to your ESP32-CAM board.

8. Open the Serial Monitor in Arduino IDE to view the debug output.

9. The ESP32-CAM will start capturing images at the specified interval (default is 1 minute) and upload them to the server.

## Arduino IDE Configuration

For the standar AI_THINKER model, select the following options in the Arduino IDE:

- Board: "AI Thinker ESP-32 CAM"
- Port: "COMX" (where X is the port number of your ESP32-CAM board)
- CPU Frequency: "240MHz (WiFi/BT)"
- Flash Frequency: "80MHz"
- Flash Mode: "DIO"
- Partition Scheme: "Huge APP (3MB No OTA/1MB SPIFFS)"
