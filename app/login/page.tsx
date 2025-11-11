
// "use client";





// import React, { useState } from "react";
// import "./style.css";
// import { formerrorType, UserSchema, UserType } from "@/type/UserSchema";

// const page = () => {
//   const [formdata, setformdata] = useState<UserType>({
//     name: "",
//     email: "",
//     location: ""
//   });
//   const [error, seterror] = useState<formerrorType>({});

//   const HandleChange = (
//     e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
//   ) => {
//     const { name, value } = e.target;

//     setformdata({
//       ...formdata,
//       [name]: value,
//     });

//     seterror((prev) => ({
//       ...prev,
//       [name]: undefined,
//     }));
//   };

//   const handlesubmit = (e: React.FormEvent) => {
//     e.preventDefault();

//     const result = UserSchema.safeParse(formdata);
//     if (!result.success) {
//       const fieldErrors = result.error.flatten().fieldErrors;
//       seterror(fieldErrors);
//       return;
//     }

//     console.log(formdata);
//   };
//   return (
//     <div className="login-container">
//       <form onSubmit={handlesubmit}>
//         <h1 className="login-page">Login Page</h1>

//         <div className="inpuut-container">
//           <label>Enter Name:</label>

//           <input
//             type="text"
//             onChange={HandleChange}
//             name="name"
//             value={formdata.name}
//             placeholder="Enter Name"
//           />

//           {error.name && <p className="error-text">{error.name[0]}</p>}
//         </div>

//         <div className="inpuut-container">
//           <label>Enter Email:</label>

//           <input
//             type="email"
//             name="email"
//             onChange={HandleChange}
//             value={formdata.email}
//             placeholder="Enter Name"
//           />

//           {error.email && <p className="error-text">{error.email[0]}</p>}
//         </div>



//         <div className="inpuut-container">
//   <label>Select Location:</label>
//   <select
//     name="location"
//     onChange={HandleChange}
//     value={formdata.location}
//     style={{ border: "2px solid black", padding: "4px" }}
//   >
//     <option value="">-- Select Location --</option>
//     <option value="mumbai">Mumbai</option>
//     <option value="nashik">Nashik</option>
//     <option value="pune">Pune</option>
//   </select>

//   {error.location && <p className="error-text">{error.location[0]}</p>}
// </div>

//         <div className="inpuut-container">
//           {/* <select name="location" onChange={HandleChange} style={{border:"2px solid black",padding:"2px"}}>
//       <option value="mumbai">Mumbai</option>
//       <option value="nashik">Nashik</option>
//       <option value="pune">Pune</option>

//     </select> */}
//         </div>

//         <button className="Submit">Submit</button>
//       </form>
//     </div>
//   );
// };

// export default page;

// import Login from '@/components/Login';
// import { Metadata } from 'next';

// export const metadata={

//   title:"Login Page",
//   description:"This is Login Page" ,
//   keywords:"login, user, authentication"

// }


// const LoginRouter=()=>{
// <Login/>
// return <Login/>


// }

// export default LoginRouter













// -------------------------------Testing Zod with Nextjs----------------------------


// "use client";

// import { useState } from "react";



// const App = () => {
//   const [user, setuser] = useState([
//   {
//     name: "salman",
//   },
//   { name: "amann" },
//   {
//     name: "khna"
//   },
// ])

// const [serach,setsearch]=useState("")


// const filtered=user.filter((item)=>(

//   item.name.toLowerCase().includes(serach.toLowerCase())
// ))

// console.log(filtered)
//   return <>
//   <div style={{width:"200px",display:"flex",padding:"10px 0px", margin:"0 auto" ,flexDirection:"column",ustifyContent:"center"}}>
//     <h1>User Liast</h1>

//   <input style={{border:"2px solid red",padding:"10px"}}
//   placeholder="Serach here"

//   onChange={(e)=>setsearch(e.target.value)}

//   />

//   {


// filtered.length > 0 ? (

//   filtered.map((item,index)=>(

//   <li style={{listStyle:"none",padding:"10px"}}>{item.name}</li>
// ))
// ):
// (

//   <p>Not Found</p>
// )
//   }
//   </div>



//   </>;
// };

// export default App;
// "use client";

// import PaginationComponent from "@/components/Pagination";
// import { useEffect, useState } from "react";

// const App = () => {
//   const [product, setProduct] = useState<any[]>([]);
//   const [loading, setLoading] = useState(false);
//   const [currentPage, setCurrentPage] = useState(1);
//   const [error, setError] = useState<string | null>(null);
//   const [totalProducts, setTotalProducts] = useState(0);
// const [category ,setcategory]=useState("")
//   const [sortorder,setOrder]=useState("default")
//   const PRODUCTS_PER_PAGE = 12;
//   const totalPages = Math.ceil(totalProducts / PRODUCTS_PER_PAGE);

