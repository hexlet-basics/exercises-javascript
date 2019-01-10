<?php

namespace HexletBasics;

require __DIR__ . '/../../../vendor/autoload.php';

use Assert\Assert;

$path = __DIR__ . '/index.php';
require $path;

Assert::that(sumOfSeries(1, 1))->eq(1);
Assert::that(sumOfSeries(1, 2))->eq(3);
Assert::that(sumOfSeries(7, 9))->eq(24);
