function showMaterials(subject) {
    // Get the sidebar and subject title elements
    const sidebar = document.getElementById('materialSidebar');
    const subjectTitle = document.getElementById('subjectTitle');
    const materialList = document.getElementById('materialList');
  
    // Define materials for each subject
    const materials = {
      django: ['Introduction to Django', 'Django Models', 'Django Views', 'Django Templates'],
      java: ['Java Basics', 'Object-Oriented Programming', 'Exception Handling', 'Java Collections'],
      spring: ['Spring Boot Introduction', 'Dependency Injection', 'Spring MVC', 'Spring Data JPA'],
      react: ['React Components', 'React State and Props', 'React Hooks', 'React Router'],
      nodejs: ['Node.js Basics', 'Express Framework', 'RESTful APIs', 'Middleware in Node.js'],
      angular: ['Angular Components', 'Directives and Pipes', 'Angular Services', 'Routing in Angular']
    };
  
    // Set the subject title and materials based on the clicked button
    subjectTitle.textContent = subject.charAt(0).toUpperCase() + subject.slice(1) + ' Materials';
    materialList.innerHTML = ''; // Clear the previous list
    materials[subject].forEach(material => {
      const li = document.createElement('li');
      li.textContent = material;
      materialList.appendChild(li);
    });
  
    // Display the sidebar
    sidebar.classList.add('sidebar-open');
}
  
// Close sidebar
function closeSidebar() {
  const sidebar = document.getElementById('materialSidebar');
  sidebar.classList.remove('sidebar-open');
}
  
// Close the sidebar if clicked outside the content (optional)
window.onclick = function(event) {
    const sidebar = document.getElementById('materialSidebar');
    if (event.target == sidebar) {
      sidebar.classList.remove('sidebar-open');
    }
};
