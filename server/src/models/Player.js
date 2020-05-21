const { Model } = require('objection');

class PlayerModel extends Model {
  static get tableName() {
    return 'players';
  }

  static get jsonSchema() {
    return {
      type: 'object',
      properties: {
        id: { type: 'integer' },
        name: { type: 'string', minLength: 1, maxLength: 45 },
        age: { type: 'integer' },
        birth_date: { type: 'date' },
        height: { type: 'float' },
        salary: { type: 'float' },
        gold_balls: { type: 'integer' },
        foot: { type: 'string', minLength: 1, maxLength: 15 },
        nickname: { type: 'string', minLength: 1, maxLength: 45 },
        number: { type: 'integer' },
        position: { type: 'string', minLength: 1, maxLength: 15 },
        team_id: { type: 'integer' },
      }
    };
  }
}

module.exports = PlayerModel;