/* OBJECT 1 */

let friend = {
	name:'Joseph',
	gender: 'M',
	weight: 85.4,
	gain_weight(w = 0){
		console.log('Gained weight')
		this.weight += w
	}
}

console.log(typeof(friend))
console.log(friend)

friend.gain_weight(2)

console.log(`${friend.name} weighs ${friend.weight} Kgs`)