<?php

$post = json_decode(file_get_contents('php://input'), true);
$date = strtotime(date('Y-m-d H:i:s'));
$imgName = 'upload/'.$date.'.png';
// echo $imgName;
function base64_to_jpeg($base64_string, $output_file)
{
    $ifp = fopen($output_file, 'wb');
    $data = explode(',', $base64_string);
    fwrite($ifp, base64_decode($data[1]));
    fclose($ifp);

    return $output_file;
}
echo base64_to_jpeg($post['data'], $imgName);
die;
