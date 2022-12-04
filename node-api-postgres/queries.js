const Pool = require('pg').Pool
const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'NFL',
  password: '8014',
  port: 5432,
})

//QUERIES 


//PLAYERS QUERIES ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//None
//http://localhost:3000/players0/
const getPlayers0 = (request, response) => {
    pool.query('SELECT players.displayname, teams.fullName, players.season, players.position, players.hometown, colleges.collegename, players.jerseynumber, players.height, players.weight FROM players, colleges, teams WHERE players.collegeid = colleges.collegeid AND players.teamid = teams.teamid AND players.season = teams.season ORDER BY players.lastname, players.season ASC', (error, results) => { 
      if (error) {
        throw error
      }
      response.status(200).json(results.rows)
    })
  }

//Full Name
//http://localhost:3000/players1/Terry Jones
const getPlayers1 = (request, response) => {
    const name = request.params.fullname

    pool.query('SELECT players.displayname, teams.fullName, players.season, players.position, players.hometown, colleges.collegename, players.jerseynumber, players.height, players.weight FROM players, colleges, teams WHERE players.collegeid = colleges.collegeid AND players.teamid = teams.teamid AND players.season = teams.season AND players.displayname = ($1) ', [name],  (error, results) => {
     if (error) {
       throw error
     }
     response.status(200).json(results.rows)
   })
}

//College Name
//http://localhost:3000/players2/Alabama
const getPlayers2 = (request, response) => {
    const name = request.params.collegename

    pool.query('SELECT players.displayname, teams.fullName, players.season, players.position, players.hometown, colleges.collegename, players.jerseynumber, players.height, players.weight FROM players, colleges, teams WHERE players.collegeid = colleges.collegeid AND players.teamid = teams.teamid AND players.season = teams.season AND colleges.collegename = $1', [name],  (error, results) => {
     if (error) {
       throw error
     }
     response.status(200).json(results.rows)
   })
}

//Season Year
//http://localhost:3000/players3/2009
const getPlayers3 = (request, response) => {
    const seasonyear = request.params.seasonyear

    pool.query('SELECT players.displayname, teams.fullName, players.season, players.position, players.hometown, colleges.collegename, players.jerseynumber, players.height, players.weight FROM players, colleges, teams WHERE players.collegeid = colleges.collegeid AND players.teamid = teams.teamid AND players.season = teams.season AND players.season = ($1) ', [seasonyear],  (error, results) => {
     if (error) {
       throw error
     }
     response.status(200).json(results.rows)
   })
}

//Full name and College Name UI
//http://localhost:3000/players12/Alabama/Terry Jones
const getPlayers12 = (request, response) => {

    const {playername, collegename} = request.params;

    pool.query('SELECT players.displayname, teams.fullName, players.season, players.position, players.hometown, colleges.collegename, players.jerseynumber, players.height, players.weight FROM players, colleges, teams WHERE players.collegeid = colleges.collegeid AND players.teamid = teams.teamid AND players.season = teams.season AND colleges.collegename=($2) AND players.displayname=($1)', [collegename, playername],  (error, results) => {
     if (error) {
       throw error
     }
     response.status(201).json(results.rows)
   })
}

//Full name and Season Year
//http://localhost:3000/players13/2003/Terry Jones
const getPlayers13 = (request, response) => {

    const {playername, seasonyear} = request.params;

    pool.query('SELECT players.displayname, teams.fullName, players.season, players.position, players.hometown, colleges.collegename, players.jerseynumber, players.height, players.weight FROM players, colleges, teams WHERE players.collegeid = colleges.collegeid AND players.teamid = teams.teamid AND players.season = teams.season AND players.season=($2) AND players.displayname=($1)', [seasonyear, playername],  (error, results) => {
     if (error) {
       throw error
     }
     response.status(200).json(results.rows)
   })
}

