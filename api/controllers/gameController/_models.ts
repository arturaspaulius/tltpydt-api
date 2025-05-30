import { BaseGame, Game, GameTurn } from '../../../lib/models';

export interface ChangeCivRequestBody {
  steamId?: string;
  playerCiv: string;
}

export interface LeaveRequestBody {
  steamId?: string;
}

export interface RequestSubstitutionBody {
  steamId?: string;
}

export interface SurrenderBody {
  kickUserId?: string;
}

export interface GameRequestBody extends BaseGame {
  password?: string;
}

export interface UpdateTurnOrderRequestBody {
  steamIds: string[];
}

export interface CanCreateGameRequestBody {
  gameType: string;
}

export interface CanCreateGameResponseBody {
  canCreate: boolean;
  message?: string;
}

export interface CreateGameRequestBody extends GameRequestBody {
  player1Civ: string;
}

export interface JoinGameRequestBody extends ChangeCivRequestBody {
  password?: string;
}

export interface ReplacePlayerRequestBody {
  oldSteamId: string;
  newSteamId: string;
}
export interface ReplaceRequestedSubstitutionPlayerRequestBody extends ReplacePlayerRequestBody {
  password?: string;
}

export interface OpenGamesResponse {
  notStarted: Game[];
  openSlots: Game[];
}

export interface GameTurnResponse {
  downloadUrl: string;
  version?: string;
  size?: number;
}

export interface StartTurnSubmitResponse {
  putUrl: string;
}

export interface GameTurnListItem extends GameTurn {
  hasSave: boolean;
}

export interface OpenSlotsGame extends Game {
  joinAfterStart: boolean;
  substitutionRequested: boolean;
}
