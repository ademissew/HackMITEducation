import React from 'react'
// import TweenOne from 'rc-tween-one';
// import PropTypes from 'prop-types';
import TweenOne from 'rc-tween-one';
import PathPlugin from 'rc-tween-one/lib/plugin/PathPlugin';
TweenOne.plugins.push(PathPlugin);


export default class StudyTime extends React.Component {

    render() {

    const duration = 7000;
	const ease = 'easeInOutSine';
	const p = 'M123.5,89.5 C148,82.5 239.5,48.5 230,17.5 C220.5,-13.5 127,6 99.5,13.5 C72,21 -9.5,56.5 1.5,84.5 C12.5,112.5 99,96.5 123.5,89.5 Z';
	const easePath = 'M0,100 C7.33,89 14.33,81.66 21,78 C25.36,75.60 29.87,72.90 33,70 C37.04,66.24 39.39,62.07 42.5,57 C48,46.5 61.5,32.5 70,28 C77.5,23.5 81.5,20 86.5,16 C89.83,13.33 94.33,8 100,0';

	const loop = {
		yoyo: true,
		repeat: -1,
		duration,
		ease,
	};

    const animate = {
		redSquare: {
			...loop,
			y: 15,
			duration: 3000,
			delay: 200,
		},
		blackLine: {
			...loop,
			y: 10,
			duration: 3000,
			delay: 200,
		},
		tealCircle: {
			...loop,
			y: 55,
			duration: 3000,
			delay: 200,
		},
		blueTriangle: {
			...loop,
			y: 25,
			x: 60,
			duration: 3000,
			delay: 200,
		},
		greenBall: {
			path: { x: p, y: p },
			duration: 5000,
			repeat: -1,
			ease: TweenOne.easing.path(easePath, { lengthPixel: 400}),
		},
		track: {
			...loop,
			rotate: 10,
		},
		secondBall: {
			path: { x: p, y: p },
			duration: 5000,
			repeat: -1,
			ease: TweenOne.easing.path(easePath, { lengthPixel: 400}),
		},
		track2: {
			...loop,
			rotate: 10,
		},
	};


		return ( 
		< div className="wrapper-ant-design"> 
			<svg width="1282px" height="1200px" viewBox="0 0 1282 1200">
				<defs> 
					<path 
						d="M151,55 C129.666667,62.6666667 116,74.3333333 110,90 C104,105.666667 103,118.5 107,128.5 
						L225.5,96 C219.833333,79 209.666667,67 195,60 C180.333333,53 165.666667,51.3333333 151,55 L137,0 
						L306.5,6.5 L306.5,156 L227,187.5 L61.5,191 C4.5,175 -12.6666667,147.833333 10,109.5 
						C32.6666667,71.1666667 75,34.6666667 137,0 L151,55 Z" 
						id="mask" 
					/> 
				</defs> 
				<g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd" transform="translate(0, 30)">
					//red square 
					<g id="Group-13" transform="translate(0.000000, 41.000000)"> 
						<TweenOne component="g" animation={animate.redSquare}> 
							<rect 
								stroke="#F5222D" 
								strokeWidth="1.6" 
								transform="translate(184.000000, 18.000000) rotate(8.000000) translate(-184.000000, 
								-18.000000) " 
								x="176.8" 
								y="150.8" 
								width="14.4" 
								height="14.4" 
								rx="3.6" 
							/> 
						</TweenOne> 
					</g> 
					//black line top right 
					<g id="Group-13" transform="translate(0.000000, 41.000000)"> 
						<TweenOne component="g" animation={animate.blueTriangle}> 
							<polygon
								points = " 700,-150 750,-50" 
								stroke="#000000" 
								strokeWidth="1.6" 
								transform="translate(184.000000, 18.000000) rotate(6.000000) translate(-184.000000, 
								-18.000000) " 
								x="76.8" 
								y="0.8" 
								width="14.4" 
								height="4.4" 
								rx="8.6" 
							/> 
						</TweenOne> 
					</g>

