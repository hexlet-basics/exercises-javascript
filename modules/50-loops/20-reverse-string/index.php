<?php

// BEGIN
function mysubstr($str, $length)
{
    $index = 0;
    $result = '';
    while ($index < $length) {
        $currentChar = $str[$index];
        $result = "{$result}{$currentChar}";
        $index = $index + 1;
    }

    return $result;
}
// END
