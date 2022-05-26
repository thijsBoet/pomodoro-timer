const App = () => {
  return (
		<div className='w-screen h-screen bg-tomato flex flex-col justify-center items-center overflow-hidden'>
			<main className='w-2/3 h-1/3 bg-tomato-light rounded-lg shadow-2xl flex flex-col justify-center items-center'>
        <h1 className='text-8xl font-Poppins text-[white]'>25:00</h1>
        <button className="bg-[white] text-xl text-tomato font-bold px-16 py-4 rounded mt-5 hover:shadow-lg">START</button>
			</main>
		</div>
	);
}

export default App;
