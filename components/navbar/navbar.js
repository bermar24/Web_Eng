fetch('components/navbar/navbar.html')
    .then(response => response.text())
    .then(data => document.getElementById('navbar').innerHTML = data)
    .catch(error => console.error('Error loading navbar:', error));

<!--function for open and close menubar-->
    function showMenubar() {
    const menubar = document.querySelector('.menubar')
    menubar.style.display = 'flex'
}
    function closeMenubar(){
    const menubar = document.querySelector('.menubar' )
    menubar.style.display = 'none'
}
