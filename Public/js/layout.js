const currentPage = window.location.pathname;

/* SIDEBAR */
const sidebar = `
<div id="sidebarContainer"
    class="w-64 h-screen bg-[#2F4B8F] text-white fixed left-0 top-0
    transition-all duration-300 shadow-2xl flex flex-col">

    <!-- LOGO / HEADER -->
    <div class="flex items-center justify-between p-4 border-b border-[#4B9AD6]">

        <div class="flex items-center gap-3 overflow-hidden">

            <img
                src="/images/ali-logo.png"
                class="w-12 h-12 object-contain flex-shrink-0"
            />

            <div id="sidebarTitle">

                <h1 class="text-xl font-bold leading-none">
                    ALI HR
                </h1>

                <p class="text-xs text-blue-200 mt-1">
                    Management System
                </p>

            </div>

        </div>

        <button
            onclick="toggleSidebar()"
            class="bg-[#4B9AD6] hover:bg-[#6DB7E8]
            px-3 py-2 rounded-lg transition">

            ☰

        </button>

    </div>

    <!-- NAVIGATION -->
    <nav class="mt-6 flex flex-col gap-2 px-3">

        <a href="/Pages/index.html"
            class="nav-link ${currentPage.includes('index') ? 'active' : ''}">

            <span>📊</span>
            <span class="link-text">Dashboard</span>

        </a>

        <a href="/Pages/employees.html"
            class="nav-link ${currentPage.includes('employees') ? 'active' : ''}">

            <span>👥</span>
            <span class="link-text">Employees</span>

        </a>

        <a href="/Pages/attendance.html"
            class="nav-link ${currentPage.includes('attendance') ? 'active' : ''}">

            <span>📅</span>
            <span class="link-text">Attendance</span>

        </a>

        <a href="/Pages/leave.html"
            class="nav-link ${currentPage.includes('leave') ? 'active' : ''}">

            <span>📝</span>
            <span class="link-text">Leave</span>

        </a>

        <a href="/Pages/equipment.html"
            class="nav-link ${currentPage.includes('equipment') ? 'active' : ''}">

            <span>💻</span>
            <span class="link-text">Equipment</span>

        </a>

        <a href="/Pages/reports.html"
            class="nav-link ${currentPage.includes('reports') ? 'active' : ''}">

            <span>📈</span>
            <span class="link-text">Reports</span>

        </a>

        <a href="/Pages/settings.html"
            class="nav-link ${currentPage.includes('settings') ? 'active' : ''}">

            <span>⚙️</span>
            <span class="link-text">Settings</span>

        </a>

    </nav>

    <!-- FOOTER -->
    <div class="mt-auto p-4 border-t border-[#4B9AD6]">

        <p class="text-xs text-blue-200 text-center">
            ALI I.T. SUPPORT SERVICES INC.
        </p>

    </div>

</div>
`;

document.getElementById("sidebar").innerHTML = sidebar;

/* TOPBAR */
const topbar = `
<header
    class="h-16 bg-white border-b shadow-sm
    flex items-center justify-between px-6">

    <div class="flex items-center gap-4">

        <button
            onclick="history.back()"
            class="bg-[#2F4B8F] hover:bg-[#4B9AD6]
            text-white px-4 py-2 rounded-lg transition">

            ← Back

        </button>

        <h1 class="text-2xl font-bold text-[#2F4B8F]">
            ALI HR SYSTEM
        </h1>

    </div>

    <div class="flex items-center gap-4">

        <span class="text-gray-500 text-sm">
            ALI I.T. SUPPORT SERVICES INC.
        </span>

        <img
            src="/images/profile.jpg"
            class="w-10 h-10 rounded-full border object-cover"
        />

    </div>

</header>
`;

const topbarContainer = document.getElementById("topbar");

if(topbarContainer){
    topbarContainer.innerHTML = topbar;
}

/* COLLAPSE SIDEBAR */
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