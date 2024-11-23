import React from "react";
import TeamMember from "./TeamMember";

const TeamMembers = () => {
  return (
    <section className="py-12 bg-gray-50" id="members">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12">Meet Our Team</h2>
        <TeamMember />
      </div>
    </section>
  );
};

export default TeamMembers;
