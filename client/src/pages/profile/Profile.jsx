import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import Transaction from "../../components/transaction/Transaction";
import { getUser, updateUser } from "../../redux/userSlice";
import "./profile.scss";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [editMode, setEditMode] = useState(false);
  const navigate = useNavigate()

  const dispatch = useDispatch();
  const token = useSelector((state) => state.auth.token);
  const user = useSelector((state) => state.user);

  useEffect(() => {
    const fetchUserProfile = async () => {
      try {
        const response = await axios.post(
          "http://localhost:3001/api/v1/user/profile",
          {},
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        dispatch(getUser(response.data.body));
        setFirstName(response.data.body.firstName);
        setLastName(response.data.body.lastName);
      } catch (error) {
        console.error("Error fetching user profile:", error);
      }
    };

    if (token) {
      fetchUserProfile();
    }else {
      navigate('/login')

    }


  }, [token, dispatch]);

  const handleSave = async () => {
    try {
      await axios.put(
        "http://localhost:3001/api/v1/user/profile",
        {
          firstName: firstName,
          lastName: lastName,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      dispatch(updateUser({ firstName, lastName }));
      setEditMode(false);
    } catch (error) {
      console.error("Error updating user profile:", error);
    }
  };

  const controleEditMode = () => {
    setEditMode((prev) => !prev);
  };

  return (
    <div className="profile">
      <div className="header">
        <>
          <h1>Welcome back</h1>

          {!editMode && (
            <>
              <h1>
               
                {user?.firstName} {user?.lastName}
              </h1>

              <button className="edit-button" onClick={controleEditMode}>
                Edit Name
              </button>
            </>
          )}
        </>
      </div>

      {editMode && (
        <form className="edit-form">
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              id="firstName"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
            <input
              type="text"
              className="form-control"
              id="lastName"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
          </div>
          <div className="edit-buttons">
            <button type="button" onClick={handleSave}>
              Save
            </button>
            <button type="button" onClick={controleEditMode}>
              Cancel
            </button>
          </div>
        </form>
      )}

      <div className="transaction">
        <Transaction />
      </div>
    </div>
  );
};

export default Profile;
