import { fetchUsers } from "../../../redux/actions/userActions";
import { useEffect, VFC, SetStateAction, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addProject } from "../../../redux/actions/projectActions";
import { IProject, IUser } from "../../../types";
import Modal from "../Modal";
import "../Modal.css";
import { IRootState } from "./../../../redux";
type IFormModalProps = {
  setIsOpen: React.Dispatch<SetStateAction<boolean>>;
};
const AddFormModal: VFC<IFormModalProps> = ({ setIsOpen }: IFormModalProps) => {
  const users = useSelector((state: IRootState) => state.users);
  const { loading, error, usersList } = users;
  const dispatch = useDispatch();
  const [project, setProject] = useState<IProject>({
    id: Date.now(),
    title: "",
    description: "",
    status: "",
    user: "",
  });

  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (project.title || project.description || project.status || project.user) {
      dispatch(addProject(project));
      setProject({
        id: 0,
        title: "",
        description: "",
        status: "",
      });
      setIsOpen((open) => !open);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | any>) => {
    const { value, name } = e.target;
    setProject({ ...project, [name]: value });
  };

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  return (
    <Modal heading="Add Project" setIsOpen={setIsOpen}>
      {" "}
      <div className="modal__content">
        <form onSubmit={handleFormSubmit}>
          <label htmlFor="title">Title</label>
          <input
            required
            name="title"
            onChange={handleChange}
            type="text"
            placeholder="Enter Project Title"
          />

          <label htmlFor="description">Description</label>
          <input
            required
            name="description"
            onChange={handleChange}
            type="text"
            placeholder="Enter Project Description"
          />
          <label htmlFor="status">User</label>

          <select
            required
            name="user"
            onChange={handleChange}
            value={project.user}
          >
            <option value="" disabled selected>
              Select a user
            </option>

            {loading ? (
              <option value="loading">Loading</option>
            ) : error ? (
              <option value="error">{error} </option>
            ) : (
              usersList.map((user: IUser) => (
                <option key={user.id} value={user.name}>
                  {user.name}
                </option>
              ))
            )}
          </select>

          <div className="modal___actions">
            <button className="modal__submitBtn">Submit</button>
            <button
              className="modal__cancelBtn"
              onClick={() => setIsOpen(false)}
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </Modal>
  );
};

export default AddFormModal;
