import { Action } from '@ngrx/store';

export const OPEN_SIDENAV =   '[Layout] Open Sidenav';
export const CLOSE_SIDENAV =  '[Layout] Close Sidenav';


export class OpenSidenavAction implements Action {
  public readonly type = OPEN_SIDENAV;
}

// tslint:disable-next-line:max-classes-per-file
export class CloseSidenavAction implements Action {
  public readonly type = CLOSE_SIDENAV;
}


export type Actions
  = OpenSidenavAction
  | CloseSidenavAction;
