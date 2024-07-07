import MovableGif from './Components/MoveableGif'; // Adjust the import path based on your project structure
import './assets/home.css'; // Import your CSS file for styling

const Home = () => {
  return (
    <div className="home-container">
      <h1 className="pagetitle">Welcome to LFG! The place to come chat about co-op games.</h1>
      <p className='hometext'>
        Whether you&apos;re here to throw out your best recommendations,
        find something new to play or embark on your new journey with 
        adventurers from within the board. We hope to insprire your
        next adventure.

        Friendly reminder be kind and keep it friendly 😁
      </p>

      {/* Integration of MovableGif component */}
      <div className="gif-container">
        <MovableGif
          gifUrl="/Run.gif" // Assuming Run.gif is in the public folder
          areaWidth={800} // Adjust width as per your design
          areaHeight={100} // Adjust height as per your design
          step={2} // Adjust movement step as per your preference
        />
      </div>
    </div>
  );
};

export default Home;