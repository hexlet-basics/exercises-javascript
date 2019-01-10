<?php

function getEvenNumbersUpTo($num)
{
    $counter = 1;
    $result = '';

    while ($counter <= $num) {
        if ($counter % 2 === 0) {
            $result = "{$result}{$counter},";
        }

        $counter += 1;
    }

    return $result;
}
