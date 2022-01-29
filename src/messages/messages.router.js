const express = require("express");
const {
  getAdminMessage,
  getProtectedMessage,
  getPublicMessage,
} = require("./messages.service");
const { checkJwt } = require("../middleware/check-jwt.middleware");
const {
  checkPermissions,
} = require("../middleware/check-permissions.middleware");
const { AdminMessagesPermissions } = require("./messages-permissions");

const messagesRouter = express.Router();

messagesRouter.get("/public", (req, res) => {
  const message = getPublicMessage();

  res.status(200).json(message);
});

messagesRouter.get("/protected", checkJwt, (req, res) => {
  const message = getProtectedMessage();

  res.status(200).json(message);
});

messagesRouter.get(
  "/admin",
  checkJwt,
  checkPermissions(AdminMessagesPermissions.Read),
  (req, res) => {
    const message = getAdminMessage();

    res.status(200).json(message);
  }
);

module.exports = { messagesRouter };
