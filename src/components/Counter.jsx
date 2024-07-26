//props fed in here from app component as single object,  {} unpacks into individual item
function Counter({ count, setCount }) {
  return (
    <div className="card">
      <button onClick={() => setCount((count) => count + 1)}>
        count is {count}
      </button>
    </div>
  );
}
export default Counter;
