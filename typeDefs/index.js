const { gql } = require('apollo-server-express');
const userTypeDef = require('./user');
const taskTypeDef = require('./task');


// this modularisation concept of the typeDefs
// is called schema stitching

const typeDefs = gql`
	type Query {
		_: String
	}

	type Mutation {
		_: String
	}
`;

module.exports = [ userTypeDef, taskTypeDef, typeDefs ];
