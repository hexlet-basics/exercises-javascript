<?php

namespace HexletBasics;

require __DIR__ . '/../../../vendor/autoload.php';

use Assert\Assert;
use function HexletBasics\Asserts\expectOutputString;

$path = __DIR__ . '/index.php';
require $path;

$expected = '01-01-2001';
$actual = getFormattedBirthday(1, 1, 2001);

Assert::that($actual)->contains($expected);
