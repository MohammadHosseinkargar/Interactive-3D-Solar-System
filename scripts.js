document.querySelectorAll('.planet').forEach(planet => {
    planet.addEventListener('click', function() {
        const planetName = this.classList[1];
        document.getElementById('planet-name').innerText = planetName.charAt(0).toUpperCase() + planetName.slice(1);
        document.getElementById('planet-info').innerText = `Information about ${planetName}.`;
        document.getElementById('planet-info-modal').style.display = 'block';
    });
});

document.querySelector('.close').addEventListener('click', function() {
    document.getElementById('planet-info-modal').style.display = 'none';
});
