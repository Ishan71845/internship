
// interface Lead {
//   _id: string;
//   name: string;
//   email: string;
//   phone: string;
//   course: string;
//   createdAt: string;
// }

// interface Props {
//   leads: Lead[];
// }

// export default function LeadTable({ leads }: Props) {
//   return (
//     <div className="bg-white shadow rounded-lg overflow-x-auto">
//       <table className="min-w-full text-sm">
//         <thead className="bg-black text-white">
//           <tr>
//             <th className="px-4 py-2 text-left">Name</th>
//             <th className="px-4 py-2 text-left">Phone Number</th>
//             <th className="px-4 py-2 text-left">Email</th>
//             <th className="px-4 py-2 text-left">Course</th>
//             <th className="px-4 py-2 text-left">Submitted At</th>
//             <th className="px-4 py-2 text-left">Status</th>
//           </tr>
//         </thead>
//         <tbody>
//           {leads.map((lead) => (
//             <tr key={lead._id} className="border-b">
//               <td className="px-4 py-2">{lead.name}</td>
//               <td className="px-4 py-2">{lead.phone}</td>
//               <td className="px-4 py-2">{lead.email}</td>
//               <td className="px-4 py-2">{lead.course}</td>
//               <td className="px-4 py-2">{new Date(lead.createdAt).toLocaleString()}</td>
//               <td className="px-4 py-2 text-red-600 font-medium cursor-pointer hover:underline">Delete</td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// }