//College Name and Season Year
//http://localhost:3000/players23/2003/Alabama
const getPlayers23 = (request, response) => {

    const {collegename, seasonyear} = request.params;

    pool.query('SELECT players.displayname, teams.fullName, players.season, players.position, players.hometown, colleges.collegename, players.jerseynumber, players.height, players.weight FROM players, colleges, teams WHERE players.collegeid = colleges.collegeid AND players.teamid = teams.teamid AND players.season = teams.season AND players.season=($2) AND colleges.collegename=($1)', [seasonyear, collegename],  (error, results) => {
     if (error) {
       throw error
     }
     response.status(200).json(results.rows)
   })
}

//Full Name, College Name and Season Year
//http://localhost:3000/players123/Alabama/2002/Terry Jones
const getPlayers123 = (request, response) => {

    const {collegename, seasonyear, fullname} = request.params;

    pool.query('SELECT players.displayname, teams.fullName, players.season, players.position, players.hometown, colleges.collegename, players.jerseynumber, players.height, players.weight FROM players, colleges, teams WHERE players.collegeid = colleges.collegeid AND players.teamid = teams.teamid AND players.season = teams.season AND players.season=($1) AND colleges.collegename=($2) AND players.displayname=($3)', [seasonyear, collegename, fullname],  (error, results) => {
     if (error) {
       throw error
     }
     response.status(200).json(results.rows)
   })
}


//TEAMS QUERIES ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// getTeams(0), 0 paramaters filled out
//  http://localhost:3000/teams
const getTeams = (request, response) => {
    pool.query('SELECT teamid, abbr, citystate, nick FROM teams', (error, results) => {
    if (error) {
       throw error
     }
     response.status(200).json(results.rows)
   })
  }
  
  // getTeams(1), 1st paramter (team name) filled out
  //  http://localhost:3000/teams/Ravens
  const getTeamPlayersByTeamName = (request, response) => {
    const name = request.params.teamname
    pool.query('SELECT teams.cityState, teams.nick, players.displayname, teams.season, players.position, players.hometown, players.jerseynumber, players.height, players.weight FROM players, teams WHERE players.teamid = teams.teamid AND teams.nick = $1', [name],  (error, results) => {
     if (error) {
       throw error
     }
     response.status(200).json(results.rows)
   })
   }
  
   // getTeams(2), 2nd parameter (season) filled out
   //  http://localhost:3000/teams/season/2001
   const getTeamPlayersBySeason = (request, response) => {
    const season = parseInt(request.params.seasonnum)
    pool.query('SELECT teams.fullName, players.displayname, players.season, players.position, players.hometown, players.jerseynumber, players.height, players.weight FROM players, teams WHERE players.teamid = teams.teamid AND players.season = teams.season AND teams.season = $1 AND players.season = $1', [season],  (error, results) => {
     if (error) {
       throw error
     }
     response.status(200).json(results.rows)
   })
   }
  
   // getTeams(1,2) Both paramters (Name, season) filled out
   //  http://localhost:3000/teams/Ravens/2001
  const getTeamPlayersByTeamNameAndSeason = (request, response) => {
    const name = request.params.teamname
    const season = parseInt(request.params.seasonnum)
    pool.query('SELECT teams.fullName, players.displayname, players.position, players.hometown, players.jerseynumber, players.height, players.weight, players.season FROM players, teams WHERE players.season = teams.season AND teams.nick = $1 AND teams.season = $2 AND players.season = $2', [name, season],  (error, results) => {
      if (error) {
        throw error
      }
      response.status(200).json(results.rows)
    })
  }



module.exports = {
  getPlayers0,
  getPlayers1,
  getPlayers2,
  getPlayers3,
  getPlayers12,
  getPlayers13,
  getPlayers23,
  getPlayers123,
  getTeams,
  getTeamPlayersByTeamName,
  getTeamPlayersBySeason,
  getTeamPlayersByTeamNameAndSeason,
}