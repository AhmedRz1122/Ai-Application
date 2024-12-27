import React from "react";
import { useForm } from "react-hook-form";

function RegisterPage() {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = async (data) => {
    try {
      const response = await fetch("http://127.0.0.1:5000/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error("Failed to register");
      }

      const result = await response.text(); // Assuming API returns a plain text response
      alert(result); // Display the response
    } catch (error) {
      console.error("Error during registration:", error);
      alert("Registration failed. Please try again.");
    }
  };

  return (
    <div className="bg-white text-black rounded-lg p-8 shadow-lg w-96">
      <h1 className="text-2xl font-bold text-center mb-6">Register</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-4">
          <label className="block mb-2 font-semibold">Username</label>
          <input
            {...register("username", { required: "" })}
            type="text"
            name="username"
            className="w-full p-2 border rounded-lg"
          />
          {errors.username && <p className="text-red-500 text-sm">{errors.username.message}</p>}
        </div>Username is required
        <div className="mb-4">
          <label className="block mb-2 font-semibold">Email</label>
          <input
            {...register("email", { required: "Email is required" })}
            type="email"
            name="email"
            className="w-full p-2 border rounded-lg"
          />
          {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
        </div>
        <div className="mb-4">
          <label className="block mb-2 font-semibold">Password</label>
          <input
            {...register("password", { required: "Password is required" })}
            type="password"
            name="password"
            className="w-full p-2 border rounded-lg"
          />
          {errors.password && <p className="text-red-500 text-sm">{errors.password.message}</p>}
        </div>
        <div className="mb-4">
          <label className="block mb-2 font-semibold">Gender</label>
          <select
            {...register("gender", { required: "Gender is required" })}
            className="w-full p-2 border rounded-lg"
          >
            <option value="" name="">Select Gender</option>
            <option value="male" name="male">Male</option>
            <option value="female" name="female">Female</option>
          </select>
          {errors.gender && <p className="text-red-500 text-sm">{errors.gender.message}</p>}
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 rounded-lg"
        >
          Register
        </button>
      </form>
    </div>
  );
}

export default RegisterPage;
