import { useState, useEffect } from "react";
import axios from "axios";

const AxiosPractice = () => {
  const [data, setData] = useState([]);
  const [name, setName] = useState("");
  const [address, setaddress] = useState("");
  const [email, setEmail] = useState("");
  const [editname, seteditName] = useState("");
  const [editaddress, seteditaddress] = useState("");
  const [editemail, seteditEmail] = useState("");
  const [showEdit, setShowEdit] = useState(false);
  const [selectedEdit, setSelectedEdit] = useState(null);

  const payload = {
    name: name,
    email: email,
    address: address,
  };

  const URL = "https://jsonplaceholder.typicode.com/users";

  useEffect(() => {
    const getUsers = async () => {
      try {
        const response = await axios.get(URL);
        setData(response.data);
      } catch (e) {
        console.log(e);
      }
    };
    getUsers();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      axios.post(URL, payload);
    } catch (e) {
      console.log(e);
    }
  };

  const showModal = (user) => {
    setSelectedEdit(user); // Set the user to be edited
    seteditName(user.name);
    seteditEmail(user.email);
    seteditaddress(user.address.city);
    setShowEdit(true);
  };

  const handleEdit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`${URL}/${selectedEdit.id}`, payload);
      // Update the state to reflect the edited user
      setData((prevData) =>
        prevData.map((user) =>
          user.id === selectedEdit.id ? { ...user, ...payload } : user
        )
      );
      setShowEdit(false); // Close the modal after editing
    } catch (e) {
      console.log(e);
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`${URL}/${id}`);
      setData(data.filter((user) => user.id !== id));
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div>
      <ul>
        {data.map((item) => (
          <li key={item.id}>
            {item.id} || {item.name} ||{" "}
            <span onClick={() => showModal(item)}>EDIT</span>{" "}
            <span onClick={() => handleDelete(item.id)}>Delete</span>
          </li>
        ))}
      </ul>

      <form onSubmit={handleSubmit}>
        <div className="flex justify-between gap-2 items-center">
          <div>
            <label htmlFor="name">Name</label>
            <br />
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="border-2 border-red-900"
            />
          </div>
          <div>
            <label htmlFor="email">Email</label>
            <br />
            <input
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="border-2 border-red-900"
            />
          </div>
        </div>
        <div>
          <label htmlFor="address">address</label>
          <br />
          <input
            type="text"
            value={address}
            onChange={(e) => setaddress(e.target.value)}
            className="border-2 border-red-900"
          />
        </div>
        <button type="submit">Submit</button>
      </form>

      {showEdit && (
        <form onSubmit={handleEdit}>
          <div className="flex justify-between gap-2 items-center">
            <div>
              <label htmlFor="editname">Name</label>
              <br />
              <input
                type="text"
                value={editname}
                onChange={(e) => seteditName(e.target.value)}
                className="border-2 border-red-900"
              />
            </div>
            <div>
              <label htmlFor="editemail">Email</label>
              <br />
              <input
                type="text"
                value={editemail}
                onChange={(e) => seteditEmail(e.target.value)}
                className="border-2 border-red-900"
              />
            </div>
          </div>
          <div>
            <label htmlFor="editaddress">address</label>
            <br />
            <input
              type="text"
              value={editaddress}
              onChange={(e) => seteditaddress(e.target.value)}
              className="border-2 border-red-900"
            />
          </div>
          <button type="submit">Submit Edit</button>
        </form>
      )}
    </div>
  );
};

export default AxiosPractice;
