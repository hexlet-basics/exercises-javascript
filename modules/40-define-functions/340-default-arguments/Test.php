<?php

namespace HexletBasics;

use Assert\Assert;

require __DIR__ . '/../../../vendor/autoload.php';

$path = __DIR__ . '/index.php';
require $path;

$expected = 'Tywin Lannister';
$actual = customParentFor('Cersei Lannister');
print_r(customParentFor('Cersei Lannister'));
Assert::that($actual)->contains($expected);
