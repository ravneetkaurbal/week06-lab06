const Inventory = require("./model");

// get all Inventory
const getInventory = async (req, res) => {
  const inventories = await Inventory.find({});
  res.status(200).json(inventories);
};

// Add one Inventory
const addInventory = async (req, res) => {
  const { name, description, quantity, price } = req.body;

  const newInventory = new Inventory({ name, description, quantity, price });
  await newInventory.save();
  res.status(201).json(newInventory);
};

// Delete Inventory by ID
const deleteInventory = async (req, res) => {
  const { id } = req.params;

  const item = await Inventory.findByIdAndDelete({ _id: id });
  if (!item) {
    return res.status(404).json({ message: "Inventory not found" });
  }
  res.status(200).json({ message: "Inventory deleted successfully" });
};

module.exports = {
  getInventory,
  addInventory,
  deleteInventory,
};