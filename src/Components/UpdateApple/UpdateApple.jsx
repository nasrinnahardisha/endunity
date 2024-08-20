
import { useLoaderData, Link, useNavigate } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";
import Swal from 'sweetalert2';
import { useState } from "react";

const UpdateApple = () => {
    //4.3
  const loadedApple = useLoaderData();
  const navigate = useNavigate();

  // Manage state for the form fields
  const [name, setName] = useState(loadedApple.name);
  const [email, setEmail] = useState(loadedApple.email);
  const [number, setNumber] = useState(loadedApple.number);

  // Function to handle form submission
  const handleUpdate = (event) => {
    event.preventDefault();

    const updatedApple = { name, email, number };

    //4.4 Send updated data to the server
    fetch(`http://localhost:5001/apple/${loadedApple._id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedApple),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          Swal.fire({
            title: "Success",
            text: "User updated successfully!",
            icon: "success",
            confirmButtonText: "Cool",
          })
       //navigate kore home page redirect kora
          .then(() =>{
            navigate("/");
          })
        }
      });
  };

  return (
    <div className="max-w-5xl mx-auto">
      <Link to="/" className="flex">
        <span className="mt-1">
          <IoIosArrowBack />
        </span>
        <h4 className="text-start">All Users</h4>
      </Link>

      <h2 className="text-3xl text-center">Update User</h2>
      <p className="text-gray-500 text-sm text-center">
        Use the below form to update user information
      </p>
      <form onSubmit={handleUpdate} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input
            type="text"
            placeholder="Name"
            name="name"
            className="input input-bordered"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input
            type="email"
            placeholder="Email"
            name="email"
            className="input input-bordered"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Number</span>
          </label>
          <input
            type="tel"
            placeholder="Number"
            name="number"
            className="input input-bordered"
            value={number}
            onChange={(e) => setNumber(e.target.value)}
            required
          />
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">
            <input type="submit" value="Update User" />
          </button>
        </div>
      </form>
    </div>
  );
};

export default UpdateApple;

