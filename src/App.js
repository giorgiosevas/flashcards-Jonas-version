import './styles.css';
import { useState } from 'react';

export default function App() {
	return (
		<div className="App">
			<FlashCards />
		</div>
	);
}

const questions = [
	{
		id: 3457,
		question: 'What language is React based on?',
		answer: 'JavaScript'
	},
	{
		id: 7336,
		question: 'What are the building blocks of React apps?',
		answer: 'Components'
	},
	{
		id: 8832,
		question: "What's the name of the syntax we use to describe a UI in React?",
		answer: 'JSX'
	},
	{
		id: 1297,
		question: 'How to pass data from parent to child components?',
		answer: 'Props'
	},
	{
		id: 9103,
		question: 'How to give components memory?',
		answer: 'useState hook'
	},
	{
		id: 2002,
		question: 'What do we call an input element that is completely synchronized with state?',
		answer: 'Controlled element'
	}
];

function FlashCards() {
	//? selectedId State Variable: This state variable holds the id of the currently selected flashcard. Initially, it's set to null, indicating that no flashcard is selected.
	//? setSelectedId Function: This function is used to update the selectedId state variable.
	const [selectedId, setSelectedId] = useState(null);

	/**
	 *? handleClick Function: This function is called when a flashcard is clicked. It takes an id as a parameter (the id of the clicked flashcard).
	 *? If the clicked flashcard is different from the currently selected one, it sets selectedId to the id of the clicked flashcard.
	 *? If the clicked flashcard is the same as the currently selected one (i.e., it's clicked again), it sets selectedId to null (deselecting it).
	 */
	function handleClick(id) {
		setSelectedId(id !== selectedId ? id : null);
	}

	return (
		<div className="flashcards">
			{questions.map((question) => (
				<div
					key={question.id}
					onClick={() => handleClick(question.id)}
					className={question.id === selectedId ? 'selected' : ''}
				>
					<p>{question.id === selectedId ? question.answer : question.question}</p>
				</div>
			))}
		</div>
	);
}
