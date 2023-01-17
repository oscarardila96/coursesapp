const express = require("express");
const initModels = require("./models/init.model");
const db = require("./utils/database");
const userRoutes = require("./routes/users.route");
const courseRoutes = require("./routes/courses.route");
const videoRoutes = require("./routes/videos.route");
const categoryRoutes = require("./routes/categories.route");
const userCoursesRoutes = require("./routes/users_courses.route");

const app = express();

app.use(express.json());

db.authenticate()
  .then(() => console.log("Autenticacion exitosa"))
  .catch((error) => console.log(error));

initModels();

db.sync({ force: false })
  .then(() => console.log("Base de datos sincronizada"))
  .catch((error) => console.log(error));

app.use("/api/v1/users", userRoutes);
app.use("/api/v1/courses", courseRoutes);
app.use("/api/v1/videos", videoRoutes);
app.use("/api/v1/categories", categoryRoutes);
app.use("/api/v1/usersCourses", userCoursesRoutes);

app.get("/", (req, res) => {
  res.json({ message: "Conectado al servidor" });
});

const PORT = 8000;

app.listen(PORT, () => {
  console.log(`Servidor escuchando en el puerto ${PORT}`);
});
