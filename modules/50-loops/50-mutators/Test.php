<?php

namespace HexletBasics;

require __DIR__ . '/../../../vendor/autoload.php';

use Assert\Assert;

$path = __DIR__ . '/index.php';
require $path;

$str = 'If I look back I am lost';
$result1 = filterString($str, 'I');
Assert::that($result1)->eq('f  look back  am lost');
$result2 = filterString($str, 'o');
Assert::that($result2)->eq('If I lk back I am lst');
