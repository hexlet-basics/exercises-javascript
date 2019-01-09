<?php

namespace HexletBasics;

require __DIR__ . '/../../../vendor/autoload.php';

use function HexletBasics\Asserts\expectOutputString;

$path = __DIR__ . '/index.php';
require $path;

$expected = '0-0-0-0-0-';
printSeq('0-', 5);

expectOutputString($expected, function () use ($path) {
    printSeq('0-', 5);
});
