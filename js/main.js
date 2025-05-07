function togglePassword() {
    const input = document.getElementById("password");
    const eyeOpen = document.getElementById("eye-open");
    const eyeClosed = document.getElementById("eye-closed");

    if (input.type === "password") {
      input.type = "text";
      eyeOpen.classList.add("hidden");
      eyeClosed.classList.remove("hidden");
    } else {
      input.type = "password";
      eyeOpen.classList.remove("hidden");
      eyeClosed.classList.add("hidden");
    }
  }

  // toggle sidebar
  const toggleButton = document.getElementById('toggleSidebar');
  const sidebar = document.getElementById('sidebar');

  // Toggle sidebar visibility
  toggleButton.addEventListener('click', (e) => {
    e.stopPropagation(); // Prevent the click from bubbling to document
    sidebar.classList.toggle('-translate-x-full');
  });

  // Close sidebar when clicking outside of it
  document.addEventListener('click', (e) => {
    const isClickInsideSidebar = sidebar.contains(e.target);
    const isClickOnToggle = toggleButton.contains(e.target);

    if (!isClickInsideSidebar && !isClickOnToggle) {
      sidebar.classList.add('-translate-x-full'); // Hide sidebar
    }
  });

  //PROFILE DROPDOWN
  const toggle = document.getElementById('profile-toggle');
  const dropdown = document.getElementById('dropdown');
  const container = document.getElementById('profile-container');

  toggle.addEventListener('click', () => {
    dropdown.classList.toggle('hidden');
  });

  document.addEventListener('click', (e) => {
    if (!container.contains(e.target)) {
      dropdown.classList.add('hidden');
    }
  });

  // customer js
  let showingContent1 = true;

  function toggleContent() {
    const content1 = document.getElementById('content1');
    const content2 = document.getElementById('content2');
    const header = document.getElementById('header');

    if (showingContent1) {
      content1.classList.add('hidden');
      content2.classList.remove('hidden');
      header.textContent = '새글쓰기';
    } else {
      content1.classList.remove('hidden');
      content2.classList.add('hidden');
      header.textContent = '고객센터';
    }

    showingContent1 = !showingContent1;
  }