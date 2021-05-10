const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const schema = require('./schema');
const cors = require('cors');

const PORT = process.env.PORT || 5000;

const app = express();

// Middleware
app.use(cors());

app.use('/graphql', graphqlHTTP({
  schema: schema,
  graphiql: true
}));



app.listen(PORT, () => console.log(`Server started on port ${PORT}`));