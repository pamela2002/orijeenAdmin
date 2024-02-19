import React, { useEffect, useState } from "react";
import { AppBar, Toolbar, IconButton, Typography } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useNavigate } from "react-router-dom";
import "./StudentProfile.css";

const StudentProfile = () => {
  const navigate = useNavigate();
  const [details, setDetails] = useState({});
  useEffect(() => {
    setDetails(JSON.parse(localStorage.getItem("student")));
  }, []);
  return (
    <>
      <div>
        <AppBar position="static">
          <Toolbar>
            <IconButton edge="start" color="inherit" aria-label="back">
              <ArrowBackIcon onClick={() => navigate(-1)} />
            </IconButton>
            <Typography variant="h6" style={{ flexGrow: 1 }}>
            <img
            src="https://orijeen.in/img/logoOrijeen.png"
            alt="orijeen logo"
            style={{
              width: "150px",
              height: "auto",
              position: "absolute",
              top: "-40px",
              left: "50px",
            }}
          />
            </Typography>
            <Typography variant="subtitle1">Hi, {details?.studentName}</Typography>
          </Toolbar>
        </AppBar>
        <div
          className="anocontact"
          style={{
            padding: 20,
            position: "absolute",
            top: "38%",
            right: "5%",
            transform: "translateY(-50%)",
            width: "20%",
          }}
        >
          
        </div>
        <div>
          <h1 style={{ margin: 10 }}>Dashboard {">"} Profile</h1>
          <table
            className="sdtable"
            style={{
              width: "60%",
              overflowX: "scroll",
              overflowY: "scroll",
              height: "100vh",
              border: "none",
              marginLeft: "10px",
              marginBottom:20,

            }}
          >
            <tbody>
              <h2
                style={{
                  padding: "10px",
                  height: "65px",
                  border: "2px solid black",
                  marginTop: "15px",
                  width: "200%",
                  marginBottom: "-3px",
                  backgroundColor: "#00ffff",
                }}
              >
                Basic Details
              </h2>
              <tr style={{ border: "2px solid black" }}>
                <td
                  style={{
                    border: "2px solid black",
                    padding: 10,
                    width: "50%",
                    margin: 0,
                    fontWeight: "bold",
                  }}
                >
                  Photo
                </td>
                <td
                  style={{
                    border: "2px solid black",
                    padding: 10,
                    width: "50%",
                  }}
                >
                  <div
            style={{
              height: 140,
              width: 120,
              border: "1px solid red",
            }}
          >
            <img
              src={details?.studentPhoto}
              style={{ height: "100%", width: "100%" }}
              alt=""
            />
          </div>
                </td>
              </tr>
              <tr style={{ border: "2px solid black" }}>
                <td
                  style={{
                    border: "2px solid black",
                    padding: 10,
                    width: "50%",
                    margin: 0,
                    fontWeight: "bold",
                  }}
                >
                  Enrollment No.
                </td>
                <td
                  style={{
                    border: "2px solid black",
                    padding: 10,
                    width: "50%",
                  }}
                >
                  {details?.studentEnrollment}
                </td>
              </tr>
              <tr style={{ border: "2px solid black" }}>
                <td
                  style={{
                    border: "2px solid black",
                    padding: 10,
                    fontWeight: "bold",
                  }}
                >
                  Name
                </td>
                <td style={{ border: "2px solid black", padding: 10 }}>
                  {details?.studentName}
                </td>
              </tr>
              <tr style={{ border: "2px solid black", padding: 5 }}>
                <td
                  style={{
                    border: "2px solid black",
                    padding: 10,
                    fontWeight: "bold",
                  }}
                >
                  Class
                </td>
                <td style={{ border: "2px solid black", padding: 10 }}>
                  {details?.studentClass}
                </td>
              </tr>
              <tr style={{ border: "2px solid black", padding: 5 }}>
                <td
                  style={{
                    border: "2px solid black",
                    padding: 10,
                    fontWeight: "bold",
                  }}
                >
                  Course Name
                </td>
                <td style={{ border: "2px solid black", padding: 10 }}>
                  {details?.studentCourse}
                </td>
              </tr>
              <tr style={{ border: "2px solid black", padding: 5 }}>
                <td
                  style={{
                    border: "2px solid black",
                    padding: 10,
                    fontWeight: "bold",
                  }}
                >
                  Batch No.
                </td>
                <td style={{ border: "2px solid black", padding: 10 }}>
                  {details?.studentBatch}
                </td>
              </tr>
              <tr style={{ border: "2px solid black", padding: 5 }}>
                <td
                  style={{
                    border: "2px solid black",
                    padding: 10,
                    fontWeight: "bold",
                  }}
                >
                  Subjects Choose
                </td>
                <td style={{ border: "2px solid black", padding: 10 }}>
                  {details?.studentSubjects}
                </td>
              </tr>
              <tr style={{ border: "2px solid black", padding: 5 }}>
                <td
                  style={{
                    border: "2px solid black",
                    padding: 10,
                    fontWeight: "bold",
                  }}
                >
                  Father's Name
                </td>
                <td style={{ border: "2px solid black", padding: 10 }}>
                  {details?.guardianName}
                </td>
              </tr>
              <tr style={{ border: "2px solid black", padding: 5 }}>
                <td
                  style={{
                    border: "2px solid black",
                    padding: 10,
                    fontWeight: "bold",
                  }}
                >
                  Phone No.
                </td>
                <td style={{ border: "2px solid black", padding: 10 }}>
                  {details?.studentPhone}
                </td>
              </tr>
              <tr style={{ border: "2px solid black", padding: 5 }}>
                <td
                  style={{
                    border: "2px solid black",
                    padding: 10,
                    fontWeight: "bold",
                  }}
                >
                  Address
                </td>
                <td style={{ border: "2px solid black", padding: 10 }}>
                  {details?.studentAddress}
                </td>
              </tr>
              <tr style={{ border: "2px solid black", padding: 5 }}>
                <td
                  style={{
                    border: "2px solid black",
                    padding: 10,
                    fontWeight: "bold",
                  }}
                >
                  Payment Type
                </td>
                <td style={{ border: "2px solid black", padding: 10 }}>
                  {details?.studentPaymentType}
                </td>
              </tr>
              <tr style={{ border: "2px solid black", padding: 5 }}>
                <td
                  style={{
                    border: "2px solid black",
                    padding: 10,
                    fontWeight: "bold",
                  }}
                >
                  Monthly Fee
                </td>
                <td style={{ border: "2px solid black", padding: 10 }}>
                  {details?.studentFee}
                </td>
              </tr>
              <tr style={{ border: "2px solid black", padding: 5 }}>
                <td
                  style={{
                    border: "2px solid black",
                    padding: 10,
                    fontWeight: "bold",
                  }}
                >
                  Admission Fee
                </td>
                <td style={{ border: "2px solid black", padding: 10 }}>
                  {details?.admissionAmount}
                </td>
              </tr>
              <tr style={{ border: "2px solid black", padding: 5 }}>
                <td
                  style={{
                    border: "2px solid black",
                    padding: 10,
                    fontWeight: "bold",
                  }}
                >
                  Blood Group
                </td>
                <td style={{ border: "2px solid black", padding: 10 }}>
                  {details?.studentBlood}
                </td>
              </tr>
              <tr style={{ border: "2px solid black", padding: 5 }}>
                <td
                  style={{
                    border: "2px solid black",
                    padding: 10,
                    fontWeight: "bold",
                  }}
                >
                  Catagory
                </td>
                <td style={{ border: "2px solid black", padding: 10 }}>
                  {details?.studentCategory}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default StudentProfile;
