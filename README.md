You are keeping score for a baseball game with strange rules.The game consists of several rounds, where the score of past rounds may affect future rounds scores.
At the beginning of the game, you start with an empty record. You are given a list of strings ops where ops[1] is the ith operation you must apply to the record and is one of the following:
1. An interger x - Record a new score of x.
2. "+" - Record a new score that is the sum of the prevoius two scores.It is guaranteed there will always be two previous scores.
3. "D" - Record a new score that is double the previous score. It is guaranteed there will be a previous score.
4. "C" - Invalidate the previous score, removing it from the record. It is guaranteed there will always be a previous score.
Return the sum of the scores on the record.