import app from "./application/routes/app";
const PORT = process.env.PORT || 8080;

console.log(`API is running on ${PORT} port`)
app.server.listen(PORT)