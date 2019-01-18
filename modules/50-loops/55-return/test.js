<?php

namespace HexletBasics;

require __DIR__ . '/../../../vendor/autoload.php';

use Assert\Assert;

$path = __DIR__ . '/index.php';
require $path;

Assert::that(doesContain('Renly', 'R'))->true();
Assert::that(doesContain('Renly', 'r'))->false();
Assert::that(doesContain('Tommy', 'm'))->true();
Assert::that(doesContain('Tommy', 'd'))->false();
