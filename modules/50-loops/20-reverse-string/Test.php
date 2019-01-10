<?php

namespace HexletBasics;

require __DIR__ . '/../../../vendor/autoload.php';

use Assert\Assert;

$path = __DIR__ . '/index.php';
require $path;

Assert::that(mysubstr('got', 3))->eq('got');
Assert::that(mysubstr('got', 2))->eq('go');
Assert::that(mysubstr('got', 1))->eq('g');
