
const app = express();

app.get("/status", (req, res) => {
  res.send("Hello from the server");
});

const port = 5001;

app.listen(port, () => console.log(`server is listening on port ${port}...`));
