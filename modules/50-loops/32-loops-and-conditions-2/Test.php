<?php

namespace HexletBasics;

require __DIR__ . '/../../../vendor/autoload.php';

use Assert\Assert;

$path = __DIR__ . '/index.php';
require $path;

Assert::that(getEvenNumbersUpTo(9))->eq("2,4,6,8,");
Assert::that(getEvenNumbersUpTo(15))->eq("2,4,6,8,10,12,14,");
Assert::that(getEvenNumbersUpTo(2))->eq("2,");
