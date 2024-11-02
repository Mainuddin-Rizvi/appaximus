// pages/Teams.js
import React from "react";

const teams = [
  {
    id: 1,
    name: "Team Member 1",
    position: "Developer",
    image: "https://dummyimage.com/150x150/000/fff",
  },
  {
    id: 2,
    name: "Team Member 2",
    position: "Designer",
    image: "https://dummyimage.com/150x150/000/fff",
  },
  // Add more team members as needed
];

function Teams() {
  return (
    <div className="teams-page p-4">
      <h1 className="text-2xl mb-4">Our Team</h1>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {teams.map((member) => (
          <div
            key={member.id}
            className="team-member bg-white shadow-lg rounded-lg p-4 text-center"
          >
            <img
              src={member.image}
              alt={member.name}
              className="w-32 h-32 mx-auto rounded-full object-cover"
            />
            <h2 className="text-xl mt-4">{member.name}</h2>
            <p>{member.position}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Teams;
