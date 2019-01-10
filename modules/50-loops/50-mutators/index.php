<?php

function filterString($str, $char)
{
    $index = 0;
    $length = strlen($str);
    $result = '';
    while ($index < $length) {
        $currentChar = $str[$index];
        if ($currentChar !== $char) {
            $result = "{$result}{$currentChar}";
        }
        $index++;
    }

    return $result;
}
