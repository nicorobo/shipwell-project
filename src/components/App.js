import React from 'react';
import styled from 'styled-components';
import Header from './Header';
import { CreateStopForm } from '../form';
import { Itinerary } from '../itinerary';
const App = () => {
	return (
		<Container>
			<Header />
			<CreateStopForm />
			<Itinerary />
		</Container>
	);
};

const Container = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	font-family: Avenir, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu,
		Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
	color: #333;
`;

export default App;
