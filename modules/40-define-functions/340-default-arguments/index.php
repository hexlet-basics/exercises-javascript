<?php

use function HexletBasics\Functions\parentFor;

// BEGIN
function getCustomParentFor($child, $parent = 'father')
{
    return parentFor($child, $parent);
}
// END
