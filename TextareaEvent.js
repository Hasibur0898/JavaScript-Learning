<!DOCTYPE html>
<html>
<head>
  <title>DOM Event Handling</title>
</head>
<body>
  <div>
    <h1>Programming Language</h1>
    <label for="textar">Review of W3Schools:</label> <br>
    <textarea id="textar" name="textar" rows="4" cols="50">
At w3schools.com you will learn how to make a website. They offer free tutorials in all web development technologies.
    </textarea><!--Textarea end-->
    <h1 id="textAreaText"></h1>
  </div>
  <script>
    // Select the textarea element
    const programs = document.querySelector("textarea");
    var Text=document.querySelector("#textAreaText");
    // Add an input event listener to capture dynamic changes
    programs.addEventListener("input", (event) => {
      // Log the current value of the textarea to the console
      console.clear();
      Text.innerHTML=event.target.value;
      
    });
  </script>
</body>
</html>
