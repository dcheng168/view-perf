import Ember from 'ember';

export default Ember.Route.extend({
	model: function () {
		console.time('generateRows');
		// let i = 100;
		// let i = 200;
		// let i = 300;
		// let i = 400;
		let i = 500;
		let rows = this.generateRows(i, i);
		console.timeEnd('generateRows');
		return rows;
	},

	generateRows: function (col, row) {
		let rows = Ember.A();
		for(let i = 0; i < col; i++) {
			let cells = Ember.A();
			for(let y = 0; y < row; y++) {
				cells.pushObject({ name: `${i}_${y}`});
			}
			rows.pushObject({cells: cells});
		}
		return rows;
	}
});
