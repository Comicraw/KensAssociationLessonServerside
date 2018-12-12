module.exports = (sequelize, DataTypes) => {
  const Team = sequelize.define('team', {
      name: DataTypes.STRING,
      mascot: DataTypes.STRING
  })

  Team.associate = models => {
    console.log(models)
    Team.hasMany(models['player'])
  }
  return Team 
}

//"teamId" INTEGER REFERENCES "teams" ("id") what you want to look for in logs