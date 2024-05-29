const { SpamNumber } = require('../models');

exports.markAsSpam = async (phone, userId) => {
  let spamEntry = await SpamNumber.findOne({ where: { phone } });
  if (spamEntry) {
    spamEntry.spamCount += 1;
    await spamEntry.save();
  } else {
    spamEntry = await SpamNumber.create({ phone, spamCount: 1, userId });
  }
  return spamEntry;
};
