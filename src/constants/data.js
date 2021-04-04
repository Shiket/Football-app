require('dotenv').config()

const FOOTBALL_API = process.env.REACT_APP_FOOTBALL_API;

export const LEAGUE_ID = [4328,4332, 4335, 4331, 4337, 4334];
export const LEAGUE_URL = `https://www.thesportsdb.com/api/v1/json/${FOOTBALL_API}/lookupleague.php?id=`
export const TABLE_URL = `https://www.thesportsdb.com/api/v1/json/${FOOTBALL_API}/lookuptable.php?l=`
export const NEXT_LEAGUE_MATCHES = `https://www.thesportsdb.com/api/v1/json/${FOOTBALL_API}/eventsnextleague.php?id=`

export const TEAMS_URL = `https://www.thesportsdb.com/api/v1/json/${FOOTBALL_API}/search_all_teams.php?l=`
export const TEAMS_NAME = ['English%20Premier%20League', 'Italian%20Serie%20A', 'French%20Ligue%201',
    'Spanish%20La%20Liga', 'German%20bundesliga', 'Dutch%20eredivisie']
export const TEAM_BY_ID = `https://www.thesportsdb.com/api/v1/json/${FOOTBALL_API}/lookupteam.php?id=`

export const NEXT_MATCHES = `https://www.thesportsdb.com/api/v1/json/${FOOTBALL_API}/eventsnext.php?id=`
export const LAST_MATCHES = `https://www.thesportsdb.com/api/v1/json/${FOOTBALL_API}/eventslast.php?id=`

export const PLAYERS = `https://www.thesportsdb.com/api/v1/json/${FOOTBALL_API}/lookup_all_players.php?id=`