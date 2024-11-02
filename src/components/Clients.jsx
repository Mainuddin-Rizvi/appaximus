// // components/Clients.jsx
// import React from "react";

// const clients = [
//   { id: 1, name: "Client 1", logo: "https://dummyimage.com/100x50/000/fff" },
//   { id: 2, name: "Client 2", logo: "https://dummyimage.com/100x50/000/fff" },
//   // Add more clients as needed
// ];

// function Clients() {
//   return (
//     <div className="clients-section p-4">
//       <h1 className="text-2xl mb-4">Our Clients</h1>
//       <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
//         {clients.map((client) => (
//           <div
//             key={client.id}
//             className="client bg-white shadow-lg rounded-lg p-4 flex items-center"
//           >
//             <img
//               src={client.logo}
//               alt={client.name}
//               className="w-16 h-16 object-contain"
//             />
//             <h2 className="text-xl ml-4">{client.name}</h2>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default Clients;

import React from "react";
import Card from "./Card";

const Clients = () => {
  const clients = [
    {
      heading: "India",
      images: [
        "image1.jpg",
        "image2.jpg",
        "image3.jpg",
        "image4.jpg",
        "image5.jpg",
        "image6.jpg",
      ],
    },
    {
      heading: "International",
      images: [
        "image7.jpg",
        "image8.jpg",
        "image9.jpg",
        "image10.jpg",
        "image11.jpg",
        "image12.jpg",
      ],
    },
    // Add more clients as needed
  ];

  return (
    <section className="p-8">
      <h2 className="text-2xl font-bold text-center mb-8">Our Clients</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {clients.map((client, index) => (
          <Card key={index} heading={client.heading} images={client.images} />
        ))}
      </div>
    </section>
  );
};

export default Clients;
