

const Increasebutton = ({count, setCount}) => {

    return (
        <div>
            <button onClick={() => setCount(count + 1)}>Increase</button>
        </div>
    );
}

export default Increasebutton;
