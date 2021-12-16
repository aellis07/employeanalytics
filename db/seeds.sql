INSERT INTO department (name)
VALUES ("Accounting"), ("Engineering"), ("HR"), ("Sales"),("Executive");

INSERT INTO role (title, salary, department_id)
VALUE ("Accountant", 65000.00, 1), ("Engineer", 85000.00, 2), ("Manager", 90000.00, 3), ("Sales Associate", 85650.00, 4), ("CE0", 150000.00, 5);

INSERT INTO employee (first_name, last_name, role_id)
VALUE ("Joe", "Shmo", 4), ("Tanner", "Banner", 2), ("Shmandy", "Dandy", 1), ("Mark", "Bark", 5);