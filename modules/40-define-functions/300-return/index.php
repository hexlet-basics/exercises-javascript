<?php

use function HexletBasics\Functions\parentFor;

// BEGIN
function getParentNamesTotalLength($child)
{
    $mother = parentFor($child, 'mother');
    $father = parentFor($child, 'father');
    return strlen($mother) + strlen($father);
}
// END
