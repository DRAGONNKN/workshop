<!DOCTYPE html>
<html lang="en">
<head>
    <title>Error</title>
    <link rel="stylesheet" href="../style.css">
</head>
<body class="text-center">
    <%
    String username = request.getParameter("username");
    String password = request.getParameter("password");

    // Replace with actual username and password values
    final String USERNAME = "user";
    final String PASSWORD = "password";

    if (USERNAME.equals(username) && PASSWORD.equals(password)) {
    %>
            <h1>Welcome, <%= username %>!</h1>
            <a href="../index.jsp">Go to Home</a>
    <%
        } else {
    %>
            <h1>Invalid credentials</h1>
            <a href="../login.jsp">Try Again</a>
    <%
        }
    %>
</body>
</html>
