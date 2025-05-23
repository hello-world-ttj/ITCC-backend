const cron = require("node-cron");
const moment = require("moment-timezone");
const Notification = require("../models/notificationModel");
const sendInAppNotification = require("../utils/sendInAppNotification");
const User = require("../models/userModel");
const Razorpayment = require("../models/razorpayModel");
require("dotenv").config();

cron.schedule("0 0 * * *", async () => {
  const now = moment().tz("Asia/Kolkata");

  try {
    const tenDaysFromNow = now.clone().add(10, "days").toDate();
    const expiring = await Razorpayment.find({
      status: "paid",
      expiryDate: { $lte: tenDaysFromNow },
    }).populate("user");

    for (const exp of expiring) {
      const data = {
        user: exp.user._id,
        read: false,
      };
      await Notification.create({
        users: data,
        subject: `Your subscription is expiring soon!`,
        content: `Your subscription to our app is expiring soon. Please renew your subscription to continue using our app.`,
        type: "in-app",
        senderModel: "Cronjob",
      });

      await sendInAppNotification(
        [exp.user.fcmToken],
        "Subscription Expiring",
        `Your subscription to our app is expiring soon. Please renew your subscription to continue using our app.`,
        null,
        "my_subscriptions"
      );
    }

    const expiredSub = await Razorpayment.find({
      status: "paid",
      expiryDate: { $lte: now.toDate() },
    });

    for (const exp of expiredSub) {
      exp.status = "expired";
      await exp.save();
      await User.findByIdAndUpdate(exp.user._id, { status: "awaiting_payment" });
      const data = {
        user: exp.user._id,
        read: false,
      };
      await Notification.create({
        users: data,
        subject: `Your subscription has expired!`,
        content: `Your subscription to our app has expired. Please renew your subscription to continue using our app.`,
        type: "in-app",
        senderModel: "Cronjob",
      });

      await sendInAppNotification(
        [exp.user.fcmToken],
        "Subscription Expired",
        `Your subscription to our app has expired. Please renew your subscription to continue using our app.`,
        null,
        "my_subscriptions"
      );
    }
  } catch (err) {
    console.error("Error updating subscriptions:", err);
  }
});
