const uuid = require('uuid');

const { tasks, users } = require('../mock-data');

// Two types of resolvers
// 1. Query level resolvers
// 2. Field level resolvers
// field level resolvers are given the high priority by the graphql runtime

module.exports = {
	Query: {
		tasks: () => tasks,
		task: (_, { id }) => tasks.find((task) => task.id === id)
	},
	Mutation: {
		createTask: (_, { input }) => {
			const task = { ...input, id: uuid.v4() };
			tasks.push(task);
			return task;
		}
	},
	Task: {
		user: ({ userId }) => users.find((user) => user.id === userId)
	}
};
