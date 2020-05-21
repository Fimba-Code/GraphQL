const { Model } = require("objection");
const PlayerModel = require('./Player');

class TeamModel extends Model {
  static get tableName() {
    return "teams";
  }

  static get jsonSchema() {
    return {
      type: "object",
      properties: {
        id: { type: "integer" },
        name: { type: "string", minLength: 1, maxLength: 45 },
        thirst: { type: "string", minLength: 1, maxLength: 45 },
        stadium: { type: "string", minLength: 1, maxLength: 45 },
      },
    };
  }

  static relationMappings = {
    players: {
      relation: Model.HasManyRelation,
      modelClass: PlayerModel,
      join: {
        from: 'teams.id',
        to: 'players.team_id'
      }
    }
  };
}

module.exports = TeamModel;
