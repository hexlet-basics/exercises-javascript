<?php

use function HexletBasics\Functions\calculateDistance;

// BEGIN
$distance = calculateDistance('Winterfell', 'The Twins') + calculateDistance('The Twins', 'The Eyrie');
print_r($distance);
// END