//   useEffect(() => {
//     const fetchData = async () => {
//       let  url = "https://dummyjson.com/products";
//       const params = new URLSearchParams();

//       // ✅ pagination params
//       params.set("limit", String(PRODUCTS_PER_PAGE));
//       params.set("skip", String((currentPage - 1) * PRODUCTS_PER_PAGE));

//       //category 
//         if(category)
//         {
//            url=`https://dummyjson.com/products/category/${category}`
          

//         }
        


// if(sortorder==="asc")
//   {
// params.set("sortBy", "price");
// params.set("order", "asc");

//   }

// else if(sortorder==="dsc")

//   {
//     params.set("sortBy", "price");
// params.set("order", "desc");
//   }
//       try {
//         setLoading(true);
//         // ✅ params add किए

//         const response = await fetch(`${url}?${params.toString()}`);

 
//         if (!response.ok) throw new Error("Failed to fetch products");

//         const data = await response.json();
//                console.log( data,
//           "api"
//         )
//         setProduct(data.products);
//         setTotalProducts(data.total);
//       } catch (error: any) {
//         console.log(error);
//         setError(error.message);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchData();
//   }, [currentPage,sortorder ,category]); // ✅ depend on currentPage


//   const handlechange=(e:any)=>{


//     setOrder(e.target.value)
//     setCurrentPage(1)



//   }
//   const handlePageChange = (page: number) => {


//     if (page > 0 && page <= totalPages) {

//       setCurrentPage(page);
//       debugger;
//     }
//     debugger;
//   };

//   if (loading) return <h1>Loading...</h1>;
//   if (error) return <h1 className="text-red-500">Error: {error}</h1>;

//   return (
//     <>
//     <div className="flex justify-between items-center">

//         <h1 className="text-2xl font-bold mb-4">Product List</h1>

//         <select className="border-1 border-r-2 py-2 px-1"
//         value={sortorder}
//         onChange={handlechange}>
//           <option>--------Select Option--------</option>

//           <option value="dsc">
//             Price:High To Low
//           </option>
//                <option value="asc">
//             Price:Low To High
//           </option>
//         </select>


//    <select onChange={(e) => setcategory(e.target.value)}>
//   <option value="">All Products</option>
//   <option value="smartphones">smartphones</option>
//   <option value="laptops">laptops</option>
// </select>
//     </div>

//    <div className="grid grid-cols-6 lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 gap-4">
//   {product.map((item, index) => (
//     <div
//       key={item.id || index}
//       className="bg-indigo-100 p-2 rounded-lg shadow"
//     >
//       <img
//         src={item.images?.[0] || "/placeholder.jpg"}
//         alt={item.title}
//         className="w-full h-40 object-cover rounded-lg"
//       />
//       <h2 className="font-semibold text-lg mt-2">{item.title}</h2>
//       <div className="flex justify-between items-center">
//         <p>${item.price}</p>
//         <p>Discount: {item.discountPercentage}%</p>
//       </div>
//     </div>
//   ))}
// </div>


//       <div className="mt-6 flex justify-center">
//         <PaginationComponent
//           currentPage={currentPage}
//           totalPages={totalPages}
//           onPageChange={handlePageChange}
//         />
//       </div>
//     </>
//   );
// };

// export default App;

// "use client";
// import React, { useState } from "react";

// interface Country {
//   name: string;
//   cities: string[];
// }

// const CountryCitySelector = () => {
//   // Local array of countries and their cities
//   const countries: Country[] = [
//     { name: "India", cities: ["Mumbai", "Delhi"] },
//     { name: "Pakistan", cities: ["Lahore", "Karachi"] },
//     { name: "USA", cities: ["New York", "Los Angeles"] },
//   ];

//   const [selectedCountry, setSelectedCountry] = useState<string>("");
//   const [selectedCity, setSelectedCity] = useState<string>("");

//   // Find the selected country object
//   const selectedCountryData = countries.find(
//     (country) => country.name === selectedCountry
//   );

//   return (
//     <div className="p-5 max-w-sm mx-auto bg-gray-100 rounded-xl shadow-md">
//       <h2 className="text-xl font-semibold mb-4">Country → City Selector</h2>

//       {/* Country Dropdown */}
//       <label className="block mb-2 font-medium">Select Country</label>
//       <select
//         value={selectedCountry}
//         onChange={(e) => {
//           setSelectedCountry(e.target.value);
//           setSelectedCity("");
//         }}
//         className="w-full p-2 border rounded mb-4"
//       >
//         <option value="">-- Choose Country --</option>
//         {countries.map((country) => (
//           <option key={country.name} value={country.name}>
//             {country.name}
//           </option>
//         ))}
//       </select>

