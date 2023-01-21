const form = document.querySelector("#form-habits")
const nlwSetup = new NLWSetup(form)
const button = document.querySelector("header button")

button.addEventListener("click", add)
form.addEventListener("change", save)

function add() {
  const today = new Date().toLocaleDateString("pt-bt").slice(0, -5)
  const dayExists = nlwSetup.dayExists(today)

  if (dayExists) {
    alert("Data já Existe! ⛔")
    return
  }

  nlwSetup.addDay(today)
  alert("Adicionado com Sucesso! ✅")
}

function save(){
  localStorage.setItem("NLWSetup@habbits", JSON.stringify(nlwSetup.data))
}

/*
const data = {
  run: ["01-01", "01-02", "01-06"],
  water: ["01-04", "01-05"],
  food: ["01-01", "01-03"],
  journal: ["01-01", "01-02", "01-03", "01-05"],
  pills: ["01-04", "01-05"],
}
*/
const data = JSON.parse(localStorage.getItem("NLWSetup@habbits")) || {}
nlwSetup.setData(data)
nlwSetup.load()
