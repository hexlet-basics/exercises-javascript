<?php

namespace HexletBasics;

require __DIR__ . '/../../../vendor/autoload.php';

use Assert\Assert;

$path = __DIR__ . '/index.php';
require $path;

$str = 'Sansa Stark';
$result1 = isArgumentsForSubstrCorrect($str, -1, 3); // => false
Assert::that($result1)->false();
$result2 = isArgumentsForSubstrCorrect($str, 4, 100); // => false
Assert::that($result2)->false();
$result3 = isArgumentsForSubstrCorrect($str, 10, 10); // => false
Assert::that($result3)->false();
$result4 = isArgumentsForSubstrCorrect($str, 11, 1); // => false
Assert::that($result4)->false();
$result5 = isArgumentsForSubstrCorrect($str, 3, 3); // => true
Assert::that($result5)->true();
