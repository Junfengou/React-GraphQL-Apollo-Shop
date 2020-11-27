{
	/**connect database
GraphQL pull data from Prisma
In the backend, things are "require" instead of "import" (no import in Node.js)

This file connects to the remote prisma DB and gives us the ability to query with JS*/
}

const { Prisma } = require("prisma-binding");

const db = new Prisma({
	typeDefs: "src/generated/prisma.graphql", //feed in the type
	endpoint: process.env.PRISMA_ENDPOINT, //access to the endpoint
	secret: process.env.PRISMA_SECRET,
	debug: false,
});

module.exports = db;
