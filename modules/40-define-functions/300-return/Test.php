<?php

namespace HexletBasics;

require __DIR__ . '/../../../vendor/autoload.php';

use Assert\Assert;
use function HexletBasics\Asserts\expectOutputString;

$path = __DIR__ . '/index.php';
require $path;

$expected = 35;
$actual = getParentNamesTotalLength('Daenerys Targaryen');
Assert::that($actual)->eq($expected);
