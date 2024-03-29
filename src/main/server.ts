import express from 'express';
import bodyParser from 'body-parser';
import { register } from './routes';

const port = 8081;

export const app = express();

app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  }),
);

// registers routes
register(app);

// if nothing matches return html text
// must be registered after other routes
app.get('/*', (req, res) => {
  res.send('<html lang="en"><title>Apollon Converter</title><body>Apollon Converter is running</body></html>');
});

app.listen(port, () => {
  console.log('Apollon Converter Server listening at http://localhost:%s', port);
});