//       {/* City Dropdown */}
//       {selectedCountry && (
//         <>
//           <label className="block mb-2 font-medium">Select City</label>
//           <select
//             value={selectedCity}
//             onChange={(e) => setSelectedCity(e.target.value)}
//             className="w-full p-2 border rounded"
//           >
//             <option value="">-- Choose City --</option>
//             {selectedCountryData?.cities.map((city) => (
//               <option key={city} value={city}>
//                 {city}
//               </option>
//             ))}
//           </select>
//         </>
//       )}

//       {/* Selected values display */}
//       {selectedCountry && selectedCity && (
//         <p className="mt-4 text-gray-700">
//           You selected: <b>{selectedCity}</b>, <b>{selectedCountry}</b>
//         </p>
//       )}
//     </div>
//   );
// };

// export default CountryCitySelector;


// "use client";

// import { useState } from "react"

// const App=()=>{


//     const data=[
//     {name:"india",citis:["Up","Bihar"]},
//         {name:"pakistan",citis:["punjab","karachi"]},

//   ]

// const [seletedCountry,setSeletedCountry]=useState("");
// const [seletedCity,setSeletedCity]=useState("");



// const countrydata=data.find(

//   (item)=>item.name===seletedCountry
// )

//   return (


// <div>
//       <select
//       className="border-2"
// value={seletedCountry}
//       onChange={(e)=>{
  
//         setSeletedCountry(e.target.value),
//  console.log(seletedCountry)
//         setSeletedCity("")
//       }}



//     >


//       <option>--Choose Country---</option>

//       {
// data.map((item,index)=>(

//   <option value={item.name}>{item.name}</option>
// ))
//       }
//     </select>
// {
//   seletedCountry && (


    
//     <select
//     value={seletedCity}
//     onChange={(e)=>{
//       setSeletedCity(e.target.value)
//     }}
    
//     >


// <option>---Selected City---------</option>

// {
//   countrydata ?.citis.map((item)=>(

//     <option value={item}> {item}</option>
//   ))
// }

//     </select>
//   )
// }


// {
//   seletedCountry && seletedCity &&
//   (
//  <p> Seleted Country:{seletedCountry} and City:
//  {seletedCity}</p>
//   )
 
// }
// </div>

// // selected city





//   )
// }

// export default App

// "use client"

// import {useEffect,useState, useRef } from "react";


// const App=()=> {
//  const [count, setCount] = useState(0);
//   const prevCount = useRef();

//   useEffect(() => {
//     prevCount.current = count; // हर render पर latest value save
//   }, [count]);

//   return (
//     <div>
//       <h2>Current: {count}</h2>
//       <h3>Previous: {prevCount.current}</h3>
//       <button onClick={() => setCount(count + 1)}>Increase</button>
//     </div>
//   )
// }

// export default App"use client";"use client";

// "use client";

// import useToggle from "@/components/UseToggle";

// const Page = () => {
//   const [state, toggle] = useToggle(true);

//   return (
//     <div className="p-4">
//       <h1>Hello Toggle</h1>
//       <p>Current state: {state ? "ON" : "OFF"}</p>
//       <button
//         onClick={toggle}
//         className="mt-2 bg-blue-500 text-white px-4 py-2 rounded"
//       >
//         Toggle
//       </button>
//     </div>
//   );
// };

// export default Page;

// "use client";

// import { useAppContext } from "@/components/AppContext";


// const Page = () => {
//   const { darkMode, toggleDarkMode,alerFunc } = useAppContext();

//   return (
//     <div
//       style={{
//         background: darkMode ? "#222" : "#fff",
//         color: darkMode ? "#fff" : "#000",
//         height: "100vh",
//         display: "flex",
//         flexDirection: "column",
//         alignItems: "center",
//         justifyContent: "center",
//       }}
//     >
//       <h1>{darkMode ? "Dark Mode 🌙" : "Light Mode ☀️"}</h1>
//       <button onClick={toggleDarkMode}>Toggle Theme</button> 
//       <button onClick={alerFunc}>Click</button>
//     </div>
//   );
// };

// export default Page;


import React, { Suspense, lazy } from "react";

// Lazy load the component
const About = lazy(() => import("@/app/about/page"));

const App = () => {
  return (
    <div>
      <h1>Lazy Loading Example</h1>

      {/* Suspense will show fallback until About loads */}
      <Suspense fallback={<h3>Loading About Page...</h3>}>
        <About />
      </Suspense>
    </div>
  );
};

export default App;
