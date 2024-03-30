const express = require("express");
const app = express();

const connectDB = require("./db");
const {
  getInventory,
  addInventory,
  deleteInventory,
} = require("./controller");

//Important: will be discussed next week
app.use(express.json());

// Connect to MongoDB
connectDB();

// Routes
// GET all inventory
app.get("/inventories", getInventory);

// POST a new Inventory
app.post("/inventories", addInventory);

// DELETE a delete Inventory
app.delete("/inventories/:id", deleteInventory);

const PORT = 4000;

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port http://localhost:${PORT}`);
});