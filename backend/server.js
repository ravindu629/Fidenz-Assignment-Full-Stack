require("dotenv").config();
const express = require("express");
const cors = require("cors");
const weatherRoutes = require("./routes/weatherRoutes");

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Use the weather routes
app.use("/weather", weatherRoutes);

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
