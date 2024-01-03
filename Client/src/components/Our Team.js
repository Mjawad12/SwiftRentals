import React, { useState } from "react";
import Top from "./Top";
import Save from "./Save";
import Faq from "./Faq";
import Footer from "./Footer";
import Team from "./staff.json";
import TeamMember from "./TeamMember";
export default function OurTeam() {
  const [staff] = useState(Team.team);
  return (
    <>
      <Top page="Our Team"></Top>
      <div className="Container">
        <div className="OurTeam | even-columns opposite-columns padding-block-900">
          <div className="OurTeamtext | even-columns">
            <h3 className="primary-heading text-primary-color">Our Team</h3>
            <p>
              At Swift Rentals, our success is a reflection of the dedicated and
              talented individuals who make up our team. Each member brings
              their unique skills, expertise, and passion to our shared mission.
              Get to know the faces behind our company:
            </p>
          </div>
          <div className="Team | even-columns">
            {staff &&
              staff.map((team, key) => {
                return (
                  <TeamMember
                    key={key}
                    role={team.role}
                    no={key}
                    name={team.name}
                  ></TeamMember>
                );
              })}
          </div>
        </div>
      </div>
      <Save></Save>
      <div className="position-relative overflow-hidden">
        <div className="Container overflow-hidden">
          <Faq></Faq>
        </div>
      </div>
      <div className="Container-footer">
        <Footer></Footer>
      </div>
    </>
  );
}
