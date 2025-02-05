import express from "express";
import router from "./routes/routes.js";

const app = express();

app.use(express.json());
app.use("/", router);

const PORT = 3007;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));