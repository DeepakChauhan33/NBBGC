// import React from 'react'

// const Account = () => {
//     return (
//         <>
//             <main className='p-4 overflow-y-auto z-50 '>
//                 <div className='border-2'>
//                     <h4 className='w-full'>
//                         Hello, Deepak !
//                     </h4>

//                     <p className='border-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum, inventore.</p>
//                 </div>


//                 <ul>
//                     <li>
//                         <span>PERSONAL DETAILS</span>

//                         <p>
//                             Please complete your registration process by filling your Personal, Biometric, Address and Social Details.
//                         </p>

//                         <table className="table">
//                             <thead>
//                                 <tr>
//                                     <th scope="col">#</th>
//                                     <th scope="col">First</th>
//                                     <th scope="col">Last</th>
//                                     <th scope="col">Handle</th>
//                                 </tr>
//                             </thead>
//                             <tbody>
//                                 <tr>
//                                     <th scope="row">1</th>
//                                     <td>Mark</td>
//                                     <td>Otto</td>
//                                     <td>@mdo</td>
//                                 </tr>
//                                 <tr>
//                                     <th scope="row">2</th>
//                                     <td>Jacob</td>
//                                     <td>Thornton</td>
//                                     <td>@fat</td>
//                                 </tr>
//                                 <tr>
//                                     <th scope="row">3</th>
//                                     <td>John</td>
//                                     <td>Doe</td>
//                                     <td>@social</td>
//                                 </tr>
//                             </tbody>
//                         </table>

//                     </li>
//                     <li></li>
//                 </ul>


//                 <ul className='border-2'>
//                     <h5>Course Details</h5>
//                     <li className='border-2'>
//                         Lorem ipsum dolor sit amet consectetur, adipisicing elit. Esse, illo numquam? At corrupti, quasi eos tenetur pariatur mollitia velit dicta excepturi, officia in itaque repellendus?
//                     </li>
//                     <li>
//                         <div className="bd-example"><div className="table-responsive">
//                             <table className="table">
//                                 <thead>
//                                     <tr>
//                                         <th scope="col">#</th><th scope="col">Heading</th>
//                                         <th scope="col">Heading</th>
//                                         <th scope="col">Heading</th>
//                                         <th scope="col">Heading</th><th scope="col">Heading</th><th scope="col">Heading</th><th scope="col">Heading</th>
                                       
//                                     </tr>
//                                 </thead>
//                                 <tbody>
//                                     <tr>
//                                         <th scope="row">1</th>
//                                         <td>Cell</td>
//                                         <td>Cell</td>
//                                         <td>Cell</td>
//                                         <td>Cell</td>
//                                         <td>Cell</td>
//                                         <td>Cell</td>
//                                         <td>Cell</td>
    
//                                     </tr>
//                                     <tr>
//                                         <th scope="row">2</th>

//                                         <td>Cell</td>

//                                         <td>Cell</td>
//                                         <td>Cell</td>
//                                         <td>Cell</td>
//                                         <td>Cell</td>
//                                         <td>Cell</td>
//                                         <td>Cell</td>
                                        
//                                     </tr><tr><th scope="row">3</th>
//                                         <td>Cell</td>
//                                         <td>Cell</td>

//                                         <td>Cell</td>
//                                         <td>Cell</td>
//                                         <td>Cell</td>
//                                         <td>Cell</td>
//                                         <td>Cell</td>
                                        
//                                     </tr>
//                                 </tbody>
//                             </table>
//                         </div>
//                         </div>
//                     </li>
//                 </ul>

//                 <div className='h-auto border-2'>
//                     Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde vel dolorum odit culpa in, quas suscipit, placeat fugiat deleniti doloremque expedita nihil quibusdam harum, molestias totam pariatur voluptas sapiente ullam debitis maxime perferendis libero ducimus enim? Veritatis nesciunt consequatur esse omnis quidem enim iure, in dolorem sunt ullam dolore soluta!
//                 </div>
//             </main>
//         </>
//     )
// }

// export default Account



import React from "react";

const Account = () => {
  return (
    <div className="space-y-6">
      <div className="border p-4 rounded-md shadow-sm">
        <h4 className="text-lg font-semibold">Hello, Deepak !</h4>
        <p className="text-sm text-gray-600 mt-2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum,
          inventore.
        </p>
      </div>

      {/* Personal Details */}
      <div className="border p-4 rounded-md shadow-sm">
        <h5 className="font-semibold">Personal Details</h5>
        <p className="text-sm text-gray-600 mb-3">
          Please complete your registration process by filling your Personal,
          Biometric, Address and Social Details.
        </p>

        <div className="overflow-x-auto">
          <table className="table-auto border-collapse border w-full text-sm">
            <thead>
              <tr className="bg-gray-100">
                <th className="border px-3 py-2">#</th>
                <th className="border px-3 py-2">First</th>
                <th className="border px-3 py-2">Last</th>
                <th className="border px-3 py-2">Handle</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border px-3 py-2">1</td>
                <td className="border px-3 py-2">Mark</td>
                <td className="border px-3 py-2">Otto</td>
                <td className="border px-3 py-2">@mdo</td>
              </tr>
              <tr>
                <td className="border px-3 py-2">2</td>
                <td className="border px-3 py-2">Jacob</td>
                <td className="border px-3 py-2">Thornton</td>
                <td className="border px-3 py-2">@fat</td>
              </tr>
              <tr>
                <td className="border px-3 py-2">3</td>
                <td className="border px-3 py-2">John</td>
                <td className="border px-3 py-2">Doe</td>
                <td className="border px-3 py-2">@social</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Course Details */}
      <div className="border p-4 rounded-md shadow-sm">
        <h5 className="font-semibold">Course Details</h5>
        <p className="text-sm text-gray-600 mb-3">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Esse, illo
          numquam? At corrupti, quasi eos tenetur pariatur mollitia velit dicta
          excepturi.
        </p>

        <div className="overflow-x-auto">
          <table className="table-auto border-collapse border w-full text-sm">
            <thead>
              <tr className="bg-gray-100">
                <th className="border px-3 py-2">#</th>
                {[...Array(7)].map((_, i) => (
                  <th key={i} className="border px-3 py-2">
                    Heading
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {[1, 2, 3].map((row) => (
                <tr key={row}>
                  <td className="border px-3 py-2">{row}</td>
                  {[...Array(7)].map((_, i) => (
                    <td key={i} className="border px-3 py-2">
                      Cell
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Extra Info */}
      <div className="border p-4 rounded-md shadow-sm">
        <p className="text-sm text-gray-600">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde vel
          dolorum odit culpa in, quas suscipit, placeat fugiat deleniti dolorem
          expedita nihil quibusdam harum.
        </p>
      </div>
    </div>
  );
};

export default Account;
