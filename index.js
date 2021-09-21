const MAX = 6;
const MIN = 1;
let turn = 0
const init = (numOfPlayer, numOfDice) => {
	const result = {};
	for (let i =1 ; i <= numOfPlayer; i++){
		result['player' + i] = { point: 0, dice:[], isStop :false };
		for (let x =0 ; x < numOfDice; x++){
			result['player' + i].dice.push(0);
		}
	}
	return result;
	
}
const getNextKey = (game, key) => {
	const keys = Object.keys(game);
	const nextIndex = keys.indexOf(key) + 1;
	return  keys[nextIndex];
}
const isLastKey = (game, key) => {
	const keys = Object.keys(game);
	return keys.indexOf(key) + 1 === Object.keys(game).length ;
}

const getFirstKey = (game) => {
	const keys = Object.keys(game);
	return  keys[0];
}

const isEndGame = (game, numOfPlayer) => {
	let failPlayer = 0
	Object.keys(game).forEach(key => {
		if (game[key].dice.length === 0) {
			failPlayer = failPlayer+1;
		}
	})
	if (failPlayer === numOfPlayer - 1) {
		return true;
	}
	return false;
}

const play = (game,numOfPlayer) => {
	if (isEndGame(game, numOfPlayer)) {
		return;
	}
	turn = turn + 1;
	const deletedDice = [];
	console.log('==================')
	console.log(`Turn #${turn} throw dice:`)
	Object.keys(game).forEach(key => {
		if (game[key].dice.length === 0) {
			game[key].dice.isStop = true;
		}
		if (game[key].dice.isStop) {
			return;
		}
		game[key].dice = game[key].dice.map(dice => {
			return Math.floor(Math.random() * (MAX - MIN + 1)) + MIN;
		})
		console.log(`${key}(${game[key].point}) : ${game[key].dice.join(",")}`)
	})

	Object.keys(game).forEach(key => {
		game[key].dice = game[key].dice.filter((dice) => {
			if (dice === MAX) {
				game[key].point = game[key].point + 1;
			}
			if (dice !== MAX) {
				return dice;
			}
		})
		
		game[key].dice.forEach((item) => {
			if (item === MIN) {
				deletedDice.push({ key });
			}
		})
	
		game[key].dice = game[key].dice.filter((dice) => {
			if (dice !== MIN) {
				return dice;
			}
		})

	})

	deletedDice.forEach(item => {
			const nextKey = isLastKey(game, item.key) ? getFirstKey(game) : getNextKey(game, item.key);
			game[nextKey].dice.push(1);
	});
	console.log('After evaluation:')
	Object.keys(game).forEach(key => {
		console.log(`${key}(${game[key].point}) : ${game[key].dice.join(",")}`);
	})
	play(game, numOfPlayer)
}

const start = (numOfPlayer, numOfDice) => {
	const game = init(numOfPlayer, numOfDice);
	console.log(game);
	play(game,numOfPlayer);
	
	
}

const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("How many player? ", function(numOfPlayer) {
    rl.question("how many dice ? ", function(numOfDice) {
			start(parseInt(numOfPlayer),parseInt(numOfDice))
      rl.close();
    });
});

rl.on("close", function() {
    process.exit(0);
});
