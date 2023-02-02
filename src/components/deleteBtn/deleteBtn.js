import "./deleteBtn.css";

const DeleteBtn = () => {
  return (
    <div className="todo-delete">
      <img
        src={require("../../assets/images/trash.svg").default}
        alt="Delete Button"
        class="delete-btn"
      />
    </div>
  );
};

export default DeleteBtn;
