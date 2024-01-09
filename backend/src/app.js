import express from "express";
import cookieParser from "cookie-parser";

const app = express();

app.use(express.json({ limit: "16kb" }));
app.use(express.urlencoded({ extended: true, limit: "16kb" }));
app.use(express.static("public"));
app.use(cookieParser());

const usersData = [
  {
    id: "1681371973571",
    name: "Ravi",
    email: "ravi@gmail.com",
  },
  {
    id: "1681377673571",
    name: "Sanjeev",
    email: "sanju@gmail.com",
  },
  {
    id: "1681309473571",
    name: "San Karla",
    email: "san@gmail.com",
  },
  {
    id: "1863371973571",
    name: "Paramver",
    email: "param@gmail.com",
  },
  {
    id: "1680331973571",
    name: "Thai",
    email: "thai@gmail.com",
  },
];

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/api/users", (req, res) => {
  res.json({
    data: {
      result: {
        responseCode: 109,
        usersData,
      },
    },
  });
});

app.get("/api/description", (req, res) => {
  res.json({
    data: {
      result: {
        responseCode: 114,
        desc: {
          description: "This is a REST API for the user management system.",
        },
      },
    },
  });
});

export default app;
