import React from 'react';
import './ButtonContainer.css';


export default function ButtonContainer() {
   return (
		<div className='button_container'>
			<button className='button add operator'> &#43;</button>
			<button className='button sub operator'> &#8722;</button>
			<button className='button mul operator'> &#215;</button>
			<button className='button div operator'> &#247;</button>

			<button className='button sev number'> 7</button>
			<button className='button eig number'> 8</button>
			<button className='button nin number'> 9</button>
			<button className='button acc'> AC</button>

			<button className='button fou number'> 4</button>
			<button className='button fiv number'> 5</button>
			<button className='button six number'> 6</button>
			<button className='button bcc'> &#171;</button>

			<button className='button one number'> 1</button>
			<button className='button two number'> 2</button>
			<button className='button thr number'> 3</button>
			<button className='button equ'> &#61;</button>

			<button className='button pmm operator'> &#177;</button>
			<button className='button zeo number'> 0</button>
			<button className='button dec operator'> &sdot;</button>
		</div>
	);
};
