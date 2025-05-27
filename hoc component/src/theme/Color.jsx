import Theme from './Theme';


const Color = ({ setBlack, setWhite }) => {
  return (
    <div align="center">
      <h1>🎨 Dark Light Theme Color</h1>
      <button onClick={setBlack}>Black</button>&nbsp;&nbsp; 
      <button onClick={setWhite}>White</button>
    </div>
  );
};

export default Theme(Color);
