import Search from "./pics";
import Hello from "./jsx";
import getTime from "./time";

function App() {
    const labelText = ['Hi','there'];


    return (<div style={{ textAlign: 'center' }}>
      



        <Search />
        <Hello />
        <div>
            <div>current Time </div>
            <h3>{getTime()}</h3>
            <label>{labelText}</label>
        </div>
    </div>
    )
}
export default App;