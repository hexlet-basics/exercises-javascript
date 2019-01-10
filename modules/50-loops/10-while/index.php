<?php

function printNumbers($firstNumber)
{
    // BEGIN
    $i = $firstNumber;
    while ($i >= 1) {
        print_r("{$i}\n");
        $i = $i - 1;
    }
    print_r('finished!');
    // END
}
