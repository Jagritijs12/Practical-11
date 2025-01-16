function clearScreen() {
    document.getElementById("result").value = "";
  }
  
  function appendValue(value) {
    document.getElementById("result").value += value;
  }
  
  function calculate() {
    try {
      document.getElementById("result").value = eval(document.getElementById("result").value);
    } catch (e) {
      alert("Invalid Input");
    }
  }
  
