import { Link, useNavigate } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";
import Swal from 'sweetalert2';

const AddApple = () => {
  const navigate = useNavigate();

  const handleAdd = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const number = form.number.value;  // New number field
    const newApple = { name, email, number };
    console.log(newApple);

    // 1.1 insert= create and send data to the server
    fetch('http://localhost:5001/apple', {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(newApple),
    })
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      if (data.insertedId) {
        Swal.fire({
          title: 'Success',
          text: 'User added successfully!',
          icon: 'success',
          confirmButtonText: 'Cool',
        }).then(() =>{
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
        <span className="mt-1">
          <IoIosArrowBack />
        </span>
        <h4 className="text-start">All Users</h4>
      </Link>

      <h2 className="text-3xl text-center">New User</h2>
      <p className="text-gray-500 text-sm text-center">
        Use the below form to create a new account
      </p>
      <form onSubmit={handleAdd} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input
            type="text"
            placeholder="Name"
            name="name"
            className="input input-bordered"
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
            required
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Number</span>  {/* New label for number */}
          </label>
          <input
            type="tel"
            placeholder="Number"
            name="number"
            className="input input-bordered"
            required
          />
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">
            <input type="submit" value="Add User" />
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddApple;

