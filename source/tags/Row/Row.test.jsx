import React from 'react';
import Row from './Row.jsx';

const Children = {
	columns: [
		<div className="three-up"><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nisl ligula, convallis quis libero ac, ornare malesuada elit. Phasellus ultrices nunc ac dolor congue porta. Phasellus rutrum magna ut sapien convallis, id mollis mi volutpat. In ac arcu elit. In sit amet sapien eu dui maximus tempor. Morbi eleifend lectus sit amet cursus luctus. Pellentesque interdum felis eleifend elit laoreet posuere. In placerat tempor risus, in porttitor magna suscipit gravida. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Cras lorem sapien, ultricies id libero ac, gravida dignissim sem. In cursus justo ac est accumsan mollis.</p></div>,
		<div className="three-up"><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nisl ligula, convallis quis libero ac, ornare malesuada elit. Phasellus ultrices nunc ac dolor congue porta. Phasellus rutrum magna ut sapien convallis, id mollis mi volutpat. In ac arcu elit. In sit amet sapien eu dui maximus tempor. Morbi eleifend lectus sit amet cursus luctus. Pellentesque interdum felis eleifend elit laoreet posuere. In placerat tempor risus, in porttitor magna suscipit gravida. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Cras lorem sapien, ultricies id libero ac, gravida dignissim sem. In cursus justo ac est accumsan mollis.</p></div>,
		<div className="three-up"><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nisl ligula, convallis quis libero ac, ornare malesuada elit. Phasellus ultrices nunc ac dolor congue porta. Phasellus rutrum magna ut sapien convallis, id mollis mi volutpat. In ac arcu elit. In sit amet sapien eu dui maximus tempor. Morbi eleifend lectus sit amet cursus luctus. Pellentesque interdum felis eleifend elit laoreet posuere. In placerat tempor risus, in porttitor magna suscipit gravida. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Cras lorem sapien, ultricies id libero ac, gravida dignissim sem. In cursus justo ac est accumsan mollis.</p></div>
	],
	images: [
		<img src="http://placehold.it/350x150" style={{}} />
	],
	flex: [
		<div style={{width: "128px", padding: "50px 0", border: "1px black solid", textAlign: "center", verticalAlign: "middle"}}>1</div>,
		<div style={{width: "128px", padding: "50px 0", border: "1px black solid", textAlign: "center", verticalAlign: "middle"}}>2</div>,
		<div style={{width: "128px", padding: "50px 0", border: "1px black solid", textAlign: "center", verticalAlign: "middle"}}>3</div>,
		<div style={{width: "128px", padding: "50px 0", border: "1px black solid", textAlign: "center", verticalAlign: "middle"}}>4</div>,
		<div style={{width: "128px", padding: "50px 0", border: "1px black solid", textAlign: "center", verticalAlign: "middle"}}>5</div>,
		<div style={{width: "128px", padding: "50px 0", border: "1px black solid", textAlign: "center", verticalAlign: "middle"}}>6</div>,
		<div style={{width: "128px", padding: "50px 0", border: "1px black solid", textAlign: "center", verticalAlign: "middle"}}>7</div>,
		<div style={{width: "128px", padding: "50px 0", border: "1px black solid", textAlign: "center", verticalAlign: "middle"}}>8</div>
	]
};

module.exports = [{
	name: 'Default Row (max-width found in variables/grid.css)',
	component: (
		<Row className="test">
			{ Children.columns }
		</Row>
	)
}, {
	name: 'Row Align Reset (no max-width)',
	component: (
		<Row className="test" outerAlign="reset">
			{ Children.columns }
		</Row>
	)
}, {
	name: 'Row Children Align Left (fixed height required)',
	component: (
		<Row innerAlign="left">
			{ Children.images }
		</Row>
	)
}, {
	name: 'Row Children Align Right (fixed height required)',
	component: (
		<Row innerAlign="right">
			{ Children.images }
		</Row>
	)
}, {
	name: 'Row Children Align Top (fixed height required)',
	component: (
		<Row innerAlign="top">
			{ Children.images }
		</Row>
	)
}, {
	name: 'Row Children Align Bottom (fixed height required)',
	component: (
		<Row innerAlign="bottom">
			{ Children.images }
		</Row>
	)
},{
	name: 'Row Children Align Top Left (fixed height required)',
	component: (
		<Row innerAlign="top-left">
			{ Children.images }
		</Row>
	)
},{
	name: 'Row Children Align Top Center (fixed height required)',
	component: (
		<Row innerAlign="top-center">
			{ Children.images }
		</Row>
	)
},{
	name: 'Row Children Align Top Right (fixed height required)',
	component: (
		<Row innerAlign="top-right">
			{ Children.images }
		</Row>
	)
},{
	name: 'Row Children Align Bottom Left (fixed height required)',
	component: (
		<Row innerAlign="bottom-left">
			{ Children.images }
		</Row>
	)
},{
	name: 'Row Children Align Bottom Center (fixed height required)',
	component: (
		<Row innerAlign="bottom-center">
			{ Children.images }
		</Row>
	)
},{
	name: 'Row Children Align Bottom Right (fixed height required)',
	component: (
		<Row innerAlign="bottom-right">
			{ Children.images }
		</Row>
	)
},{
	name: 'Row Children Align Center (fixed height required)',
	component: (
		<Row innerAlign="center">
			{ Children.images }
		</Row>
	)
},{
	name: 'Row Children Align Center Middle (fixed height required)',
	component: (
		<Row innerAlign="middle-center">
			{ Children.images }
		</Row>
	)
},{
	name: 'Flexbox Row',
	component: (
		<Row flex="row">
			{ Children.flex }
		</Row>
	)
},, {
	name: 'Flexbox Column',
	component: (
		<Row flex="column">
			{ Children.flex }
		</Row>
	)
},{
	name: 'Row Children Align Horizontal',
	component: (
		<Row innerAlign="horizontal">
			{ Children.images }
		</Row>
	)
},{
	name: 'Row Children Align Vertical',
	component: (
		<Row innerAlign="vertical">
			{ Children.images }
		</Row>
	)
}]