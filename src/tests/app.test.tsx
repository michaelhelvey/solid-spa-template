import { render, screen } from '@solidjs/testing-library'
import { App } from '../app'

test('app component can render', () => {
	render(() => <App />)

	expect(screen.getByText(/msh solid starter/i)).toBeInTheDocument()
})
