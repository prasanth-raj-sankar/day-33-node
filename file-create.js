import express from "express";

import { createFile, getFiles } from "./fs-create.js";

const server = express();

//post - create a new file
server.post("/create-file", (req, res) => {
  const date = new Date();
  const timestamp = date.getTime().toString(); //timestamp

  //windows
  const isoDateTime = date.toISOString().replaceAll(":", "-").split(".")[0];

  createFile("./api-files", `${isoDateTime}.txt`, timestamp, () =>
    res.status(201).json({ msg: "create file sucessfully" })
  );
});

//GET - Retrieve all the files

server.get("/get-file", (req, res) => {
  getFiles(
    "./api-files", 
    (data) => res.json(data),
    () => res.status(500).json({msg: "something went wrong"})
);
});

const PORT = 4500;

server.listen(PORT, () => {
  console.log("server listening on", PORT);
});
