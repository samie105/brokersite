const UserModel = require("../mongodbConnectMigration");

// Define the migration logic
const runMigration = async () => {
  try {
    // Update all user documents in the 'users' collection
    const updateResult = await UserModel.updateMany(
      {}, // Empty filter to update all documents
      { $set: { totalPackages: 0, activePackages: 0, profit: 0 } }
    );

    console.log("Migration completed successfully", updateResult);
  } catch (error) {
    console.error("Error during migration:", error);
  }
};

runMigration();
