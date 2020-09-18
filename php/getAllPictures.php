<?php
session_start();

$obj = new stdClass();

$etage = $_GET['etage'];

if (empty(trim($etage)) || !preg_match('/^\d$/', $etage)) {
    exit();
}

$scanArray = scandir('../files/img/PhotosAppart/etage' . $etage, 1);
unset($scanArray[count($scanArray) - 1]);
unset($scanArray[count($scanArray) - 1]);
$obj->scanIMG = $scanArray;

header('Cache-Control: no-cache, must-revalidate');
header('Expires: Mon, 26 Jul 1997 05:00:00 GMT');
header('Content-type: application/json');

echo json_encode($obj);