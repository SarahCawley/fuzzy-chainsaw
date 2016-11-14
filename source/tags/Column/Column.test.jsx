import React from 'react';
import Row from '../Row/Row.jsx';
import Column from './Column.jsx';

var ColumnTitles = [];
for(var i = 1; i < 13; i++){
	ColumnTitles.push(i);
}
const Children = [
	<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nisl ligula, convallis quis libero ac, ornare malesuada elit. Phasellus ultrices nunc ac dolor congue porta. Phasellus rutrum magna ut sapien convallis, id mollis mi volutpat. In ac arcu elit. In sit amet sapien eu dui maximus tempor. Morbi eleifend lectus sit amet cursus luctus. Pellentesque interdum felis eleifend elit laoreet posuere. In placerat tempor risus, in porttitor magna suscipit gravida. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Cras lorem sapien, ultricies id libero ac, gravida dignissim sem. In cursus justo ac est accumsan mollis.</p>
];

module.exports = [{
	name: 'Two-up - Column Class',
	component: (
		<Row>
			<Column className="two-up">
				{ Children }
			</Column>
			<Column className="two-up">
				{ Children }
			</Column>
		</Row>
	)
},{
	name: 'Three-up - Column Class',
	component: (
		<Row>
			<Column className="three-up">
				{ Children }
			</Column>
			<Column className="three-up">
				{ Children }
			</Column>
			<Column className="three-up">
				{ Children }
			</Column>			
		</Row>
	)
},{
	name: 'Four-up - Column Class',
	component: (
		<Row>
			<Column className="four-up">
				{ Children }
			</Column>
			<Column className="four-up">
				{ Children }
			</Column>
			<Column className="four-up">
				{ Children }
			</Column>
			<Column className="four-up">
				{ Children }
			</Column>			
		</Row>
	)
},{
	name: 'Pre-calculated - Size 1 (w/o optional gutters)',
	component: (
		<Row outerAlign="reset">
			<Column size="1" className="sg-column" gutter="false">
				{ ColumnTitles[0] }
			</Column>
			<Column size="1" className="sg-column" gutter="false">
				{ ColumnTitles[0] }
			</Column>
			<Column size="1" className="sg-column" gutter="false">
				{ ColumnTitles[0] }
			</Column>
			<Column size="1" className="sg-column" gutter="false">
				{ ColumnTitles[0] }
			</Column>
			<Column size="1" className="sg-column" gutter="false">
				{ ColumnTitles[0] }
			</Column>
			<Column size="1" className="sg-column" gutter="false">
				{ ColumnTitles[0] }
			</Column>
			<Column size="1" className="sg-column" gutter="false">
				{ ColumnTitles[0] }
			</Column>
			<Column size="1" className="sg-column" gutter="false">
				{ ColumnTitles[0] }
			</Column>
			<Column size="1" className="sg-column" gutter="false">
				{ ColumnTitles[0] }
			</Column>
			<Column size="1" className="sg-column" gutter="false">
				{ ColumnTitles[0] }
			</Column>
			<Column size="1" className="sg-column" gutter="false">
				{ ColumnTitles[0] }
			</Column>
			<Column size="1" className="sg-column" gutter="false">
				{ ColumnTitles[0] }
			</Column>			
		</Row>																
	)
},{
	name: 'Pre-calculated - Size 2 (w/o optional gutters)',
	component: (
		<Row outerAlign="reset">
			<Column size="2" className="sg-column" gutter="false">
				{ ColumnTitles[1] }
			</Column>
			<Column size="2" className="sg-column" gutter="false">
				{ ColumnTitles[1] }
			</Column>
			<Column size="2" className="sg-column" gutter="false">
				{ ColumnTitles[1] }
			</Column>
			<Column size="2" className="sg-column" gutter="false">
				{ ColumnTitles[1] }
			</Column>
			<Column size="2" className="sg-column" gutter="false">
				{ ColumnTitles[1] }
			</Column>
			<Column size="2" className="sg-column" gutter="false">
				{ ColumnTitles[1] }
			</Column>			
		</Row>																
	)
},{
	name: 'Pre-calculated - Size 3 (w/o optional gutters)',
	component: (
		<Row outerAlign="reset">
			<Column size="3" className="sg-column" gutter="false">
				{ ColumnTitles[2] }
			</Column>
			<Column size="3" className="sg-column" gutter="false">
				{ ColumnTitles[2] }
			</Column>
			<Column size="3" className="sg-column" gutter="false">
				{ ColumnTitles[2] }
			</Column>
			<Column size="3" className="sg-column" gutter="false">
				{ ColumnTitles[2] }
			</Column>			
		</Row>																
	)
},{
	name: 'Pre-calculated - Size 4 (w/o optional gutters)',
	component: (
		<Row outerAlign="reset">
			<Column size="4" className="sg-column" gutter="false">
				{ ColumnTitles[3] }
			</Column>
			<Column size="4" className="sg-column" gutter="false">
				{ ColumnTitles[3] }
			</Column>
			<Column size="4" className="sg-column" gutter="false">
				{ ColumnTitles[3] }
			</Column>			
		</Row>																
	)
},{
	name: 'Pre-calculated - Size 6 (w/o optional gutters)',
	component: (
		<Row outerAlign="reset">
			<Column size="6" className="sg-column" gutter="false">
				{ ColumnTitles[5] }
			</Column>
			<Column size="6" className="sg-column" gutter="false">
				{ ColumnTitles[5] }
			</Column>			
		</Row>																
	)
},{
	name: 'Pre-calculated - Size 1 over 11',
	component: (
		<Row outerAlign="reset">
			<Column size="1" className="sg-column">
				{ ColumnTitles[0] }
			</Column>
			<Column size="11" className="sg-column">
				{ ColumnTitles[10] }
			</Column>			
		</Row>																
	)
},{
	name: 'Pre-calculated - Size 2 over 10',
	component: (
		<Row outerAlign="reset">
			<Column size="2" className="sg-column">
				{ ColumnTitles[1] }
			</Column>
			<Column size="10" className="sg-column">
				{ ColumnTitles[9] }
			</Column>			
		</Row>																
	)
},{
	name: 'Pre-calculated - Size 3 over 9',
	component: (
		<Row outerAlign="reset">
			<Column size="3" className="sg-column">
				{ ColumnTitles[2] }
			</Column>
			<Column size="9" className="sg-column">
				{ ColumnTitles[8] }
			</Column>			
		</Row>																
	)
},{
	name: 'Pre-calculated - Size 4 over 8',
	component: (
		<Row outerAlign="reset">
			<Column size="4" className="sg-column">
				{ ColumnTitles[3] }
			</Column>
			<Column size="8" className="sg-column">
				{ ColumnTitles[7] }
			</Column>		
		</Row>																
	)
},{
	name: 'Pre-calculated - Size 5 over 7',
	component: (
		<Row outerAlign="reset">
			<Column size="5" className="sg-column">
				{ ColumnTitles[4] }
			</Column>
			<Column size="7" className="sg-column">
				{ ColumnTitles[6] }
			</Column>			
		</Row>																
	)
},{
	name: 'Pre-calculated - Size 6 over 6',
	component: (
		<Row outerAlign="reset">
			<Column size="6" className="sg-column">
				{ ColumnTitles[5] }
			</Column>
			<Column size="6" className="sg-column">
				{ ColumnTitles[5] }
			</Column>			
		</Row>																
	)
},{
	name: 'Pre-calculated - Size 7 over 5',
	component: (
		<Row outerAlign="reset">
			<Column size="7" className="sg-column">
				{ ColumnTitles[6] }
			</Column>
			<Column size="5" className="sg-column">
				{ ColumnTitles[4] }
			</Column>			
		</Row>																
	)
},{
	name: 'Pre-calculated - Size 8 over 4',
	component: (
		<Row outerAlign="reset">
			<Column size="8" className="sg-column">
				{ ColumnTitles[7] }
			</Column>
			<Column size="4" className="sg-column">
				{ ColumnTitles[3] }
			</Column>			
		</Row>																
	)
},{
	name: 'Pre-calculated - Size 9 over 3',
	component: (
		<Row outerAlign="reset">
			<Column size="9" className="sg-column">
				{ ColumnTitles[8] }
			</Column>
			<Column size="3" className="sg-column">
				{ ColumnTitles[2] }
			</Column>			
		</Row>																
	)
},{
	name: 'Pre-calculated - Size 10 over 2',
	component: (
		<Row outerAlign="reset">
			<Column size="10" className="sg-column">
				{ ColumnTitles[9] }
			</Column>
			<Column size="2" className="sg-column">
				{ ColumnTitles[1] }
			</Column>		
		</Row>																
	)
},{
	name: 'Pre-calculated - Size 11 over 1',
	component: (
		<Row outerAlign="reset">
			<Column size="11" className="sg-column">
				{ ColumnTitles[10] }
			</Column>
			<Column size="1" className="sg-column">
				{ ColumnTitles[0] }
			</Column>			
		</Row>																
	)
},{
	name: 'Push / Pull',
	component: (
		<Row outerAlign="reset">
			<Column size="4" className="sg-column" gutter="false" push="8">
				{ ColumnTitles[1] }
			</Column>
			<Column size="8" className="sg-column" gutter="false" pull="4">
				{ ColumnTitles[3] }
			</Column>									
		</Row>																
	)
}]