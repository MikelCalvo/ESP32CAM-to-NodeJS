import express from "express";
import fileUpload from "express-fileupload";

const app = express();
const port = 80;

app.use(
  fileUpload({
    limits: {
      fileSize: 10000000,
    },
    abortOnLimit: true,
  })
);

app.get("/", (req, res) => {
  console.log("Received GET request to /");
  res.send("Hello World!");
});

app.post("/upload", (req, res) => {
  console.log("Received POST request to /upload");

  // If no files were uploaded, exit
  if (!req.files) {
    console.log("No files uploaded");
    return res.sendStatus(400);
  }

  // The name of the input field (i.e. "image") is used to retrieve the uploaded file
  let image = req.files.image;

  // If no image submitted, exit
  if (!image) {
    console.log("No image submitted");
    return res.sendStatus(400);
  }

  // If does not have image mime type prevent from uploading
  if (!/^image/.test(image.mimetype)) {
    console.log("Invalid image mimetype:", image.mimetype);
    return res.sendStatus(400);
  }

  // Add the timestamp to the image name
  image.name = Date.now() + "_" + image.name;

  // Check if the folder exists, if not create it
  if (!fs.existsSync("./images")) {
    fs.mkdirSync("./images");
  }

  // Move the uploaded image to our upload folder
  image.mv("./images/" + image.name);

  console.log("Image uploaded successfully:", image.name);

  // All good
  res.sendStatus(200);
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
