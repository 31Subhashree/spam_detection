require('dotenv').config();
const app = require('./app');
const sequelize = require('./config/sequelize');
const { User, Contact, SpamNumber } = require('./models');

const port = process.env.PORT || 3000;

async function syncDatabase() {
  try {
    // Sync models in the correct order
    await sequelize.sync({ force: true });

    // Add any additional logic after syncing, if necessary
    console.log('Database synced successfully');
    app.listen(port, () => {
      console.log(`Server running on port ${port}`);
    });
  } catch (error) {
    console.error('Error syncing database:', error);
  }
}

syncDatabase();
