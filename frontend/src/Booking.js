import React, { useState, useEffect } from "react";

function Booking() {
  const [sessions, setSessions] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/sessions", {
      method: "GET",
    })
      .then((response) => response.json())
      .then((data) => {
        setSessions(data.sessions);
        console.log(data.sessions);
      })
      .catch((error) => console.log(error));
  }, []);

  console.log("this is sessions......>", sessions);
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
      </div>
      <div>
        <ul>
          {sessions.map((session, index) => {
            return (
              <div key={session.id}>
                <li className="session-list">
                  <strong>Date: </strong>{session.date} <br></br>
                  <strong> Slot time: </strong>{session.slot_type}
                </li>
               
                <div>
                {session.volunteer_id === null ? (
                  <button className="btn">Book Slot</button>
                ) : (
                  `This ${session.slot_type} session is already booked, please choose another one...`
                )}

                </div>
              </div>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Booking;
