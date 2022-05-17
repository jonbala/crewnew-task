import { VFC, memo } from "react";
import { useDispatch } from "react-redux";
import { deleteProject } from "../../redux/actions/projectActions";
import { editProject } from "../../redux/actions/projectActions";
import { BiTrash } from "react-icons/bi";
import { useState } from "react";
import {FaEdit} from "react-icons/fa";
import { AiOutlineUser } from "react-icons/ai";
import AddFormModal from "../Modal/ModalForm";

import { IProject } from "../../types";
import "./Project.css";
interface ProjectProps {
  project: IProject;
}

const Project: VFC<ProjectProps> = memo(({ project }) => {
  const dispatch = useDispatch();

  const [isOpen, setIsOpen] = useState<boolean>(false);
  return (
    <article className="project">
      <div className="project__title">
        <h1>{project.title}</h1>
        <div className="project_buttons">
        <i>
          <FaEdit onClick={() => setIsOpen(true)}/>
          {isOpen && <AddFormModal heading="update" setIsOpen={setIsOpen}/>}
        </i>
        <i onClick={() => dispatch(deleteProject(project.id))}>
          <BiTrash />
        </i>
        </div>
      </div>
      <p>{project.description}</p>
      <div className="project__footer">
        <div className="project__footer__status">
          <h4>
            <i>
              <AiOutlineUser />
            </i>{" "}
            {project.user}
          </h4>
        </div>
      </div>
    </article>
  );
});

export default Project;
