const { ApolloServer, gql } = require("apollo-server-express");

const TeamModel = require("./models/Team");
const PlayerModel = require("./models/Player");

function appMain(app) {
  const schema = gql`
    input FindManyTeamInput {
      id: Int
      name: String
      thirst: String
      stadium: String
    }

    type FindManyTeamPayload {
      id: Int
      name: String
      thirst: String
      stadium: String
      image: String
      players: [FindManyPlayerPayload]
    }

    input CreateTeamInput {
      id: Int
      name: String
      thirst: String
      stadium: String
    }

    #player
    input CreatePlayerInput {
      name: String
      age: Int
      foot: String
      gold_balls: Int
      height: Float
      image: String
      nickname: String
      number: Int
      position: String
      salary: Float
      team_id: Int
    }

    type FindManyPlayerPayload {
      id: Int
      name: String
      image: String
      age: Int
      height: Float
      salary: Float
      gold_balls: Int
      foot: String
      nickname: String
      number: Int
      position: String
    }

    input RemovePlayerInput {
        id: Int!
    }

    type RemovePlayerPayload {
        id: Int!
    }

    type Query {
      findManyTeams(team: FindManyTeamInput): [FindManyTeamPayload]

      findManyPlayers: [FindManyPlayerPayload]
    }

    type Mutation {
      createPlayer(player: CreatePlayerInput): FindManyPlayerPayload
      removePlayer(player: RemovePlayerInput): RemovePlayerPayload
    }
  `;

  const resolvers = {
    Query: {
      async findManyTeams(_, input) {
        const { name } = input.team;

        if (name) {
          return await TeamModel.query()
            .where("name", name)
            .withGraphFetched("players");
        }

        return await TeamModel.query().withGraphFetched("players");
      },

      // player
      async findManyPlayers() {
        return await PlayerModel.query();
      },

      //   async updatePlayer(_, input) {
      //     const { id } = input.player;
      //     const player = await PlayerModel.query().findById(id).patch({
      //       ...input.player
      //     });

      //     return player;
      // },
    },

    Mutation: {
      async createPlayer(_, input) {
        const player = await PlayerModel.query().insert({
          ...input.player,
        });
        return player;
      },

        async removePlayer(_, input) {
            console.log(input)
            const player = await PlayerModel.query().deleteById(input.player.id);
            return {id: input.player.id};
        }
    },
  };

  const server = new ApolloServer({
    typeDefs: schema,
    resolvers,
    playground: "dark",
  });

  server.applyMiddleware({ app });
}

module.exports = appMain;