module.exports = (sequelize, DataTypes) => {
  const Player = sequelize.define('player', {
      name: DataTypes.STRING,
      playerNumber: DataTypes.INTEGER 
  })

  Player.associate = models => [
    Player.belongsTo(models['team'])
  ]
  return Player 
}