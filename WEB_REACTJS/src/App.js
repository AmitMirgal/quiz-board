import React, { useState, useCallback, lazy, Suspense } from 'react';
import { IntlProvider } from 'react-intl';
import { BrowserRouter as Router, Route } from "react-router-dom";

import en from './commons/translations/en';
import fr from './commons/translations/fr';
import { quizList } from './commons/utils/constans';

import './App.scss';

const LANGUAGES = {
	ENGLISH: 'en',
	FRENCH: 'fr'
}

const INTL_MESSAGES = {
	[LANGUAGES.ENGLISH]: en,
	[LANGUAGES.FRENCH]: fr
}

const Warning = lazy(() => import('./components/transitionPanels/Warning'));
const QuizBoard = lazy(() => import('./quizBoard/QuizBoard'));

function App() {

	let panel;

	const [isToggle, setIsToggle] = useState(true);
	const setToggle = useCallback(() => {
		setIsToggle(!isToggle);
	}, [isToggle, setIsToggle]);

	const [panelState, setPanelState] = useState('BOARD');
	const language = isToggle ? 'en' : 'fr';

	switch (panelState) {
		case 'ERROR':
			panel = (
				<Route>
					<Warning
						setPanelState={setPanelState}
						messageKey={'quizBoardWarning'}
						panelState={'BOARD'}
						widthSize={'50px'}
						heightSize={'50px'}
					/>
				</Route>
			)
			break;
		default:
			panel = (
				<Route>
					<QuizBoard setPanelState={setPanelState} />
				</Route>
			)
	}

	return (
		<>
			<div className={'app'}>
				<div className={'language'}>
					<span>FR</span>
					<input type="checkbox" id="toggle" className="checkbox" checked={isToggle} onChange={setToggle} />
					<label onKeyPress={setToggle} tabIndex={0} htmlFor="toggle" className="switch"></label>
					<span>EN</span>
				</div>
				<h1>Interview Quiz</h1>
				<span>Feel free to create as many helper/container react compontents as you feel helps you complete the task effectively.</span>
				<ol>
					{quizList.map((quiz, index) => <li key={`quiz-${index}`}>{quiz}</li>)}
				</ol>

				{/* ADD YOUR CODE HERE */}
			</div>
			<hr />

			<Router>
				<Suspense fallback={<div>Please wait until page load...</div>}>
					<IntlProvider locale={language} messages={INTL_MESSAGES[language]}>
						{panel}
					</IntlProvider>
				</Suspense>
			</Router>

		</>
	);
}

export default App;
