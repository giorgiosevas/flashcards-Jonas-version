import { Container, Row, Col } from 'react-bootstrap';
import './styles.css';
import { useState } from 'react';

export const Flashcards = () => {
	const initialTexts = {
		btn1: 'What language is React based on?',
		btn2: 'What are the building blocks of React Apps?',
		btn3: 'Whats the name of the syntax we use to describe in React?',
		btn4: 'How to pass data from child to parent components?',
		btn5: 'How to give components memory?',
		btn6: 'What do we call an input element that is completely synchronized with state?'
	};

	const updatedTexts = {
		btn1: 'Vanilla JavaScript',
		btn2: 'Components',
		btn3: 'JSX',
		btn4: 'With Props',
		btn5: 'With State',
		btn6: 'Controlled Component'
	};

	const [buttonTexts, setButtonTexts] = useState(initialTexts);

	const toggleButtonText = (buttonKey) => {
		//1
		setButtonTexts((prevState) => ({
			//2
			...prevState,
			[buttonKey]:
				prevState[buttonKey] === initialTexts[buttonKey]
					? updatedTexts[buttonKey]
					: initialTexts[buttonKey]
		}));
	};
	//1->Explaining:
	/**
	 * Here, setButtonTexts is used to update the state.
	 * setButtonTexts is a function provided by the useState hook that allows you to update the state variable buttonTexts.
	 * We use a function (prevState) => { ... } to get the previous state, and based on that, we compute the new state.
	 */
	//2->Explaining:
	/**
	 *...prevState: This is the spread operator, which is used to copy all existing key-value pairs from the previous state into the new state object. This ensures that only the state for the button we are interested in is changed, while the state for all other buttons remains unchanged.
	 *[buttonKey]: This is a computed property name. It means that the actual key used here will be the value of buttonKey. For example, if buttonKey is 'btn1', then this is equivalent to updating prevState.btn1.
	 *prevState[buttonKey] === initialTexts[buttonKey] ? updatedTexts[buttonKey] : initialTexts[buttonKey]: This is a ternary operator used to determine the new value for the button text. It checks if the current text of the button (obtained from prevState[buttonKey]) is the same as the initial text (from initialTexts[buttonKey]). If it is, it means the button hasn't been toggled yet, so we update the text to the corresponding value in updatedTexts. If it's not, it means the button is already toggled, so we revert the text back to the initial value in initialTexts.
	 */

	return (
		<Container
			fluid
			className="flashcards div"
		>
			<Col
				xs={12}
				sm={12}
				md={12}
				lg={12}
				className="flashcards"
			>
				<Row>
					<button onClick={() => toggleButtonText('btn1')}>{buttonTexts.btn1}</button>
				</Row>
				<Row>
					<button onClick={() => toggleButtonText('btn2')}>{buttonTexts.btn2}</button>
				</Row>
				<Row>
					<button onClick={() => toggleButtonText('btn3')}>{buttonTexts.btn3}</button>
				</Row>
			</Col>
			<Col className="flashcards">
				<Row>
					<button onClick={() => toggleButtonText('btn4')}>{buttonTexts.btn4}</button>
				</Row>
				<Row>
					<button onClick={() => toggleButtonText('btn5')}>{buttonTexts.btn5}</button>
				</Row>
				<Row>
					<button onClick={() => toggleButtonText('btn6')}>{buttonTexts.btn6}</button>
				</Row>
			</Col>
		</Container>
	);
};
//------------------------------------------------------------------------//

//--Second way--//

// export const Flashcards = () => {
//     const initialTexts = {
//         btn1: 'What language is React based on?',
//         btn2: 'What are the building blocks of React Apps?',
//         btn3: 'Whats the name of the syntax we use to describe in React?',
//         btn4: 'How to pass data from child to parent components?',
//         btn5: 'How to give components memory?',
//         btn6: 'What do we call an input element that is completely synchronized with state?',
//     };

//     const toggledTexts = {
//         btn1: 'Vanilla JavaScript',
//         btn2: 'Components',
//         btn3: 'JSX',
//         btn4: 'With Props',
//         btn5: 'With State',
//         btn6: 'Controlled Component',
//     };

//     const [buttonText, setButtonText] = useState(initialTexts);

//     const clicked = (buttonKey) => {
//         switch (buttonKey) {
//             case 'btn1':
//                 setButtonText(prevState => ({ ...prevState, btn1: prevState.btn1 === initialTexts.btn1 ? toggledTexts.btn1 : initialTexts.btn1 }));
//                 break;
//             case 'btn2':
//                 setButtonText(prevState => ({ ...prevState, btn2: prevState.btn2 === initialTexts.btn2 ? toggledTexts.btn2 : initialTexts.btn2 }));
//                 break;
//             // Repeat for other buttons
//             // ...
//             default:
//                 // Optional default case
//         }
//     };

//     return (
//         <Container fluid className="flashcards div">
//             <Col xs={12} sm={12} md={12} lg={12} className="flashcards">
//                 <Row>
//                     <button onClick={() => clicked('btn1')}>{buttonText.btn1}</button>
//                 </Row>
//                 <Row>
//                     <button onClick={() => clicked('btn2')}>{buttonText.btn2}</button>
//                 </Row>
//                 {/* Repeat for other buttons */}
//             </Col>
//             {/* Repeat for the second column of buttons */}
//         </Container>
//     );
// };
