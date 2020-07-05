<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Send Email</title>
    <script src="//ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js"></script>
    <script>
       $(document).ready(function () {

            $('#submit').click(function () {
                var name = $('#name').val();
                var email = $('#email').val();

                var varData = 'name=' + name + '&email=' + email;
                $.ajax({
                    type:'POST',
                    url:'send.php',
                    data: varData,
                    success: function () {
                        alert("It was a success");
                    }
                })
            })
        })
    </script>
</head>
<body>

    <label>Name</label>
    <input type="text" name="name" /><br />
    <label>Email</label>
    <input type="email" name="email"/>
    <button id="submit">Send Mail</button>


</body>
</html>
