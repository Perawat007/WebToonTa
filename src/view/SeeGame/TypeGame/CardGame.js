const cardGameList = [
    {
        id: 1, name: 'American Blackjack', codeGame: 'TGBlackjackAmerican', productId: 'HABANERO', Category: 'CARDGAME',
        img: 'https://superapi-products.s3-ap-southeast-1.amazonaws.com/HABANERO/TGBlackjackAmerican.png',
    },
    {
        id: 2, name: 'Dragon Tiger', codeGame: 'TGDragonTiger', productId: 'HABANERO', Category: 'CARDGAME',
        img: 'https://superapi-products.s3-ap-southeast-1.amazonaws.com/HABANERO/1653408227660_141007.png',
    },
    {
        id: 3, name: 'Double Exposure 3 Hand', codeGame: 'BlackJack3HDoubleExposure', productId: 'HABANERO', Category: 'CARDGAME',
        img: 'https://superapi-products.s3-ap-southeast-1.amazonaws.com/HABANERO/BlackJack3HDoubleExposure.png',
    },
    {
        id: 4, name: 'Baccarat Zero Commission', codeGame: 'Baccarat3HZC', productId: 'HABANERO', Category: 'CARDGAME',
        img: 'https://superapi-products.s3-ap-southeast-1.amazonaws.com/HABANERO/Baccarat3HZC.png',
    },
    {
        id: 5, name: 'Blackjack 3 Hand', codeGame: 'BlackJack3H', productId: 'HABANERO', Category: 'CARDGAME',
        img: 'https://superapi-products.s3-ap-southeast-1.amazonaws.com/HABANERO/BlackJack3H.png',
    },
    {
        id: 6, name: 'Sic Bo', codeGame: 'SicBo', productId: 'HABANERO', Category: 'CARDGAME',
        img: 'https://superapi-products.s3-ap-southeast-1.amazonaws.com/HABANERO/1653408533110_56544.png',
    },
    {
        id: 7, name: 'Three Card Poker Deluxe', codeGame: 'TGThreeCardPokerDeluxe', productId: 'HABANERO', Category: 'CARDGAME',
        img: 'https://superapi-products.s3-ap-southeast-1.amazonaws.com/HABANERO/1653408936628_673329.png',
    },
    {
        id: 8, name: 'Three Card Poker', codeGame: 'TGThreeCardPoker', productId: 'HABANERO', Category: 'CARDGAME',
        img: 'https://superapi-products.s3-ap-southeast-1.amazonaws.com/HABANERO/1653408976586_158697.png',
    },
    {
        id: 9, name: 'Caribbean Stud', codeGame: 'CaribbeanStud', productId: 'HABANERO', Category: 'CARDGAME',
        img: 'https://superapi-products.s3-ap-southeast-1.amazonaws.com/HABANERO/CaribbeanStud.png',
    },
    {
        id: 10, name: 'Caribbean Holdem', codeGame: 'CaribbeanHoldem', productId: 'HABANERO', Category: 'CARDGAME',
        img: 'https://superapi-products.s3-ap-southeast-1.amazonaws.com/HABANERO/CaribbeanHoldem.png',
    },
    {
        id: 11, name: 'Baccarat', codeGame: 'AmericanBaccarat', productId: 'HABANERO', Category: 'CARDGAME',
        img: 'https://superapi-products.s3-ap-southeast-1.amazonaws.com/HABANERO/AmericanBaccarat.png',
    },
    {
        id: 12, name: 'Roulette', codeGame: 'EURoulette', productId: 'HABANERO', Category: 'CARDGAME',
        img: 'https://superapi-products.s3-ap-southeast-1.amazonaws.com/HABANERO/1653409392105_703137.png',
    },
    {
        id: 13, name: 'Tens or Better 100 Hand', codeGame: 'TensorBetter100Hand', productId: 'HABANERO', Category: 'CARDGAME',
        img: 'https://superapi-products.s3-ap-southeast-1.amazonaws.com/HABANERO/1653409423759_805948.png',
    },
    {
        id: 14, name: 'Tens or Better 50 Hand', codeGame: 'TensorBetter50Hand', productId: 'HABANERO', Category: 'CARDGAME',
        img: 'https://superapi-products.s3-ap-southeast-1.amazonaws.com/HABANERO/1653409443735_999723.png',
    },
    {
        id: 15, name: 'Tens or Better 10 Hand', codeGame: 'TensorBetter10Hand', productId: 'HABANERO', Category: 'CARDGAME',
        img: 'https://superapi-products.s3-ap-southeast-1.amazonaws.com/HABANERO/1653409480008_197501.png',
    },
    {
        id: 16, name: 'Tens or Better 5 Hand', codeGame: 'TensorBetter5Hand', productId: 'HABANERO', Category: 'CARDGAME',
        img: 'https://superapi-products.s3-ap-southeast-1.amazonaws.com/HABANERO/1653409496587_940532.png',
    },
    {
        id: 17, name: 'Tens or Better 1 Hand', codeGame: 'TensorBetter1Hand', productId: 'HABANERO', Category: 'CARDGAME',
        img: 'https://superapi-products.s3-ap-southeast-1.amazonaws.com/HABANERO/1653409513731_407043.png',
    },
    {
        id: 18, name: 'Joker Poker 100 Hand', codeGame: 'JokerPoker100Hand', productId: 'HABANERO', Category: 'CARDGAME',
        img: 'https://superapi-products.s3-ap-southeast-1.amazonaws.com/HABANERO/JokerPoker100Hand.png',
    },
    {
        id: 19, name: 'Joker Poker 50 Hand', codeGame: 'JokerPoker50Hand', productId: 'HABANERO', Category: 'CARDGAME',
        img: 'https://superapi-products.s3-ap-southeast-1.amazonaws.com/HABANERO/JokerPoker50Hand.png',
    },
    {
        id: 20, name: 'Joker Poker 10 Hand', codeGame: 'JokerPoker10Hand', productId: 'HABANERO', Category: 'CARDGAME',
        img: 'https://superapi-products.s3-ap-southeast-1.amazonaws.com/HABANERO/JokerPoker10Hand.png',
    },
    {
        id: 21, name: 'Joker Poker 5 Hand', codeGame: 'JokerPoker5Hand', productId: 'HABANERO', Category: 'CARDGAME',
        img: 'https://superapi-products.s3-ap-southeast-1.amazonaws.com/HABANERO/JokerPoker5Hand.png',
    },
    {
        id: 22, name: 'Joker Poker 1 Hand', codeGame: 'JokerPoker1Hand', productId: 'HABANERO', Category: 'CARDGAME',
        img: 'https://superapi-products.s3-ap-southeast-1.amazonaws.com/HABANERO/JokerPoker1Hand.png',
    },
    {
        id: 23, name: 'Double Double Bonus Poker 100 Hand', codeGame: 'DoubleDoubleBonusPoker100Hand', productId: 'HABANERO', Category: 'CARDGAME',
        img: 'https://superapi-products.s3-ap-southeast-1.amazonaws.com/HABANERO/DoubleDoubleBonusPoker100Hand.png',
    },
    {
        id: 24, name: 'Double Double Bonus Poker 50 Hand', codeGame: 'DoubleDoubleBonusPoker50Hand', productId: 'HABANERO', Category: 'CARDGAME',
        img: 'https://superapi-products.s3-ap-southeast-1.amazonaws.com/HABANERO/DoubleDoubleBonusPoker50Hand.png',
    },
    {
        id: 25, name: 'Double Double Bonus Poker 10 Hand', codeGame: 'DoubleDoubleBonusPoker10Hand', productId: 'HABANERO', Category: 'CARDGAME',
        img: 'https://superapi-products.s3-ap-southeast-1.amazonaws.com/HABANERO/DoubleDoubleBonusPoker10Hand.png',
    },
    {
        id: 26, name: 'Double Double Bonus Poker 5 Hand', codeGame: 'DoubleDoubleBonusPoker5Hand', productId: 'HABANERO', Category: 'CARDGAME',
        img: 'https://superapi-products.s3-ap-southeast-1.amazonaws.com/HABANERO/DoubleDoubleBonusPoker5Hand.png',
    },
    {
        id: 27, name: 'Double Double Bonus Poker 1 Hand', codeGame: 'DoubleDoubleBonusPoker1Hand', productId: 'HABANERO', Category: 'CARDGAME',
        img: 'https://superapi-products.s3-ap-southeast-1.amazonaws.com/HABANERO/DoubleDoubleBonusPoker1Hand.png',
    },
    {
        id: 28, name: 'Double Bonus Poker 100 Hand', codeGame: 'DoubleBonusPoker100Hand', productId: 'HABANERO', Category: 'CARDGAME',
        img: 'https://superapi-products.s3-ap-southeast-1.amazonaws.com/HABANERO/DoubleBonusPoker100Hand.png',
    },
    {
        id: 29, name: 'Double Bonus Poker 50 Hand', codeGame: 'DoubleBonusPoker50Hand', productId: 'HABANERO', Category: 'CARDGAME',
        img: 'https://superapi-products.s3-ap-southeast-1.amazonaws.com/HABANERO/DoubleBonusPoker50Hand.png',
    },
    {
        id: 30, name: 'Double Bonus Poker 10 Hand', codeGame: 'DoubleBonusPoker10Hand', productId: 'HABANERO', Category: 'CARDGAME',
        img: 'https://superapi-products.s3-ap-southeast-1.amazonaws.com/HABANERO/DoubleBonusPoker10Hand.png',
    },
    {
        id: 31, name: 'Double Bonus Poker 5 Hand', codeGame: 'DoubleBonusPoker5Hand', productId: 'HABANERO', Category: 'CARDGAME',
        img: 'https://superapi-products.s3-ap-southeast-1.amazonaws.com/HABANERO/DoubleBonusPoker5Hand.png',
    },
    {
        id: 32, name: 'Double Bonus Poker 1 Hand', codeGame: 'DoubleBonusPoker1Hand', productId: 'HABANERO', Category: 'CARDGAME',
        img: 'https://superapi-products.s3-ap-southeast-1.amazonaws.com/HABANERO/DoubleBonusPoker1Hand.png',
    },
    {
        id: 33, name: 'Bonus Poker 100 Hand', codeGame: 'BonusPoker100Hand', productId: 'HABANERO', Category: 'CARDGAME',
        img: 'https://superapi-products.s3-ap-southeast-1.amazonaws.com/HABANERO/BonusPoker100Hand.png',
    },
    {
        id: 34, name: 'Bonus Poker 50 Hand', codeGame: 'BonusPoker50Hand', productId: 'HABANERO', Category: 'CARDGAME',
        img: 'https://superapi-products.s3-ap-southeast-1.amazonaws.com/HABANERO/BonusPoker50Hand.png',
    },
    {
        id: 35, name: 'Bonus Poker 10 Hand', codeGame: 'BonusPoker10Hand', productId: 'HABANERO', Category: 'CARDGAME',
        img: 'https://superapi-products.s3-ap-southeast-1.amazonaws.com/HABANERO/BonusPoker10Hand.png',
    },
    {
        id: 36, name: 'Bonus Poker 5 Hand', codeGame: 'BonusPoker5Hand', productId: 'HABANERO', Category: 'CARDGAME',
        img: 'https://superapi-products.s3-ap-southeast-1.amazonaws.com/HABANERO/BonusPoker5Hand.png',
    },
    {
        id: 37, name: 'Bonus Poker 1 Hand', codeGame: 'BonusPoker1Hand', productId: 'HABANERO', Category: 'CARDGAME',
        img: 'https://superapi-products.s3-ap-southeast-1.amazonaws.com/HABANERO/BonusPoker1Hand.png',
    },
    {
        id: 38, name: 'Bonus Deuces Wild 100 Hand', codeGame: 'BonusDuecesWild100Hand', productId: 'HABANERO', Category: 'CARDGAME',
        img: 'https://superapi-products.s3-ap-southeast-1.amazonaws.com/HABANERO/BonusDuecesWild100Hand.png',
    },
    {
        id: 39, name: 'Bonus Deuces Wild 50 Hand', codeGame: 'BonusDuecesWild50Hand', productId: 'HABANERO', Category: 'CARDGAME',
        img: 'https://superapi-products.s3-ap-southeast-1.amazonaws.com/HABANERO/BonusDuecesWild50Hand.png',
    },
    {
        id: 40, name: 'Bonus Deuces Wild 10 Hand', codeGame: 'BonusDuecesWild10Hand', productId: 'HABANERO', Category: 'CARDGAME',
        img: 'https://superapi-products.s3-ap-southeast-1.amazonaws.com/HABANERO/BonusDuecesWild10Hand.png',
    },
    {
        id: 41, name: 'Bonus Deuces Wild 5 Hand', codeGame: 'BonusDuecesWild5Hand', productId: 'HABANERO', Category: 'CARDGAME',
        img: 'https://superapi-products.s3-ap-southeast-1.amazonaws.com/HABANERO/BonusDuecesWild5Hand.png',
    },
    {
        id: 42, name: 'Bonus Deuces Wild 1 Hand', codeGame: 'BonusDuecesWild1Hand', productId: 'HABANERO', Category: 'CARDGAME',
        img: 'https://superapi-products.s3-ap-southeast-1.amazonaws.com/HABANERO/BonusDuecesWild1Hand.png',
    },
    {
        id: 43, name: 'All American Poker 100 Hand', codeGame: 'AllAmericanPoker100Hand', productId: 'HABANERO', Category: 'CARDGAME',
        img: 'https://superapi-products.s3-ap-southeast-1.amazonaws.com/HABANERO/AllAmericanPoker100Hand.png',
    },
    {
        id: 44, name: 'All American Poker 50 Hand', codeGame: 'AllAmericanPoker50Hand', productId: 'HABANERO', Category: 'CARDGAME',
        img: 'https://superapi-products.s3-ap-southeast-1.amazonaws.com/HABANERO/AllAmericanPoker50Hand.png',
    },
    {
        id: 45, name: 'All American Poker 10 Hand', codeGame: 'AllAmericanPoker10Hand', productId: 'HABANERO', Category: 'CARDGAME',
        img: 'https://superapi-products.s3-ap-southeast-1.amazonaws.com/HABANERO/AllAmericanPoker10Hand.png',
    },
    {
        id: 46, name: 'All American Poker 5 Hand', codeGame: 'AllAmericanPoker5Hand', productId: 'HABANERO', Category: 'CARDGAME',
        img: 'https://superapi-products.s3-ap-southeast-1.amazonaws.com/HABANERO/AllAmericanPoker5Hand.png',
    },
    {
        id: 47, name: 'All American Poker 1 Hand', codeGame: 'AllAmericanPoker1Hand', productId: 'HABANERO', Category: 'CARDGAME',
        img: 'https://superapi-products.s3-ap-southeast-1.amazonaws.com/HABANERO/AllAmericanPoker1Hand.png',
    },
    {
        id: 48, name: 'Aces and Eights 100 Hand', codeGame: 'AcesandEights100Hand', productId: 'HABANERO', Category: 'CARDGAME',
        img: 'https://superapi-products.s3-ap-southeast-1.amazonaws.com/HABANERO/AcesandEights100Hand.png',
    },
    {
        id: 49, name: 'Aces and Eights 50 Hand', codeGame: 'AcesandEights50Hand', productId: 'HABANERO', Category: 'CARDGAME',
        img: 'https://superapi-products.s3-ap-southeast-1.amazonaws.com/HABANERO/AcesandEights50Hand.png',
    },
    {
        id: 50, name: 'Aces and Eights 10 Hand', codeGame: 'AcesandEights10Hand', productId: 'HABANERO', Category: 'CARDGAME',
        img: 'https://superapi-products.s3-ap-southeast-1.amazonaws.com/HABANERO/AcesandEights10Hand.png',
    },
    {
        id: 51, name: 'Aces and Eights 5 Hand', codeGame: 'AcesandEights5Hand', productId: 'HABANERO', Category: 'CARDGAME',
        img: 'https://superapi-products.s3-ap-southeast-1.amazonaws.com/HABANERO/AcesandEights5Hand.png',
    },
    {
        id: 52, name: 'Aces and Eights 1 Hand', codeGame: 'AcesandEights1Hand', productId: 'HABANERO', Category: 'CARDGAME',
        img: 'https://superapi-products.s3-ap-southeast-1.amazonaws.com/HABANERO/AcesandEights1Hand.png',
    },
    {
        id: 53, name: 'Deuces Wild 100 Hand', codeGame: 'DuecesWild100Hand', productId: 'HABANERO', Category: 'CARDGAME',
        img: 'https://superapi-products.s3-ap-southeast-1.amazonaws.com/HABANERO/DuecesWild100Hand.png',
    },
    {
        id: 54, name: 'Deuces Wild 50 Hand', codeGame: 'DuecesWild50Hand', productId: 'HABANERO', Category: 'CARDGAME',
        img: 'https://superapi-products.s3-ap-southeast-1.amazonaws.com/HABANERO/DuecesWild50Hand.png',
    },
    {
        id: 55, name: 'Deuces Wild 10 Hand', codeGame: 'DuecesWild10Hand', productId: 'HABANERO', Category: 'CARDGAME',
        img: 'https://superapi-products.s3-ap-southeast-1.amazonaws.com/HABANERO/DuecesWild10Hand.png',
    },
    {
        id: 56, name: 'Deuces Wild 5 Hand', codeGame: 'DuecesWild5Hand', productId: 'HABANERO', Category: 'CARDGAME',
        img: 'https://superapi-products.s3-ap-southeast-1.amazonaws.com/HABANERO/DuecesWild5Hand.png',
    },
    {
        id: 57, name: 'Deuces Wild 1 Hand', codeGame: 'DuecesWild1Hand', productId: 'HABANERO', Category: 'CARDGAME',
        img: 'https://superapi-products.s3-ap-southeast-1.amazonaws.com/HABANERO/DuecesWild1Hand.png',
    },
    {
        id: 58, name: 'Jacks or Better 100 Hand', codeGame: 'JacksorBetter100Hand', productId: 'HABANERO', Category: 'CARDGAME',
        img: 'https://superapi-products.s3-ap-southeast-1.amazonaws.com/HABANERO/1653409734588_32619.png',
    },
    {
        id: 59, name: 'Jacks or Better 50 Hand', codeGame: 'JacksorBetter50Hand', productId: 'HABANERO', Category: 'CARDGAME',
        img: 'https://superapi-products.s3-ap-southeast-1.amazonaws.com/HABANERO/1653409752228_415665.png',
    },
    {
        id: 60, name: 'Jacks or Better 10 Hand', codeGame: 'JacksorBetter10Hand', productId: 'HABANERO', Category: 'CARDGAME',
        img: 'https://superapi-products.s3-ap-southeast-1.amazonaws.com/HABANERO/1653409774648_739288.png',
    },
    {
        id: 61, name: 'Jacks or Better 5 Hand', codeGame: 'JacksorBetter5Hand', productId: 'HABANERO', Category: 'CARDGAME',
        img: 'https://superapi-products.s3-ap-southeast-1.amazonaws.com/HABANERO/1653409790151_237.png',
    },
    {
        id: 62, name: 'Jacks or Better 1 Hand', codeGame: 'JacksorBetter1Hand', productId: 'HABANERO', Category: 'CARDGAME',
        img: 'https://superapi-products.s3-ap-southeast-1.amazonaws.com/HABANERO/1653409803267_667355.png',
    },
    {
        id: 63, name: 'Ultra Warp Roulette', codeGame: 'SMG_ultraWarpRoulette', productId: 'MICRO', Category: 'CARDGAME',
        img: 'https://superapi-products.s3-ap-southeast-1.amazonaws.com/MICRO/1691689148279_923880.png',
    },
    {
        id: 64, name: 'BlackJack Lucky Sevens', codeGame: '745', productId: 'EVOPLAY', Category: 'CARDGAME',
        img: 'https://superapi-products.s3-ap-southeast-1.amazonaws.com/EVOPLAY/745.png',
    },
    {
        id: 65, name: 'Oasis Poker Classic', codeGame: '748', productId: 'EVOPLAY', Category: 'CARDGAME',
        img: 'https://superapi-products.s3-ap-southeast-1.amazonaws.com/EVOPLAY/748.png',
    },
    {
        id: 66, name: 'European Roulette', codeGame: '946', productId: 'EVOPLAY', Category: 'CARDGAME',
        img: 'https://superapi-products.s3-ap-southeast-1.amazonaws.com/EVOPLAY/946.png',
    },
    {
        id: 67, name: 'Baccarat 777', codeGame: '967', productId: 'EVOPLAY', Category: 'CARDGAME',
        img: 'https://superapi-products.s3-ap-southeast-1.amazonaws.com/EVOPLAY/967.png',
    },
    {
        id: 68, name: 'Indian Poker', codeGame: '1006', productId: 'EVOPLAY', Category: 'CARDGAME',
        img: 'https://superapi-products.s3-ap-southeast-1.amazonaws.com/EVOPLAY/1006.png',
    },
    {
        id: 69, name: 'American Roulette 3D Classic', codeGame: '1009', productId: 'EVOPLAY', Category: 'CARDGAME',
        img: 'https://superapi-products.s3-ap-southeast-1.amazonaws.com/EVOPLAY/1009.png',
    },
    {
        id: 70, name: 'Texas Holdem Poker', codeGame: '5553', productId: 'EVOPLAY', Category: 'CARDGAME',
        img: 'https://superapi-products.s3-ap-southeast-1.amazonaws.com/EVOPLAY/5553.png',
    },
    {
        id: 71, name: 'French Roulette Classic', codeGame: '5669', productId: 'EVOPLAY', Category: 'CARDGAME',
        img: 'https://superapi-products.s3-ap-southeast-1.amazonaws.com/EVOPLAY/5669.png',
    },
    {
        id: 72, name: 'Texas Holdem Bonus', codeGame: '5679', productId: 'EVOPLAY', Category: 'CARDGAME',
        img: 'https://superapi-products.s3-ap-southeast-1.amazonaws.com/EVOPLAY/5679.png',
    },
    {
        id: 73, name: 'Candy Dreams: Bingo.', codeGame: '5965', productId: 'EVOPLAY', Category: 'CARDGAME',
        img: 'https://superapi-products.s3-ap-southeast-1.amazonaws.com/EVOPLAY/1677506833735_757718.png',
    },
    {
        id: 74, name: 'Peeking Banker Bull-Bull', codeGame: 'BT03', productId: 'CQ9', Category: 'CARDGAME',
        img: 'https://superapi-products.s3-ap-southeast-1.amazonaws.com/CQ9/BT03.png',
    },
    {
        id: 75, name: 'Blackjack', codeGame: '219', productId: 'JILI', Category: 'CARDGAME',
        img: 'https://superapi-products.s3-ap-southeast-1.amazonaws.com/JILI/1694066357946_146053.png',
    },
    {
        id: 76, name: 'Lucky Wheel', codeGame: '602816', productId: 'FUNKY', Category: 'CARDGAME',
        img: 'https://superapi-products.s3-ap-southeast-1.amazonaws.com/FUNKY/1620846703224_966408.png',
    },
    {
        id: 77, name: 'Fish Prawn Crab', codeGame: '602819', productId: 'FUNKY', Category: 'CARDGAME',
        img: 'https://superapi-products.s3-ap-southeast-1.amazonaws.com/FUNKY/1620846503021_261594.png',
    },
    {
        id: 78, name: 'Virtual Baccarat', codeGame: '602821', productId: 'FUNKY', Category: 'CARDGAME',
        img: 'https://superapi-products.s3-ap-southeast-1.amazonaws.com/FUNKY/1620846432259_785356.png',
    },
    {
        id: 79, name: 'Angel & Devil', codeGame: '10281', productId: 'FUNKY', Category: 'CARDGAME',
        img: 'https://superapi-products.s3-ap-southeast-1.amazonaws.com/FUNKY/1620846275351_146962.png',
    },
    {
        id: 80, name: 'CaptainDomino', codeGame: '10282', productId: 'FUNKY', Category: 'CARDGAME',
        img: 'https://superapi-products.s3-ap-southeast-1.amazonaws.com/FUNKY/1620846238984_326812.png',
    },
    {
        id: 81, name: 'Pok Deng', codeGame: '802302', productId: 'FUNKY', Category: 'CARDGAME',
        img: 'https://superapi-products.s3-ap-southeast-1.amazonaws.com/FUNKY/1620845912260_383234.png',
    },
    {
        id: 82, name: 'BaccaratBabes', codeGame: '602824', productId: 'FUNKY', Category: 'CARDGAME',
        img: 'https://superapi-products.s3-ap-southeast-1.amazonaws.com/FUNKY/1620845466370_849754.png',
    },
    {
        id: 83, name: 'FanTan', codeGame: '602826', productId: 'FUNKY', Category: 'CARDGAME',
        img: 'https://superapi-products.s3-ap-southeast-1.amazonaws.com/FUNKY/1620846796639_562246.png',
    },
    {
        id: 84, name: 'SicBo', codeGame: '632a860e220bd54d70f78329', productId: 'SPINIX', Category: 'CARDGAME',
        img: 'https://superapi-products.s3-ap-southeast-1.amazonaws.com/SPINIX/1673422954543_225216.png',
    },
    {
        id: 85, name: 'Hilo Island', codeGame: '632a85f2220bd54d70f78328', productId: 'SPINIX', Category: 'CARDGAME',
        img: 'https://superapi-products.s3-ap-southeast-1.amazonaws.com/SPINIX/1673423005116_328698.png',
    },
    {
        id: 86, name: 'Fish Prawn Crab', codeGame: '632a8634220bd54d70f7832a', productId: 'SPINIX', Category: 'CARDGAME',
        img: 'https://superapi-products.s3-ap-southeast-1.amazonaws.com/SPINIX/1673423097134_762897.png',
    }
];

export default cardGameList;