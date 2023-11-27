import icon from "/assets/icons/loader.svg";

function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1>Page Not Found</h1>
      <img className="m-3" src={icon} alt="Add Post Icon" />
    </div>
  );
}

export default NotFound;
