import React, { VFC } from "react";
import ProjectHeader from "./ProjectHeader";
import "./ProjectList.css";
import Project from "../Project";
import { useState } from "react";
import { useSelector } from "react-redux";
import { IRootState } from "../../redux";
import { IProject } from "../../types";
import AddFormModal from "../Modal/ModalForm/AddFormModal";
const ProjectList: VFC = () => {
  const project = useSelector((state: IRootState) => state.project.project);

  const [isOpen, setIsOpen] = useState<boolean>(false);
  return (
    <section className="project__list">
      <ProjectHeader onClick={() => setIsOpen(true)} />
      {isOpen && <AddFormModal setIsOpen={setIsOpen} />}

      {project.length > 0 ? (
        <div className="project__list__row">
          {project.map((project: IProject) => (
            <Project key={project.id} project={project} />
          ))}
        </div>
      ) : (
        "No Projects"
      )}
    </section>
  );
};

export default ProjectList;
