from binance import Client
import csv

client = Client("", "")

def main(timePeriod, SYMBOL, fileName, fromDate):
    columns = [
        'open_time', 'open', 'high', 'low', 'close', 'volume',
        'close_time', 'quote_asset_volume', 'number_of_trades',
        'taker_buy_base_asset_volume', 'taker_buy_quote_asset_volume',
        'ignore'
    ]
    # klines = client.get_historical_klines(SYMBOL, Client.KLINE_INTERVAL_1MINUTE, "1 day ago UTC") #- "26 Mar, 2021"
    klines = client.get_historical_klines(SYMBOL, timePeriod, fromDate)
    print(klines)

    # historical_kline_1d = 'historical_kline_1d.csv'    
    with open(fileName, 'w') as f:
        write = csv.writer(f)
        write.writerow(columns)
        write.writerows(klines)

oneMin = Client.KLINE_INTERVAL_1MINUTE
fiveMin = Client.KLINE_INTERVAL_5MINUTE
fifteenMin = Client.KLINE_INTERVAL_15MINUTE
thirtyMin = Client.KLINE_INTERVAL_30MINUTE #1 Dec, 2017", "1 Jan, 2018
oneHour = Client.KLINE_INTERVAL_1HOUR
oneDay = Client.KLINE_INTERVAL_1DAY #"26 Mar, 2021"
oneWeek = Client.KLINE_INTERVAL_1WEEK #1 Jan, 2017

if __name__ == "__main__":    
    print('uncoment to download the data')
    # main(oneMin, 'ETHUSDT', 'oneMin_kline.csv', "1 day ago UTC")
    # main(fiveMin, 'ETHUSDT', 'fiveMin_kline.csv', "1 day ago UTC")
    # main(fifteenMin, 'ETHUSDT', 'fifteenMin_kline.csv', "1 day ago UTC")
    # main(thirtyMin, 'ETHUSDT', 'thirtyMin_kline.csv', "1 day ago UTC")
    main(oneHour, 'ETHUSDT', 'oneHour_kline.csv', "1 day ago UTC")
    # main(oneDay, 'ETHUSDT', 'oneDay_kline.csv', "1 Jan, 2021")
    # main(oneWeek, 'ETHUSDT', 'oneWeek_kline.csv', "1 Mar, 2021")

