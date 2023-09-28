import React, { useState, useEffect } from "react";

const Booking = () => {
  const [sessions, setSessions] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/sessions", {
      method: "GET",
    })
      .then((response) => response.json())
      .then((data) => {
        setSessions(data);
        console.log(data);
      })
      .catch((error) => console.log(error));
  }, [sessions]);

  return (
    <div>
      <div className="para1">
        <p>
          UK’s 1st City Farm, founded in 1972, is a charity based in the London
          Borough of Camden offering lifelong learning, outdoor therapy,
          education to children, adults with special needs and anyone needing
          respite from the strains of urban life.
        </p>
      </div>

      <div>
        <h3>Select your booking slot below</h3>
        <p className="para2">select slot:</p>
      </div>
      <div>
        <ul className="list">
          {sessions.map((session) => (
            <li className="session mb-4" key={session.id}>
              {session.date}
              {session.slot_type}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Booking;
