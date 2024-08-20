import { RxCross2 } from "react-icons/rx";
import { MdEdit } from "react-icons/md";
import { Link, useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";
import { FaRegUser } from "react-icons/fa";
import { useState } from "react";

const Home = () => {
  //2.3[read]
  const loadedApples = useLoaderData();
  const [apples, setApple] = useState(loadedApples);

  //3.1 [delete] : handle ata params
  const handleDelete = (_id) => {
    console.log(_id);
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        console.log("deleted confirm");

        //3.3
        fetch(`http://localhost:5001/apple/${_id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deletedCount > 0) {
              Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success",
              });
              //3.5
              const remaining = apples.filter((cof) => cof._id !== _id);
              setApple(remaining);
            }
          });
      }
    });
  };

  return (
    <div>
      <Link to="/addApple">
        <button className="flex btn mb-8 text-blue-500">
          <h3>New User </h3>
          <span>
            <FaRegUser />
          </span>
        </button>
      </Link>

      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr className="text-white bg-black">
              <th>ID</th>
              <th>Name</th>
              <th>@Email</th>
              <th>Gender</th>
              <th>Status</th>
              <th className="text-center">Action</th>
            </tr>
          </thead>
          <tbody>
            {apples.map((apple) => (
              <tr key={apple._id}>
                <th>{apple.number}</th>
                <td>{apple.name}</td>
                <td>{apple.email}</td>
                <td>{apple.gender}</td>
                <td>{apple.status}</td>
                <td className="flex justify-center gap-4">
                  {/* //4.3  link */}
                  <Link to={`/updateApple/${apple._id}`}>
                    <button className="btn">
                      <span>
                        <MdEdit />
                      </span>
                    </button>
                  </Link>

                  <button
                    onClick={() => handleDelete(apple._id)}
                    className="btn"
                  >
                    <span>
                      <RxCross2></RxCross2>
                    </span>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Home;
