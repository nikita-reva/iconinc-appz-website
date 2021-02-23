import { useRef, useEffect } from 'react'

// This function returns a mutable ref object
// Fires a handler function when a the user clicks outside of the referenced element
export const useClickOutside = (handler) => {
	const domNode = useRef(null)

	useEffect(() => {
		const outsideClickHandler = (e) => {
			if (!domNode.current.contains(e.target)) {
				handler()
			}
		}

		document.addEventListener('mousedown', outsideClickHandler)

		return () => {
			document.removeEventListener('mousedown', outsideClickHandler)
		}
	})

	return domNode
}
