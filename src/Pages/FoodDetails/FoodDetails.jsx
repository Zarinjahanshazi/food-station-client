import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProviders";
import { Helmet } from "react-helmet-async";

const FoodDetails = () => {
  const { user } = useContext(AuthContext);
  //   const { data } = useLoaderData();
  const { id } = useParams();
  const [food, setFood] = useState();
  useEffect(() => {
    fetch("http://localhost:5000/food")
      .then((res) => res.json())
      .then((data) => {
        const one = data.find((f) => f._id === id);
        setFood(one);
      });
  }, []);

  return (
    <div>
      <Helmet>
        <title>Foodle |Food Details</title>
      </Helmet>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img
            src={food?.food_image}
            className="max-w-sm rounded-lg shadow-2xl"
          />
          <div>
            <h1 className="text-5xl font-bold">{food?.food_name}</h1>
            <p className="py-6">Quantity: {food?.food_quantity}</p>
            <p className="py-6">Expired: {food?.expired_datetime}</p>
            <button
              className="btn btn-outline btn-warning"
              onClick={() => document.getElementById("my_modal_3").showModal()}
            >
              Request
            </button>
            <dialog id="my_modal_3" className="modal">
              <div className="modal-box">
                <form method="dialog">
                  {/* if there is a button in form, it will close the modal */}
                  <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                    ✕
                  </button>
                </form>
                <input
                  type="text"
                  disabled
                  defaultValue={food?.food_name}
                  placeholder="Type here"
                  className="input  input-bordered input-warning w-full max-w-xs"
                />
                <input
                  type="text"
                  disabled
                  defaultValue={food?.food_image}
                  placeholder="Type here"
                  className="input input-bordered input-warning w-full max-w-xs"
                />
                <input
                  type="text"
                  disabled
                  defaultValue={food?._id}
                  placeholder="Type here"
                  className="input input-bordered input-warning w-full max-w-xs"
                />
                <input
                  type="text"
                  disabled
                  defaultValue={food?.donator.name || food?.name}
                  placeholder="Type here"
                  className="input input-bordered input-warning w-full max-w-xs"
                />
                <input
                  type="text"
                  disabled
                  defaultValue={food?.donator.email || food?.image}
                  placeholder="Type here"
                  className="input input-bordered input-warning w-full max-w-xs"
                />
                <input
                  type="text"
                  disabled
                  defaultValue={user?.email}
                  placeholder="Type here"
                  className="input input-bordered input-warning w-full max-w-xs"
                />
                <input
                  type="text"
                  defaultValue={new Date()}
                  disabled
                  placeholder="Type here"
                  className="input input-bordered input-warning w-full max-w-xs"
                />

                <input
                  type="text"
                  disabled
                  defaultValue={food?.pickup_location}
                  placeholder="Type here"
                  className="input input-bordered input-warning w-full max-w-xs"
                />

                <input
                  type="text"
                  disabled
                  defaultValue={food?.expired_datetime}
                  placeholder="Type here"
                  className="input input-bordered input-warning w-full max-w-xs"
                />
                <input
                  type="text"
                  defaultValue={food?.additional_notes}
                  placeholder="Additional Notes"
                  className="input input-bordered input-warning w-full max-w-xs"
                />
              </div>
            </dialog>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FoodDetails;
