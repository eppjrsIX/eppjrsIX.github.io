document.addEventListener("DOMContentLoaded", function () {
  // Get the button and sections
  const getStartedButton = document.getElementById("getStartedButton");
  const digestiveSystemSection = document.getElementById(
    "digestiveSystemSection"
  );

  // Hide the sections initially
  // digestiveSystemSection.style.display = "none";

  // Add a click event listener to the "Get Started" button
  getStartedButton.addEventListener("click", function (e) {
    e.preventDefault();

    // Show the "Anatomy of Digestive System" section and scroll to it
    digestiveSystemSection.style.display = "block";
    digestiveSystemSection.scrollIntoView({ behavior: "smooth" });
  });
});
