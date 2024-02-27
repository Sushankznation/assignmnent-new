const SortButton = ({ label, onClick }) => (
  <button
    onClick={onClick}
    className="bg-blue-500 text-white p-2 rounded-md hover:bg-blue-700 mt-4 sm:mt-0"
  >
    {label}
  </button>
);

export default SortButton;
