<?php

use function HexletBasics\Functions\calculateDistanceBetweenTowns;

$from = 'The Twins';
$to = 'The Eyrie';

// BEGIN
$distance = calculateDistanceBetweenTowns("{$from}-{$to}");
print_r($distance);
// END
