<!DOCTYPE html>
<html lang="en" class="">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Wedding Organizer | Phai & Dawid</title>

    <!-- Tailwind CSS -->
    <script src="https://cdn.tailwindcss.com"></script>

    <!-- Google Fonts -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700&family=Inter:wght@300;400;500;600&family=Sarabun:wght@300;400;600&display=swap" rel="stylesheet">

    <!-- Font Awesome for Icons -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css">

    <style>
        /* * ==============================================
         * THEME & DESIGN SYSTEM
         * ==============================================
         */
        :root {
            --bg-primary: #FFFBF5;
            --bg-secondary: #FFFFFF;
            --bg-accent: #F9E6E2;
            --text-primary: #4C3D3D;
            --text-secondary: #706262;
            --text-accent: #C88EA7;
            --border-color: #EAE0D5;
            --brand-gradient-start: #E1A0B1;
            --brand-gradient-end: #A87C9A;
            --shadow-color: 200, 142, 167; /* C88EA7 in RGB */
        }

        html.dark {
            /* Romantic Dark Theme */
            --bg-primary: #4a2c3a; /* Dark Plum */
            --bg-secondary: #5f3a4b; /* Lighter Plum */
            --bg-accent: #8c5f73; /* Muted Rose */
            --text-primary: #f7e8f0; /* Soft Off-white */
            --text-secondary: #d3b8c5; /* Light Mauve */
            --text-accent: #ffb6c1; /* Salmon Pink / Light Pink */
            --border-color: #734f62;
            --brand-gradient-start: #ffb6c1; /* Salmon Pink */
            --brand-gradient-end: #e78ea9; /* Deeper Rose */
            --shadow-color: 255, 182, 193; /* Light Pink in RGB */
        }

        body {
            font-family: 'Inter', sans-serif;
            background-color: var(--bg-primary);
            color: var(--text-primary);
            background-image: url('https://www.transparenttextures.com/patterns/subtle-floral.png');
            transition: background-color 0.3s ease, color 0.3s ease;
        }
        .font-display { font-family: 'Playfair Display', serif; }
        .font-thai { font-family: 'Sarabun', sans-serif; }

        /* General Styling */
        .card {
            background-color: var(--bg-secondary);
            border: 1px solid var(--border-color);
            box-shadow: 0 4px 15px -5px rgba(var(--shadow-color), 0.1);
            transition: all 0.3s ease;
        }
        .card:hover {
            box-shadow: 0 8px 25px -5px rgba(var(--shadow-color), 0.2);
            transform: translateY(-4px);
        }
        .brand-gradient {
            background: linear-gradient(to right, var(--brand-gradient-start), var(--brand-gradient-end));
        }
        .text-brand { color: var(--text-accent); }

        /* Tabs */
        .tab-btn {
            color: var(--text-secondary);
            border-bottom-color: transparent;
            transition: all 0.3s ease;
        }
        .tab-active {
            color: var(--text-primary);
            border-bottom-color: var(--text-accent);
            font-weight: 600;
        }
        
        /* Form Elements */
        .form-input {
            background-color: var(--bg-primary);
            border-color: var(--border-color);
            color: var(--text-primary);
        }
        .form-input::placeholder {
            color: var(--text-secondary);
        }
        .form-input:focus {
            --tw-ring-color: var(--text-accent);
            border-color: var(--text-accent);
        }
        .btn-primary {
            background-color: var(--text-accent);
            color: #4a2c3a; /* Dark Plum for text on button */
            transition: all 0.3s ease;
            font-weight: 600;
        }
        .btn-primary:hover {
            filter: brightness(1.1);
        }

        /* Modal */
        .modal { transition: opacity 0.25s ease; }
        .modal-content { transition: transform 0.25s ease; }

        /* Task List Specific */
        .task-item {
            background-color: var(--bg-primary);
            border-left-width: 4px;
            cursor: pointer;
        }
        .task-item-high { border-left-color: #ef4444; } /* Red */
        .task-item-medium { border-left-color: #f97316; } /* Orange */
        .task-item-low { border-left-color: #3b82f6; } /* Blue */
        
        .task-item.completed {
             opacity: 0.6;
        }
        .task-item.completed .task-text {
            text-decoration: line-through;
        }
        .subtask-checkbox:checked + .subtask-text {
            text-decoration: line-through;
            color: var(--text-secondary);
        }
    </style>
</head>
<body class="antialiased">

    <!-- Main Container -->
    <div class="container mx-auto p-4 sm:p-6 md:p-8 max-w-7xl">

        <!-- Header -->
        <header class="relative text-center mb-10">
            <h1 class="font-display text-4xl sm:text-5xl font-bold text-brand">Phai & Dawid</h1>
            <p class="text-lg text-secondary mt-1">Wedding Organizer</p>
            
            <!-- Dark Mode Toggle -->
            <div class="absolute top-0 right-0">
                <button id="theme-toggle" class="p-2 rounded-full text-secondary hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors">
                    <i id="theme-toggle-dark-icon" class="fas fa-moon hidden"></i>
                    <i id="theme-toggle-light-icon" class="fas fa-sun hidden"></i>
                </button>
            </div>
        </header>

        <!-- Navigation Tabs -->
        <div class="mb-8 border-b" style="border-color: var(--border-color)">
            <nav class="flex -mb-px space-x-6" aria-label="Tabs">
                <button onclick="showTab('dashboard')" class="tab-btn tab-active py-4 px-1 border-b-2 text-sm">Dashboard</button>
                <button onclick="showTab('todo')" class="tab-btn py-4 px-1 border-b-2 text-sm">To-Do List</button>
                <button onclick="showTab('guests')" class="tab-btn py-4 px-1 border-b-2 text-sm">Guest List</button>
            </nav>
        </div>

        <!-- Tab Content -->
        <main>
            <!-- Dashboard Tab -->
            <div id="dashboard" class="tab-content">
                <!-- Countdown Timer -->
                <div class="brand-gradient text-white p-8 rounded-2xl shadow-lg mb-8 text-center">
                    <h2 class="font-display text-3xl mb-4" style="color: var(--bg-primary)">Time Until We Say "I Do"</h2>
                    <div id="countdown" class="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                        <div><span id="days" class="text-4xl font-bold">0</span><p class="text-sm opacity-80">Days</p></div>
                        <div><span id="hours" class="text-4xl font-bold">0</span><p class="text-sm opacity-80">Hours</p></div>
                        <div><span id="minutes" class="text-4xl font-bold">0</span><p class="text-sm opacity-80">Minutes</p></div>
                        <div><span id="seconds" class="text-4xl font-bold">0</span><p class="text-sm opacity-80">Seconds</p></div>
                    </div>
                </div>

                <!-- Interactive Cards Grid -->
                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    <!-- To-Do List Card -->
                    <div onclick="showTab('todo')" class="card p-6 rounded-2xl cursor-pointer">
                        <div class="flex items-center space-x-4 mb-4">
                            <div class="p-3 rounded-full" style="background-color: var(--bg-accent)"><i class="fas fa-list-check fa-lg text-brand"></i></div>
                            <p class="font-semibold text-lg">To-Do List</p>
                        </div>
                        <p class="text-sm text-secondary mb-2">Task Progress</p>
                        <div class="w-full rounded-full h-2.5" style="background-color: var(--border-color)">
                            <div id="todo-progress-bar" class="h-2.5 rounded-full" style="width: 0%; background-color: var(--text-accent)"></div>
                        </div>
                        <p id="todo-progress-text" class="text-right text-xs text-secondary mt-1">0% Complete</p>
                    </div>

                    <!-- Guest List Card -->
                    <div onclick="showTab('guests')" class="card p-6 rounded-2xl cursor-pointer">
                        <div class="flex items-center space-x-4 mb-4">
                            <div class="p-3 rounded-full" style="background-color: var(--bg-accent)"><i class="fas fa-users fa-lg text-brand"></i></div>
                            <p class="font-semibold text-lg">Guest List</p>
                        </div>
                        <p class="text-4xl font-bold"><span id="guest-count">0</span> <span class="text-lg font-medium text-secondary">/ ~50</span></p>
                        <p class="text-sm text-secondary mt-2">Manage your invited guests.</p>
                    </div>

                    <!-- Venue Card -->
                    <div class="card p-6 rounded-2xl">
                        <div class="flex items-center space-x-4 mb-4">
                            <div class="p-3 rounded-full" style="background-color: var(--bg-accent)"><i class="fas fa-map-marker-alt fa-lg text-brand"></i></div>
                            <p class="font-semibold text-lg">Venue</p>
                        </div>
                        <p class="font-semibold">Hotel Mirror Mirror</p>
                        <p class="text-sm text-secondary">Chakphong, Rayong</p>
                        <p class="text-sm text-secondary mt-2 font-medium">Dec 19, 2025</p>
                    </div>
                    
                    <!-- Vendors Card -->
                    <div class="card p-6 rounded-2xl">
                        <div class="flex items-center space-x-4 mb-4">
                            <div class="p-3 rounded-full" style="background-color: var(--bg-accent)"><i class="fas fa-star fa-lg text-brand"></i></div>
                            <p class="font-semibold text-lg">Key Vendors</p>
                        </div>
                        <p class="text-sm font-semibold">Photo/Video:</p>
                        <p class="text-sm text-secondary mb-2">Amata Wedding</p>
                        <p class="text-sm font-semibold">Organizer Budget:</p>
                        <p class="text-sm text-secondary">35k - 120k THB</p>
                    </div>
                </div>
            </div>

            <!-- To-Do List Tab -->
            <div id="todo" class="tab-content hidden">
                <div class="card p-6 rounded-xl">
                    <h2 class="font-display text-2xl mb-4">Add New Task</h2>
                    <form id="add-task-form" class="grid grid-cols-1 md:grid-cols-6 gap-4 mb-6 p-4 rounded-lg border" style="background-color: var(--bg-primary); border-color: var(--border-color)">
                        <input type="text" id="new-task-input" placeholder="Task description..." class="form-input md:col-span-3 w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2" required>
                        <select id="new-task-priority" class="form-input md:col-span-2 w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2">
                            <option value="high">High Priority</option>
                            <option value="medium" selected>Medium Priority</option>
                            <option value="low">Low Priority</option>
                        </select>
                        <button type="submit" class="btn-primary font-bold py-2 px-4 rounded-lg md:col-span-1">Add</button>
                    </form>
                    
                    <div class="space-y-6">
                        <!-- Priority Sections -->
                        <div>
                            <h3 class="font-display text-xl mb-2 text-red-500">High Priority</h3>
                            <div id="high-priority-tasks" class="space-y-3"></div>
                        </div>
                        <div>
                            <h3 class="font-display text-xl mb-2 text-orange-500">Medium Priority</h3>
                            <div id="medium-priority-tasks" class="space-y-3"></div>
                        </div>
                        <div>
                            <h3 class="font-display text-xl mb-2 text-blue-500">Low Priority</h3>
                            <div id="low-priority-tasks" class="space-y-3"></div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Guest List Tab -->
            <div id="guests" class="tab-content hidden">
                 <div class="card p-6 rounded-xl">
                    <h2 class="font-display text-2xl mb-4">Guest List</h2>
                    <form id="add-guest-form" class="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6 p-4 rounded-lg border" style="background-color: var(--bg-primary); border-color: var(--border-color)">
                         <input type="text" id="guest-name" placeholder="Guest's Full Name" class="form-input md:col-span-2 w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2" required>
                         <input type="email" id="guest-email" placeholder="Guest's Email" class="form-input w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2" required>
                         <button type="submit" class="btn-primary font-bold py-2 px-4 rounded-lg">Add Guest</button>
                    </form>
                    <div class="overflow-x-auto">
                        <table class="w-full text-left">
                            <thead><tr class="border-b" style="border-color: var(--border-color)"><th class="p-2">Name</th><th class="p-2">Email</th><th class="p-2 text-center">Actions</th></tr></thead>
                            <tbody id="guest-list-body"></tbody>
                        </table>
                    </div>
                </div>
            </div>
        </main>
    </div>

    <!-- Task Detail Modal -->
    <div id="task-detail-modal" class="modal fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-60 opacity-0 pointer-events-none">
        <div class="modal-content card w-full max-w-3xl h-full max-h-[90vh] rounded-2xl transform scale-95 flex flex-col">
            <!-- Modal Header -->
            <div class="flex-shrink-0 p-6 border-b" style="border-color: var(--border-color)">
                 <div class="flex justify-between items-center">
                    <h2 id="task-modal-title" class="font-display text-2xl">Task Details</h2>
                    <button id="close-task-modal-btn" class="text-secondary hover:text-primary"><i class="fas fa-times fa-lg"></i></button>
                 </div>
            </div>
            <!-- Modal Body -->
            <div class="flex-grow p-6 overflow-y-auto">
                <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    <!-- Left Column: Recommendations & Notes -->
                    <div class="space-y-6">
                        <div>
                            <h3 class="font-semibold mb-2 text-brand"><i class="fas fa-lightbulb mr-2"></i>Recommendations</h3>
                            <div id="task-modal-recommendations" class="prose prose-sm text-secondary p-4 rounded-lg" style="background-color: var(--bg-primary)"></div>
                        </div>
                        <div>
                            <h3 class="font-semibold mb-2 text-brand"><i class="fas fa-pencil-alt mr-2"></i>Your Notes</h3>
                            <textarea id="task-modal-notes" class="form-input w-full h-32 p-3 text-sm rounded-lg" placeholder="Add your notes here..."></textarea>
                        </div>
                    </div>
                    <!-- Right Column: Sub-tasks -->
                    <div>
                        <h3 class="font-semibold mb-2 text-brand"><i class="fas fa-check-square mr-2"></i>Sub-tasks Checklist</h3>
                        <div id="task-modal-subtasks" class="space-y-2"></div>
                        <form id="add-subtask-form" class="flex gap-2 mt-3">
                            <input id="new-subtask-input" type="text" placeholder="Add a sub-task..." class="form-input flex-grow w-full px-3 py-1.5 border rounded-lg text-sm">
                            <button type="submit" class="btn-primary text-sm font-bold py-1.5 px-3 rounded-lg">Add</button>
                        </form>
                    </div>
                </div>
            </div>
            <!-- Modal Footer -->
            <div class="flex-shrink-0 p-6 border-t flex justify-between items-center" style="border-color: var(--border-color)">
                <button id="task-modal-delete-btn" class="text-red-500 hover:text-red-700 text-sm"><i class="fas fa-trash-alt mr-2"></i>Delete Task</button>
                <button id="task-modal-complete-btn" class="btn-primary font-bold py-2 px-5 rounded-lg">
                    <span class="complete-text"><i class="fas fa-check mr-2"></i>Mark as Complete</span>
                    <span class="incomplete-text hidden"><i class="fas fa-undo mr-2"></i>Mark as Incomplete</span>
                </button>
            </div>
        </div>
    </div>

    <!-- Delete Confirmation Modal -->
    <div id="delete-modal" class="modal fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-60 opacity-0 pointer-events-none">
        <div class="modal-content card w-full max-w-md p-6 rounded-xl transform scale-95">
            <h3 class="text-lg font-bold">Confirm Deletion</h3>
            <p id="delete-modal-text" class="my-2 text-secondary">Are you sure you want to remove this item?</p>
            <div class="mt-6 flex justify-end space-x-3">
                <button id="cancel-delete-btn" class="px-4 py-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700">Cancel</button>
                <button id="confirm-delete-btn" class="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700">Delete</button>
            </div>
        </div>
    </div>

    <!-- Firebase SDK -->
    <script type="module">
        import { initializeApp } from "https://www.gstatic.com/firebasejs/11.6.1/firebase-app.js";
        import { getAuth, signInAnonymously, signInWithCustomToken } from "https://www.gstatic.com/firebasejs/11.6.1/firebase-auth.js";
        import { getFirestore, collection, onSnapshot, addDoc, doc, updateDoc, deleteDoc, setLogLevel, getDoc, getDocs } from "https://www.gstatic.com/firebasejs/11.6.1/firebase-firestore.js";

        const firebaseConfig = typeof __firebase_config !== 'undefined' ? JSON.parse(__firebase_config) : {};
        const appId = typeof __app_id !== 'undefined' ? __app_id : 'default-wedding-app';

        const app = initializeApp(firebaseConfig);
        const db = getFirestore(app);
        const auth = getAuth(app);
        setLogLevel('debug');

        let userId = null;

        const performAuth = async () => {
            try {
                if (typeof __initial_auth_token !== 'undefined' && __initial_auth_token) {
                    const cred = await signInWithCustomToken(auth, __initial_auth_token);
                    userId = cred.user.uid;
                } else {
                    const cred = await signInAnonymously(auth);
                    userId = cred.user.uid;
                }
                loadTasks();
                loadGuests();
            } catch (error) {
                document.querySelector('main').innerHTML = `<div class="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded-lg"><p><strong>Auth Error:</strong> ${error.message}</p></div>`;
            }
        };

        window.showTab = (tabName) => {
            document.querySelectorAll('.tab-content').forEach(tab => tab.classList.add('hidden'));
            document.getElementById(tabName).classList.remove('hidden');
            document.querySelectorAll('.tab-btn').forEach(btn => btn.classList.remove('tab-active'));
            document.querySelector(`button[onclick="showTab('${tabName}')"]`).classList.add('tab-active');
        };

        // --- THEME SWITCHER ---
        const themeToggleBtn = document.getElementById('theme-toggle');
        const themeToggleDarkIcon = document.getElementById('theme-toggle-dark-icon');
        const themeToggleLightIcon = document.getElementById('theme-toggle-light-icon');

        if (localStorage.getItem('color-theme') === 'dark' || (!('color-theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
            themeToggleLightIcon.classList.remove('hidden');
            document.documentElement.classList.add('dark');
        } else {
            themeToggleDarkIcon.classList.remove('hidden');
            document.documentElement.classList.remove('dark');
        }

        themeToggleBtn.addEventListener('click', function() {
            themeToggleDarkIcon.classList.toggle('hidden');
            themeToggleLightIcon.classList.toggle('hidden');
            document.documentElement.classList.toggle('dark');
            if (document.documentElement.classList.contains('dark')) {
                localStorage.setItem('color-theme', 'dark');
            } else {
                localStorage.setItem('color-theme', 'light');
            }
        });

        // --- COUNTDOWN TIMER ---
        const weddingDate = new Date("2025-12-19T09:00:00").getTime();
        const countdownInterval = setInterval(() => {
            const now = new Date().getTime();
            const distance = weddingDate - now;
            if (distance < 0) {
                clearInterval(countdownInterval);
                document.getElementById('countdown').innerHTML = "<p class='col-span-4 font-bold text-2xl'>Congratulations!</p>";
                return;
            }
            document.getElementById('days').innerText = Math.floor(distance / (1000 * 60 * 60 * 24));
            document.getElementById('hours').innerText = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            document.getElementById('minutes').innerText = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            document.getElementById('seconds').innerText = Math.floor((distance % (1000 * 60)) / 1000);
        }, 1000);

        // --- DELETE MODAL LOGIC ---
        const deleteModal = document.getElementById('delete-modal');
        const confirmDeleteBtn = document.getElementById('confirm-delete-btn');
        const cancelDeleteBtn = document.getElementById('cancel-delete-btn');
        const deleteModalText = document.getElementById('delete-modal-text');
        let deleteFunction = () => {};

        const openDeleteModal = (text, onConfirm) => {
            deleteModalText.textContent = text;
            deleteFunction = onConfirm;
            deleteModal.classList.remove('opacity-0', 'pointer-events-none');
            deleteModal.querySelector('.modal-content').classList.remove('scale-95');
        };

        const closeDeleteModal = () => {
            deleteModal.classList.add('opacity-0', 'pointer-events-none');
            deleteModal.querySelector('.modal-content').classList.add('scale-95');
        };

        confirmDeleteBtn.addEventListener('click', () => {
            deleteFunction();
            closeDeleteModal();
        });
        cancelDeleteBtn.addEventListener('click', closeDeleteModal);

        // --- TO-DO LIST LOGIC ---
        const highPriorityTasks = document.getElementById('high-priority-tasks');
        const mediumPriorityTasks = document.getElementById('medium-priority-tasks');
        const lowPriorityTasks = document.getElementById('low-priority-tasks');
        
        const addTaskForm = document.getElementById('add-task-form');
        const newTaskInput = document.getElementById('new-task-input');
        const newTaskPriority = document.getElementById('new-task-priority');

        const progressBar = document.getElementById('todo-progress-bar');
        const progressText = document.getElementById('todo-progress-text');

        const initialTasks = [
            { title: "Book venue", completed: true, priority: 'high', notes: 'Booked Hotel Mirror Mirror for Dec 19, 22 rooms confirmed.', subtasks: [{text: 'Confirm booking', done: true}], recommendations: 'Venue is confirmed.' },
            { title: "Book photographer & videographer", completed: true, priority: 'high', notes: 'Booked Amata Wedding. They will cover both pre-wedding and wedding day.', subtasks: [{text: 'Sign contract', done: true}, {text: 'Pay deposit', done: true}], recommendations: 'Amata Wedding is a great choice, known for their cinematic style. Contact: https://www.instagram.com/amata_wedding' },
            { title: "Get wedding attire", completed: true, priority: 'medium', notes: 'Both Thai and Western outfits for bride and groom are ready.', subtasks: [{text: 'Thai outfits', done: true}, {text: 'Western outfits', done: true}], recommendations: '' },
            { title: "Book wedding day hair & makeup for Phai", completed: true, priority: 'medium', notes: 'Included in the Amata Wedding package.', subtasks: [{text: 'Confirm with Amata', done: true}], recommendations: '' },
            
            { title: "Find & book Wedding Organizer", completed: false, priority: 'high', notes: '', subtasks: [], recommendations: '<h4>Top Planners in Rayong Area:</h4><ul><li><strong>Chic Planner:</strong> High-end, full-service planner. Known for luxury events.</li><li><strong>The Wedding Bliss Thailand:</strong> Specialize in destination weddings. Great reviews.</li><li><strong>Weddingery:</strong> Local Rayong planner with good connections to vendors. Contact: +66 81 234 5678</li></ul><p>Budget: 35,000 - 120,000 THB</p>' },
            { title: "Find & book Priest/Officiant", completed: false, priority: 'high', notes: '', subtasks: [], recommendations: 'For a Western ceremony in Thailand, you can look for an English-speaking celebrant. Websites like Celebrant in Thailand or finding expatriate community leaders can be a good start.' },
            { title: "Send out official invitations", completed: false, priority: 'high', notes: '', subtasks: [], recommendations: 'Finalize guest list first. Consider sending digital invitations via the Guest List tab to save time and paper.' },
            
            { title: "Decide on music", completed: false, priority: 'medium', notes: '', subtasks: [], recommendations: '<h4>Options:</h4><ol><li><strong>Hotel Contact:</strong> 5,000 THB for their recommended musician. Ask for a sample.</li><li><strong>Live Classical Music:</strong> Search for string quartets or acoustic guitarists in the Bangkok/Rayong area for a more romantic feel.</li></ol>' },
            { title: "Book Hair & Makeup for pre-wedding shoot", completed: false, priority: 'medium', notes: '', subtasks: [], recommendations: '<h4>Rayong Makeup Artists (MUA):</h4><ul><li><strong>Nong Chat:</strong> Famous but expensive and needs to be booked far in advance.</li><li><strong>Local MUAs on Instagram:</strong> Search #ช่างแต่งหน้าเจ้าสาวระยอง for local talent.</li></ul>' },
            { title: "Plan menu for reception", completed: false, priority: 'medium', notes: '', subtasks: [], recommendations: 'Coordinate with Hotel Mirror Mirror. Decide between a buffet, set menu, or a mix. Consider both Thai and Polish dishes to represent both cultures.' },
            
            { title: "Arrange guest transportation", completed: false, priority: 'low', notes: '', subtasks: [], recommendations: 'Consider arranging a shuttle bus from a central point in Rayong or Bangkok if many guests are coming from there.' },
            { title: "Finalize ceremony timings", completed: false, priority: 'low', notes: '', subtasks: [], recommendations: 'Coordinate with the wedding planner and photographer to create a timeline for both days. Ensure enough time for photos during golden hour.' },
        ];

        const createTaskElement = (task, id) => {
            const li = document.createElement('li');
            const priorityClass = `task-item-${task.priority}`;
            li.className = `task-item ${priorityClass} flex items-center justify-between p-3 rounded-lg transition-all duration-300`;
            if (task.completed) {
                li.classList.add('completed');
            }
            li.innerHTML = `
                <div class="flex items-center">
                    <i class="fa-solid ${task.completed ? 'fa-check-circle text-green-500' : 'fa-circle text-secondary'} fa-lg"></i>
                    <span class="ml-3 block task-text">${task.title}</span>
                </div>
                <i class="fas fa-chevron-right text-secondary"></i>
            `;
            li.addEventListener('click', () => openTaskDetailModal(id));
            return li;
        };

        const loadTasks = async () => {
            if (!userId) return;
            const tasksCol = collection(db, `artifacts/${appId}/users/${userId}/tasks`);
            
            // Check if tasks are already populated
            const initialCheck = await getDocs(tasksCol);
            if (initialCheck.empty) {
                 initialTasks.forEach(task => addDoc(tasksCol, task));
                 return; // Exit after adding initial tasks
            }

            onSnapshot(tasksCol, (snapshot) => {
                highPriorityTasks.innerHTML = '';
                mediumPriorityTasks.innerHTML = '';
                lowPriorityTasks.innerHTML = '';

                let totalTasks = 0;
                let completedTasks = 0;

                snapshot.docs.forEach(docSnap => {
                    const task = docSnap.data();
                    const taskElement = createTaskElement(task, docSnap.id);
                    totalTasks++;
                    if (task.completed) {
                        completedTasks++;
                    }
                    
                    switch (task.priority) {
                        case 'high': highPriorityTasks.appendChild(taskElement); break;
                        case 'medium': mediumPriorityTasks.appendChild(taskElement); break;
                        case 'low': lowPriorityTasks.appendChild(taskElement); break;
                        default: mediumPriorityTasks.appendChild(taskElement); break;
                    }
                });

                const percentage = totalTasks > 0 ? Math.round((completedTasks / totalTasks) * 100) : 0;
                progressBar.style.width = `${percentage}%`;
                progressText.textContent = `${percentage}% Complete`;
            });
        };

        addTaskForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const title = newTaskInput.value.trim();
            const priority = newTaskPriority.value;
            if (title && userId) {
                addDoc(collection(db, `artifacts/${appId}/users/${userId}/tasks`), { title, completed: false, priority, notes: '', subtasks: [], recommendations: '' });
                newTaskInput.value = '';
            }
        });
        
        // --- TASK DETAIL MODAL ---
        const taskDetailModal = document.getElementById('task-detail-modal');
        const closeTaskModalBtn = document.getElementById('close-task-modal-btn');
        const taskModalTitle = document.getElementById('task-modal-title');
        const taskModalRecs = document.getElementById('task-modal-recommendations');
        const taskModalNotes = document.getElementById('task-modal-notes');
        const taskModalSubtasks = document.getElementById('task-modal-subtasks');
        const addSubtaskForm = document.getElementById('add-subtask-form');
        const newSubtaskInput = document.getElementById('new-subtask-input');
        const taskModalCompleteBtn = document.getElementById('task-modal-complete-btn');
        const taskModalDeleteBtn = document.getElementById('task-modal-delete-btn');
        let currentTaskId = null;

        const openTaskDetailModal = async (taskId) => {
            currentTaskId = taskId;
            const taskDocRef = doc(db, `artifacts/${appId}/users/${userId}/tasks`, taskId);
            const taskSnap = await getDoc(taskDocRef);
            if (!taskSnap.exists()) return;
            
            const task = taskSnap.data();
            
            taskModalTitle.textContent = task.title;
            taskModalRecs.innerHTML = task.recommendations || '<p>No recommendations for this task.</p>';
            taskModalNotes.value = task.notes || '';
            
            // Render subtasks
            renderSubtasks(task.subtasks || []);

            // Update complete button state
            const completeText = taskModalCompleteBtn.querySelector('.complete-text');
            const incompleteText = taskModalCompleteBtn.querySelector('.incomplete-text');
            if (task.completed) {
                completeText.classList.add('hidden');
                incompleteText.classList.remove('hidden');
            } else {
                completeText.classList.remove('hidden');
                incompleteText.classList.add('hidden');
            }

            taskDetailModal.classList.remove('opacity-0', 'pointer-events-none');
            taskDetailModal.querySelector('.modal-content').classList.remove('scale-95');
        };

        const closeTaskDetailModal = () => {
            taskDetailModal.classList.add('opacity-0', 'pointer-events-none');
            taskDetailModal.querySelector('.modal-content').classList.add('scale-95');
            currentTaskId = null;
        };

        const renderSubtasks = (subtasks) => {
            taskModalSubtasks.innerHTML = '';
            if (!subtasks || subtasks.length === 0) {
                taskModalSubtasks.innerHTML = '<p class="text-sm text-secondary">No sub-tasks yet.</p>';
                return;
            }
            subtasks.forEach((subtask, index) => {
                const div = document.createElement('div');
                div.className = 'flex items-center p-2 rounded-lg'
                div.style.backgroundColor = 'var(--bg-primary)';
                div.innerHTML = `
                    <input type="checkbox" id="subtask-${index}" class="subtask-checkbox h-4 w-4 rounded border-gray-300 focus:ring-0" style="color: var(--text-accent)" ${subtask.done ? 'checked' : ''}>
                    <label for="subtask-${index}" class="ml-3 block text-sm subtask-text flex-grow">${subtask.text}</label>
                    <button data-index="${index}" class="delete-subtask-btn ml-auto text-secondary hover:text-red-500 text-xs"><i class="fas fa-times"></i></button>
                `;
                taskModalSubtasks.appendChild(div);
            });
        };

        taskModalSubtasks.addEventListener('change', async (e) => {
            if (e.target.matches('.subtask-checkbox')) {
                const taskDocRef = doc(db, `artifacts/${appId}/users/${userId}/tasks`, currentTaskId);
                const taskSnap = await getDoc(taskDocRef);
                const task = taskSnap.data();
                const subtaskIndex = Array.from(taskModalSubtasks.querySelectorAll('.subtask-checkbox')).indexOf(e.target);
                task.subtasks[subtaskIndex].done = e.target.checked;
                await updateDoc(taskDocRef, { subtasks: task.subtasks });
            }
        });

        taskModalSubtasks.addEventListener('click', async (e) => {
             if (e.target.closest('.delete-subtask-btn')) {
                const button = e.target.closest('.delete-subtask-btn');
                const indexToDelete = parseInt(button.dataset.index);
                const taskDocRef = doc(db, `artifacts/${appId}/users/${userId}/tasks`, currentTaskId);
                const taskSnap = await getDoc(taskDocRef);
                const task = taskSnap.data();
                task.subtasks.splice(indexToDelete, 1);
                await updateDoc(taskDocRef, { subtasks: task.subtasks });
                renderSubtasks(task.subtasks);
             }
        });

        addSubtaskForm.addEventListener('submit', async (e) => {
            e.preventDefault();
            const text = newSubtaskInput.value.trim();
            if (!text || !currentTaskId) return;
            
            const taskDocRef = doc(db, `artifacts/${appId}/users/${userId}/tasks`, currentTaskId);
            const taskSnap = await getDoc(taskDocRef);
            const task = taskSnap.data();
            const newSubtasks = task.subtasks || [];
            newSubtasks.push({ text, done: false });
            await updateDoc(taskDocRef, { subtasks: newSubtasks });
            renderSubtasks(newSubtasks);
            newSubtaskInput.value = '';
        });

        taskModalNotes.addEventListener('blur', async () => {
            if (!currentTaskId) return;
            const taskDocRef = doc(db, `artifacts/${appId}/users/${userId}/tasks`, currentTaskId);
            await updateDoc(taskDocRef, { notes: taskModalNotes.value });
        });

        taskModalCompleteBtn.addEventListener('click', async () => {
            if (!currentTaskId) return;
            const taskDocRef = doc(db, `artifacts/${appId}/users/${userId}/tasks`, currentTaskId);
            const taskSnap = await getDoc(taskDocRef);
            const task = taskSnap.data();
            await updateDoc(taskDocRef, { completed: !task.completed });
            closeTaskDetailModal();
        });

        taskModalDeleteBtn.addEventListener('click', () => {
            closeTaskDetailModal();
            openDeleteModal(`Are you sure you want to permanently delete this task and all its details?`, () => {
                deleteDoc(doc(db, `artifacts/${appId}/users/${userId}/tasks`, currentTaskId));
            });
        });

        closeTaskModalBtn.addEventListener('click', closeTaskDetailModal);


        // --- GUEST LIST LOGIC ---
        const guestListBody = document.getElementById('guest-list-body');
        const addGuestForm = document.getElementById('add-guest-form');
        const guestNameInput = document.getElementById('guest-name');
        const guestEmailInput = document.getElementById('guest-email');
        const guestCountSpan = document.getElementById('guest-count');

        const loadGuests = () => {
            if (!userId) return;
            const guestsCol = collection(db, `artifacts/${appId}/users/${userId}/guests`);
            onSnapshot(guestsCol, (snapshot) => {
                guestListBody.innerHTML = '';
                guestCountSpan.textContent = snapshot.size;
                snapshot.docs.forEach(docSnap => {
                    const guest = docSnap.data();
                    const tr = document.createElement('tr');
                    tr.className = 'border-b hover:bg-gray-50 dark:hover:bg-gray-800';
                    tr.style.borderColor = 'var(--border-color)';
                    tr.innerHTML = `
                        <td class="p-2">${guest.name}</td>
                        <td class="p-2">${guest.email}</td>
                        <td class="p-2 text-center flex justify-center items-center gap-2">
                            <button class="send-invite-btn text-white bg-green-500 hover:bg-green-600 px-3 py-1 text-sm rounded-md transition-colors"><i class="fas fa-paper-plane mr-1"></i> Invite</button>
                            <button class="delete-guest-btn text-secondary hover:text-red-500 px-2 py-1 rounded-md"><i class="fas fa-trash-alt"></i></button>
                        </td>
                    `;
                    tr.querySelector('.send-invite-btn').addEventListener('click', () => sendInvitation(guest.email, guest.name));
                    tr.querySelector('.delete-guest-btn').addEventListener('click', () => openDeleteModal(`Are you sure you want to remove ${guest.name} from the guest list?`, () => deleteDoc(doc(guestsCol, docSnap.id))));
                    guestListBody.appendChild(tr);
                });
            });
        };

        addGuestForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const name = guestNameInput.value.trim();
            const email = guestEmailInput.value.trim();
            if (name && email && userId) {
                addDoc(collection(db, `artifacts/${appId}/users/${userId}/guests`), { name, email, status: 'Pending' });
                guestNameInput.value = '';
                guestEmailInput.value = '';
            }
        });
        
        const getInvitationHTML = (guestName) => {
            return `
            <!DOCTYPE html>
            <html lang="en">
            <head>
                <meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0">
                <style>
                    body { font-family: 'Inter', sans-serif; background-color: #FDF8F0; color: #4A4A4A; margin: 0; padding: 0; -webkit-font-smoothing: antialiased; }
                    .container { max-width: 600px; margin: auto; background-color: #FDF8F0; }
                    .header { background-color: #FAEBD7; text-align: center; padding: 40px 20px; }
                    .font-display { font-family: 'Playfair Display', serif; }
                    .font-thai { font-family: 'Sarabun', sans-serif; }
                    h1 { font-family: 'Playfair Display', serif; color: #8B4513; margin: 0; }
                    p { line-height: 1.6; }
                    .center { text-align: center; }
                    .details { display: flex; justify-content: space-around; text-align: center; margin-top: 30px; padding: 0 20px; }
                    .card { background-color: rgba(255, 255, 255, 0.7); padding: 20px; border-radius: 12px; width: 45%; box-shadow: 0 4px 6px rgba(0,0,0,0.05); }
                    .footer { text-align: center; padding: 20px; font-size: 14px; color: #666; }
                </style>
            </head>
            <body>
                <div class="container">
                    <div class="header">
                        <p style="font-size: 18px; color: #A0522D;">WE ARE GETTING MARRIED</p>
                        <p class="font-thai" style="font-size: 18px; color: #A0522D;">เรากำลังจะแต่งงาน</p>
                        <h1 style="font-size: 60px; margin-top: 10px;">Phai & Dawid</h1>
                        <h1 class="font-thai" style="font-size: 50px;">ไผ่ & ดาวิด</h1>
                        <div style="width: 80px; height: 1px; background-color: #A0522D; margin: 20px auto;"></div>
                        <p style="font-size: 18px; color: #A0522D;">We joyfully invite you to celebrate our wedding</p>
                        <p class="font-thai" style="font-size: 18px; color: #A0522D;">ขอเชิญมาร่วมเป็นเกียรติในงานมงคลสมรสของเรา</p>
                        <p class="font-display" style="font-size: 24px; color: #8B4513; margin-top: 10px;">19 December 2025</p>
                    </div>
                    <div style="padding: 30px 20px;">
                        <div class="center" style="margin-bottom: 40px;">
                            <h2 class="font-display" style="font-size: 28px; color: #8B4513;">Dear ${guestName},</h2>
                            <h3 class="font-thai" style="font-size: 24px; color: #8B4513;">เรียน คุณ${guestName}</h3>
                        </div>
                        <div class="center">
                            <h2 class="font-display" style="font-size: 32px; color: #8B4513;">Two Hearts, Two Cultures, One Love</h2>
                            <p class="font-thai" style="font-size: 22px; color: #8B4513; margin-bottom: 20px;">สองหัวใจ สองวัฒนธรรม หนึ่งความรัก</p>
                            <p style="max-width: 500px; margin: 0 auto;">From the fields of Poland to the vibrant heart of Thailand, our journey has led us to this beautiful moment. We are thrilled to invite you to be part of our special day as we join our lives, families, and traditions.</p>
                            <p class="font-thai" style="margin-top: 10px; max-width: 500px; margin: 10px auto 0 auto;">จากการเดินทางจากโปแลนด์สู่ใจกลางของประเทศไทยที่สดใส ได้นำเรามาสู่ช่วงเวลาที่สวยงามนี้ เรามีความยินดีเป็นอย่างยิ่งที่จะเรียนเชิญท่านมาเป็นส่วนหนึ่งในวันพิเศษของเรา เพื่อร่วมเฉลิมฉลองการเริ่มต้นชีวิตคู่และครอบครัวของเรา</p>
                        </div>
                        <div class="details">
                            <div class="card">
                                <h3 class="font-display">Thai Ceremony</h3>
                                <p class="font-thai">พิธีมงคลสมรส</p>
                                <p style="font-weight: bold;">Friday, 19 Dec (AM)</p>
                                <p style="font-size: 14px;">Hotel Mirror Mirror</p>
                            </div>
                            <div class="card">
                                <h3 class="font-display">Western Celebration</h3>
                                <p class="font-thai">งานเลี้ยงฉลอง</p>
                                <p style="font-weight: bold;">Friday, 19 Dec (PM)</p>
                                <p style="font-size: 14px;">Hotel Mirror Mirror</p>
                            </div>
                        </div>
                        <div class="center" style="margin-top: 40px;">
                            <p>Kindly RSVP by November 1st, 2025.</p>
                            <p class="font-thai">กรุณาตอบกลับภายในวันที่ 1 พฤศจิกายน 2568</p>
                        </div>
                    </div>
                    <div class="footer">
                        <p class="font-display" style="font-size: 24px; color: #8B4513;">Phai & Dawid</p>
                    </div>
                </div>
            </body>
            </html>`;
        };

        const sendInvitation = (email, name) => {
            const subject = "You're Invited! | Phai & Dawid's Wedding";
            const body = getInvitationHTML(name);
            const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
            window.open(mailtoLink, '_blank');
        };

        window.onload = () => {
            showTab('dashboard');
            performAuth();
        };

    </script>
</body>
</html>
