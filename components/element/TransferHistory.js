// import React from "react";
// import Link from "next/link"; // Ensure you have `next/link` installed for routing
// import '../../public/css/style.css'; // Adjust path if necessary
// import '@fortawesome/fontawesome-free/css/all.min.css';



// const TransferHistory = () => {
//   return (
//     <div className="wg-box">
//       <h5>Transfer History</h5>
//       <div className="wg-table table-all-attribute">
//         <ul className="table-title flex gap20 mb-14">
//           <li>
//             <div className="body-title">Transfer Id</div>
//           </li>
//           <li>
//             <div className="body-title">Name</div>
//           </li>
//           <li>
//             <div className="body-title">Date</div>
//           </li>
//           <li>
//             <div className="body-title">Total</div>
//           </li>
//           <li>
//             <div className="body-title">Action</div>
//           </li>
//         </ul>
//         <ul className="flex flex-column">
//           <li className="attribute-item flex items-center justify-between gap20">
//             <div className="body-text">11081197</div>
//             <div className="body-text">Kathryn Murphy</div>
//             <div className="body-text">Mar 20, 2023</div>
//             <div className="body-text">$2,700</div>
//             <div className="list-icon-function">
//               <div className="item eye">
//                 <i className="icon-eye" />
//               </div>
//               <div className="item edit">
//                 <i className="icon-edit-3" />
//               </div>
//               <div className="item trash">
//                 <i className="icon-trash-2" />
//               </div>
//             </div>
//           </li>
//           <li className="attribute-item flex items-center justify-between gap20">
//             <div className="body-text">38766940</div>
//             <div className="body-text">Floyd Miles</div>
//             <div className="body-text">Mar 20, 2023</div>
//             <div className="body-text">$2,700</div>
//             <div className="list-icon-function">
//               <div className="item eye">
//                 <i className="icon-eye" />
//               </div>
//               <div className="item edit">
//                 <i className="icon-edit-3" />
//               </div>
//               <div className="item trash">
//                 <i className="icon-trash-2" />
//               </div>
//             </div>
//           </li>
//           <li className="attribute-item flex items-center justify-between gap20">
//             <div className="body-text">43397744</div>
//             <div className="body-text">Brooklyn Simmons</div>
//             <div className="body-text">Mar 20, 2023</div>
//             <div className="body-text">$2,700</div>
//             <div className="list-icon-function">
//               <div className="item eye">
//                 <i className="icon-eye" />
//               </div>
//               <div className="item edit">
//                 <i className="icon-edit-3" />
//               </div>
//               <div className="item trash">
//                 <i className="icon-trash-2" />
//               </div>
//             </div>
//           </li>
//           <li className="attribute-item flex items-center justify-between gap20">
//             <div className="body-text">66277431</div>
//             <div className="body-text">Wade Warren</div>
//             <div className="body-text">Mar 20, 2023</div>
//             <div className="body-text">$2,700</div>
//             <div className="list-icon-function">
//               <div className="item eye">
//                 <i className="icon-eye" />
//               </div>
//               <div className="item edit">
//                 <i className="icon-edit-3" />
//               </div>
//               <div className="item trash">
//                 <i className="icon-trash-2" />
//               </div>
//             </div>
//           </li>
//           <li className="attribute-item flex items-center justify-between gap20">
//             <div className="body-text">58276066</div>
//             <div className="body-text">Devon Lane</div>
//             <div className="body-text">Mar 20, 2023</div>
//             <div className="body-text">$2,700</div>
//             <div className="list-icon-function">
//               <div className="item eye">
//                 <i className="icon-eye" />
//               </div>
//               <div className="item edit">
//                 <i className="icon-edit-3" />
//               </div>
//               <div className="item trash">
//                 <i className="icon-trash-2" />
//               </div>
//             </div>
//           </li>
//           <li className="attribute-item flex items-center justify-between gap20">
//             <div className="body-text">93242854</div>
//             <div className="body-text">Jenny Wilson</div>
//             <div className="body-text">Mar 20, 2023</div>
//             <div className="body-text">$2,700</div>
//             <div className="list-icon-function">
//               <div className="item eye">
//                 <i className="icon-eye" />
//               </div>
//               <div className="item edit">
//                 <i className="icon-edit-3" />
//               </div>
//               <div className="item trash">
//                 <i className="icon-trash-2" />
//               </div>
//             </div>
//           </li>
//           <li className="attribute-item flex items-center justify-between gap20">
//             <div className="body-text">11081197</div>
//             <div className="body-text">Jane Cooper</div>
//             <div className="body-text">Mar 20, 2023</div>
//             <div className="body-text">$2,700</div>
//             <div className="list-icon-function">
//               <div className="item eye">
//                 <i className="icon-eye" />
//               </div>
//               <div className="item edit">
//                 <i className="icon-edit-3" />
//               </div>
//               <div className="item trash">
//                 <i className="icon-trash-2" />
//               </div>
//             </div>
//           </li>
//           <li className="attribute-item flex items-center justify-between gap20">
//             <div className="body-text">55700223</div>
//             <div className="body-text">Albert Flores</div>
//             <div className="body-text">Mar 20, 2023</div>
//             <div className="body-text">$2,700</div>
//             <div className="list-icon-function">
//               <div className="item eye">
//                 <i className="icon-eye" />
//               </div>
//               <div className="item edit">
//                 <i className="icon-edit-3" />
//               </div>
//               <div className="item trash">
//                 <i className="icon-trash-2" />
//               </div>
//             </div>
//           </li>
//           <li className="attribute-item flex items-center justify-between gap20">
//             <div className="body-text">34034474</div>
//             <div className="body-text">Robert Fox</div>
//             <div className="body-text">Mar 20, 2023</div>
//             <div className="body-text">$2,700</div>
//             <div className="list-icon-function">
//               <div className="item eye">
//                 <i className="icon-eye" />
//               </div>
//               <div className="item edit">
//                 <i className="icon-edit-3" />
//               </div>
//               <div className="item trash">
//                 <i className="icon-trash-2" />
//               </div>
//             </div>
//           </li>
//           <li className="attribute-item flex items-center justify-between gap20">
//             <div className="body-text">34034474</div>
//             <div className="body-text">Theresa Webb</div>
//             <div className="body-text">Mar 20, 2023</div>
//             <div className="body-text">$2,700</div>
//             <div className="list-icon-function">
//               <div className="item eye">
//                 <i className="icon-eye" />
//               </div>
//               <div className="item edit">
//                 <i className="icon-edit-3" />
//               </div>
//               <div className="item trash">
//                 <i className="icon-trash-2" />
//               </div>
//             </div>
//           </li>
//         </ul>
//       </div>
//       <div className="divider" />
//       <div className="flex items-center justify-between flex-wrap gap10">
//         <div className="text-tiny">Showing 10 to 16 in 30 records</div>
//         <ul className="wg-pagination">
//           <li>
//             <Link href="#">
//               <i className="icon-chevron-left" />
//             </Link>
//           </li>
//           <li>
//             <Link href="#">1</Link>
//           </li>
//           <li className="active">
//             <Link href="#">2</Link>
//           </li>
//           <li>
//             <Link href="#">3</Link>
//           </li>
//           <li>
//             <Link href="#">
//               <i className="icon-chevron-right" />
//             </Link>
//           </li>
//         </ul>
//       </div>
//     </div>
//   );
// };

// export default TransferHistory;
