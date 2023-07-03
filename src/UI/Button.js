function Button({ text, animation = "" }) {
  return (
    <button
      className={`bg-indigo-500 px-10 py-3 text-xl uppercase mt-10 rounded-lg ${animation}`}
    >
      {text}
    </button>
  );
}

export default Button;
