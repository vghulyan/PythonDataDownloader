// RSI = 100 - 100/1+RS
// RS = AVG_GAINS/AVG_LOSS

const findAerage = (CLOSE, RSI_PERIOD) => {
	let AVG_GAIN = 0;
	let AVG_LOSS = 0;
	let current_RSI = CLOSE[0];
	console.log('CLOSE: ', CLOSE.length, '\n', CLOSE)

	for(let i = 1; i < CLOSE.length; i++) {
		console.log('CURRENT CLOSE PRICE: ', CLOSE[i], ' - CURRENT RSI: ', current_RSI)
		if(CLOSE[i] > current_RSI) {
			AVG_GAIN += CLOSE[i] - current_RSI
		}
		else {
			AVG_LOSS -= CLOSE[i] - current_RSI		
		}
		current_RSI = CLOSE[i];
	}
	return {
		AVG_GAIN, AVG_LOSS
	}	
}
const RS = (AVG_GAIN, AVG_LOSS) => {
	return AVG_GAIN / AVG_LOSS
}

const initialise = () => {
	const RSI_PERIOD = 14;
	const CLOSE = [2959.89, 2958.79, 2958.81, 2958.79, 2959.22, 2959.65, 2959.93, 2960.18, 2960.25, 2962.8, 2961.84, 2961.37, 2962.69, 2963.6, 2963.6]; //, 2966.0, 2965.77]
	const RSI_CALCULATION = findAerage(CLOSE, RSI_PERIOD);
	console.log('RSI_CALCULATION ', RSI_CALCULATION, ' - RS: ', RS(RSI_CALCULATION.AVG_GAIN, RSI_CALCULATION.AVG_LOSS))

	const RSI = (100 - (100 / (1 + RS(RSI_CALCULATION.AVG_GAIN, RSI_CALCULATION.AVG_LOSS))))
	console.log('\n\nFINAL RSI: ', RSI)	
}
initialise()