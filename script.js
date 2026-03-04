const btn = document.getElementById("btn");

if (btn) {
  btn.addEventListener("click", function (e) {
    e.preventDefault();

    const name = document.getElementById("name").value.trim();
    const age = document.getElementById("age").value.trim();

    if (!name || !age) {
      alert("Please enter valid details");
      return;
    }

    const ageNum = Number(age);

    new Promise((resolve, reject) => {
      setTimeout(() => {
        if (ageNum > 18) {
          resolve(`Welcome, ${name}. You can vote.`);
        } else {
          reject(`Oh sorry ${name}. You aren't old enough.`);
        }
      }, 4000);
    })
      .then((msg) => alert(msg))
      .catch((msg) => alert(msg));
  });
}
