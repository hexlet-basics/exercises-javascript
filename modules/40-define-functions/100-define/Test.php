<?php

namespace HexletBasics;

require __DIR__ . '/../../../vendor/autoload.php';

use function HexletBasics\Asserts\expectOutputString;

$path = __DIR__ . '/index.php';
require $path;

$expected = 'JAIME: Farewell, my friend...';
printJaimesLine('Farewell, my friend...');

expectOutputString($expected, function () use ($path) {
    printJaimesLine('Farewell, my friend...');
});
