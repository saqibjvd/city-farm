CREATE TABLE sessions(
    id serial PRIMARY KEY,
    volunteer_id integer,
    date date NOT NULL,
    slot_type varchar(20) NOT NULL,
    FOREIGN KEY (volunteer_id) REFERENCES volunteers(id)
);

INSERT INTO sessions(date, slot_type)
    VALUES ('2023-09-01', 'morning');
   
   INSERT INTO sessions(date, slot_type)
    VALUES ('2023-09-01', 'evening');

   INSERT INTO sessions(date, slot_type)
    VALUES ('2023-09-02', 'morning');
   
   INSERT INTO sessions(date, slot_type)
    VALUES ('2023-09-02', 'evening');
   
   INSERT INTO sessions(date, slot_type)
    VALUES ('2023-09-03', 'morning');
   
   INSERT INTO sessions(date, slot_type)
    VALUES ('2023-09-03', 'evening');
   
   INSERT INTO sessions(date, slot_type)
    VALUES ('2023-09-04', 'morning');
   
   INSERT INTO sessions(date, slot_type)
    VALUES ('2023-09-04', 'evening');
   
   INSERT INTO sessions(date, slot_type)
    VALUES ('2023-09-05', 'morning');
   
   INSERT INTO sessions(date, slot_type)
    VALUES ('2023-09-05', 'evening');
  
   select * from sessions;
