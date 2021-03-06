import { IProject , ProjectActionTypes } from "../../types";
import { Dispatch } from 'redux';
import { IRootState } from '../index';

export const addProject = (project:IProject)  => (dispatch:Dispatch , getState:() => IRootState) => {
       dispatch({
              type: ProjectActionTypes.ADD_PROJECT,
              payload:{
                  id:project.id,
                  title:project.title,
                  description:project.description,
                  status:project.status,
                  user:project.user
                   
              }
               });
        localStorage.setItem('project', JSON.stringify(getState().project.project));
}

 export const deleteProject = (id:number) => (dispatch:Dispatch , getState:() => IRootState) => {

       dispatch({
              type: ProjectActionTypes.DELETE_PROJECT,
              payload:id
       })
       localStorage.setItem('project', JSON.stringify(getState().project.project));
 }

 export const editProject = (project:IProject) => (dispatch:Dispatch, getState:() => IRootState) => {
        
       const projectList = window.localStorage.getItem('projectList');
       if (projectList) {
              const projectListArr = JSON.parse(projectList);
              projectListArr.forEach((project:IProject) => {
                     if (project.id === project.id) {
                            project.title = project.title;
                            project.user = project.user;
                     }
              });
              window.localStorage.setItem('projectList', JSON.stringify(projectListArr));
       }

       dispatch({
              type: ProjectActionTypes.EDIT_PROJECT,
              payload:{
                     id:project.id,
                     title:project.title,
                     description:project.description,
                     status:project.status,
                     user:project.user
                      
                 }
       });
       localStorage.setItem('project', JSON.stringify(getState().project.project));
 }



 export const showAllProject = () => ({
        type: ProjectActionTypes.SHOW_ALL,
 })

 export const showProject = () => ({
        type: ProjectActionTypes.SHOW_PROJECT,
 })

 