import fastify from "fastify";

const app = fastify();

app.get("/hello", (req, res) => {
  return res.send("Hello World!");
});

app.listen({
  port: 3333,
}).then(() => {
  console.log("Running on port 3333 🚀")
});