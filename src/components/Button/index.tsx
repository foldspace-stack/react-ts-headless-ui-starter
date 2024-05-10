import './index.scss'

interface ButtonProps {
	primary?: boolean
	backgroundColor?: string
	size?: 'small' | 'medium' | 'large'
	label: string
	onClick?: () => void
}
const Button = ({
	primary = false,
	size = 'medium',
	backgroundColor,
	label,
	...props
}: ButtonProps) => {
	const mode = primary
		? 'storybook-button--primary'
		: 'storybook-button--secondary'
	return (
		<button
			type='button'
			data-testid='button'
			className={[
				'storybook-button',
				`storybook-button--${size}`,
				mode,
			].join(' ')}
			style={{ backgroundColor }}
			{...props}>
			{label}
		</button>
	)
}

export default Button