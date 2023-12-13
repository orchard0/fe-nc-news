import { useState } from 'react';
import Toast from 'react-bootstrap/Toast';

function ToastMsg({ showToast, setShowToast, toastMsg }) {
	const toggleShowA = () => setShowToast(!showToast);
	return (
		<Toast
			show={showToast}
			onClose={toggleShowA}
			style={{
				position: 'fixed',
				top: 10,
				right: 10,
			}}>
			<Toast.Header>
				<strong className="me-auto">Error!</strong>
			</Toast.Header>
			<Toast.Body>{toastMsg}</Toast.Body>
		</Toast>
	);
}

export default ToastMsg;
