module.exports = {
  	content: [
		'./src/pages/**/*.{js,ts,jsx,tsx}',
		'./src/components/**/*.{js,ts,jsx,tsx}',
  	],
	theme: {
		extend: {
			colors: {
				'primary': '#EBE5C1',
				'secondary': '#E8DFA6'
			},
			dropShadow: {
				'primary': '0 4px 3px rgba(0 0 0 / 0.3)'
			}
		},
	},
	plugins: [],
}