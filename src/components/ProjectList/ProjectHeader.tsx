import "./ProjectHeader.css";
import { useDispatch } from "react-redux";
import {
  showAllProject,
  showProject,
  showProgressProject,
  showCompletedProject,
} from "../../redux/actions/projectActions";
import { VFC } from "react";
type ProjectHeaderProps = {
  onClick: () => void;
};
const ProjectHeader: VFC<ProjectHeaderProps> = ({ onClick }) => {
  const dispatch = useDispatch();
  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedValue:string = e.target.value;
    if (selectedValue === "all") {
      dispatch(showAllProject());
    }
    if (selectedValue === "Project") {
      dispatch(showProject());
    }
  };

  return (
    <div className="project__header">
      <div className="project__header__row">
        <h1>Projects</h1>
        <div className="project__labels">
          <button onClick={onClick}>Add Project</button>
        </div>
      </div>
    </div>
  );
};

export default ProjectHeader;
