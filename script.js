function clearScreen() {
    document.getElementById("result").value = "";
  }
  
  function appendValue(value) {
    document.getElementById("result").value += value;
  }
  
  function calculate() {
    try {
      const result = eval(document.getElementById("result").value);
      if (isNaN(result) || !isFinite(result)) {
        throw new Error("Invalid calculation");
      }
      document.getElementById("result").value = result;
    } catch (e) {
      alert("Invalid Input");
      clearScreen();
    }
  }
  
