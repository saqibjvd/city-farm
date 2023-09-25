CREATE TABLE volunteers(
    id serial PRIMARY KEY,
    full_name varchar(60) NOT NULL,
    phone_number varchar(20) NOT NULL,
    email varchar(60) NOT NULL
);

INSERT INTO volunteers(full_name, phone_number, email)
    VALUES ('will smith', '0123456789', 'will_smith@cyf.org');
    
INSERT INTO volunteers(full_name, phone_number, email)
    VALUES ('john dee', '0112345678', 'jdee@bt.com');
   
INSERT INTO volunteers(full_name, phone_number, email)
    VALUES ('ana smith', '0123000789', 'ana01@google.org');
   
INSERT INTO volunteers(full_name, phone_number, email)
    VALUES ('anil sharma', '0777345676', 'anilsharma@sunrrise.org');
   
INSERT INTO volunteers(full_name, phone_number, email)
    VALUES ('rubi raza', '0123456700', 'ruby@cyf.org');
   
SELECT * from volunteers;