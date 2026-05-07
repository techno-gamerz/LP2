async function loadStudents() {
    const response = await fetch("/api/students");
    const students = await response.json();
    const container = document.getElementById("students");

    container.innerHTML = "";
    students.forEach(function (student) {
        const div = document.createElement("div");
        div.className = "student";
        div.textContent = `${student.rollNo}. ${student.name} - ${student.course}`;
        container.appendChild(div);
    });
}
