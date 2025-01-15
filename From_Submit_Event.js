<!DOCTYPE html>
<html>
<head>
  <title>DOM Event Handling</title>
</head>
<body>
  <div>
    <h1>Programming Language</h1>
    <form action="">
        
            <label for="name">Name</label>
            <input type="text" for="name" name="name"><br>
      
            <label for="email">Email</label>
            <input type="email" for="email" name="email"><br>
        
            <label for="pass">Password</label>
            <input type="password" for="pass" name="pass"><br>
      
        
        <br><button type="submit" value="submit" id="submit">submit</button>

    </form>
    <script>
      const form=document.querySelector("form");
      const name=form.querySelector("input[name=name]");
      const email=form.querySelector("input[name=email]");
      const password=form.querySelector("input[name=pass]");
      const submitt=form.querySelector("button");
      form.addEventListener("submit",(e)=>{
        e.preventDefault();
        const UserInfo={
            name:name.value,
            email:email.value,
            password:password.value,

        };
        console.log(UserInfo);
        name.value="";
        email.value="";
        password.value="";


      });
    </script>
</body>
</html>
