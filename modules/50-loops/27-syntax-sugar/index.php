<?php

function countChars($str, $char)
{
    $index = strlen($str) - 1;
    $result = 0;
    while ($index >= 0) {
        if ($str[$index] === $char) {
            $result += 1;
        }
        $index -= 1;
    }

    return $result;
}
