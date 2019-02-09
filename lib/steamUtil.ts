import { join } from 'lodash';
import * as passport from 'passport';
import * as passportSteam from 'passport-steam';
import * as rp from 'request-promise';
import { Config } from './config';
import { SteamProfile } from './models';

passport.use(
  new passportSteam.Strategy({
    returnURL: Config.webUrl() + '/steamreturn',
    realm: Config.webUrl(),
    apiKey: Config.steamApiKey()
  },
  function(identifier, profile, done) {
    done(null, {
      identifier: identifier,
      profile: profile
    });
  })
);

export const steamPassport = passport;

export function getPlayerSummaries(steamIds: string[]): Promise<SteamProfile[]> {
  return rp({
    uri: `http://api.steampowered.com/ISteamUser/GetPlayerSummaries/v0002/?key=${Config.steamApiKey()}&steamids=${join(steamIds)}`,
    json: true
  }).then(resp => {
    return resp.response.players;
  });
};
