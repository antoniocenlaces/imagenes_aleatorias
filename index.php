<?php
    $imagenes=["https://image.shutterstock.com/image-photo/young-woman-skateboarder-skateboarding-city-600w-664570948.jpg",
    "https://gratisography.com/wp-content/uploads/2019/05/shutterstock-its-not-stock-block-new.jpg",
    "https://www.cerotec.net/data/fotos/gratisography.jpg",
    "https://cdn.pixabay.com/photo/2019/09/29/20/34/athens-4514311__340.jpg",
    "https://cdn.pixabay.com/photo/2019/10/24/18/36/forest-4574893__340.jpg",
    "https://cdn.pixabay.com/photo/2015/09/26/13/25/halloween-959049__340.jpg",
    "https://cdn.pixabay.com/photo/2019/09/11/09/27/people-4468350__340.jpg",
    "https://cdn.pixabay.com/photo/2019/10/23/18/58/malai-4572548__340.jpg",
    "https://cdn.pixabay.com/photo/2019/06/25/05/19/waterfall-4297450__340.jpg",
    "https://cdn.pixabay.com/photo/2019/10/23/10/47/aesthetic-4571211__340.jpg",
    "https://cdn.pixabay.com/photo/2019/10/23/18/32/freudenberg-4572410__340.jpg"];
    $imagen=array_fill(0,3,null);
//    function existe($array,$valor) {
//        $existencia=0;
//        foreach ($array as $indice => $valor) {
//
//        }
//    }
    foreach ($imagen as $indice => $valor) {
       do {$posn=rand(0,count($imagenes)-1);}
       while (in_array($posn,$imagen));
//           $posn=rand(0,count($imagenes)-1);
       $imagen[$indice]=$posn;
    }
//    $imagen=array_rand($imagenes,3);
 //   var_dump($imagen);
//    var_dump($imagenes);
?>
<!doctype html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">

    <META HTTP-EQUIV=Refresh CONTENT="5; URL=index.php">
    <title>Imagenes aleatorias</title>
    <style>
        body {
            margin: 2rem 1%;
        }
        div {
            background-color: lightskyblue;
            float: left;
            margin: 0 1%;
            width: 30%;
        }
    </style>
</head>
<body>
<h1>Imágenes de archivo</h1>
    <div>
        <img src="<?=$imagenes[$imagen[0]]?>" alt="Imagen de archivo 1">
    </div>
    <div>
        <img src="<?=$imagenes[$imagen[1]]?>" alt="Imagen de archivo 2">
    </div>
    <div>
        <img src="<?=$imagenes[$imagen[2]]?>" alt="Imagen de archivo 3">
    </div>
</body>
</html>
