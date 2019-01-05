<?php

use function HexletBasics\Functions\parentFor;

// BEGIN
function customParentFor($child, $parent = 'father')
{
    return parentFor($child, $parent);
}
// END
