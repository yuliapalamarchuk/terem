document.addEventListener("DOMContentLoaded", () => {
  async function submitForm(e) {
    e.preventDefault();
    const form = document.getElementById("myForm");

    const formData = new FormData(form);

    let jsonData = {};
    formData.forEach((value, key) => {
      jsonData[key] = value;
    });
    const jsonOutput = document.getElementById("jsonOutput");
    jsonOutput.textContent = JSON.stringify(jsonData, null, 2);
    let res = await fetch("/", {
      method: "GET",
    })
      .then((response) => response.text())
      .then((data) => {
        alert(data);
      })
      .catch((error) => {
        console.log("Error:", error);
      });
  }
  let form = document.querySelector("#myForm");
  form.addEventListener("submit", submitForm);
});
