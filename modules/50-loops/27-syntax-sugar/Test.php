<?php

namespace HexletBasics;

require __DIR__ . '/../../../vendor/autoload.php';

use Assert\Assert;

$path = __DIR__ . '/index.php';
require $path;

$str = 'If I look back I am lost';
$result1 = countChars($str, 'I');
Assert::that($result1)->eq(3);
$result2 = countChars($str, 'z');
Assert::that($result2)->eq(0);
$result3 = countChars($str, 'o');
Assert::that($result3)->eq(3);
