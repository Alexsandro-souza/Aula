<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="shortcut icon" href="img/foto.jfif" type="image/x-icon" />
    <title>Treinando javascript</title>
</head>
<body>
<style>
    html,body{height: 100%}

    .test{background-color: red; 
    width: 50%; 
    margin: 0 auto; 
    height: 50%;
    position: relative; 
    top: 5%}

    .hide{display: none}

    span{
        cursor: pointer;
    }


</style>
        
    <main>
        <h2>Texto de exemplo <span>Ver mais!</span></h2>
        <div class="test">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            uia, praesentium adipisci odit recusandae, quasi culpa ducimus
             rerum facilis illum quas in dolores qui odio esse quam mollitia
              temporibus earum veniam. lore</p>
        </div>
        <section>
            <h2>tabela</h2>
            <table border="2">
                <thead>
                    <tr>
                        <th>Estados</th>
                        <th>Siglas</th>
                        <th>Capitais</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Acre</td>
                        <td>AC</td>
                        <td>Rio branco</td>
                    </tr>
                    <tr>
                        <td>Amapá</td>
                        <td>Ap</td>
                        <td>Macapá</td>
                    </tr>
                </tbody>
            </table>
        </section>
    </main>
      
    
    <script src="script.js"></script>
</body>
</html>