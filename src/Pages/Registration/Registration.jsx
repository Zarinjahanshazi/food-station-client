import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
// import { AuthContext } from "../../Providers/AuthProvider";
import Swal from "sweetalert2";
import Meta from "../Shared/Meta";
import { AuthContext } from "../../Providers/AuthProviders";
import { Helmet } from "react-helmet-async";
import { updateProfile } from "firebase/auth";
import toast from "react-hot-toast";

const Registration = () => {
  const { createUser } = useContext(AuthContext);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const navigate = useNavigate();

  const SignUp = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const photo = form.photo.value;
    const email = form.email.value;
    const password = form.password.value;
    console.log(name, photo, email, password);

    const capitalLetter = /[A-Z]/;
    const specialCharacter = /[!@#$%^&*()_+{}\[\]:;<>,.?~\\-]/;
    setError("");
    setSuccess("");
    if (password.length < 6) {
      setError("PassWord should be 6 charecter or more!!");
      return;
    }
    if (!capitalLetter.test(password)) {
      setError("Your PassWord should have at least one Capital Later");
      return;
    }
    if (!specialCharacter.test(password)) {
      setError("Your PassWord should have at least one special charecter");
      return;
    }
    createUser(email, password)
    .then((result) => {
      console.log(result);
      updateProfile(result.user, {
        displayName: name,
        photoURL:photo,
      })
        .then(() => {
          console.log("success")
        })
        .catch((error) => {
          console.log(error)
        });
      // toast.success("User Created Successfully!");
      e.target.reset();
    })
    .catch((error) => {
      console.log(error);
      // toast.error("User already added!");
    });
    
  };

  return (
    <>
      <Helmet>
        <title>Foodle |Registration</title>
      </Helmet>
      <Meta title={"signup"}></Meta>
      <div>
        <div className="p-4 bg-sky-200">
          <div className="hero min-h-screen bg-white shadow-2xl rounded-2xl max-w-lg mx-auto">
            <div className="hero-content flex-col ">
              <div className="text-center lg:text-left">
                <h1 className="text-3xl font-bold text-gray-600">
                  <span className="text-red-800">FOODLE </span>Sign Up
                </h1>
                <img
                  className="h-1/2 w-1/2 mx-auto mt-2"
                  src="https://i.ibb.co/sFCdQRR/login.png"
                  alt=""
                />
              </div>
              <div className="card flex-shrink-0 w-full">
                <form onSubmit={SignUp} className="card-body">
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Name</span>
                    </label>
                    <input
                      name="name"
                      type="text"
                      placeholder="Your name"
                      className="input input-bordered"
                      required
                    />
                  </div>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Photo URL</span>
                    </label>
                    <input
                      name="photo"
                      type="text"
                      placeholder="Photo URL"
                      className="input input-bordered"
                      required
                    />
                  </div>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Email</span>
                    </label>
                    <input
                      name="email"
                      type="email"
                      placeholder="email"
                      className="input input-bordered"
                      required
                    />
                  </div>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Password</span>
                    </label>
                    <input
                      name="password"
                      type="password"
                      placeholder="password"
                      className="input input-bordered"
                      required
                    />
                  </div>
                  <div className="form-control mt-6">
                    <button className="btn text-white border-none bg-[#FF3811]">
                      Register
                    </button>
                    {error && <p className="text-red-600 pt-4">{error}</p>}
                    {success && <p>{success}</p>}
                  </div>
                </form>
                <div>
                  <p className="my-5">
                    Do you need an account? Please{" "}
                    <Link to="/login" className="text-red-500">
                      Login
                    </Link>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Registration;
