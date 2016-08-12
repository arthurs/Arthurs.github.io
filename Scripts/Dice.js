function RollDice(amount, dice){
	switch (dice) {
		case "d4":
			var count = 0;
			for (i = amount; i--; i >0) {
				count += parseInt(Math.random() * 4 + 1);
			}
			break;
		case "d6":
			var count = 0;
			for (i = amount; i--; i >0) {
				count += parseInt(Math.random() * 6 + 1);
			}
			break;
		case "d8":
			var count = 0;
			for (i = amount; i--; i >0) {
				count += parseInt(Math.random() * 8 + 1);
			}
			break;
		case "d10":
			var count = 0;
			for (i = amount; i--; i >0) {
				count += parseInt(Math.random() * 10 + 1);
			}
			break;
		case "d12":
			var count = 0;
			for (i = amount; i--; i >0) {
				count += parseInt(Math.random() * 12 + 1);
			}
			break;
		case "d20":
			var count = 0;
			for (i = amount; i--; i >0) {
				count += parseInt(Math.random() * 20 + 1);
			}
			break;
		case "d100":
			var count = 0;
			for (i = amount; i--; i >0) {
				count += parseInt(Math.random() * 100 + 1);
			}
			break;
	}
	return count;
}