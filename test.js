const {findAerage, RS} = require('./RSI')

const initialise = (RSI_PERIOD, DELEY, OVERSOLD, OVERBOATH) => {
	const ARRAY = []
	setInterval(function () { // setInterval(function, milliseconds, param1, param2, ...)
		const r = Math.random()
		if(ARRAY.length < (RSI_PERIOD + 1)) {		
			ARRAY.push(r.toFixed(3))
			console.log(`${ARRAY.length} - Adding Close [${r.toFixed(3)}] to the Array`)
		}
		else {			
			console.log(`\nRemoving [${ARRAY[0]}] from the Array ${ARRAY}`)
			if(ARRAY.length > 0) 
				ARRAY.shift();

			// calculate RSI
			const RSI_CALCULATION = findAerage(ARRAY, RSI_PERIOD);
			// console.log('RSI_CALCULATION ', RSI_CALCULATION, ' - RS: ', RS(RSI_CALCULATION.AVG_GAIN, RSI_CALCULATION.AVG_LOSS))

			const RSI = (100 - (100 / (1 + RS(RSI_CALCULATION.AVG_GAIN, RSI_CALCULATION.AVG_LOSS))))
			console.log('FINAL RSI: ', RSI, ' - ', 'RSI_CALCULATION ', RSI_CALCULATION, '\n')	
			if(Math.round(RSI) < OVERSOLD) {
				console.log('======================== >>> Found OVERSOLD : ', RSI, ' --- BUY! BUY! BUY!')
			}
			if(Math.round(RSI) > OVERBOATH) {
				console.log('======================== >>> Found OVERBOATH : ', RSI, ' --- SELL! SELL! SELL!')
			}
		}
		

	}, DELEY || 1000);
}

const OVERSOLD = 30;
const OVERBOATH = 70;
const RSI_PERIOD = 14;
const DELEY = 1000;
initialise(RSI_PERIOD, DELEY, OVERSOLD, OVERBOATH)

