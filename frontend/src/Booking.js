import React, { useState } from "react";

const Booking = () => {
  const [sessions, setSessions] = useState([]);

  const getSessions = () => {
    try {
    } catch (error) {
      console.log(error);
    }
  };

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
        <p className="para2">Fill in details then select time:</p>
      </div>
      <div className="container">
        <form className="contact">
          <label>
            Name:
            <input type="text" name="name" required />
          </label>{" "}
          <br></br>
          <label>
            Email:
            <input type="email" name="email" required />
          </label>
          <br></br>
          <label>
            phone:
            <input type="tel" name="phone" required />
          </label>
          <div>
            <ul>
              <li>date 1</li>
              <li>date 2</li>
              <li>date 3</li>
              <li>date 4</li>
              <li>date 5</li>
            </ul>
          </div>
          <br></br>
          <input type="submit" value="Submit" />
        </form>
      </div>
    </div>
  );
};

export default Booking;
