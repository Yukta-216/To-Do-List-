const taskInput = document.getElementById("taskInput");
const emojiInput = document.getElementById("emojiInput");
const addTaskBtn = document.getElementById("addTaskBtn");
const taskList = document.getElementById("taskList");

addTaskBtn.addEventListener("click", addTask);
taskInput.addEventListener("keypress", function(e) {
    if (e.key === "Enter") addTask();
});

function getAutoEmoji(taskText) {
    const text = taskText.toLowerCase();

    if (text.includes("study") || text.includes("exam")) return "📚";
    if (text.includes("gym") || text.includes("workout")) return "💪";
    if (text.includes("food") || text.includes("eat")) return "🍔";
    if (text.includes("code") || text.includes("project")) return "💻";
    if (text.includes("meeting")) return "📅";
    if (text.includes("music")) return "🎵";

    return "✨";
}

function addTask() {
    const taskText = taskInput.value.trim();
    let emoji = emojiInput.value.trim();

    if (taskText === "") {
        alert("Please enter a task!");
        return;
    }

    if (emoji === "") {
        emoji = getAutoEmoji(taskText);
    }

    const li = document.createElement("li");

    li.innerHTML = `
        <span>${emoji} ${taskText}</span>
        <div class="task-buttons">
            <button class="complete-btn">✔</button>
            <button class="delete-btn">✖</button>
        </div>
    `;

    const completeBtn = li.querySelector(".complete-btn");
    const deleteBtn = li.querySelector(".delete-btn");

    completeBtn.addEventListener("click", () => {
        li.classList.toggle("completed");
    });

    deleteBtn.addEventListener("click", () => {
        li.style.transform = "translateX(100%)";
        li.style.opacity = "0";
        setTimeout(() => li.remove(), 300);
    });

    taskList.appendChild(li);

    taskInput.value = "";
    emojiInput.value = "";
}