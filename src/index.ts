import * as dotenv from 'dotenv';
dotenv.config();
import app from './app';

const { PORT = 3000 } = process.env;

app.listen(PORT, (err) => {
  if (err) {
    return console.log(err)
  }
  return console.log(`server is listening on ${PORT}`)
})