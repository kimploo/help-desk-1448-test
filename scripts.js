const app = {
  setOnClickListenerOne: () => {
    document.querySelector("#one").onclick = function () {
      alert("hello world one");
    };
  },
  setOnClickListenerTwo: () => {
    document.querySelector("#two").addEventListener("click", function () {
      alert("hello world two");
    });
  },
};
app.setOnClickListenerOne();
app.setOnClickListenerTwo();
