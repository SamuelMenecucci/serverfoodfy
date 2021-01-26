const express = require("express")
const server = express()
const nunjucks = require("nunjucks")
const cards = require("./data")

server.set("view engine", "njk")

nunjucks.configure("views", {
  express: server,
  noCache: true,
})

server.listen(5000, function () {
  console.log("server is running")
})

server.use(express.static("public"))

server.get("/", function (req, res) {
  return res.render("index", { cards })
})

server.get("/sobre", function (req, res) {
  return res.render("sobre")
})

server.get("/receitas", function (req, res) {
  return res.render("receitas", { cards })
})

server.get("/detalhes", function (req, res) {
  return res.render("detalhes", { cards })
})

server.get("/detalhes/:index", function (req, res) {
  console.log(recipes[recipeIndex])
})
