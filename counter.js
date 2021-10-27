var c = 0;
function addPlus() {
  let counters = Array.from(document.getElementsByClassName("counter"));
  let plusButton = Array.from(
    document.getElementsByClassName("counter-plus-btn")
    );
    let minusButton = Array.from(
      document.getElementsByClassName("counter-minus-btn")
      );

  counters.forEach((counter) => {
    counter.innerHTML = c;
  });

  plusButton.forEach((button) => {
    button.addEventListener("click", (x) => {
      c++;
      counters.forEach((counter) => {
        counter.innerHTML = c;
      });
    });
  });

  minusButton.forEach((button) => {
    button.addEventListener("click", (x) => {
      c--;
      counters.forEach((counter) => {
        counter.innerHTML = c;
      });
    });
  });
}

addPlus();
