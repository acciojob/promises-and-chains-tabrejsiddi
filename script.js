document.addEventListener("DOMContentLoaded", () => {
  const btn = document.getElementById("btn");

  btn.addEventListener("click", function (e) {
    e.preventDefault();

    const name = document.getElementById("name").value.trim();
    const age = document.getElementById("age").value.trim();

    if (!name || !age) {
      alert("Please enter valid details");
      return;
    }

    const ageNum = Number(age);

    const checkVoting = new Promise((resolve, reject) => {
      setTimeout(() => {
        if (ageNum > 18) {
          resolve(`Welcome, ${name}. You can vote.`);
        } else {
          reject(`Oh sorry ${name}. You aren't old enough.`);
        }
      }, 4000);
    });

    checkVoting
      .then((msg) => alert(msg))
      .catch((msg) => alert(msg));
  });
});