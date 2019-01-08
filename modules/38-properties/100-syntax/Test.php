<?php

namespace HexletBasics;

require __DIR__ . '/../../../vendor/autoload.php';

use function HexletBasics\Asserts\expectOutputString;

$path = __DIR__ . '/index.php';

$expected = 'A MIND NEEDS BOOKS AS A SWORD NEEDS A WHETSTONE, IF IT IS TO KEEP ITS EDGE.';
require $path;

expectOutputString($expected, function () use ($path) {
    require $path;
});
