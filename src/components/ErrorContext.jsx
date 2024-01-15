import { createContext, useState } from 'react';
import Toast from 'react-bootstrap/Toast';

export const ErrorContext = createContext();

export const ErrorProvider = (props) => {
	const [showToast, setShowToast] = useState(false);
	const [toastMsg, setToastMsg] = useState('');
	return (
		<ErrorContext.Provider
			value={(showToast, setShowToast, toastMsg, setToastMsg)}>
			{props.children}
		</ErrorContext.Provider>
	);
};
