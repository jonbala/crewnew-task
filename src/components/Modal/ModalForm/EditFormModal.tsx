import { fetchUsers } from "../../../redux/actions/userActions";
import { useEffect, VFC, SetStateAction, useState } from "react";
import { editProject } from "../../../redux/actions/projectActions";
import { IProject, IUser } from "../../../types";
import "../Modal.css";
import Modal from "../Modal";
import { IRootState } from "../../../redux";
import { useDispatch, useSelector } from "react-redux";

type IFormModalProps = {
    setIsOpen: React.Dispatch<SetStateAction<boolean>>;
    heading?: string;
};

const EditFormModal: VFC<IFormModalProps> = ({ setIsOpen, heading }: IFormModalProps) => {
   const users = useSelector((state: IRootState) => state.users);
   const { loading, error, usersList } = users;
   const dispatch = useDispatch();
   const [editproject, setEditProject] = useState<IProject>({
       id: Date.now(),
       title: "",
       description: "",
       status: "",
       user: "",
   });
   
   const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (editproject.title || editproject.description || editproject.status || editproject.user) {
      dispatch(editProject(editproject));
      editProject({
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
    setEditProject({ ...editproject, [name]: value });
  };

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  return (
    <Modal heading="Project" setIsOpen={setIsOpen}>
      {" "}
      <div className="modal__content">
        <form onSubmit={handleFormSubmit}>
          <label htmlFor="title">Title</label>
          <input
            required
            name="title"
            onChange={handleChange}
            type="text"
            placeholder="Edit Project Title"
          />

          <label htmlFor="description">Description</label>
          <input
            required
            name="description"
            onChange={handleChange}
            type="text"
            placeholder="Edit Project Description"
          />
          <label htmlFor="status">User</label>

          <select
            required
            name="user"
            onChange={handleChange}
            value={editproject.user}
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
            <button className="modal__submitBtn">{heading === 'add' ? 'Add' : 'Update'}</button>
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


export default EditFormModal;