

const Decreasebutton = ({count, setCount}) => {
    return (
        <div>
            <button onClick={() => setCount(count - 1)}>Decrease</button>
        </div>
    );
}

export default Decreasebutton;
