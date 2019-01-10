<?php

// BEGIN
function isArgumentsForSubstrCorrect($str, $index, $length)
{
    if ($index < 0) {
        return false;
    } elseif ($length < 0) {
        return false;
    } elseif ($index > strlen($str) - 1) {
        return false;
    } elseif ($index + $length > strlen($str)) {
        return false;
    }

    return true;
}
// END