					//teal circle
					<g id="Group-13" transform="translate(0.000000, 41.000000)"> 
						<TweenOne component="g" animation={animate.tealCircle}> 
							<rect 
								stroke="#21ADA8" 
								strokeWidth="1.6" 
								transform="translate(184.000000, 18.000000) rotate(8.000000) translate(-184.000000, 
								-18.000000) " 
								x="476.8" 
								y="350.8" 
								width="14.4" 
								height="14.4" 
								rx="7.6" 
							/> 
						</TweenOne> 
					</g> 
					//blueTriangle
					<g id="Group-13" transform="translate(0.000000, 41.000000)"> 
						<TweenOne component="g" animation={animate.blueTriangle}> 
							<polygon
								points = " 0,0 25,0 25,25" 
								stroke="#00316E" 
								strokeWidth="1.6" 
								transform="translate(184.000000, 18.000000) rotate(16.000000) translate(-184.000000, 
								-18.000000) " 
								x="76.8" 
								y="50.8" 
								width="14.4" 
								height="14.4" 
								rx="8.6" 
							/> 
						</TweenOne> 
					</g>
					//yellow planet system
					<g id="Group-14" transform="translate(55.000000, 230.000000)"> 
						//yellow planet
						< g id="Group-22" transform="translate(55.000000, -7.000000)"> 
							< image 
								id="cc4" 
								alt="globe" 
								xlinkHref="https://svgsilh.com/svg/2677026-ffc107.svg"
								//"https://gw.alipayobjects.com/zos/rmsportal/FpKWadwoFFIZFExjaf.png" 
								width="135px" 
								height="190px" 
							/> 
						</g> 
						<mask id="mask-2">
							<use xlinkHref="#mask" fill="white" transform="translate(-42, -33)" />
						</mask> 
						//the ring
						<g mask="url(#mask-2)"> 
							<TweenOne component="g" animation={animate.track} style={{ transformOrigin: '122.7px 58px' }}> 
								<g transform="translate(-16, -52)"> 
									<g transform="translate(16, 52)"> 
										<path 
											d="M83.1700911,35.9320015 063.5256194,37.9279025 44.419492,43.1766434 25.8517088,51.6782243 C14.3939956,57.7126276 7.77167019,64.8449292 7.77167019,72.4866248 C7.77167019,94.1920145 61.1993389,111.787709 127.105708,111.787709 C193.012078,111.787709 246.439746,94.1920145 246.439746,72.4866248 C246.439746,55.2822262 212.872939,40.6598106 166.13127,35.3351955" 
											id="line-s" 
											stroke="#0D1A26" 
											strokeWidth="1.35" 
											strokeLinecap="round" 
											transform="translate(127.105708, 73.561453) rotate(-16.000000) translate(-127.105708, -73.561453) " 
										/> 
									</g> 
									//green ball
									<TweenOne component="g" animation={animate.greenBall}> 
										<image 
											alt="globe" 
											id="id2" 
											xlinkHref="https://gw.alipayobjects.com/zos/rmsportal/IauKICnGjGnotJBEyCRK.png" 
											x="16" 
											y="62" 
											width="26px" 
											height="26px" 
										/> 
									</TweenOne> 
								</g> 
							</TweenOne> 
						</g> 
					</g> 


					//second planet system
					<g id="Group-14" transform="translate(550.000000, 30.000000)"> 
						//yellow planet
						< g id="Group-22" transform="translate(55.000000, -7.000000)"> 
							< image 
								id="cc4" 
								alt="globe" 
								xlinkHref="https://svgsilh.com/svg/2677026-ffc107.svg"
								//"https://gw.alipayobjects.com/zos/rmsportal/FpKWadwoFFIZFExjaf.png" 
								width="135px" 
								height="190px" 
							/> 
						</g> 
						<mask id="mask-2">
							<use xlinkHref="#mask" fill="white" transform="translate(-42, -33)" />
						</mask> 
						the ring
						<g mask="url(#mask-2)"> 
							<TweenOne component="g" animation={animate.track2} style={{ transformOrigin: '122.7px 58px' }}> 
								<g transform="translate(-16, -52)"> 
									<g transform="translate(16, 52)"> 
										<path 
											d="M83.1700911,35.9320015 063.5256194,37.9279025 44.419492,43.1766434 25.8517088,51.6782243 C14.3939956,57.7126276 7.77167019,64.8449292 7.77167019,72.4866248 C7.77167019,94.1920145 61.1993389,111.787709 127.105708,111.787709 C193.012078,111.787709 246.439746,94.1920145 246.439746,72.4866248 C246.439746,55.2822262 212.872939,40.6598106 166.13127,35.3351955" 
											id="line-s" 
											strokeWidth="1.35" 
											strokeLinecap="round" 
											transform="translate(127.105708, 73.561453) rotate(-16.000000) translate(-127.105708, -73.561453) " 
										/> 
									</g> 
									//green ball
									<TweenOne component="g" animation={animate.secondBall}> 
										<image 
											alt="globe" 
											id="id2" 
											xlinkHref="https://gw.alipayobjects.com/zos/rmsportal/IauKICnGjGnotJBEyCRK.png" 
											x="16" 
											y="62" 
											width="26px" 
											height="26px" 
										/> 
									</TweenOne> 
								</g> 
							</TweenOne> 
						</g> 
					</g>



				</g> 
			</svg> 
		</div> 
	); 
}}

