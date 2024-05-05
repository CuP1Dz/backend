const express = require("express");
const ToDo = require("./models/todoModel");

const PORT = 3003;
const app = express();

const mongoose = require("mongoose");

const uri = `mongodb://user:H04ncq9762,3uKv2P@90.156.216.12/MongoDBMidis`;

app.use(express.json());

mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("Connected to MongoDBMidis!");
    app.listen(PORT, () => {
      console.log(`Сервер запущен на порту ${PORT}`);
    });
  })
  .catch((err) => {
    console.error("An error occurred", err);
    process.exit(1);
  });

app.post("/createTask", async (req, res) => {
  try {
    const task = await ToDo.create(req.body);
    res.status(201).json(task);
  } catch (error) {
    console.log(error.message);
    res.status(500).send("Ошибка при создании задачи");
  }
});

app.get("/getAllTasks", async (req, res) => {
  try {
    const tasks = await ToDo.find({});
    res.status(200).json(tasks);
  } catch (error) {
    console.log(error.message);
    res.status(500).send("Ошибка при получении задач");
  }
});

app.put("/updateTask/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const task = await ToDo.findByIdAndUpdate(id, req.body, { new: true });
    if (!task) {
      return res.status(404).send("Задача с таким id не найдена");
    }
    res.status(200).json(task);
  } catch (error) {
    console.log(error.message);
    res.status(500).send("Ошибка при обновлении задачи");
  }
});

app.delete("/deleteTask/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const task = await ToDo.findByIdAndDelete(id);
    if (!task) {
      return res.status(404).send("Задача с таким id не найдена");
    }
    res.send(`Задача с ID ${id} удалена `);
  } catch (error) {
    console.log(error.message);
    res.status(500).send("Ошибка при удалении задачи");
  }
});
