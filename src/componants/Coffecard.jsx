import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const Coffecard = ({ coffe }) => {
  const { _id, name, quantity, supplier, taste, category, details, photo } = coffe;

  const handledelete = _id => {
    console.log("Delete This Id", _id);
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then((result) => {
      if (result.isConfirmed) {

        fetch(`http://localhost:5000/coffe/${_id}`, {
          method: 'DELETE'
        })
          .then(res => res.json())
          .then(data => {
            console.log(data);
            if (data.deletedCount > 0) {
              Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success"
              })
              const remaining = coffe.filter(cof => cof._id !== _id)
            }
          })

      }
    });
  }

  return (
    <div className="px-8">
      <div className="grid grid-cols-2 gap-4 p-4">
        <div className="border border-white p-4 card card-side bg-base-100 shadow-xl">
          {/* inside the card div */}
          <div className="grid grid-cols-3 gap-2">
            {/* Photo div */}
            <div>
              <figure className="py-4">
                <img src={photo} alt="Movie" />
              </figure>
            </div>
            {/* card body div */}
            <div className="py-8">
              <div className="card-body">
                <p>{name}</p>
                <p>{quantity}</p>
                <p>{supplier}</p>
                <p>{taste}</p>
              </div>
            </div>
            {/* button div */}
            <div className="py-12">
              <div className="card-actions justify-end">
                <button className="px-5 btn btn-primary">View</button>
              </div>
              <div className="card-actions py-4 justify-end">
                <Link to={`updatecoffe/${_id}`}>
                  <button className="px-6 btn btn-primary">Edit</button>
                </Link>
              </div>
              <div className="card-actions justify-end">
                <button
                  onClick={() => handledelete(_id)}
                  className="px-8 btn btn-primary">X</button>
              </div>
            </div>
          </div>
        </div>

        <div className="border border-white p-4 card card-side bg-base-100 shadow-xl">
          <div className="border border-white p-4 card card-side bg-base-100 shadow-xl">
            {/* inside the card div */}
            <div className="grid grid-cols-3 gap-2">
              {/* Photo div */}
              <div>
                <figure className="py-4">
                  <img src={photo} alt="Movie" />
                </figure>
              </div>
              {/* card body div */}
              <div className="py-8">
                <div className="card-body">
                  <p>{name}</p>
                  <p>{quantity}</p>
                  <p>{supplier}</p>
                  <p>{taste}</p>
                </div>
              </div>
              {/* button div */}
              <div className="py-12">
                <div className="card-actions justify-end">
                  <button className="px-5 btn btn-primary">View</button>
                </div>
                <div className="card-actions py-4 justify-end">
                  <Link to={`updatecoffe/${_id}}`}>
                    <button className="px-6 btn btn-primary">Edit</button>
                  </Link>
                </div>
                <div className="card-actions justify-end">
                  <button
                    onClick={() => handledelete(_id)}
                    className="px-8 btn btn-primary">X</button>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Coffecard;
