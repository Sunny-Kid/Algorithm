/**
 * 动态规划
 */
class MinCoinChange1 {
	constructor(coins) {
		this.coins = coins
		this.cache = {}
	}

	makeChange(amount) {
		if (!amount) return []
		if (this.cache[amount]) return this.cache[amount]
		let min = [], newMin, newAmount
		this.coins.forEach(coin => {
			newAmount = amount - coin
			if (newAmount >= 0) {
				debugger
				newMin = this.makeChange(newAmount)
			}
			if (newAmount >= 0 &&
				(newMin.length < min.length - 1 || !min.length) &&
				(newMin.length || !newAmount)) {
				min = [coin].concat(newMin)
			}
		})
		return (this.cache[amount] = min)
	}
}

/**
 * 贪心算法
 */
class MinCoinChange2 {
	constructor(coins) {
		this.coins = coins
	}

	makeChange(amount) {
		const change = []
		let total = 0
		this.coins.sort((a, b) => a - b < 0).forEach(coin => {
			while (total + coin <= amount) {
				change.push(coin)
				total += coin
			}
		})
		return change
	}
}
