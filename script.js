// STEP 1: Welcome message
alert("Welcome to the Dynamic Student Portal!");

console.log("Student Portal is running successfully!");


// STEP 2: Student variables
let studentName = "Sean";
let studentAge = 19;
let studentCourse = "Data Science";

console.log("Student Name: " + studentName);
console.log("Student Age: " + studentAge);
console.log("Student Course: " + studentCourse);


// STEP 3: If/Else statement
if (studentAge >= 18) {
    console.log("The student is an adult.");
} else {
    console.log("The student is a minor.");
}


// STEP 4: For loop
for (let i = 1; i <= 5; i++) {
    console.log("Student Number: " + i);
}


// STEP 5: Registration form interaction
const registrationForm = document.querySelector("form");

if (registrationForm) {
    registrationForm.addEventListener("submit", function(event) {
        event.preventDefault();

        const name = document.getElementById("fullname").value.trim();
        const email = document.getElementById("email").value.trim();

        if (!validateName(name)) {
            alert("Please enter a valid name.");
            return;
        }

        if (!validateEmail(email)) {
            alert("Please enter a valid email address.");
            return;
        }

        console.log("Registration submitted!");
        console.log("Student Name: " + name);
        console.log("Student Email: " + email);

        alert("Welcome, " + name + "! Your registration was successful.");
    });
}


// STEP 6: Student objects
const students = [
    {
        name: "John",
        course: "Data Science",
        year: 2
    },
    {
        name: "Mary",
        course: "Computer Science",
        year: 1
    },
    {
        name: "Peter",
        course: "Information Technology",
        year: 3
    },
    {
        name: "James",
        course: "Business IT",
        year: 2
    },
    {
        name: "Aisha",
        course: "Data Science",
        year: 1
    }
];


// STEP 7: Add a student to the webpage
function addStudentToPage(student) {
    const list = document.getElementById("studentsList");

    const listItem = document.createElement("li");

    listItem.textContent =
        student.name + " - " +
        student.course + " - Year " +
        student.year;

    list.appendChild(listItem);
}


// STEP 8: Display all students
function displayAllStudents() {
    const list = document.getElementById("studentsList");
    const count = document.getElementById("studentCount");

    if (!list) return;

    list.innerHTML = "";

    students.forEach(function(student) {
        addStudentToPage(student);
    });

    if (count) {
        count.textContent = "Total Students: " + students.length;
    }
}


// STEP 9: Display students when button is clicked
const displayButton = document.getElementById("displayStudents");

if (displayButton) {
    displayButton.addEventListener("click", displayAllStudents);
}
// Fetch student data from JSON file
const loadButton = document.getElementById("loadJsonStudents");

if (loadButton) {
    loadButton.addEventListener("click", function() {

        fetch("students.json")
            .then(response => {
                if (!response.ok) {
                    throw new Error("Could not load student data");
                }

                return response.json();
            })

            .then(data => {
                const list = document.getElementById("studentsList");
                const count = document.getElementById("studentCount");

                list.innerHTML = "";

                data.forEach(function(student) {
                    addStudentToPage(student);
                });

                count.textContent = "Total Students: " + data.length;
            })

            .catch(error => {
                console.error("Error:", error);
                alert("Failed to load student information.");
            });
    });
}
// Student Class
class Student {
    constructor(name, email, course) {
        this.name = name;
        this.email = email;
        this.course = course;
    }

    getSummary() {
        return this.name + " studies " + this.course;
    }
}

// Create Student Objects
const student1 = new Student(
    "John",
    "john@gmail.com",
    "Data Science"
);

const student2 = new Student(
    "Mary",
    "mary@gmail.com",
    "Computer Science"
);

// Display student summaries
console.log(student1.getSummary());
console.log(student2.getSummary());