const express = require("express");
const feedsController = require("../controllers/feedsController");
const authVerify = require("../middlewares/authVerify");
const checkUserAccess = require("../middlewares/checkUserAccess");
const feedsRoute = express.Router();

feedsRoute.use(authVerify);

feedsRoute.post("/", checkUserAccess("user"), feedsController.createFeeds);

feedsRoute
  .route("/single/:id")
  .get(feedsController.getFeeds)
  .delete(feedsController.deletefeeds);

feedsRoute.get("/list", feedsController.getAllFeeds);
feedsRoute.get("/admin/list", feedsController.getAllFeedsForAdmin);
feedsRoute.post("/like/:id", feedsController.likeFeed);
feedsRoute.post("/comment/:id", feedsController.commentFeed);
feedsRoute.get("/user/:id", feedsController.getUserFeeds);
feedsRoute.put("/single/:action/:id", feedsController.updateFeeds);
feedsRoute.get("/my-feeds", feedsController.getMyFeeds);

module.exports = feedsRoute;
