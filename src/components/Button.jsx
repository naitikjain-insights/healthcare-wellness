function Button({
children,
onClick,
variant = 'primary',
type = 'button',
disabled = false,
}) {
return (
<button
type={type}
className={`${variant}-button`}
onClick={onClick}
disabled={disabled}
>
{children} </button>
)
}

export default Button
