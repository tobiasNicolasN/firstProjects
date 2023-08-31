import express from "express";
import { MongoClient } from "mongodb";
import bodyParser from "body-parser";
import path from "path";
import Item from "./models/Item";
import itemRoutes from "./routes/items";

const app = express();
const PORT = process.env.PORT || 3000;

const mongoURL =
  process.env.MONGODB_URI || "mongodb://localhost:27017/mis_gastos_db";

MongoClient.connect(mongoURL)
  .then((client) => {
    console.log("Conexión exitosa a la base de datos");
    const db = client.db(); // Obtén la referencia a la base de datos
    app.locals.db = db; // Agrega la referencia a la base de datos a las propiedades locales de la aplicación
  })
  .catch((error) => {
    console.error("Error al conectarse a la base de datos:", error);
  });

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Configuración para servir archivos estáticos, incluidos los archivos JavaScript
app.use(
  express.static(path.join(__dirname, "../public"), {
    setHeaders: (res, path) => {
      if (path.endsWith(".js")) {
        res.setHeader("Content-Type", "application/javascript");
      }
    },
  })
);

app.use("/items", itemRoutes);

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/index.html"));
});

app.listen(PORT, () => {
  console.log(`Servidor en el puerto ${PORT}`);
});
