import React from "react";
import { teamData } from "@/constants/index";
import type { TeamMember } from "@/types/teamMember"; // Import the interface from the types file

const TeamMember: React.FC = () => {
  return (
    <div className="flex flex-wrap justify-center gap-6">
      {/* Loop through team members */}
      {teamData.map((member: TeamMember, index: number) => (
        <div
          key={index}
          className="max-w-lg w-full  p-8 rounded-lg shadow-lg flex flex-col items-center text-center" // Increased padding and card width
        >
          {/* Profile Image */}
          <img
            src={member.image}
            alt={member.name}
            className="w-60 h-50 rounded-full mb-4" // Increased image size and removed border
          />

          {/* Name */}
          <h3 className="text-2xl font-bold text-gray-900 mb-1">
            {member.name}
          </h3>

          {/* Designation */}
          <p className="text-lg text-green-500 font-medium mb-2">
            {member.designation}
          </p>

          {/* Description */}
          <p className="text-[18px] text-gray-600">{member.description}</p>
        </div>
      ))}
    </div>
  );
};

export default TeamMember;
