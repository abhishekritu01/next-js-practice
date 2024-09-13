'use client'
import React, { useState } from "react";

const Form = () => {
    const [data, setData] = useState({
        name: "",
        email: "",
        file:""
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(data);
    };

    const handleClear =() =>{
        setData({
            name:"",
            email:"",
            file:""
        })
    }

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        setData({ ...data, file: file });
    };


    return (
        <div className="flex flex-col gap-2">
            <input type="text" value={data.name} onChange={(e) => setData({ ...data, name: e.target.value })} />
            <input type="text" value={data.email} onChange={(e) => setData({ ...data, email: e.target.value })} />
            <input type="file"  onChange={handleFileChange} />
            <button className="bg-zinc-950 text-white" onClick={handleSubmit} > submit</button>
            <button  className="bg-zinc-950 text-white" onClick={handleClear} > clear</button>

        </div>
    )
};

export default Form;






// 'use client';

// import React from 'react';

// const Form = () => {
//     const handleSubmit = (e) => {
//         e.preventDefault();

//         const formData = new FormData(e.target);
//         const obj = Object.fromEntries(formData.entries());
//         console.log(obj);
//     };

//     return (
//         <>
//             <form className='flex flex-col gap-2' onSubmit={handleSubmit}>
//                 <input
//                     type="text"
//                     placeholder="Name"
//                     name="name"
//                 />
//                 <input
//                     type="email"
//                     placeholder="Email"
//                     name="email"
//                 />
//                 <input
//                     type="file"
//                     name="file"
//                 />
//                 <button
//                     type="submit"
//                     className='bg-zinc-950 text-white p-2'
//                 >
//                     Submit
//                 </button>
//             </form>
//         </>
//     );
// };

// export default Form;
