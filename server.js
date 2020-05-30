const express = require('express');
const { ApolloServer, gql } = require('apollo-server-express');
const cors = require('cors');
const dotEnv = require('dotenv');
const morgan = require('morgan');

const resolvers = require('./resolvers');
const typeDefs = require('./typeDefs');

// set env variables
dotEnv.config();

const app = express();

// set upt cors middleware
app.use(cors());

// set up the morgan middleware
app.use(morgan('dev'));

// body parser middleware
app.use(express.json());

const apolloServer = new ApolloServer({
	typeDefs,
	resolvers
});

apolloServer.applyMiddleware({ app, path: '/graphql' });

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
	console.log(`Server listening on PORT: ${PORT}`);
	console.log(`Graphql endpoint: ${apolloServer.graphqlPath}`);
});
