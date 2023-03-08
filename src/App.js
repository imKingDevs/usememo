
import { useMemo, useState } from 'react';
import './App.css';

function App() {
    
    const [count, setcount] = useState(0)
    const [item, setitem] = useState(0)

    const bulk = useMemo(() => {
        console.log(count*5);
        return count*5;
    }, [count])
    
    return (
        <>
            <h1>Count : {count}</h1>
            <br />
            <h1>Item : {item}</h1>
            <br />
            <h1>Bulk : {bulk}</h1>
            <br />
            <div>
                <button onClick={() => setcount(count + 1)}>Update Count</button>
                <button onClick={() => setitem(item + 10)}>Update Item</button>
            </div>
        </>
    );
}

export default App;
