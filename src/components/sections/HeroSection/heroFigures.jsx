// The five patent drawings that cycle through the home hero sheet, converted
// from the source mock files. One rendered at a time; single 400x360 viewBox
// (drone/cylinder shifted down to vertically center).
const FIGURES = [
	{
		id: 'fig-2-brake-rotor',
		node: (
			<>
				{/* 1. Center hub hole */}
				<ellipse
					className="hero-ln hero-dr"
					pathLength="1"
					style={{ '--d': '0.2s', '--t': '0.6s' }}
					cx="200"
					cy="180"
					rx="22"
					ry="12"
				/>
				<path
					className="hero-ln hero-dr"
					pathLength="1"
					style={{ '--d': '0.4s', '--t': '0.4s' }}
					d="M 178 180 L 178 190 A 22 12 0 0 0 222 190 L 222 180"
				/>
				{/* 2. Lug nut studs */}
				<ellipse
					className="hero-ln hero-dr"
					pathLength="1"
					style={{ '--d': '0.6s', '--t': '0.2s' }}
					cx="200"
					cy="158"
					rx="4"
					ry="2"
				/>
				<ellipse
					className="hero-ln hero-dr"
					pathLength="1"
					style={{ '--d': '0.7s', '--t': '0.2s' }}
					cx="238"
					cy="172"
					rx="4"
					ry="2"
				/>
				<ellipse
					className="hero-ln hero-dr"
					pathLength="1"
					style={{ '--d': '0.8s', '--t': '0.2s' }}
					cx="223"
					cy="198"
					rx="4"
					ry="2"
				/>
				<ellipse
					className="hero-ln hero-dr"
					pathLength="1"
					style={{ '--d': '0.9s', '--t': '0.2s' }}
					cx="177"
					cy="198"
					rx="4"
					ry="2"
				/>
				<ellipse
					className="hero-ln hero-dr"
					pathLength="1"
					style={{ '--d': '1s', '--t': '0.2s' }}
					cx="162"
					cy="172"
					rx="4"
					ry="2"
				/>
				{/* 3. Raised hub face and wall */}
				<ellipse
					className="hero-ln hero-dr"
					pathLength="1"
					style={{ '--d': '1.2s', '--t': '0.8s' }}
					cx="200"
					cy="180"
					rx="75"
					ry="42"
				/>
				<path
					className="hero-ln hero-dr"
					pathLength="1"
					style={{ '--d': '1.5s', '--t': '0.6s' }}
					d="M 125 180 A 75 42 0 0 0 275 180 L 275 195 A 75 42 0 0 1 125 195 Z"
				/>
				{/* 4. Rotor disc, edge thickness and cooling vanes */}
				<ellipse
					className="hero-ln hero-dr"
					pathLength="1"
					style={{ '--d': '1.8s', '--t': '0.8s' }}
					cx="200"
					cy="195"
					rx="85"
					ry="48"
				/>
				<ellipse
					className="hero-ln hero-dr"
					pathLength="1"
					style={{ '--d': '2.2s', '--t': '1.2s' }}
					cx="200"
					cy="195"
					rx="150"
					ry="85"
				/>
				<path
					className="hero-ln hero-dr"
					pathLength="1"
					style={{ '--d': '2.6s', '--t': '0.8s' }}
					d="M 50 195 A 150 85 0 0 0 350 195 L 350 205 A 150 85 0 0 1 50 205 Z"
				/>
				<path
					className="hero-ln hero-dr"
					pathLength="1"
					strokeDasharray="3 4"
					style={{ '--d': '3s', '--t': '0.8s' }}
					d="M 50 200 A 150 85 0 0 0 350 200"
				/>
				{/* 5. Performance slots and drilled holes */}
				<path
					className="hero-ln hero-dr"
					pathLength="1"
					style={{ '--d': '3.3s', '--t': '0.3s' }}
					d="M 210 145 L 220 115"
				/>
				<circle
					className="hero-ln hero-dr"
					pathLength="1"
					style={{ '--d': '3.4s', '--t': '0.1s' }}
					cx="205"
					cy="130"
					r="1.5"
				/>
				<path
					className="hero-ln hero-dr"
					pathLength="1"
					style={{ '--d': '3.5s', '--t': '0.3s' }}
					d="M 250 160 L 290 130"
				/>
				<circle
					className="hero-ln hero-dr"
					pathLength="1"
					style={{ '--d': '3.6s', '--t': '0.1s' }}
					cx="270"
					cy="150"
					r="1.5"
				/>
				<path
					className="hero-ln hero-dr"
					pathLength="1"
					style={{ '--d': '3.7s', '--t': '0.3s' }}
					d="M 270 205 L 330 215"
				/>
				<circle
					className="hero-ln hero-dr"
					pathLength="1"
					style={{ '--d': '3.8s', '--t': '0.1s' }}
					cx="300"
					cy="205"
					r="1.5"
				/>
				<path
					className="hero-ln hero-dr"
					pathLength="1"
					style={{ '--d': '3.9s', '--t': '0.3s' }}
					d="M 240 235 L 270 270"
				/>
				<circle
					className="hero-ln hero-dr"
					pathLength="1"
					style={{ '--d': '4s', '--t': '0.1s' }}
					cx="250"
					cy="255"
					r="1.5"
				/>
				<path
					className="hero-ln hero-dr"
					pathLength="1"
					style={{ '--d': '4.1s', '--t': '0.3s' }}
					d="M 190 245 L 180 275"
				/>
				<circle
					className="hero-ln hero-dr"
					pathLength="1"
					style={{ '--d': '4.2s', '--t': '0.1s' }}
					cx="195"
					cy="260"
					r="1.5"
				/>
				<path
					className="hero-ln hero-dr"
					pathLength="1"
					style={{ '--d': '4.3s', '--t': '0.3s' }}
					d="M 140 225 L 100 245"
				/>
				<circle
					className="hero-ln hero-dr"
					pathLength="1"
					style={{ '--d': '4.4s', '--t': '0.1s' }}
					cx="120"
					cy="235"
					r="1.5"
				/>
				<path
					className="hero-ln hero-dr"
					pathLength="1"
					style={{ '--d': '4.5s', '--t': '0.3s' }}
					d="M 130 185 L 70 175"
				/>
				<circle
					className="hero-ln hero-dr"
					pathLength="1"
					style={{ '--d': '4.6s', '--t': '0.1s' }}
					cx="100"
					cy="180"
					r="1.5"
				/>
				<path
					className="hero-ln hero-dr"
					pathLength="1"
					style={{ '--d': '4.7s', '--t': '0.3s' }}
					d="M 160 155 L 130 120"
				/>
				<circle
					className="hero-ln hero-dr"
					pathLength="1"
					style={{ '--d': '4.8s', '--t': '0.1s' }}
					cx="145"
					cy="135"
					r="1.5"
				/>
				{/* 6. Brake caliper */}
				<path
					className="hero-ln hero-dr"
					pathLength="1"
					style={{ '--d': '5s', '--t': '0.8s' }}
					d="M 260 140 L 330 130 Q 360 195 330 260 L 260 250 Q 285 195 260 140 Z"
				/>
				<path
					className="hero-ln hero-dr"
					pathLength="1"
					style={{ '--d': '5.4s', '--t': '0.8s' }}
					d="M 330 130 L 355 130 Q 385 195 355 260 L 330 260"
				/>
				<ellipse
					className="hero-ln hero-dr"
					pathLength="1"
					style={{ '--d': '5.8s', '--t': '0.4s' }}
					cx="340"
					cy="165"
					rx="8"
					ry="18"
					transform="rotate(-15 340 165)"
				/>
				<ellipse
					className="hero-ln hero-dr"
					pathLength="1"
					style={{ '--d': '6s', '--t': '0.4s' }}
					cx="340"
					cy="225"
					rx="8"
					ry="18"
					transform="rotate(15 340 225)"
				/>
				<path
					className="hero-ln hero-dr"
					pathLength="1"
					style={{ '--d': '6.2s', '--t': '0.4s' }}
					d="M 320 185 L 345 185 L 345 205 L 320 205 Z"
				/>
				<rect
					className="hero-hid hero-fd"
					style={{ '--d': '6.4s' }}
					x="323"
					y="188"
					width="10"
					height="14"
				/>
				<path
					className="hero-ln hero-dr"
					pathLength="1"
					style={{ '--d': '6.5s', '--t': '0.3s' }}
					d="M 345 130 L 355 120 L 352 115 L 342 125"
				/>
				<path
					className="hero-ln hero-dr"
					pathLength="1"
					style={{ '--d': '6.8s', '--t': '0.6s' }}
					d="M 355 120 C 380 95, 390 145, 395 85"
				/>
				{/* 7. Guideline leaders, numerals and caption */}
				<path
					className="hero-gl hero-dr"
					pathLength="1"
					style={{ '--d': '7.2s', '--t': '0.5s' }}
					d="M 200 160 L 170 110 L 140 110"
				/>
				<text className="hero-num hero-fd" style={{ '--d': '7.4s' }} x="115" y="114">
					14
				</text>
				<path
					className="hero-gl hero-dr"
					pathLength="1"
					style={{ '--d': '7.4s', '--t': '0.5s' }}
					d="M 177 198 L 150 230 L 120 230"
				/>
				<text className="hero-num hero-fd" style={{ '--d': '7.6s' }} x="95" y="234">
					16
				</text>
				<path
					className="hero-gl hero-dr"
					pathLength="1"
					style={{ '--d': '7.6s', '--t': '0.5s' }}
					d="M 220 250 L 240 290 L 270 290"
				/>
				<text className="hero-num hero-fd" style={{ '--d': '7.8s' }} x="275" y="294">
					12
				</text>
				<path
					className="hero-gl hero-dr"
					pathLength="1"
					style={{ '--d': '7.8s', '--t': '0.5s' }}
					d="M 200 280 L 180 320 L 150 320"
				/>
				<text className="hero-num hero-fd" style={{ '--d': '8s' }} x="125" y="324">
					34
				</text>
				<path
					className="hero-gl hero-dr"
					pathLength="1"
					style={{ '--d': '8s', '--t': '0.5s' }}
					d="M 350 150 L 370 120 L 385 120"
				/>
				<text className="hero-num hero-fd" style={{ '--d': '8.2s' }} x="388" y="124">
					42
				</text>
				<path
					className="hero-gl hero-dr"
					pathLength="1"
					style={{ '--d': '8.2s', '--t': '0.5s' }}
					d="M 350 90 L 330 60 L 300 60"
				/>
				<text className="hero-num hero-fd" style={{ '--d': '8.4s' }} x="275" y="64">
					56
				</text>
				<text
					className="hero-cap hero-fd"
					style={{ '--d': '8.6s' }}
					x="200"
					y="355"
					textAnchor="middle"
				>
					FIG. 2
				</text>
			</>
		),
	},
	{
		id: 'fig-4-quadcopter',
		dy: 10,
		node: (
			<>
				{/* Central fuselage / body */}
				<path
					className="hero-ln hero-dr"
					pathLength="1"
					style={{ '--d': '0.2s', '--t': '1s' }}
					d="M 200 120 L 240 140 L 200 160 L 160 140 Z"
				/>
				<path
					className="hero-ln hero-dr"
					pathLength="1"
					style={{ '--d': '0.8s', '--t': '0.8s' }}
					d="M 160 140 L 160 155 L 200 175 L 240 155 L 240 140"
				/>
				<path
					className="hero-ln hero-dr"
					pathLength="1"
					style={{ '--d': '1.2s', '--t': '0.4s' }}
					d="M 200 160 L 200 175"
				/>
				<path
					className="hero-ln hero-dr"
					pathLength="1"
					style={{ '--d': '1.4s', '--t': '0.4s' }}
					d="M 160 140 L 160 155 M 240 140 L 240 155"
				/>
				{/* Body details: vents and power button */}
				<path
					className="hero-ln hero-dr"
					pathLength="1"
					style={{ '--d': '1.6s', '--t': '0.4s' }}
					d="M 180 135 L 195 142 M 220 135 L 205 142"
				/>
				<ellipse
					className="hero-ln hero-dr"
					pathLength="1"
					style={{ '--d': '1.8s', '--t': '0.4s' }}
					cx="200"
					cy="140"
					rx="8"
					ry="4"
				/>
				{/* Outrigger arms */}
				<path
					className="hero-ln hero-dr"
					pathLength="1"
					style={{ '--d': '2.2s', '--t': '0.8s' }}
					d="M 170 135 L 80 90 L 80 100 L 160 145 Z"
				/>
				<path
					className="hero-ln hero-dr"
					pathLength="1"
					style={{ '--d': '2.4s', '--t': '0.8s' }}
					d="M 230 135 L 320 90 L 320 100 L 240 145 Z"
				/>
				<path
					className="hero-ln hero-dr"
					pathLength="1"
					style={{ '--d': '2.6s', '--t': '0.8s' }}
					d="M 170 155 L 80 200 L 80 210 L 175 165 Z"
				/>
				<path
					className="hero-ln hero-dr"
					pathLength="1"
					style={{ '--d': '2.8s', '--t': '0.8s' }}
					d="M 230 155 L 320 200 L 320 210 L 225 165 Z"
				/>
				{/* Motor hubs */}
				<ellipse
					className="hero-ln hero-dr"
					pathLength="1"
					style={{ '--d': '3.2s', '--t': '0.5s' }}
					cx="80"
					cy="90"
					rx="14"
					ry="6"
				/>
				<path
					className="hero-ln hero-dr"
					pathLength="1"
					style={{ '--d': '3.4s', '--t': '0.5s' }}
					d="M 66 90 L 66 102 A 14 6 0 0 0 94 102 L 94 90"
				/>
				<ellipse
					className="hero-ln hero-dr"
					pathLength="1"
					style={{ '--d': '3.3s', '--t': '0.5s' }}
					cx="320"
					cy="90"
					rx="14"
					ry="6"
				/>
				<path
					className="hero-ln hero-dr"
					pathLength="1"
					style={{ '--d': '3.5s', '--t': '0.5s' }}
					d="M 306 90 L 306 102 A 14 6 0 0 0 334 102 L 334 90"
				/>
				<ellipse
					className="hero-ln hero-dr"
					pathLength="1"
					style={{ '--d': '3.4s', '--t': '0.5s' }}
					cx="80"
					cy="200"
					rx="14"
					ry="6"
				/>
				<path
					className="hero-ln hero-dr"
					pathLength="1"
					style={{ '--d': '3.6s', '--t': '0.5s' }}
					d="M 66 200 L 66 212 A 14 6 0 0 0 94 212 L 94 200"
				/>
				<ellipse
					className="hero-ln hero-dr"
					pathLength="1"
					style={{ '--d': '3.5s', '--t': '0.5s' }}
					cx="320"
					cy="200"
					rx="14"
					ry="6"
				/>
				<path
					className="hero-ln hero-dr"
					pathLength="1"
					style={{ '--d': '3.7s', '--t': '0.5s' }}
					d="M 306 200 L 306 212 A 14 6 0 0 0 334 212 L 334 200"
				/>
				{/* Propellers and motion blur */}
				<path
					className="hero-ln hero-dr"
					pathLength="1"
					style={{ '--d': '4s', '--t': '0.6s' }}
					d="M 50 75 L 110 95 M 50 95 L 110 75"
				/>
				<ellipse
					className="hero-hid hero-fd"
					style={{ '--d': '4.4s' }}
					cx="80"
					cy="85"
					rx="45"
					ry="12"
				/>
				<path
					className="hero-ln hero-dr"
					pathLength="1"
					style={{ '--d': '4.1s', '--t': '0.6s' }}
					d="M 290 75 L 350 95 M 290 95 L 350 75"
				/>
				<ellipse
					className="hero-hid hero-fd"
					style={{ '--d': '4.5s' }}
					cx="320"
					cy="85"
					rx="45"
					ry="12"
				/>
				<path
					className="hero-ln hero-dr"
					pathLength="1"
					style={{ '--d': '4.2s', '--t': '0.6s' }}
					d="M 50 185 L 110 205 M 50 205 L 110 185"
				/>
				<ellipse
					className="hero-hid hero-fd"
					style={{ '--d': '4.6s' }}
					cx="80"
					cy="195"
					rx="45"
					ry="12"
				/>
				<path
					className="hero-ln hero-dr"
					pathLength="1"
					style={{ '--d': '4.3s', '--t': '0.6s' }}
					d="M 290 185 L 350 205 M 290 205 L 350 185"
				/>
				<ellipse
					className="hero-hid hero-fd"
					style={{ '--d': '4.7s' }}
					cx="320"
					cy="195"
					rx="45"
					ry="12"
				/>
				{/* Tubular landing skids */}
				<path
					className="hero-ln hero-dr"
					pathLength="1"
					style={{ '--d': '4.8s', '--t': '0.6s' }}
					d="M 175 165 L 150 230"
				/>
				<path
					className="hero-ln hero-dr"
					pathLength="1"
					style={{ '--d': '5s', '--t': '0.8s' }}
					d="M 110 210 L 210 250"
				/>
				<path
					className="hero-ln hero-dr"
					pathLength="1"
					style={{ '--d': '5.2s', '--t': '0.8s' }}
					d="M 110 214 L 210 254"
				/>
				<path
					className="hero-ln hero-dr"
					pathLength="1"
					style={{ '--d': '5.3s', '--t': '0.2s' }}
					d="M 110 210 A 2 2 0 0 0 110 214 M 210 250 A 2 2 0 0 1 210 254"
				/>
				<path
					className="hero-ln hero-dr"
					pathLength="1"
					style={{ '--d': '4.9s', '--t': '0.6s' }}
					d="M 225 165 L 250 230"
				/>
				<path
					className="hero-ln hero-dr"
					pathLength="1"
					style={{ '--d': '5.1s', '--t': '0.8s' }}
					d="M 190 210 L 290 250"
				/>
				<path
					className="hero-ln hero-dr"
					pathLength="1"
					style={{ '--d': '5.3s', '--t': '0.8s' }}
					d="M 190 214 L 290 254"
				/>
				<path
					className="hero-ln hero-dr"
					pathLength="1"
					style={{ '--d': '5.4s', '--t': '0.2s' }}
					d="M 190 210 A 2 2 0 0 0 190 214 M 290 250 A 2 2 0 0 1 290 254"
				/>
				{/* Gimbal and camera payload */}
				<path
					className="hero-ln hero-dr"
					pathLength="1"
					style={{ '--d': '5.5s', '--t': '0.4s' }}
					d="M 190 170 L 190 190 M 210 170 L 210 190"
				/>
				<path
					className="hero-ln hero-dr"
					pathLength="1"
					style={{ '--d': '5.7s', '--t': '0.6s' }}
					d="M 185 190 L 215 190 L 215 200 L 185 200 Z"
				/>
				<circle
					className="hero-ln hero-dr"
					pathLength="1"
					style={{ '--d': '5.9s', '--t': '0.8s' }}
					cx="200"
					cy="215"
					r="15"
				/>
				<ellipse
					className="hero-ln hero-dr"
					pathLength="1"
					style={{ '--d': '6.1s', '--t': '0.5s' }}
					cx="200"
					cy="215"
					rx="7"
					ry="12"
				/>
				<ellipse
					className="hero-hid hero-fd"
					style={{ '--d': '6.3s' }}
					cx="200"
					cy="215"
					rx="3"
					ry="5"
				/>
				{/* Signal waves */}
				<path
					className="hero-hid hero-fd"
					style={{ '--d': '7.3s' }}
					d="M 190 240 A 20 10 0 0 0 210 240"
				/>
				<path
					className="hero-hid hero-fd"
					style={{ '--d': '7.5s' }}
					d="M 180 250 A 30 15 0 0 0 220 250"
				/>
				<path
					className="hero-hid hero-fd"
					style={{ '--d': '7.7s' }}
					d="M 170 260 A 40 20 0 0 0 230 260"
				/>
				{/* Guideline leaders, numerals and caption */}
				<path
					className="hero-gl hero-dr"
					pathLength="1"
					style={{ '--d': '6.5s', '--t': '0.6s' }}
					d="M 235 125 L 260 100 L 290 100"
				/>
				<text className="hero-num hero-fd" style={{ '--d': '6.8s' }} x="295" y="104">
					10
				</text>
				<path
					className="hero-gl hero-dr"
					pathLength="1"
					style={{ '--d': '6.7s', '--t': '0.6s' }}
					d="M 60 70 L 40 50 L 20 50"
				/>
				<text className="hero-num hero-fd" style={{ '--d': '7s' }} x="25" y="44">
					18
				</text>
				<path
					className="hero-gl hero-dr"
					pathLength="1"
					style={{ '--d': '6.9s', '--t': '0.6s' }}
					d="M 215 215 L 260 240 L 290 240"
				/>
				<text className="hero-num hero-fd" style={{ '--d': '7.2s' }} x="295" y="244">
					42
				</text>
				<path
					className="hero-gl hero-dr"
					pathLength="1"
					style={{ '--d': '7.1s', '--t': '0.6s' }}
					d="M 115 215 L 90 240 L 60 240"
				/>
				<text className="hero-num hero-fd" style={{ '--d': '7.4s' }} x="40" y="244">
					55
				</text>
				<text
					className="hero-cap hero-fd"
					style={{ '--d': '8.5s' }}
					x="200"
					y="315"
					textAnchor="middle"
				>
					FIG. 4
				</text>
			</>
		),
	},
	{
		id: 'fig-5-robotic-arm',
		node: (
			<>
				{/* 1. Base assembly */}
				<path
					className="hero-ln hero-dr"
					pathLength="1"
					style={{ '--d': '0.1s', '--t': '0.8s' }}
					d="M 110 310 A 90 25 0 0 0 290 310"
				/>
				<path
					className="hero-ln hero-dr"
					pathLength="1"
					style={{ '--d': '0.3s', '--t': '0.4s' }}
					d="M 110 290 L 110 310 M 290 290 L 290 310"
				/>
				<ellipse
					className="hero-ln hero-dr"
					pathLength="1"
					style={{ '--d': '0.5s', '--t': '1s' }}
					cx="200"
					cy="290"
					rx="90"
					ry="25"
				/>
				{/* Base rivets */}
				<circle
					className="hero-ln hero-dr"
					pathLength="1"
					style={{ '--d': '1s', '--t': '0.2s' }}
					cx="130"
					cy="290"
					r="2"
				/>
				<circle
					className="hero-ln hero-dr"
					pathLength="1"
					style={{ '--d': '1.1s', '--t': '0.2s' }}
					cx="160"
					cy="305"
					r="2"
				/>
				<circle
					className="hero-ln hero-dr"
					pathLength="1"
					style={{ '--d': '1.2s', '--t': '0.2s' }}
					cx="240"
					cy="305"
					r="2"
				/>
				<circle
					className="hero-ln hero-dr"
					pathLength="1"
					style={{ '--d': '1.3s', '--t': '0.2s' }}
					cx="270"
					cy="290"
					r="2"
				/>
				{/* 2. Pedestal and trunk */}
				<ellipse
					className="hero-ln hero-dr"
					pathLength="1"
					style={{ '--d': '1.2s', '--t': '0.8s' }}
					cx="200"
					cy="290"
					rx="60"
					ry="15"
				/>
				<path
					className="hero-ln hero-dr"
					pathLength="1"
					style={{ '--d': '1.6s', '--t': '0.6s' }}
					d="M 150 290 L 165 240 M 250 290 L 235 240"
				/>
				{/* 3. Shoulder joint */}
				<circle
					className="hero-ln hero-dr"
					pathLength="1"
					style={{ '--d': '1.8s', '--t': '0.8s' }}
					cx="200"
					cy="240"
					r="35"
				/>
				<circle
					className="hero-ln hero-dr"
					pathLength="1"
					style={{ '--d': '2s', '--t': '0.6s' }}
					cx="200"
					cy="240"
					r="15"
				/>
				<circle
					className="hero-ln hero-dr"
					pathLength="1"
					style={{ '--d': '2.2s', '--t': '0.4s' }}
					cx="200"
					cy="240"
					r="5"
				/>
				{/* 4. Lower arm */}
				<path
					className="hero-ln hero-dr"
					pathLength="1"
					style={{ '--d': '2.4s', '--t': '0.8s' }}
					d="M 172 261 L 90 135"
				/>
				<path
					className="hero-ln hero-dr"
					pathLength="1"
					style={{ '--d': '2.6s', '--t': '0.8s' }}
					d="M 228 219 L 130 105"
				/>
				<path
					className="hero-hid hero-fd"
					style={{ '--d': '3s' }}
					d="M 180 250 L 98 140 M 220 215 L 125 115"
				/>
				{/* 5. Elbow joint */}
				<circle
					className="hero-ln hero-dr"
					pathLength="1"
					style={{ '--d': '3s', '--t': '0.8s' }}
					cx="110"
					cy="120"
					r="25"
				/>
				<circle
					className="hero-ln hero-dr"
					pathLength="1"
					style={{ '--d': '3.2s', '--t': '0.6s' }}
					cx="110"
					cy="120"
					r="10"
				/>
				<circle
					className="hero-ln hero-dr"
					pathLength="1"
					style={{ '--d': '3.4s', '--t': '0.4s' }}
					cx="110"
					cy="120"
					r="3"
				/>
				{/* 6. Upper arm */}
				<path
					className="hero-ln hero-dr"
					pathLength="1"
					style={{ '--d': '3.6s', '--t': '0.8s' }}
					d="M 103 96 L 255 61"
				/>
				<path
					className="hero-ln hero-dr"
					pathLength="1"
					style={{ '--d': '3.8s', '--t': '0.8s' }}
					d="M 117 144 L 265 99"
				/>
				<path
					className="hero-hid hero-fd"
					style={{ '--d': '4.2s' }}
					d="M 110 105 L 250 70 M 120 135 L 260 100"
				/>
				{/* 7. Wrist joint */}
				<circle
					className="hero-ln hero-dr"
					pathLength="1"
					style={{ '--d': '4.2s', '--t': '0.8s' }}
					cx="260"
					cy="80"
					r="20"
				/>
				<circle
					className="hero-ln hero-dr"
					pathLength="1"
					style={{ '--d': '4.4s', '--t': '0.6s' }}
					cx="260"
					cy="80"
					r="8"
				/>
				<circle
					className="hero-ln hero-dr"
					pathLength="1"
					style={{ '--d': '4.6s', '--t': '0.4s' }}
					cx="260"
					cy="80"
					r="2"
				/>
				{/* 8. End effector and gripper */}
				<path
					className="hero-ln hero-dr"
					pathLength="1"
					style={{ '--d': '4.8s', '--t': '0.5s' }}
					d="M 278 65 L 288 65 L 288 95 L 278 95"
				/>
				<path
					className="hero-ln hero-dr"
					pathLength="1"
					style={{ '--d': '5s', '--t': '0.6s' }}
					d="M 288 68 L 315 68 L 315 92 L 288 92"
				/>
				<path
					className="hero-hid hero-fd"
					style={{ '--d': '5.4s' }}
					d="M 295 68 L 295 92 M 305 68 L 305 92"
				/>
				<path
					className="hero-ln hero-dr"
					pathLength="1"
					style={{ '--d': '5.3s', '--t': '0.6s' }}
					d="M 315 70 L 345 60 L 350 70 L 325 77 Z"
				/>
				<path
					className="hero-ln hero-dr"
					pathLength="1"
					style={{ '--d': '5.5s', '--t': '0.6s' }}
					d="M 315 90 L 345 100 L 350 90 L 325 83 Z"
				/>
				{/* 9. Workpiece (gold) */}
				<ellipse
					className="hero-gl hero-dr"
					pathLength="1"
					style={{ '--d': '5.8s', '--t': '0.4s' }}
					cx="340"
					cy="68"
					rx="5"
					ry="3"
				/>
				<path
					className="hero-gl hero-dr"
					pathLength="1"
					style={{ '--d': '6s', '--t': '0.6s' }}
					d="M 335 68 L 335 92 A 5 3 0 0 0 345 92 L 345 68"
				/>
				{/* 10. Cables */}
				<path
					className="hero-ln hero-dr"
					pathLength="1"
					style={{ '--d': '6.2s', '--t': '0.8s' }}
					d="M 160 290 C 140 270, 150 250, 185 240"
				/>
				<path
					className="hero-ln hero-dr"
					pathLength="1"
					style={{ '--d': '6.4s', '--t': '0.8s' }}
					d="M 200 225 C 160 220, 150 180, 125 140"
				/>
				<path
					className="hero-ln hero-dr"
					pathLength="1"
					style={{ '--d': '6.6s', '--t': '0.8s' }}
					d="M 205 230 C 165 225, 155 185, 130 145"
				/>
				<path
					className="hero-ln hero-dr"
					pathLength="1"
					style={{ '--d': '6.8s', '--t': '0.8s' }}
					d="M 115 100 C 130 80, 200 60, 255 70"
				/>
				{/* Guideline leaders, numerals and caption */}
				<path
					className="hero-gl hero-dr"
					pathLength="1"
					style={{ '--d': '7s', '--t': '0.5s' }}
					d="M 120 310 L 80 330 L 50 330"
				/>
				<text className="hero-num hero-fd" style={{ '--d': '7.3s' }} x="25" y="334">
					10
				</text>
				<path
					className="hero-gl hero-dr"
					pathLength="1"
					style={{ '--d': '7.1s', '--t': '0.5s' }}
					d="M 215 230 L 260 200 L 290 200"
				/>
				<text className="hero-num hero-fd" style={{ '--d': '7.4s' }} x="295" y="204">
					14
				</text>
				<path
					className="hero-gl hero-dr"
					pathLength="1"
					style={{ '--d': '7.2s', '--t': '0.5s' }}
					d="M 95 120 L 60 90 L 30 90"
				/>
				<text className="hero-num hero-fd" style={{ '--d': '7.5s' }} x="5" y="94">
					22
				</text>
				<path
					className="hero-gl hero-dr"
					pathLength="1"
					style={{ '--d': '7.3s', '--t': '0.5s' }}
					d="M 315 68 L 340 40 L 360 40"
				/>
				<text className="hero-num hero-fd" style={{ '--d': '7.6s' }} x="365" y="44">
					36
				</text>
				<path
					className="hero-gl hero-dr"
					pathLength="1"
					style={{ '--d': '7.4s', '--t': '0.5s' }}
					d="M 340 80 L 360 110 L 375 110"
				/>
				<text className="hero-num hero-fd" style={{ '--d': '7.7s' }} x="380" y="114">
					50
				</text>
				<text
					className="hero-cap hero-fd"
					style={{ '--d': '8.2s' }}
					x="200"
					y="355"
					textAnchor="middle"
				>
					FIG. 5
				</text>
			</>
		),
	},
	{
		id: 'fig-7-cylinder',
		dy: 30,
		node: (
			<>
				{/* Assembly drawn vertically, group rotated for isometric perspective */}
				<g transform="rotate(-40 200 150)">
					{/* Top cap */}
					<ellipse
						className="hero-ln hero-dr"
						pathLength="1"
						style={{ '--d': '0.2s', '--t': '0.8s' }}
						cx="200"
						cy="35"
						rx="35"
						ry="12"
					/>
					<path
						className="hero-ln hero-dr"
						pathLength="1"
						style={{ '--d': '0.7s', '--t': '0.6s' }}
						d="M 165 35 L 165 85"
					/>
					<path
						className="hero-ln hero-dr"
						pathLength="1"
						style={{ '--d': '0.7s', '--t': '0.6s' }}
						d="M 235 35 L 235 85"
					/>
					<path
						className="hero-ln hero-dr"
						pathLength="1"
						style={{ '--d': '1.1s', '--t': '0.6s' }}
						d="M 165 85 A 35 12 0 0 0 235 85"
					/>
					<path
						className="hero-ln hero-dr"
						pathLength="1"
						style={{ '--d': '1.4s', '--t': '0.6s' }}
						d="M 170 85 A 30 10 0 0 0 230 85"
					/>
					<path
						className="hero-hid hero-fd"
						style={{ '--d': '1.7s' }}
						d="M 170 85 A 30 10 0 0 1 230 85"
					/>
					{/* Middle threaded assembly */}
					<path
						className="hero-ln hero-dr"
						pathLength="1"
						style={{ '--d': '1.9s', '--t': '0.6s' }}
						d="M 175 95 A 25 8 0 0 0 225 95"
					/>
					<ellipse
						className="hero-ln hero-dr"
						pathLength="1"
						style={{ '--d': '2.2s', '--t': '0.5s' }}
						cx="200"
						cy="95"
						rx="15"
						ry="5"
					/>
					<path
						className="hero-ln hero-dr"
						pathLength="1"
						style={{ '--d': '2.5s', '--t': '0.4s' }}
						d="M 175 95 L 175 110 M 225 95 L 225 110"
					/>
					<path
						className="hero-ln hero-dr"
						pathLength="1"
						style={{ '--d': '2.7s', '--t': '0.6s' }}
						d="M 175 110 A 25 8 0 0 0 225 110"
					/>
					<path
						className="hero-ln hero-dr"
						pathLength="1"
						style={{ '--d': '2.9s', '--t': '0.4s' }}
						d="M 182 110 L 182 130 M 218 110 L 218 130"
					/>
					{/* O-rings */}
					<path
						className="hero-ln hero-dr"
						pathLength="1"
						style={{ '--d': '3.1s', '--t': '0.4s' }}
						d="M 182 115 A 18 6 0 0 0 218 115"
					/>
					<path
						className="hero-ln hero-dr"
						pathLength="1"
						style={{ '--d': '3.3s', '--t': '0.4s' }}
						d="M 182 122 A 18 6 0 0 0 218 122"
					/>
					<path
						className="hero-ln hero-dr"
						pathLength="1"
						style={{ '--d': '3.5s', '--t': '0.4s' }}
						d="M 182 130 A 18 6 0 0 0 218 130"
					/>
					<path
						className="hero-ln hero-dr"
						pathLength="1"
						style={{ '--d': '3.7s', '--t': '0.3s' }}
						d="M 188 130 L 188 145 M 212 130 L 212 145"
					/>
					{/* Lower threads */}
					<path
						className="hero-ln hero-dr"
						pathLength="1"
						style={{ '--d': '3.9s', '--t': '0.3s' }}
						d="M 188 135 A 12 4 0 0 0 212 135"
					/>
					<path
						className="hero-ln hero-dr"
						pathLength="1"
						style={{ '--d': '4.1s', '--t': '0.3s' }}
						d="M 188 140 A 12 4 0 0 0 212 140"
					/>
					<path
						className="hero-ln hero-dr"
						pathLength="1"
						style={{ '--d': '4.3s', '--t': '0.3s' }}
						d="M 188 145 A 12 4 0 0 0 212 145"
					/>
					<ellipse
						className="hero-hid hero-fd"
						style={{ '--d': '4.5s' }}
						cx="200"
						cy="145"
						rx="5"
						ry="2"
					/>
					{/* Main body */}
					<path
						className="hero-ln hero-dr"
						pathLength="1"
						style={{ '--d': '4.6s', '--t': '0.6s' }}
						d="M 165 155 A 35 12 0 0 0 235 155"
					/>
					<path
						className="hero-ln hero-dr"
						pathLength="1"
						style={{ '--d': '4.8s', '--t': '0.6s' }}
						d="M 170 155 A 30 10 0 0 0 230 155"
					/>
					<path
						className="hero-hid hero-fd"
						style={{ '--d': '5s' }}
						d="M 170 155 A 30 10 0 0 1 230 155"
					/>
					<path
						className="hero-hid hero-fd"
						style={{ '--d': '5.1s' }}
						d="M 170 160 A 30 10 0 0 0 230 160"
					/>
					<path
						className="hero-hid hero-fd"
						style={{ '--d': '5.2s' }}
						d="M 170 165 A 30 10 0 0 0 230 165"
					/>
					<path
						className="hero-ln hero-dr"
						pathLength="1"
						style={{ '--d': '5.3s', '--t': '0.8s' }}
						d="M 165 155 L 165 255 M 235 155 L 235 255"
					/>
					{/* Bottom cap details */}
					<path
						className="hero-ln hero-dr"
						pathLength="1"
						style={{ '--d': '5.6s', '--t': '0.6s' }}
						d="M 165 255 A 35 12 0 0 0 235 255"
					/>
					<path
						className="hero-ln hero-dr"
						pathLength="1"
						style={{ '--d': '5.8s', '--t': '0.6s' }}
						d="M 165 265 A 35 12 0 0 0 235 265"
					/>
					<path
						className="hero-ln hero-dr"
						pathLength="1"
						style={{ '--d': '6s', '--t': '0.5s' }}
						d="M 175 263 L 175 273 M 188 266 L 188 276 M 200 267 L 200 277 M 212 266 L 212 276 M 225 263 L 225 273"
					/>
				</g>
				{/* Guideline leaders kept outside the rotation to stay horizontal */}
				<path
					className="hero-gl hero-dr"
					pathLength="1"
					style={{ '--d': '6.2s', '--t': '0.6s' }}
					d="M 135 80 L 105 50 L 75 50"
				/>
				<text className="hero-num hero-fd" style={{ '--d': '6.4s' }} x="50" y="55">
					12
				</text>
				<path
					className="hero-gl hero-dr"
					pathLength="1"
					style={{ '--d': '6.4s', '--t': '0.6s' }}
					d="M 195 130 L 255 80 L 285 80"
				/>
				<text className="hero-num hero-fd" style={{ '--d': '6.6s' }} x="290" y="85">
					14
				</text>
				<path
					className="hero-gl hero-dr"
					pathLength="1"
					style={{ '--d': '6.6s', '--t': '0.6s' }}
					d="M 235 195 L 305 230 L 335 230"
				/>
				<text className="hero-num hero-fd" style={{ '--d': '6.8s' }} x="340" y="235">
					16
				</text>
				<text
					className="hero-cap hero-fd"
					style={{ '--d': '7s' }}
					x="200"
					y="295"
					textAnchor="middle"
				>
					FIG. 7
				</text>
			</>
		),
	},
	{
		id: 'fig-8-coilover',
		node: (
			<>
				{/* 1. Top mount (strut mount) */}
				<ellipse
					className="hero-ln hero-dr"
					pathLength="1"
					style={{ '--d': '0.2s', '--t': '0.6s' }}
					cx="200"
					cy="40"
					rx="40"
					ry="12"
				/>
				<path
					className="hero-ln hero-dr"
					pathLength="1"
					style={{ '--d': '0.5s', '--t': '0.6s' }}
					d="M 160 40 L 160 50 A 40 12 0 0 0 240 50 L 240 40"
				/>
				{/* Top mount stud bolts */}
				<ellipse
					className="hero-ln hero-dr"
					pathLength="1"
					style={{ '--d': '0.8s', '--t': '0.3s' }}
					cx="175"
					cy="38"
					rx="3"
					ry="1.5"
				/>
				<path
					className="hero-ln hero-dr"
					pathLength="1"
					style={{ '--d': '0.9s', '--t': '0.3s' }}
					d="M 172 38 L 172 32 A 3 1.5 0 0 0 178 32 L 178 38"
				/>
				<ellipse
					className="hero-ln hero-dr"
					pathLength="1"
					style={{ '--d': '1s', '--t': '0.3s' }}
					cx="225"
					cy="38"
					rx="3"
					ry="1.5"
				/>
				<path
					className="hero-ln hero-dr"
					pathLength="1"
					style={{ '--d': '1.1s', '--t': '0.3s' }}
					d="M 222 38 L 222 32 A 3 1.5 0 0 0 228 32 L 228 38"
				/>
				{/* Upper spring seat */}
				<ellipse
					className="hero-ln hero-dr"
					pathLength="1"
					style={{ '--d': '1.3s', '--t': '0.6s' }}
					cx="200"
					cy="65"
					rx="55"
					ry="15"
				/>
				<path
					className="hero-ln hero-dr"
					pathLength="1"
					style={{ '--d': '1.5s', '--t': '0.6s' }}
					d="M 145 65 L 145 72 A 55 15 0 0 0 255 72 L 255 65"
				/>
				{/* Piston rod */}
				<path
					className="hero-ln hero-dr"
					pathLength="1"
					style={{ '--d': '1.7s', '--t': '0.6s' }}
					d="M 194 50 L 194 90 M 206 50 L 206 90"
				/>
				{/* 2. Continuous 3D coil spring */}
				<path
					className="hero-ln hero-dr"
					pathLength="1"
					style={{ '--d': '1.9s', '--t': '0.6s' }}
					d="M 145 70 C 145 95, 255 110, 255 95"
				/>
				<path
					className="hero-ln hero-dr"
					pathLength="1"
					style={{ '--d': '2.1s', '--t': '0.6s' }}
					d="M 145 82 C 145 107, 255 122, 255 107"
				/>
				<path
					className="hero-ln hero-dr"
					pathLength="1"
					style={{ '--d': '2.3s', '--t': '0.2s' }}
					d="M 145 70 L 145 82 M 255 95 L 255 107"
				/>
				<path
					className="hero-hid hero-fd"
					style={{ '--d': '2.5s' }}
					d="M 255 95 C 255 70, 145 85, 145 110"
				/>
				<path
					className="hero-ln hero-dr"
					pathLength="1"
					style={{ '--d': '2.4s', '--t': '0.6s' }}
					d="M 145 110 C 145 135, 255 150, 255 135"
				/>
				<path
					className="hero-ln hero-dr"
					pathLength="1"
					style={{ '--d': '2.6s', '--t': '0.6s' }}
					d="M 145 122 C 145 147, 255 162, 255 147"
				/>
				<path
					className="hero-ln hero-dr"
					pathLength="1"
					style={{ '--d': '2.8s', '--t': '0.2s' }}
					d="M 145 110 L 145 122 M 255 135 L 255 147"
				/>
				<path
					className="hero-hid hero-fd"
					style={{ '--d': '3s' }}
					d="M 255 135 C 255 110, 145 125, 145 150"
				/>
				<path
					className="hero-ln hero-dr"
					pathLength="1"
					style={{ '--d': '2.9s', '--t': '0.6s' }}
					d="M 145 150 C 145 175, 255 190, 255 175"
				/>
				<path
					className="hero-ln hero-dr"
					pathLength="1"
					style={{ '--d': '3.1s', '--t': '0.6s' }}
					d="M 145 162 C 145 187, 255 202, 255 187"
				/>
				<path
					className="hero-ln hero-dr"
					pathLength="1"
					style={{ '--d': '3.3s', '--t': '0.2s' }}
					d="M 145 150 L 145 162 M 255 175 L 255 187"
				/>
				<path
					className="hero-hid hero-fd"
					style={{ '--d': '3.5s' }}
					d="M 255 175 C 255 150, 145 165, 145 190"
				/>
				<path
					className="hero-ln hero-dr"
					pathLength="1"
					style={{ '--d': '3.4s', '--t': '0.6s' }}
					d="M 145 190 C 145 215, 255 230, 255 215"
				/>
				<path
					className="hero-ln hero-dr"
					pathLength="1"
					style={{ '--d': '3.6s', '--t': '0.6s' }}
					d="M 145 202 C 145 227, 255 242, 255 227"
				/>
				<path
					className="hero-ln hero-dr"
					pathLength="1"
					style={{ '--d': '3.8s', '--t': '0.2s' }}
					d="M 145 190 L 145 202 M 255 215 L 255 227"
				/>
				<path
					className="hero-hid hero-fd"
					style={{ '--d': '4s' }}
					d="M 255 215 C 255 190, 145 205, 145 230"
				/>
				<path
					className="hero-ln hero-dr"
					pathLength="1"
					style={{ '--d': '3.9s', '--t': '0.6s' }}
					d="M 145 230 C 145 255, 255 270, 255 255"
				/>
				<path
					className="hero-ln hero-dr"
					pathLength="1"
					style={{ '--d': '4.1s', '--t': '0.6s' }}
					d="M 145 242 C 145 267, 255 282, 255 267"
				/>
				<path
					className="hero-ln hero-dr"
					pathLength="1"
					style={{ '--d': '4.3s', '--t': '0.2s' }}
					d="M 145 230 L 145 242 M 255 255 L 255 267"
				/>
				{/* 3. Lower spring seat and damper tube */}
				<ellipse
					className="hero-ln hero-dr"
					pathLength="1"
					style={{ '--d': '4.5s', '--t': '0.6s' }}
					cx="200"
					cy="275"
					rx="55"
					ry="15"
				/>
				<path
					className="hero-ln hero-dr"
					pathLength="1"
					style={{ '--d': '4.7s', '--t': '0.6s' }}
					d="M 145 275 L 145 282 A 55 15 0 0 0 255 282 L 255 275"
				/>
				<path
					className="hero-hid hero-fd"
					style={{ '--d': '4.9s' }}
					d="M 175 75 L 175 275 M 225 75 L 225 275"
				/>
				<path
					className="hero-ln hero-dr"
					pathLength="1"
					style={{ '--d': '5.1s', '--t': '0.6s' }}
					d="M 175 285 L 175 320 M 225 285 L 225 320"
				/>
				{/* Threaded ride-height collars */}
				<path
					className="hero-ln hero-dr"
					pathLength="1"
					style={{ '--d': '5.3s', '--t': '0.6s' }}
					d="M 172 290 L 228 292 L 172 294 L 228 296 L 172 298 L 228 300"
				/>
				{/* 4. Piggyback hydraulic reservoir */}
				<path
					className="hero-ln hero-dr"
					pathLength="1"
					style={{ '--d': '5.5s', '--t': '0.4s' }}
					d="M 225 305 L 250 305 L 250 295"
				/>
				<path
					className="hero-ln hero-dr"
					pathLength="1"
					style={{ '--d': '5.7s', '--t': '0.6s' }}
					d="M 250 255 L 280 255 L 280 315 L 250 315 Z"
				/>
				<ellipse
					className="hero-ln hero-dr"
					pathLength="1"
					style={{ '--d': '5.9s', '--t': '0.4s' }}
					cx="265"
					cy="255"
					rx="15"
					ry="5"
				/>
				<ellipse
					className="hero-ln hero-dr"
					pathLength="1"
					style={{ '--d': '6.1s', '--t': '0.4s' }}
					cx="265"
					cy="315"
					rx="15"
					ry="5"
				/>
				{/* Compression adjustment knob */}
				<path
					className="hero-ln hero-dr"
					pathLength="1"
					style={{ '--d': '6.3s', '--t': '0.4s' }}
					d="M 260 320 L 270 320 L 270 330 L 260 330 Z"
				/>
				{/* 5. Lower clevis / knuckle mount */}
				<path
					className="hero-ln hero-dr"
					pathLength="1"
					style={{ '--d': '6.5s', '--t': '0.4s' }}
					d="M 170 320 L 230 320 L 230 330 L 170 330 Z"
				/>
				<path
					className="hero-ln hero-dr"
					pathLength="1"
					style={{ '--d': '6.7s', '--t': '0.6s' }}
					d="M 170 330 L 160 365 L 180 365 L 185 330 Z"
				/>
				<path
					className="hero-ln hero-dr"
					pathLength="1"
					style={{ '--d': '6.9s', '--t': '0.6s' }}
					d="M 230 330 L 240 365 L 220 365 L 215 330 Z"
				/>
				<ellipse
					className="hero-ln hero-dr"
					pathLength="1"
					style={{ '--d': '7.1s', '--t': '0.4s' }}
					cx="170"
					cy="342"
					rx="4"
					ry="7"
				/>
				<ellipse
					className="hero-ln hero-dr"
					pathLength="1"
					style={{ '--d': '7.3s', '--t': '0.4s' }}
					cx="230"
					cy="342"
					rx="4"
					ry="7"
				/>
				{/* Guideline leaders, numerals and caption */}
				<path
					className="hero-gl hero-dr"
					pathLength="1"
					style={{ '--d': '7.1s', '--t': '0.5s' }}
					d="M 160 45 L 130 45 L 100 45"
				/>
				<text className="hero-num hero-fd" style={{ '--d': '7.3s' }} x="75" y="49">
					14
				</text>
				<path
					className="hero-gl hero-dr"
					pathLength="1"
					style={{ '--d': '7.3s', '--t': '0.5s' }}
					d="M 200 60 L 240 30 L 270 30"
				/>
				<text className="hero-num hero-fd" style={{ '--d': '7.5s' }} x="275" y="34">
					18
				</text>
				<path
					className="hero-gl hero-dr"
					pathLength="1"
					style={{ '--d': '7.5s', '--t': '0.5s' }}
					d="M 145 150 L 110 120 L 80 120"
				/>
				<text className="hero-num hero-fd" style={{ '--d': '7.7s' }} x="55" y="124">
					22
				</text>
				<path
					className="hero-gl hero-dr"
					pathLength="1"
					style={{ '--d': '7.7s', '--t': '0.5s' }}
					d="M 280 285 L 310 255 L 340 255"
				/>
				<text className="hero-num hero-fd" style={{ '--d': '7.9s' }} x="345" y="259">
					30
				</text>
				<path
					className="hero-gl hero-dr"
					pathLength="1"
					style={{ '--d': '7.9s', '--t': '0.5s' }}
					d="M 215 310 L 240 340 L 270 340"
				/>
				<text className="hero-num hero-fd" style={{ '--d': '8.1s' }} x="275" y="344">
					44
				</text>
				<path
					className="hero-gl hero-dr"
					pathLength="1"
					style={{ '--d': '8.1s', '--t': '0.5s' }}
					d="M 165 350 L 130 350 L 100 350"
				/>
				<text className="hero-num hero-fd" style={{ '--d': '8.3s' }} x="75" y="354">
					50
				</text>
				<text
					className="hero-cap hero-fd"
					style={{ '--d': '8.5s' }}
					x="360"
					y="325"
					textAnchor="middle"
				>
					FIG. 8
				</text>
			</>
		),
	},
];

export { FIGURES };
