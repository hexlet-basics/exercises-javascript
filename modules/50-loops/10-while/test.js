<?php

namespace HexletBasics;

require __DIR__ . '/../../../vendor/autoload.php';

use function HexletBasics\Asserts\expectOutputString;

$path = __DIR__ . '/index.php';
require $path;

$expected = "3\n2\n1\nfinished!";
printNumbers(3);

expectOutputString($expected, function () use ($path) {
    printNumbers(3);
});
