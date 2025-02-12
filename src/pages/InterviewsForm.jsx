import React from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import supabase from "../utils/supabase"; // Ensure this exists or adjust the path

function Interviews_form() {
  const { register, handleSubmit, formState: { errors }, reset } = useForm();

  const onSubmit = async (data) => {
    console.log("Submitting data:", data);
    try {
      const response = await supabase.from("interviews").insert([data]);
      console.log("Response from Supabase:", response); // Log full response
  
      if (response.error) {
        console.error("Error inserting data:", response.error);
        toast.error(`Submission failed: ${response.error.message}`);
      } else {
        console.log("Data inserted successfully:", response);
        toast.success("Form submitted successfully! 🎉");
        reset();
      }
    } catch (err) {
      console.error("Unexpected error:", err);
      toast.error("Unexpected error 😢");
    }
  };
  

  return (
    <>
       <header style={{ backgroundColor: "#8b0000", padding: "20px", color: "#fff", textAlign: "center" }}>
                    
            <img 
              src="/ayb_logo.jpeg"  // Replace this URL with the actual path to your logo image
              alt="AYB Logo" 
              style={{ height: "80px" }}  // Adjust the height or other styles as needed
           />
       </header>

      <div className="form-container">
        <h1>AYB Interview Form</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div>
            <label>Name:</label>
            <input type="text" {...register("name", { required: "Name is required" })} />
            {errors.name && <p>{errors.name.message}</p>}
          </div>
          <div>
            <label>Email:</label>
            <input
              type="email"
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: "Invalid email address",
                },
              })}
            />
            {errors.email && <p>{errors.email.message}</p>}
          </div>
          <div>
            <label>Phone Number:</label>
            <input
              type="text"
              {...register("phone_number", {
                required: "Phone number is required",
                pattern: {
                  value: /^[0-9]{11}$/,
                  message: "Phone number must be 11 digits",
                },
              })}
            />
            {errors.phone_number && <p>{errors.phone_number.message}</p>}
          </div>
          <div>
            <label>Major:</label>
            <input type="text" {...register("major", { required: "Major is required" })} />
            {errors.major && <p>{errors.major.message}</p>}
          </div>
          <div>
            <label>Team:</label>
            <input type="text" {...register("team", { required: "Team is required" })} />
            {errors.team && <p>{errors.team.message}</p>}
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    </>
  );
}

export default Interviews_form;
