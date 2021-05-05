import React from 'react';


import './Title.css'

function Title(props) {
    return <div>
        <div className = "cliente">
				<p className = "nombre" > {props.text}  </p>
			</div>	
			<hr className = "line"></hr>  
    </div>
};

export default Title;