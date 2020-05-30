const { tasks, users } = require('../mock-data');

// Two types of resolvers
// 1. Query level resolvers
// 2. Field level resolvers
// field level resolvers are given the high priority by the graphql runtime

module.exports = {
	Query: {
		users: () => users,
		user: (_, { id }) => users.find((user) => user.id === id)
	},
	User: {
		tasks: ({ id }) => tasks.filter((task) => task.userId === id)
	}
};
