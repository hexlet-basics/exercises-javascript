<?php

namespace HexletBasics;

require __DIR__ . '/../../../vendor/autoload.php';

use Assert\Assert;

$path = __DIR__ . '/index.php';
require $path;


Assert::that(getAge(10))->eq(10);
Assert::that(getAge(9.1))->eq(9);
Assert::that(getAge(8.9))->eq(9);
Assert::that(getAge(8.5))->eq(8);
