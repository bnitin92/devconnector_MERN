const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const { session } = require("passport");
const passport = require("passport");

// Load Post Model
const Post = require("../../models/Post");

// Validation
const validatePostInput = require("../../validation/post");

// @route GET api/posts/test
// @desc Tests posts route
// @access Public
router.get("/test", (req, res) => res.json({ msg: "Posts Works" }));

// @route Post api/posts
// @desc Create post
// @access Private
router.post(
  "/",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    const { errors, isValid } = validatePostInput(req.body);

    // Check validation
    if (!isValid) {
      // If any errors, respond error wiht status 400
      return res.status(400).json(errors);
    }

    const newPost = new Post({
      text: req.body.text,
      name: req.body.name,
      avatar: req.body.avatar,
      user: req.user.id,
    });

    newPost.save().then((post) => res.json(post));
  }
);

module.exports = router;
