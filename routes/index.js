const express = require("express");
const router = express.Router();
const appModel = require("../model/db");
const bodyParser = require("body-parser");

router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: true }));

//  @route GET /:code

router.post("/imageList", async (req, res) => {
  const { imageLink, name } = req.body;

  try {
    const newImage = new appModel({
      imageLink,
      name,
    });

    const saveImage = await newImage.save();

    return res.status(201).json({
      status: "success",
      data: saveImage,
    });

    throw new Error("User not found");
  } catch (err) {
    return res.status(404).json({
      status: "failed",
      message: err.message,
    });
  }
});

router.get("/imageList", async (req, res) => {
  try {
    const images = await appModel.find();
    res.send({
      status: "success",
      data: images,
    });
  } catch (error) {
    console.log(error);
    res.status(404).json({
      status: "failed",
      message: "Images not found",
    });
  }
});

module.exports = router;
