export type Status = "Project" | "In Progress" | "Completed";

export interface IProject {
  id: number;
  title: string;
  description: string;
  status: Status | string;
  user?: string;
}
export type UserState = {
  usersList: IUser[];
  loading?: boolean;
  error?: string;
};

export type ProjectArray = Array<IProject>;

export type ProjectState = {
  project: ProjectArray;
  filteredProject: ProjectArray;
};

export enum ProjectActionTypes {
  ADD_PROJECT = "ADD_PROJECT",
  DELETE_PROJECT = "DELETE_PROJECT",
  SHOW_ALL = "SHOW_ALL",
  SHOW_PROJECT = "SHOW_PROJECT",
  SHOW_PROGRESS = "SHOW_PROGRESS",
  SHOW_COMPLETED = "SHOW_COMPLETED",
}

export interface AddProject {
  type: ProjectActionTypes.ADD_PROJECT;
  payload: IProject;
}

export interface DeleteProject {
  type: ProjectActionTypes.DELETE_PROJECT;
  payload: number;
}

export interface IUser {
  id: number;
  name: string;
}

export type UsersArray = {
  usersList: IUser[];
  loading: boolean;
  error: string;
};
export enum UserActionTypes {
  FETCH_USERS_LOADING = "FETCH_USERS_LOADING",
  FETCH_USERS_SUCCESS = "FETCH_USERS_SUCCESS",
  FETCH_USERS_ERROR = "FETCH_USERS_ERROR",
}

export interface FetchUsersLoading {
  type: UserActionTypes.FETCH_USERS_LOADING;
  payload: boolean;
}

export interface FetchUsersSuccess {
  type: UserActionTypes.FETCH_USERS_SUCCESS;
  payload: IUser[];
}

export interface FetchUsersError {
  type: UserActionTypes.FETCH_USERS_ERROR;
  payload: string;
}

export interface ShowAllProject {
  type: ProjectActionTypes.SHOW_ALL;
  payload: ProjectArray;
}
export interface ShowProject {
  type: ProjectActionTypes.SHOW_PROJECT;
  payload: ProjectArray;
}
export interface ShowProgressProject {
  type: ProjectActionTypes.SHOW_PROGRESS;
  payload: ProjectArray;
}
export interface ShowCompletedProject {
  type: ProjectActionTypes.SHOW_COMPLETED;
  payload: ProjectArray;
}

export type DispatchUserTypes =
  | FetchUsersLoading
  | FetchUsersSuccess
  | FetchUsersError;
