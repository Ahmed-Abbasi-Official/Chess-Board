    let tbody = document.querySelector("#tbody");
    let leftNumbersContainer = document.querySelector("#left_numbers");
    let rightNumbersContainer = document.querySelector("#right_numbers");
    let top_side = document.querySelector("#top_side");
    let down_side = document.querySelector("#down_side");

    const columns = ["A", "B", "C", "D", "E", "F", "G", "H"];
    const rows = [8, 7, 6, 5, 4, 3, 2, 1];

    for (let i = 0; i < 8; i++) {
      const tr = document.createElement("tr");

      for (let j = 0; j < 8; j++) {
        const td = document.createElement("td");

         if (i >= 0 && j >= 0) {
          td.style.padding = "0";
          td.style.backgroundColor = (i + j) % 2 === 0 ? "white" : "brown";
        }

        tr.appendChild(td);
      }
      
      tbody.appendChild(tr);
    }

    // Generate left and right-side numbers (8 to 1) dynamically
    rows.forEach(rowNumber => {
      const leftNumberDiv = document.createElement("div");
      leftNumberDiv.classList.add("side-number");
      leftNumberDiv.textContent = rowNumber;
      leftNumbersContainer.appendChild(leftNumberDiv);

      const rightNumberDiv = document.createElement("div");
      rightNumberDiv.classList.add("side-number");
      rightNumberDiv.textContent = rowNumber;
      rightNumbersContainer.appendChild(rightNumberDiv);
    });

    columns.forEach(rowNumber => {
      const leftNumberDiv = document.createElement("div");
      leftNumberDiv.style.transform="rotate(180deg)"
      leftNumberDiv.classList.add("side-number");
      leftNumberDiv.textContent = rowNumber;
      top_side.appendChild(leftNumberDiv);

      const rightNumberDiv = document.createElement("div");
      rightNumberDiv.classList.add("side-number");
      rightNumberDiv.textContent = rowNumber;
      down_side.appendChild(rightNumberDiv);
    });