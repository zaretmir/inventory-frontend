import { Action } from '@ngrx/store';
import { Hangar } from '../../models/hangar';
import { HangarPage } from '../../models/hangarPage';

export enum HangarsActionTypes {
  SELECT_HANGAR = '[Hangars] Selected',
  LOAD_HANGAR = '[Hangars] Load hangar data',
  LOAD_HANGAR_SUCCESS = '[Hangars] Hangar data loaded',
  LOAD_HANGARS = '[Hangars] Load all hangars data',
  LOAD_HANGARS_SUCCESS = '[Hangars] All hangars data loaded',
  LOAD_HANGARS_PAGE = '[Hangars] Load hangars data page',
  LOAD_HANGARS_PAGE_SUCCESS = '[Hangars] hangars data page loaded',
  ADD_HANGAR = '[Hangars] Add data',
  ADD_HANGAR_SUCCESS = '[Hangars] Data added',
  UPDATE_HANGAR = '[Hangars] Update data',
  UPDATE_HANGAR_SUCCESS = '[Hangars] Data updated',
  DELETE_HANGAR = '[Hangars] Delete data',
  DELETE_HANGAR_SUCCESS = '[Hangars] Data deleted'
}

export class SelectHangar implements Action {
  readonly type = HangarsActionTypes.SELECT_HANGAR;
  constructor(public hangarId: number) {}
}

export class LoadHangar implements Action {
  readonly type = HangarsActionTypes.LOAD_HANGAR;
  constructor(public hangarId: number) {}
}

export class HangarLoaded implements Action {
  readonly type = HangarsActionTypes.LOAD_HANGAR_SUCCESS;
  constructor(public hangar: Hangar) {}
}

export class LoadHangars implements Action {
  readonly type = HangarsActionTypes.LOAD_HANGARS;
}

export class HangarsLoaded implements Action {
  readonly type = HangarsActionTypes.LOAD_HANGARS_SUCCESS;
  constructor(public hangars: Hangar[]) {}
}

export class LoadHangarsPage implements Action {
  readonly type = HangarsActionTypes.LOAD_HANGARS_PAGE;
    constructor(
      public page: number,
      public items: number) {}
}

export class HangarsPageLoaded implements Action {
  readonly type = HangarsActionTypes.LOAD_HANGARS_PAGE_SUCCESS;
  constructor(public hangarPage: HangarPage) {}
}

export class AddHangar implements Action {
  readonly type = HangarsActionTypes.ADD_HANGAR;
  constructor(public hangar: Hangar) {}
}

export class HangarAdded implements Action {
  readonly type = HangarsActionTypes.ADD_HANGAR_SUCCESS;
  constructor(public hangar: Hangar) {}
}

export class UpdateHangar implements Action {
  readonly type = HangarsActionTypes.UPDATE_HANGAR;
  constructor(public hangar: Hangar) {}
}

export class HangarUpdated implements Action {
  readonly type = HangarsActionTypes.UPDATE_HANGAR_SUCCESS;
  constructor(public hangar: Hangar) {}
}

export class DeleteHangar implements Action {
  readonly type = HangarsActionTypes.DELETE_HANGAR;
  constructor(public hangar: Hangar) {}
}

export class HangarDeleted implements Action {
  readonly type = HangarsActionTypes.DELETE_HANGAR_SUCCESS;
  constructor(public hangar: Hangar) {}
}

export type HangarsAction = SelectHangar
  | LoadHangars
  | HangarsLoaded
  | LoadHangarsPage
  | HangarsPageLoaded
  | LoadHangar
  | HangarLoaded
  | AddHangar
  | HangarAdded
  | UpdateHangar
  | HangarUpdated
  | DeleteHangar
  | HangarDeleted;