import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Card, Button, InputGroup, Form } from "react-bootstrap";
import EditSvg from "./assets/edit-button-svgrepo-com.svg";
import DeleteSvg from "./assets/delete-svgrepo-com.svg";
import { useState } from "react";

const Edit = () => {
  return (
    <button style={{ border: 0 }}>
      <img src={EditSvg} alt="edit_btn" />
    </button>
  );
};

const Delete = ({ onClick }) => {
  return (
    <button onClick={onClick} style={{ border: 0 }}>
      <img src={DeleteSvg} alt="delete_btn" />
    </button>
  );
};

const CheckBox = ({ className }) => {
  return <input className={className} type="checkbox" />;
};

function App() {
  const [todolist, AddList] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const AddItem = (e) => {
    if (inputValue.length !== 0) {
      AddList([...todolist, inputValue]);
      setInputValue("");
    }
  };

  const DeleteItem = (index) => {
    const arr = [...todolist];
    arr.splice(index, 1);
    AddList(arr);
  };

  const onInputChange = (e) => {
    setInputValue(e.target.value);
  };
  return (
    <div className="container d-flex justify-content-center cont-1">
      <Card>
        <Card.Header>ToDoListApp</Card.Header>
        <Card.Body>
          <Card.Title>To Do List</Card.Title>
          <Card.Text>Add , Edit or delete Items in the list</Card.Text>
          <InputGroup className="mb-3">
            <Form.Control
              placeholder="Recipient's username"
              as="input"
              onChange={onInputChange}
              value={inputValue}
            />
            <Button variant="primary" onClick={AddItem}>
              Add
            </Button>
          </InputGroup>

          <div className="w-100">
            {todolist.map((item, index) => {
              return (
                <div
                  className="d-flex align-items-baseline w-100 mb-1 listitemcontainer"
                  key={index}
                >
                  <div>
                    <CheckBox className=" ms-2 me-5" />
                  </div>
                  <div className="flex-grow-1 item-text">{item}</div>
                  <div className="justify-self-end">
                    <Edit />
                    &nbsp;
                    <Delete
                      onClick={() => {
                        DeleteItem(index);
                      }}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </Card.Body>
      </Card>
    </div>
  );
}

export default App;
