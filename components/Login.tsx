// "use client";
// import React, { useState } from "react";

// import "./style.css";
// import App from "@/components/ui";

// const Login = () => {
//   const [user, setUser] = useState([{ name: "salman" }]);

//   const [formdata, setformdata] = useState({
//     name: "",
//   });

//   const [editIndex, setEditIndex] = useState(null);

//   const [error,seterror]=useState("")
//   const handlesubmit = (e: React.FormEvent<HTMLFormElement>) => {
//     e.preventDefault();


//     if (formdata.name.trim()==""){
//         seterror("Name is required")
//         return;

//     }
//     if(editIndex !==null){

//         const updateUser=[...user]
//         updateUser[editIndex]=formdata;
//         setUser(updateUser)
//         setEditIndex(null)


//     }
//     else{

//     setUser([...user, formdata]);
//     }


//   };

//   const handlechange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const { name, value } = e.target;
//     setformdata({
//       ...formdata,
//       [name]: value,
//     });
//   };


//   const handleDelte=(index:any)=>{
//     setUser(user.filter((item, i) => i !== index));





//   }

//   const handleEdit=(index:any)=>{

//     setEditIndex(index)
//     setformdata((user[index]))


//   }
//   return (
//     <div>
//       <div className="Login-conatainer">
//         <form onSubmit={handlesubmit}>
//           <h1 className="login-heading">Login Here</h1>

//           <div className="input-container">
//             <label>Enter Name:</label>
//             <input
//               placeholder="Enter the Name"
//               name="name"
//               onChange={handlechange}
//               value={formdata.name}
//             />

//             {
//                 error && <p style={{color:"red"}}>{error}</p>
//             }
//           </div>

//           <button className="submit">+</button>
//         </form>
//         <App  user={user} handleDelete={handleDelte} handleEdit={handleEdit} />
        
     

    
//       </div>
//     </div>
//   );
// };

// export default Login;


// "use client";
// import React from "react";
// import { useFormik } from "formik";
// import * as Yup from "yup";

// const LoginForm = () => {
//   // ✅ Step 1: Define Formik
//   const formik =useFormik({

//     initialValues:{


//       email:"",
//             password:""
//     },

//     validationSchema:Yup.object({

//       email:Yup.string()
//       .email("Email is validation")
//           .required("required"),
//       password:Yup.string()
//       .min(6,"min 5 limit")
//       .required("required")
//     })


//     ,

//     onSubmit:(values)=>{  


//       console.log(values)
//     }
//   })

//   return (
//     <div className="flex items-center justify-center min-h-screen bg-gray-100">
//       <form
//         onSubmit={formik.handleSubmit}
//         className="bg-white shadow-lg p-6 rounded-lg w-96"
//       >
//         <h2 className="text-2xl font-bold mb-4 text-center">Login</h2>

//         {/* Email Field */}
//         <div className="mb-4">
//           <label className="block font-semibold mb-1">Email</label>
//           <input
//             type="email"
//             name="email"
//             className="border rounded-md p-2 w-full"
//             value={formik.values.email}
//             onChange={formik.handleChange}
 
//           />
//           {formik.touched.email && formik.errors.email ? (
//             <p className="text-red-500 text-sm mt-1">{formik.errors.email}</p>
//           ) : null}
//         </div>

//         {/* Password Field */}
//         <div className="mb-4">
//           <label className="block font-semibold mb-1">Password</label>
//           <input
//             type="password"
//             name="password"
//             className="border rounded-md p-2 w-full"
//             value={formik.values.password}
//             onChange={formik.handleChange}

//           />
//           {formik.touched.password && formik.errors.password ? (
//             <p className="text-red-500 text-sm mt-1">
//               {formik.errors.password}
//             </p>
//           ) : null}
//         </div>

//         {/* Submit Button */}
//         <button
//           type="submit"
//           className="bg-blue-600 text-white w-full py-2 rounded-md hover:bg-blue-700"
//         >
//           Login
//         </button>
//       </form>
//     </div>
//   );
// };

// export default LoginForm;
