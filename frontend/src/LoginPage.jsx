import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

function LoginPage() {
  // React form hook 
  const { register, handleSubmit, formState: { errors } } = useForm();
  const navigate = useNavigate(); // Hook for navigation

  const onSubmit = async (data) => {
    try {
      const response = await fetch("http://127.0.0.1:5000/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await response.text();
      if (response.ok) {
        alert(result); // Optional: show a success message
        navigate("/Home"); // Navigate to the Home route
      } else {
        alert("Login failed. Please check your credentials.");
      }
    } catch (error) {
      console.error("Error during login:", error);
      alert("An error occurred. Please try again.");
    }
  };

  return (
    <div className="bg-white text-black rounded-lg p-8 shadow-lg w-96">
      <h1 className="text-2xl font-bold text-center mb-6">Login</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-4">
          <label className="block mb-2 font-semibold">Email</label>
          <input
            {...register("email", { required: "Email is required" })}
            type="email"
            className="w-full p-2 border rounded-lg"
          />
          {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
        </div>
        <div className="mb-4">
          <label className="block mb-2 font-semibold">Password</label>
          <input
            {...register("password", { required: "Password is required" })}
            type="password"
            className="w-full p-2 border rounded-lg"
          />
          {errors.password && (
            <p className="text-red-500 text-sm">{errors.password.message}</p>
          )}
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 rounded-lg"
        >
          Login
        </button>
      </form>
    </div>
  );
}

export default LoginPage;
