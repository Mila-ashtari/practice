
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
  

  const createStep = (step, index) => {
    const showClass = step.current ? "" : "hidden";
    return `
            <div class="stepContainer">
              <label>${step.label}</label>
              <input type="text" class="${showClass}"></input>
              <div class="buttonContainer ${showClass}">
                <button class="backButton" data-step="${index}" onclick="handleBackClick(event)">Back</button>
                <button class="nextButton" data-step="${index}" onclick="handleNextClick(event)">Next</button>
              </div>
            </div>
            `
  };
  const root = document.getElementById("root");
  root.innerHTML = stepsState.map((step, index) => createStep(step, index)).join("");

  const handleNextClick=(e)=>{
    e.preventDefault()
    const step = parseInt(e.target.dataset.step);
    const nextStep=step+1
    console.log(step, nextStep)
    stepsState[step].completed=true
    stepsState[step].current=false
    stepsState[nextStep].current=true
    root.innerHTML = stepsState.map((step, index) => createStep(step, index)).join("");
  }
  
  