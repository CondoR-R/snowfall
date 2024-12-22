"use strict";

const snowflakeContainer = document.querySelector("#snowflake-container");

function generateSnowflake() {
  const snowflake = document.createElement("div");
  snowflake.classList.add("snowflake");
  snowflake.textContent = "❄️";

  const fontSize = Math.random() * 10 + 10;
  const position = Math.random() * 100;
  const speed = Math.random() * 5 + 5;
  const opacity = Math.random() * 0.5 + 0.5;

  snowflake.style.fontSize = `${fontSize}px`;
  snowflake.style.left = `${position}vw`;
  snowflake.style.animationDuration = `${speed}s`;
  snowflake.style.opacity = `${opacity}`;

  snowflakeContainer.append(snowflake);

  setTimeout(removeSnowflake, speed * 1000);

  function removeSnowflake() {
    snowflake.remove()
  }
}

setInterval(generateSnowflake, 100);
