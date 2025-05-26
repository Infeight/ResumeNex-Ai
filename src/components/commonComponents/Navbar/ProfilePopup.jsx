import { Link } from "react-router-dom";

const ProfilePopup = ({ isProfileOpen, toggleProfilePopup }) => {
  return (
    <div className="block relative lg:mr-3">
      <div
        className="w-10 h-10 flex items-center justify-center bg-blue-500 text-white font-bold text-xl rounded-full cursor-pointer select-none"
        onClick={toggleProfilePopup}
      >
        T
      </div>
      {isProfileOpen && (
        <div className="absolute top-12 right-0 mt-2 w-60 bg-sky-100 rounded-2xl p-2 shadow-lg z-30 border border-blue-500">
          <div className="flex flex-col">
            <Link
              to="/dashboard"
              onClick={toggleProfilePopup}
              className="flex items-center gap-3 p-3 rounded-lg cursor-pointer hover:bg-blue-100 transition"
            >
              <img
                src="/Icons/Sidebar/Dashboard.svg"
                alt="DashBoard"
                className="w-5 h-5"
              />
              <span className="font-inter font-semibold text-base text-gray-900">
                DashBoard
              </span>
            </Link>
            <div
              onClick={toggleProfilePopup}
              className="flex items-center gap-3 p-3 rounded-lg cursor-pointer hover:bg-blue-100 transition"
            >
              <img
                src="/Icons/profilePopUp/EditProfile.svg"
                alt="Edit Profile"
                className="w-5 h-5"
              />
              <span className="font-inter font-semibold text-base text-gray-900">
                Edit Profile
              </span>
            </div>
            <div
              onClick={toggleProfilePopup}
              className="flex items-center gap-3 p-3 rounded-lg cursor-pointer hover:bg-blue-100 transition"
            >
              <img
                src="/Icons/profilePopUp/History.svg"
                alt="History"
                className="w-5 h-5"
              />
              <span className="font-inter font-semibold text-base text-gray-900">
                History
              </span>
            </div>
            <div
              onClick={toggleProfilePopup}
              className="flex items-center gap-3 p-3 rounded-lg cursor-pointer hover:bg-blue-100 transition"
            >
              <img
                src="/Icons/profilePopUp/Upload%20Resume.svg"
                alt="Upload Resume"
                className="w-5 h-5"
              />
              <span className="font-inter font-semibold text-base text-gray-900">
                Upload Resume
              </span>
            </div>
            <div
              onClick={toggleProfilePopup}
              className="flex items-center gap-3 p-3 rounded-lg cursor-pointer hover:bg-blue-100 transition"
            >
              <img
                src="/Icons/profilePopUp/Refer.svg"
                alt="Refer"
                className="w-5 h-5"
              />
              <span className="font-inter font-semibold text-base text-gray-900">
                Refer
              </span>
            </div>
            <hr className="m-2 border-blue-500" />
            <div
              onClick={toggleProfilePopup}
              className="flex items-center justify-center gap-3 p-3 rounded-lg cursor-pointer hover:bg-blue-100 transition"
            >
              <img
                src="/Icons/Sidebar/Logout.svg"
                alt="Logout"
                className="w-5 h-5"
              />
              <span className="font-inter font-semibold text-base text-gray-900">
                Logout
              </span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProfilePopup;
