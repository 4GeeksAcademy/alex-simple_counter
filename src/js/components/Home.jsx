import React, { useEffect, useState } from "react";

//include images into your bundle

//create your first component
const Home = () => {
	let [count, setCount] = useState(9990)
	let [formatted, setFormatted] = useState(['0','0','0','0'])

	useEffect(()=>{
		const interval = setInterval(()=> {
			setCount((prev)=>prev < 9999 ? prev + 1 : 0)
		}, 1000)

		return () => clearInterval(interval);
	}, [])

	useEffect(()=> {
		setFormatted(String(count).padStart(4,'0').split(''))

	},[count])
	return (
		<div className="container-fluid d-flex justify-content-center">
			<p className="p-4" style={{background:'black', color:"white"}}>⏱️</p>			
            <p className="p-4" style={{background:'black', color:"white"}}>{formatted[0]}</p>
			<p className="p-4" style={{background:'black', color:"white"}}>{formatted[1]}</p>
			<p className="p-4" style={{background:'black', color:"white"}}>{formatted[2]}</p>
			<p className="p-4" style={{background:'black', color:"white"}}>{formatted[3]}</p>
		</div>
	);
	
};

export default Home;