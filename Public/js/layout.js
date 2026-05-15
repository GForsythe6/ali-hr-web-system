const currentPage = window.location.pathname;

const sidebar = `
<div id="sidebarContainer"
    class="w-64 h-screen sidebar text-white fixed left-0 top-0 transition-all duration-300 shadow-2xl">

    <!-- HEADER -->
    <div class="flex items-center justify-between p-5 border-b border-blue-400">

        <h1 id="sidebarTitle"
            class="text-2xl font-bold">
            ALI HR
        </h1>

        <button onclick="toggleSidebar()"
            class="bg-[#4B9AD6] px-3 py-1 rounded-lg hover:bg-[#6DB7E8]">

            ☰

        </button>

    </div>

    <!-- NAVIGATION -->
    <nav class="mt-6 flex flex-col gap-2 px-3">

        <a href="/pages/index.html"
            class="nav-link ${currentPage.includes('index') ? 'active' : ''}">

            <span>📊</span>
            <span class="link-text">Dashboard</span>

        </a>

        <a href="/pages/employees.html"
            class="nav-link ${currentPage.includes('employees') ? 'active' : ''}">

            <span>👥</span>
            <span class="link-text">Employees</span>

        </a>

        <a href="/pages/attendance.html"
            class="nav-link ${currentPage.includes('attendance') ? 'active' : ''}">

            <span>📅</span>
            <span class="link-text">Attendance</span>

        </a>

        <a href="/pages/leave.html"
            class="nav-link ${currentPage.includes('leave') ? 'active' : ''}">

            <span>📝</span>
            <span class="link-text">Leave</span>

        </a>

        <a href="/pages/equipment.html"
            class="nav-link ${currentPage.includes('equipment') ? 'active' : ''}">

            <span>💻</span>
            <span class="link-text">Equipment</span>

        </a>

        <a href="/pages/reports.html"
            class="nav-link ${currentPage.includes('reports') ? 'active' : ''}">

            <span>📈</span>
            <span class="link-text">Reports</span>

        </a>

        <a href="/pages/settings.html"
            class="nav-link ${currentPage.includes('settings') ? 'active' : ''}">

            <span>⚙️</span>
            <span class="link-text">Settings</span>

        </a>

    </nav>

</div>
`;

document.getElementById("sidebar").innerHTML = sidebar;

let collapsed = false;

function toggleSidebar(){

    const sidebar = document.getElementById("sidebarContainer");
    const content = document.getElementById("mainContent");
    const texts = document.querySelectorAll(".link-text");
    const title = document.getElementById("sidebarTitle");

    collapsed = !collapsed;

    if(collapsed){

        sidebar.classList.remove("w-64");
        sidebar.classList.add("w-20");

        content.classList.remove("ml-64");
        content.classList.add("ml-20");

        title.style.display = "none";

        texts.forEach(text => {
            text.style.display = "none";
        });

    } else {

        sidebar.classList.remove("w-20");
        sidebar.classList.add("w-64");

        content.classList.remove("ml-20");
        content.classList.add("ml-64");

        title.style.display = "block";

        texts.forEach(text => {
            text.style.display = "inline";
        });

    }

}