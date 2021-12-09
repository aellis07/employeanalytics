INSERT INTO department (name)
VALUES ("Accounting"), ("Engineering"), ("HR"), ("Sales");

INSERT INTO role (title, salary, department_id)
VALUE ("Accountant", 65000.00, 1), ("Engineer", 85000, 2), ("Manager", 90000, 3), ("Sales Associate", 85650, 4);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUE ("Joe", "Shmo", 3, null), ("Tanner", "Banner", 2, 3), ("Shmandy", "Dandy", 3, 2), ("Mark", "Bark", 4, 3);