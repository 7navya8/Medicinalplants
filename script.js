fetch('plants.json')
  .then(response => response.json())
  .then(data => {
    const tbody = document.querySelector("#plantTable tbody");
    const searchBox = document.getElementById("searchBox");

    function displayPlants(plants) {
      tbody.innerHTML = "";
      plants.forEach(plant => {
        const row = document.createElement("tr");
        row.innerHTML = `
          <td>${plant.common_name}</td>
          <td>${plant.scientific_name}</td>
          <td>${plant.unii}</td>
          <td>${plant.wfo}</td>
        `;
        tbody.appendChild(row);
      });
    }

    searchBox.addEventListener("input", () => {
      const keyword = searchBox.value.toLowerCase();
      const filtered = data.filter(p =>
        p.common_name.toLowerCase().includes(keyword) ||
        p.scientific_name.toLowerCase().includes(keyword)
      );
      displayPlants(filtered);
    });

    displayPlants(data);
  });
