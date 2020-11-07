import React from 'react';
import { useQuery } from '@apollo/client';
import Card from '../components/Card';
import { Box, Heading, Spinner, Divider, Grid } from '@chakra-ui/core';
import { GET_ALL_QUIZZES } from '../utils/graphql';
import { Link } from 'react-router-dom';

const Home = () => {
	const { loading, error, data: { getQuizzes: quizzesData } = {} } = useQuery(
		GET_ALL_QUIZZES
	);
	if (loading)
		return (
			<Spinner thickness='8px' speed='.7s' color='purple.500' size='70px' />
		);
	if (error) return <p>Error :</p>;
	return (
		<>
			<Box h='full' px='72px'>
				<Heading
					as='h1'
					py='1rem'
					fontSize='3rem'
					letterSpacing='3px'
					textAlign='center'
					fontFamily='inter'
					fontWeight='bold'
					color='gray.700'
					textTransform='uppercase'
				>
					All Quizzes
				</Heading>
				<Divider borderColor='purple.400' w='25%' m='auto' />
				<Grid h='auto' w='full' mt={5} templateColumns='repeat(3, 1fr)' gap={4}>
					{quizzesData.map((quiz) => {
						return <Card key={quiz.id} quizData={quiz} />;
					})}
				</Grid>
			</Box>
		</>
	);
};

export default Home;