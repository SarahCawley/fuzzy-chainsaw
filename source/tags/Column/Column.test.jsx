import React from 'react';
import Column from './Column.jsx';
import Wrapper from '../Wrapper/Wrapper.jsx';

let ColumnTitles;
ColumnTitles = [
	<p>Integer sed lacus et ligula iaculis convallis.</p>,
	<p>Integer sed lacus et ligula iaculis convallis ac a odio. Aliquam elementum, nisl vitae malesuada accumsan, ex lorem pharetra eros, cursus fringilla elit dui non nunc.</p>,
	<p>Integer sed lacus et ligula iaculis convallis ac a odio. Aliquam elementum, nisl vitae malesuada accumsan, ex lorem pharetra eros, cursus fringilla elit dui non nunc. Integer libero turpis, pharetra porttitor hendrerit eget, lobortis sed leo. Aenean fringilla ut enim a fringilla. Pellentesque quis lobortis orci. Duis sit amet dolor ligula. Donec at fermentum tortor, ac elementum erat. Nam varius quam ut dignissim sollicitudin. Sed non purus purus.</p>
];


module.exports = [{
	name: 'Pre-calculated - Size 1 (w/o optional gutters)',
	component: (
		<Wrapper outerAlign="reset">
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
		</Wrapper>																
	)
},{
	name: 'Pre-calculated - Size 2 (w/o optional gutters)',
	component: (
		<Wrapper outerAlign="reset">
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
		</Wrapper>																
	)
},{
	name: 'Pre-calculated - Size 3 (w/o optional gutters)',
	component: (
		<Wrapper outerAlign="reset">
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
		</Wrapper>																
	)
},{
	name: 'Pre-calculated - Size 4 (w/o optional gutters)',
	component: (
		<Wrapper outerAlign="reset">
			<Column size="4" className="sg-column" gutter="false">
				{ ColumnTitles[2] }
			</Column>
			<Column size="4" className="sg-column" gutter="false">
				{ ColumnTitles[2] }
			</Column>
			<Column size="4" className="sg-column" gutter="false">
				{ ColumnTitles[2] }
			</Column>			
		</Wrapper>																
	)
},{
	name: 'Pre-calculated - Size 6 (w/o optional gutters)',
	component: (
		<Wrapper outerAlign="reset">
			<Column size="6" className="sg-column" gutter="false">
				{ ColumnTitles[2] }
			</Column>
			<Column size="6" className="sg-column" gutter="false">
				{ ColumnTitles[2] }
			</Column>			
		</Wrapper>																
	)
},{
	name: 'Pre-calculated - Size 1 over 11',
	component: (
		<Wrapper outerAlign="reset">
			<Column size="1" className="sg-column">
				{ ColumnTitles[0] }
			</Column>
			<Column size="11" className="sg-column">
				{ ColumnTitles[2] }
				{ ColumnTitles[2] }
			</Column>			
		</Wrapper>																
	)
},{
	name: 'Pre-calculated - Size 2 over 10',
	component: (
		<Wrapper outerAlign="reset">
			<Column size="2" className="sg-column">
				{ ColumnTitles[1] }
			</Column>
			<Column size="10" className="sg-column">
				{ ColumnTitles[2] }
				{ ColumnTitles[2] }
			</Column>			
		</Wrapper>																
	)
},{
	name: 'Pre-calculated - Size 3 over 9',
	component: (
		<Wrapper outerAlign="reset">
			<Column size="3" className="sg-column">
				{ ColumnTitles[1] }
			</Column>
			<Column size="9" className="sg-column">
				{ ColumnTitles[2] }
				{ ColumnTitles[2] }
			</Column>			
		</Wrapper>																
	)
},{
	name: 'Pre-calculated - Size 4 over 8',
	component: (
		<Wrapper outerAlign="reset">
			<Column size="4" className="sg-column">
				{ ColumnTitles[1] }
				{ ColumnTitles[1] }
			</Column>
			<Column size="8" className="sg-column">
				{ ColumnTitles[2] }
				{ ColumnTitles[2] }
			</Column>		
		</Wrapper>																
	)
},{
	name: 'Pre-calculated - Size 5 over 7',
	component: (
		<Wrapper outerAlign="reset">
			<Column size="5" className="sg-column">
				{ ColumnTitles[2] }
			</Column>
			<Column size="7" className="sg-column">
				{ ColumnTitles[2] }
			</Column>			
		</Wrapper>																
	)
},{
	name: 'Pre-calculated - Size 6 over 6',
	component: (
		<Wrapper outerAlign="reset">
			<Column size="6" className="sg-column">
				{ ColumnTitles[2] }
			</Column>
			<Column size="6" className="sg-column">
				{ ColumnTitles[2] }
			</Column>			
		</Wrapper>																
	)
},{
	name: 'Pre-calculated - Size 7 over 5',
	component: (
		<Wrapper outerAlign="reset">
			<Column size="7" className="sg-column">
				{ ColumnTitles[2] }
				{ ColumnTitles[2] }
			</Column>
			<Column size="5" className="sg-column">
				{ ColumnTitles[2] }
			</Column>			
		</Wrapper>																
	)
},{
	name: 'Pre-calculated - Size 8 over 4',
	component: (
		<Wrapper outerAlign="reset">
			<Column size="8" className="sg-column">
				{ ColumnTitles[2] }
				{ ColumnTitles[2] }
			</Column>
			<Column size="4" className="sg-column">
				{ ColumnTitles[2] }
			</Column>			
		</Wrapper>																
	)
},{
	name: 'Pre-calculated - Size 9 over 3',
	component: (
		<Wrapper outerAlign="reset">
			<Column size="9" className="sg-column">
				{ ColumnTitles[2] }
				{ ColumnTitles[2] }
			</Column>
			<Column size="3" className="sg-column">
				{ ColumnTitles[1] }
			</Column>			
		</Wrapper>																
	)
},{
	name: 'Pre-calculated - Size 10 over 2',
	component: (
		<Wrapper outerAlign="reset">
			<Column size="10" className="sg-column">
				{ ColumnTitles[2] }
				{ ColumnTitles[2] }
			</Column>
			<Column size="2" className="sg-column">
				{ ColumnTitles[1] }
			</Column>		
		</Wrapper>																
	)
},{
	name: 'Pre-calculated - Size 11 over 1',
	component: (
		<Wrapper outerAlign="reset">
			<Column size="11" className="sg-column">
				{ ColumnTitles[2] }
				{ ColumnTitles[2] }
			</Column>
			<Column size="1" className="sg-column">
				{ ColumnTitles[0] }
			</Column>			
		</Wrapper>																
	)
}]