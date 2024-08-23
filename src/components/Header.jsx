const Header = ({tasks}) => {
  return (
    <header>
      <h1 className="heading text-center">To-Do-List</h1>
      {tasks.length === 0 ? (
        <h2 className="text-center">you have completated all your tasks</h2>
      ) : tasks.length === 1 ? (
        <h2>you have task {tasks.length} left</h2>
      ) : (
        <h2>you have tasks {tasks.length} left</h2>
      )}
    </header>
  );
};
export default Header;
