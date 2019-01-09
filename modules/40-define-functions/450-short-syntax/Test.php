<?php

namespace HexletBasics;

require __DIR__ . '/../../../vendor/autoload.php';

use Assert\Assert;
use function HexletBasics\Asserts\expectOutputString;

$path = __DIR__ . '/index.php';
require $path;

$expected = 'The age difference is 17';
$actual = getAgeDifference(2001, 2018);

print_r($actual);
Assert::that($actual)->contains($expected);

