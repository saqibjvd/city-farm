import React, { useState, useEffect } from "react";

function Booking() { // show all sessions
  const [sessions, setSessions] = useState([]);

  const [confirmBooking, setConfirmBooking] = useState(false)


  useEffect(() => {
    fetch("http://localhost:3000/sessions", {
      method: "GET",
    })
      .then((response) => response.json())
      .then((data) => {
        setSessions(data.sessions);
        // console.log(data.sessions);
      })
      .catch((error) => console.log(error));
  }, []);

 const bookingStatus = async (id) =>{
  
  try{
    const url = `http://localhost:3000/sessions/${id}`
    const response = await fetch(url, {method: "PUT"})
    const result = await response.json()
    setConfirmBooking(true);
    // call colourchange if conformation bookig == true then call that function.
    // make sire database is working as expected 
    console.log(result)
  }
  catch(error){
console.log(error)
  }
  }

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
                  <strong>Date: </strong>
                  {session.date}
                </li>
                <li>
                  <strong> Slot time: </strong>
                  {session.slot_type} {session.booked}
                </li>
                <div>
                  {session.volunteer_id === null ? (
                    <button className="btn" onClick={bookingStatus} >
                      Book Slot
                    </button>
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
