import { ProjectActionTypes, ProjectState, ProjectArray } from "../../types";
import {
  AddProject,
  DeleteProject,
  ShowAllProject,
  ShowProject,
  ShowProgressProject,
  ShowCompletedProject,
} from "../../types";
const initialProject: ProjectArray = [
  {
    id: 0,
    title: "First Project",
    description: "First Project Description",
    status: "Completed",
    user: "Jon Bala",
  },
];

type Action =
  | AddProject
  | DeleteProject
  | ShowAllProject
  | ShowProject
  | ShowProgressProject
  | ShowCompletedProject;

const projectFromStorage = localStorage.getItem("project")
  ? JSON.parse(localStorage.getItem("project") || "")
  : initialProject;

export function projectReducer(
  state: ProjectState = {
    project: projectFromStorage,
    filteredProject: projectFromStorage,
  },
  action: Action
): ProjectState {
  switch (action.type) {
    case ProjectActionTypes.ADD_PROJECT:
      return {
        ...state,
        project: [...state.project, action.payload],
        filteredProject: [...state.project, action.payload],
      };

    case ProjectActionTypes.DELETE_PROJECT:
      return {
        ...state,
        project: state.project.filter((project) => project.id !== action.payload),
        filteredProject: state.project.filter((project) => project.id !== action.payload),
      };

    case ProjectActionTypes.SHOW_ALL:
      return { ...state, project: state.filteredProject };

    case ProjectActionTypes.SHOW_PROJECT:
      return {
        ...state,
        project:
          state.filteredProject.filter((project) => project.status === "Project").length >
          0
            ? state.filteredProject.filter((project) => project.status === "Project")
            : state.filteredProject,
      };

    case ProjectActionTypes.SHOW_PROGRESS:
      return {
        ...state,
        project:
          state.filteredProject.filter((project) => project.status === "In Progress")
            .length > 0
            ? state.filteredProject.filter(
                (project) => project.status === "In Progress"
              )
            : state.filteredProject,
      };

    case ProjectActionTypes.SHOW_COMPLETED:
      return {
        ...state,
        project:
          state.filteredProject.filter((project) => project.status === "Completed")
            .length > 0
            ? state.filteredProject.filter((project) => project.status === "Completed")
            : state.filteredProject,
      };

    default:
      return state;
  }
}
