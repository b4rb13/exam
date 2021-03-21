const { Router } = require("express");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const config = require("config");
const { check, validationResult } = require("express-validator");
const User = require("../models/User");
const router = Router();

router.post(
  "/register",
  [
    check("email", "wrong email").isEmail(),
    check("password", "wrong password").isLength({ min: 6 }),
  ],

  async (req, res) => {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({
          errors: errors.array(),
          message: "wrong registration data",
        });
      }

      const { email, password } = req.body;

      const candidate = await User.findOne({ email });
      if (candidate) {
        return res.status(400).json({
          message: "This Email already Exists",
        });
      }

      const hashedPass = await bcrypt.hash(password, 12);
      const user = new User({ email, password: hashedPass });

      await user.save();

      res.status(201).json({
        message: "Registration completed",
      });
    } catch (e) {
      res.status(500).json({
        message: "Something went wrong, try again",
      });
    }
  }
);

router.post(
  "/login",
  [
    check("email", "wrong email").isEmail(),
    check("password", "wrong password").exists(),
  ],
  async (req, res) => {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({
          errors: errors.array(),
          message: "wrong login data",
        });
      }

      const { email, password } = req.body;
      const user = await User.findOne({ email });

      if (!user) {
        return res.status(400).json({
          message: "user not found",
        });
      }

      const isMatch = await bcrypt.compare(password, user.password);

      if (!isMatch) {
        return res.status(400).json({
          message: "wrong pass",
        });
      }

      const token = jwt.sign(
        {
          userId: user.id,
        },
        config.get("jwtSecret"),
        {
          expiresIn: "1h",
        }
      );

      res.json({
        token,
        userId: user.id,
      });
    } catch (e) {
      res.status(500).json({
        message: "Something went wrong, try again",
      });
    }
  }
);

module.exports = router;
