<?php
session_start();

$obj = new stdClass();

$scanArray = scandir('../files/img/PhotosAppart/etage2', 1);
unset($scanArray[count($scanArray) - 1]);
unset($scanArray[count($scanArray) - 1]);
$obj->scanIMG = $scanArray;

header('Cache-Control: no-cache, must-revalidate');
header('Expires: Mon, 26 Jul 1997 05:00:00 GMT');
header('Content-type: application/json');

echo json_encode($obj);