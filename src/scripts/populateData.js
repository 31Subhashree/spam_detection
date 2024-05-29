const { faker } = require('@faker-js/faker');
const sequelize = require('../config/sequelize');
const { User, Contact, SpamNumber } = require('../models');

const NUM_USERS = 10;
const NUM_CONTACTS = 30;
const NUM_SPAM_NUMBERS = 5;

async function populateData() {
  try {
    await sequelize.sync({ force: true });

    // Create sample users
    const users = [];
    for (let i = 0; i < NUM_USERS; i++) {
      const user = await User.create({
        name: faker.person.fullName(),
        phone: faker.phone.number(),
        email: faker.internet.email(),
        password: faker.internet.password(),
      });
      users.push(user);
    }

    // Create sample contacts
    for (let i = 0; i < NUM_CONTACTS; i++) {
      const userId = faker.helpers.arrayElement(users).id;
      await Contact.create({
        userId,
        name: faker.person.fullName(),
        phone: faker.phone.number(),
      });
    }

    // Create sample spam numbers
    for (let i = 0; i < NUM_SPAM_NUMBERS; i++) {
      const userId = faker.helpers.arrayElement(users).id;
      await SpamNumber.create({
        phone: faker.phone.number(),
        spamCount: faker.datatype.number({ min: 1, max: 10 }),
        userId,
      });
    }

    console.log('Sample data populated successfully');
  } catch (error) {
    console.error('Error populating data:', error);
  } finally {
    await sequelize.close();
  }
}

populateData();
