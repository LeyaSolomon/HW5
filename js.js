//Задание 1

document.addEventListener('DOMContentLoaded', function () {
    let count = 0;
    const button = document.getElementById('buttoon1');
    const display = document.getElementById('clicks');
    const message = document.getElementById('mes1');

    button.addEventListener('click', function () {
      count++;
      display.textContent = count;

      if (count >= 5) {
        button.disabled = true;
        button.textContent = "Попытки закончились:(";
        // mes1.textContent = "вы натыкали достаточно! пора передохнуть!!";
      }
    });
});

//Задание 2

  document.addEventListener('DOMContentLoaded', function () {
    let count = 20;
    const display = document.getElementById('timer1');
    const resetButton = document.getElementById('buttoon2');
    let interval;

    function startTimer() {
      interval = setInterval(function () {
        count--;
        display.textContent = count;

        if (count <= 0) {
          clearInterval(interval);
          display.textContent = "время истекло";
        }
      }, 1000);
    }

    resetButton.addEventListener('click', function () {
      clearInterval(interval);
      count = 10;
      display.textContent = count;
      startTimer();
    });

    startTimer();
});

//Задание 3

  document.addEventListener('DOMContentLoaded', function () {
    let count = 0;
    let interval;
    const display = document.getElementById('timer2');
    const startButton = document.getElementById('buttoon3');
    const stopButton = document.getElementById('buttoon4');
    const resetButton = document.getElementById('buttoon5');

    startButton.addEventListener('click', function () {
      if (!interval) {
        interval = setInterval(function () {
          count++;
          display.textContent = count;
        }, 1000);
      }
    });

    stopButton.addEventListener('click', function () {
      clearInterval(interval);
      interval = null;
    });

    resetButton.addEventListener('click', function () {
      clearInterval(interval);
      interval = null;
      count = 0;
      display.textContent = count;
    });
});