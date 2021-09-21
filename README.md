###Requiement 
- Nodejs and npm https://docs.npmjs.com/downloading-and-installing-node-js-and-npm

I. Theory Quiz:
Make a database diagram design for a restaurant application with the purpose to make their
workflow more efficient and organized.
Explain the technology that you would use for this application and why you choose that.
Requirement:

1. This application can help input the order of customers.
2. This application can generate bills to be printed.
3. This application can generate weekly and monthly income reports.
4. This application can generate stock reports.
   If you have additional ideas to add new vital features, you can add it into the design.
   (notes: This quiz does not require you to write the codes)

Let's see TheoryQuiz.png.Additional, I add 2 table roles and permission for auth

II. Coding Quiz:
Create a dice game script where it can receive input N which is the number of players and input
M which is the number of dice for each player. These are the game rules:

1. At the beginning of the game, each player would receive an M unit dice..
2. Each player would throw their dice at the same time.
3. Each player then would check their own dice results, and make these evaluations:
   a. Dice with 6 number would be removed from the game. The player would receive
   1 victory point.
   b. Dice with 1 number would be given to their neighbor player.
   c. Dice with 2,3,4 and 5 numbers would be kept for the next round.
4. After evaluation, the player who has no dice should not play anymore. They also cannot
   receive dice after this round.
5. If at the end of evaluation only one player has dice, the game would end.
6. Players with the biggest victory point win the game. In case of tie, both players win the
   game.
   Create the script using the language you are most comfortable with

Let's see index.js
Run by cmd "node index.js"
