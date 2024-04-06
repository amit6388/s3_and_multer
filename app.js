// const express = require("express");
// const dotenv = require("dotenv");
// dotenv.config();
// const AWS = require("aws-sdk");
// let multer = require("multer");
// const User = require('./user');
// require('./config');
console.log("hiiiiiiiiiiiiiii");
// const bucketName = process.env.bucketName;

// const awsConfig = {
//   accessKeyId: process.env.AccessKey,
//   secretAccessKey: process.env.SecretKey,
//   region: process.env.region,
// };

// const S3 = new AWS.S3(awsConfig);
// const PORT = 4000;
// const app = express();


// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));

// let upload = multer({
//   limits: {
//     fileSize: 1024 * 1024 * 5,
//   },
//   fileFilter: function (req, file, done) {
//     if (
//       file.mimetype === "image/jpeg" ||
//       file.mimetype === "image/png" ||
//       file.mimetype === "image/jpg"
//     ) {
//       done(null, true);
//     } else {
//       var newError = new Error("File type is incorrect");
//       newError.name = "MulterError";
//       done(newError, false);
//     }
//   },
// });

// //upload to s3
// const uploadToS3 = (fileData) => {
//   return new Promise((resolve, reject) => {
//     const params = {
//       Bucket: bucketName,
//       Key: `${Date.now().toString()}.jpg`,
//       Body: fileData,
//     };
//     S3.upload(params, (err, data) => {
//       if (err) {
//         console.log(err);
//         return reject(err);
//       }
//       console.log(data);
//       return resolve(data);
//     });
//   });
// };

// app.post("/upload", upload.single("image"), async (req, res) => {
//   console.log(req.file);
//   if (req.file) {
//     await uploadToS3(req.file.buffer);
//   }

//   res.send({
//     msg: "Image uploaded Successfully",
//   });
// });

// app.post("/upload-multiple", upload.array("images", 6), async (req, res) => {
//   // console.log(req.files);

//   if (req.files && req.files.length > 0) {
//     for (var i = 0; i < req.files.length; i++) {
//       // console.log(req.files[i]);
//       await uploadToS3(req.files[i].buffer);
//     }
//   }

//   res.send({
//     msg: "Successfully uploaded " + req.files.length + " files!",
//   });
// });
// app.post('/send',upload.single('image'),async(req,res)=>{
//   let name=req.body.name;
//   let description=req.body.description;
//   let price=req.body.number;
//   let user=new User({
//       name:name,
//       description:description,
//       price:number,
//       image:image


//   });
//   let result=await user.save();
//   result=result.toObject();
//   res.send(result);
// })

// app.listen(PORT, () => console.log("server start" + PORT));



// // const express = require("express");
// // const dotenv = require("dotenv");
// // const fileUpload = require("express-fileupload"); // Import express-fileupload
// // dotenv.config();
// // const AWS = require("aws-sdk");
// // const User = require('./user');
// // require('./config');

// // const bucketName = process.env.bucketName;

// // const awsConfig = {
// //   accessKeyId: process.env.AccessKey,
// //   secretAccessKey: process.env.SecretKey,
// //   region: process.env.region,
// // };

// // const S3 = new AWS.S3(awsConfig);
// // const PORT = 4000;
// // const app = express();

// // app.use(express.json());
// // app.use(express.urlencoded({ extended: true }));
// // app.use(fileUpload()); // Use express-fileupload middleware

// // // Function to upload file to S3
// // const uploadToS3 = (fileData) => {
// //   return new Promise((resolve, reject) => {
// //     const params = {
// //       Bucket: bucketName,
// //       Key: `${Date.now().toString()}.jpg`,
// //       Body: fileData,
// //     };
// //     S3.upload(params, (err, data) => {
// //       if (err) {
// //         console.log(err);
// //         return reject(err);
// //       }
// //       console.log(data);
// //       return resolve(data);
// //     });
// //   });
// // };

// // // Route for single file upload
// // app.post("/upload", async (req, res) => {
// //   if (!req.files || Object.keys(req.files).length === 0) {
// //     return res.status(400).send('No files were uploaded.');
// //   }

// //   const image = req.files.image;

// //   try {
// //     const result = await uploadToS3(image.data);
// //     console.log(result);
// //     res.send({
// //       msg: "Image uploaded Successfully",
// //       data: result // Return the S3 response
// //     });
// //   } catch (error) {
// //     console.error(error);
// //     res.status(500).send('Error uploading file.');
// //   }
// // });

// // // Route for multiple file upload
// // app.post("/upload-multiple", async (req, res) => {
// //   if (!req.files || Object.keys(req.files).length === 0) {
// //     return res.status(400).send('No files were uploaded.');
// //   }

// //   const images = req.files.images;

// //   try {
// //     for (const image of images) {
// //       await uploadToS3(image.data);
// //     }
// //     res.send({
// //       msg: `Successfully uploaded ${images.length} files!`
// //     });
// //   } catch (error) {
// //     console.error(error);
// //     res.status(500).send('Error uploading files.');
// //   }
// // });

// // // Route for saving data to MongoDB
// // app.post('/send', async (req, res) => {
// //   let name = req.body.name;
// //   let description = req.body.description;
// //   let price = req.body.price; // Fixed variable name
// //   let image = req.body.image; // Fixed variable name

// //   let user = new User({
// //     name: name,
// //     description: description,
// //     price: price,
// //     image: image
// //   });

// //   try {
// //     let result = await user.save();
// //     result = result.toObject();
// //     res.send(result);
// //   } catch (error) {
// //     console.error(error);
// //     res.status(500).send('Error saving data.');
// //   }
// // });

// // app.listen(PORT, () => console.log("Server started on port " + PORT));



// // Import necessary modules
// // const express = require('express');
// // const fileUpload = require('express-fileupload');

// // // Create Express app
// // const app = express();

// // // Use express-fileupload middleware
// // app.use(fileUpload());

// // // Define a route for file upload
// // app.post('/upload', (req, res) => {
// //   // Check if there are files to upload
// //   if (!req.files || Object.keys(req.files).length === 0) {
// //     return res.status(400).send('No files were uploaded.');
// //   }

// //   // Access the uploaded file
// //   const uploadedFile = req.files.uploadedFile;

// //   // Use the mv() method to save the file
// //   uploadedFile.mv(`uploads/${uploadedFile.name}`, (err) => {
// //     if (err) {
// //       return res.status(500).send(err);
// //     }

// //     res.send('File uploaded successfully.');
// //   });
// // });

// // // Start the server
// // const PORT = process.env.PORT || 3000;
// // app.listen(PORT, () => {
// //   console.log(`Server is running on port ${PORT}`);
// // });
