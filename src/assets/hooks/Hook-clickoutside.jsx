import { useEffect } from 'react';

function disabledOverFlowHidden() {
	document.body.style.overflow = 'auto';
}

export default function useOnClickOutside(ref, handler) {
	useEffect(() => {
		const listener = (event) => {
			// Do nothing if clicking ref's element or descendent elements
			if (!ref.current || ref.current.contains(event.target)) {
				return;
			} else {
				handler(event);
				disabledOverFlowHidden();
			}
		};
		document.addEventListener('mousedown', listener);
		document.addEventListener('touchstart', listener);
		return () => {
			document.removeEventListener('mousedown', listener);
			document.removeEventListener('touchstart', listener);
		};
	}, [ref, handler]);
}
