import { ApolloServer } from "apollo-server-express";
import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import { MongoClient } from "mongodb";
import IexCloudApi from "./data-sources/iex-cloud-rest-api/iex-cloud";
import { Fundamentals } from "./data-sources/mongodb/fundamentals";
import { Indicators } from "./data-sources/mongodb/indicators";
import { resolvers } from "./resolvers";
import { typeDefs } from "./type-defs";

dotenv.config();

const client = new MongoClient(
  `mongodb+srv://stockscreener:${process.env.MONGODB_PASSWORD}@cluster0.eeh9v.mongodb.net/stocks?retryWrites=true&w=majority`,
  { useNewUrlParser: true, useUnifiedTopology: true }
);
client.connect();

const app = express();
const server = new ApolloServer({
  typeDefs,
  resolvers,
  dataSources: () => {
    return {
      iexCloudApi: new IexCloudApi(),
      fundamentals: new Fundamentals(client.db().collection("fundamentals")),
      indicators: new Indicators(client.db().collection("indicators")),
    };
  },
  // cache: new RedisCache({
  //   host: "redis-server",
  //   // Options are passed through to the Redis client
  // }),
  //tracing: process.env.ENVIRONMENT === "Test",
});

app.use(cors()); // enable `cors` to set HTTP response header: Access-Control-Allow-Origin: *

server.applyMiddleware({ app });

// start the Express server
app.listen(process.env.PORT, () => {
  console.log(
    `server started at http://localhost:${process.env.PORT}${server.graphqlPath}`
  );
});
