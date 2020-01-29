/**
 * This kata is the first beta kata I've attempted, though it appears it will
 * earn the 7 kyu rating at the time of my attempt. It prints the maximum number
 * among five columns from a single table.
 */

SELECT MAX(number1) AS maxnum1,
       MAX(number2) AS maxnum2,
       MAX(number3) AS maxnum3,
       MAX(number4) AS maxnum4,
       MAX(number5) AS maxnum5
FROM numbers;