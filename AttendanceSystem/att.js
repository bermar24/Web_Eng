//1. Create three variables that hold references to the list (<ul>), <input>, and <button> elements.
const studentList = document.querySelector("ul");
const studentInput = document.querySelector("#student");
const addButton = document.querySelector(".addStudent");
const studentCount = document.querySelector(".counter span");

let count = 0;

//2. Add an EventListener to the "Add student" button which calls the addStudent function
addButton.addEventListener("click", addStudent);

//3. Create a function that will run in response to the button being clicked.

function addStudent() {
    //4. Inside the function body, start off by storing the current value of the input element in a variable.
    const studentName = studentInput.value.trim();
    //5. Next, empty the input element by setting its value to an empty string — ''.
    if (studentName === "") return; // Prevent adding empty names

    const existingStudents = document.querySelectorAll("ul li span");
    for (let student of existingStudents) {
        if (student.textContent === studentName) {
            alert("This student is already in the class.");
            studentInput.value = "";
            studentInput.focus();
            return;
        }
    }
    //6. Create three new elements — a list item (<li>), <span>, and <button>, and store them in variables.
    const li = document.createElement("li");
    const span = document.createElement("span");
    const deleteButton = document.createElement("button");

    //7.Append the span and the button as children of the list item.
    li.appendChild(span);
    li.appendChild(deleteButton);
    studentList.appendChild(li);

    //8. Set the text content of the span to the input element value you saved earlier, and the text content of the button to 'Delete'.
    span.textContent = studentName;
    deleteButton.textContent = "Delete";
    deleteButton.classList.add("delete-btn");

    //9. Append the list item as a child of the list.
    //10. Attach an event handler to the delete button so that, when clicked, it will delete the entire list item (<li>...</li>).
    deleteButton.addEventListener("click", function () {
        studentList.removeChild(li);
        decrementCount();
    });

    //11.Use the focus() method to focus the input element ready for entering the next shopping list item.
    studentInput.value = "";
    studentInput.focus();

    //12. Finally, increment the counter of (student Count)
    incrementCount();
}
//Note: you can write a seprate function for incrementing and decrementing the counter and then call it in the right places
function incrementCount() {
    count++;
    studentCount.textContent = count;
}
function decrementCount() {
    count--;
    studentCount.textContent = count;
}