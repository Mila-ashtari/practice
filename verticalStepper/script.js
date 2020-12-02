
const stepsState = [
    {
      label: "Select campaign settings",
      completed: false,
      current: true
    },
    {
      label: "Create an ad group",
      completed: false,
      current: false
    },
    {
      label: "Create an ad",
      completed: false,
      current: false
    }
  ];
  
  const root = document.getElementById("root");
  const createStep = (step, index) => {
    const showClass = step.current ? "" : "hidden";
    return `
            <div data-step="${index}" class="stepContainer">
              <label>${step.label}</label>
              <input type="text" class="${showClass}"></input>
              <div class="buttonContainer ${showClass}">
                <button class="back">Back</button>
                <button class="next">Next</button>
              </div>
            </div>
            `;
  };
  
  root.innerHTML = stepsState.map((step) => createStep(step)).join("");
  
  const nextButtons = document.getElementsByClassName("next");
  
  for (const button of nextButtons) {
    button.addEventListener("click", (e) => {
      e.preventDefault();
      const step = e.currentTarget;
      console.log(step);
    });
  }
  