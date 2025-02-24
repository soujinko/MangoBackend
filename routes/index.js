import express from "express";
// import auth from "../middlewares/auth-middleware.js";
import shopsRouter from "./shops.js";
import reviewsRouter from "./reviews.js";
import usersRouter from "./users.js";
import searchRouter from "./search.js";

const router = express.Router();

router.use("/shops", shopsRouter);
router.use("/reviews", reviewsRouter);
router.use("/users", usersRouter);
router.use("/search", searchRouter);
// router.use(auth);

export default router;
