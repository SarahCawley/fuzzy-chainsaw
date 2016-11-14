import React from 'react';
import Row from './Row.jsx';
import Column from '../Column/Column.jsx';

const Children = {
	columns: [
		<Column className="three-up"><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nisl ligula, convallis quis libero ac, ornare malesuada elit. Phasellus ultrices nunc ac dolor congue porta. Phasellus rutrum magna ut sapien convallis, id mollis mi volutpat. In ac arcu elit. In sit amet sapien eu dui maximus tempor. Morbi eleifend lectus sit amet cursus luctus. Pellentesque interdum felis eleifend elit laoreet posuere. In placerat tempor risus, in porttitor magna suscipit gravida. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Cras lorem sapien, ultricies id libero ac, gravida dignissim sem. In cursus justo ac est accumsan mollis.</p></Column>,
	],
	shortColumns: [
		<Column className="three-up"><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nisl ligula, convallis quis libero ac, ornare malesuada elit.</p></Column>
	],	
	image: [
		<img src="http://placehold.it/350x150" style={{}} />
	]
};

module.exports = [{
	name: 'Row - Default Size/Align',
	component: (
		<Row>
			{ Children.columns[0] }
			{ Children.columns[0] }
			{ Children.columns[0] }
		</Row>
	)
}, {
	name: 'Row - Reset (no alignment / no size)',
	component: (
		<Row size="reset">
			{ Children.columns[0] }
			{ Children.columns[0] }
			{ Children.columns[0] }
		</Row>
	)
}, {
	name: 'Row - Size 12',
	component: (
		<Row size="12">
			{ Children.shortColumns[0] }
			{ Children.shortColumns[0] }
			{ Children.shortColumns[0] }
		</Row>
	)
}, {
	name: 'Row - Size 11',
	component: (
		<Row size="11">
			{ Children.shortColumns[0] }
			{ Children.shortColumns[0] }
			{ Children.shortColumns[0] }
		</Row>
	)
}, {
	name: 'Row - Size 10',
	component: (
		<Row size="10">
			{ Children.shortColumns[0] }
			{ Children.shortColumns[0] }
			{ Children.shortColumns[0] }
		</Row>
	)
}, {
	name: 'Row - Size 9',
	component: (
		<Row size="8">
			{ Children.shortColumns[0] }
			{ Children.shortColumns[0] }
			{ Children.shortColumns[0] }
		</Row>
	)
}, {
	name: 'Row - Size 8',
	component: (
		<Row size="8">
			{ Children.shortColumns[0] }
			{ Children.shortColumns[0] }
			{ Children.shortColumns[0] }
		</Row>
	)
}, {
	name: 'Row - Size 7',
	component: (
		<Row size="7">
			{ Children.shortColumns[0] }
			{ Children.shortColumns[0] }
			{ Children.shortColumns[0] }
		</Row>
	)
}, {
	name: 'Row - Size 6',
	component: (
		<Row size="6">
			{ Children.shortColumns[0] }
			{ Children.shortColumns[0] }
			{ Children.shortColumns[0] }
		</Row>
	)
}, {
	name: 'Row - Size 5',
	component: (
		<Row size="5">
			{ Children.shortColumns[0] }
			{ Children.shortColumns[0] }
			{ Children.shortColumns[0] }
		</Row>
	)
}, {
	name: 'Row - Size 4',
	component: (
		<Row size="4">
			{ Children.shortColumns[0] }
			{ Children.shortColumns[0] }
			{ Children.shortColumns[0] }
		</Row>
	)
}, {
	name: 'Row - Size 3',
	component: (
		<Row size="3">
			{ Children.shortColumns[0] }
			{ Children.shortColumns[0] }
			{ Children.shortColumns[0] }
		</Row>
	)
}, {
	name: 'Row - Size 2',
	component: (
		<Row size="2">
			{ Children.shortColumns[0] }
			{ Children.shortColumns[0] }
		</Row>
	)
}, {
	name: 'Row - Size 1',
	component: (
		<Row size="1">
			{ Children.shortColumns[0] }
		</Row>
	)
}, {
	name: 'Row - Child Position Left',
	component: (
		<Row className="sg-row-height" childPosition="left" size="8">
			{ Children.image }
		</Row>
	)
}, {
	name: 'Row - Child Position Right',
	component: (
		<Row className="sg-row-height" childPosition="right" size="8">
			{ Children.image }
		</Row>
	)
}, {
	name: 'Row - Child Position Top',
	component: (
		<Row className="sg-row-height" childPosition="top" size="8">
			{ Children.image }
		</Row>
	)
}, {
	name: 'Row - Child Position Bottom',
	component: (
		<Row className="sg-row-height" childPosition="bottom" size="8">
			{ Children.image }
		</Row>
	)
},{
	name: 'Row - Child Position Top Left',
	component: (
		<Row className="sg-row-height" childPosition="top-left" size="8">
			{ Children.image }
		</Row>
	)
},{
	name: 'Row - Child Position Top Center',
	component: (
		<Row className="sg-row-height" childPosition="top-center" size="8">
			{ Children.image }
		</Row>
	)
},{
	name: 'Row - Child Position Top Right',
	component: (
		<Row className="sg-row-height" childPosition="top-right" size="8">
			{ Children.image }
		</Row>
	)
},{
	name: 'Row - Child Position Bottom Left',
	component: (
		<Row className="sg-row-height" childPosition="bottom-left" size="8">
			{ Children.image }
		</Row>
	)
},{
	name: 'Row - Child Position Bottom Center',
	component: (
		<Row className="sg-row-height" childPosition="bottom-center" size="8">
			{ Children.image }
		</Row>
	)
},{
	name: 'Row - Child Position Bottom Right',
	component: (
		<Row className="sg-row-height" childPosition="bottom-right" size="8">
			{ Children.image }
		</Row>
	)
},{
	name: 'Row - Child Position Center',
	component: (
		<Row className="sg-row-height" childPosition="center" size="8">
			{ Children.image }
		</Row>
	)
},{
	name: 'Row - Child Position Center Middle',
	component: (
		<Row className="sg-row-height" childPosition="middle-center" size="8">
			{ Children.image }
		</Row>
	)
}]