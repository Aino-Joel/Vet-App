import React from "react";
import { Form, Col, Row, Input, TimePicker } from "antd";
import { useState } from "react";
import { useApplyDoctor } from "../hooks/useApplyDoctor";
import "./apply.css";
import { useAuthContext } from "../hooks/useAuthContext";

function ApplyDoctor() {
  const { user } = useAuthContext();
  const [fName, setFName] = useState(user.fName);
  const [lName, setLName] = useState(user.lName);
  const [email, setEmail] = useState(user.email);
  const [phoneNumber, setPhoneNumber] = useState("");
  const [website, setWebsite] = useState("");
  const [address, setAddress] = useState("");
  const [specialization, setSpecialization] = useState("");
  const [experience, setExperience] = useState("");
  const [consultationFee, setConsultationFee] = useState("");
  // const [operationTime, setOperationTime] = useState([]);
  const { applyDoctor, error, isLoading } = useApplyDoctor();

  const handleSubmit = async (e) => {
    // e.preventDefault();

    await applyDoctor(
      fName,
      lName,
      email,
      phoneNumber,
      website,
      address,
      specialization,
      experience,
      consultationFee
      // operationTime
    );
  };

  return (
    <div className="apply-doctor">
      <h1 className="page-title">Doctor Application</h1>

      {user && (
        <Form layout="vertical" onFinish={handleSubmit}>
          <h1 className="card-title">Personal Information</h1>
          <hr />
          <Row gutter="20">
            <Col span={8} xs={24} sm={24} lg={8}>
              <Form.Item required label="First Name">
                <Input
                  type="text"
                  name="fName"
                  onChange={(e) => setFName(e.target.value)}
                  value={fName}
                />
              </Form.Item>
            </Col>
            <Col span={8} xs={24} sm={24} lg={8}>
              <Form.Item required label="Last Name">
                <Input
                  type="text"
                  name="lName"
                  onChange={(e) => setLName(e.target.value)}
                  value={lName}
                />
              </Form.Item>
            </Col>
            <Col span={8} xs={24} sm={24} lg={8}>
              <Form.Item required label="Email">
                <Input
                  type="email"
                  name="email"
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                />
              </Form.Item>
            </Col>
            <Col span={8} xs={24} sm={24} lg={8}>
              <Form.Item required label="Phone Number">
                <Input
                  type="text"
                  placeholder="Phone Number"
                  name="phoneNumber"
                  onChange={(e) => setPhoneNumber(e.target.value)}
                  value={phoneNumber}
                />
              </Form.Item>
            </Col>
            <Col span={8} xs={24} sm={24} lg={8}>
              <Form.Item label="Website">
                <Input
                  type="text"
                  placeholder="Website"
                  name="website"
                  onChange={(e) => setWebsite(e.target.value)}
                  value={website}
                />
              </Form.Item>
            </Col>
            <Col span={8} xs={24} sm={24} lg={8}>
              <Form.Item required label="Address">
                <Input
                  type="text"
                  placeholder="Address"
                  name="address"
                  onChange={(e) => setAddress(e.target.value)}
                  value={address}
                />
              </Form.Item>
            </Col>
          </Row>
          <h1 className="card-title">Professional Information</h1>
          <hr />
          <Row gutter="20">
            <Col span={8} xs={24} sm={24} lg={8}>
              <Form.Item required label="Specialization">
                <Input
                  type="text"
                  placeholder="Specialization"
                  name="specialization"
                  onChange={(e) => setSpecialization(e.target.value)}
                  value={specialization}
                />
              </Form.Item>
            </Col>
            <Col span={8} xs={24} sm={24} lg={8}>
              <Form.Item required label="Experience">
                <Input
                  type="number"
                  placeholder="Experience"
                  name="experience"
                  onChange={(e) => setExperience(e.target.value)}
                  value={experience}
                />
              </Form.Item>
            </Col>
            <Col span={8} xs={24} sm={24} lg={8}>
              <Form.Item required label="Consultation Fee">
                <Input
                  type="number"
                  placeholder="Consultation Fee"
                  name="consultationFee"
                  onChange={(e) => setConsultationFee(e.target.value)}
                  value={consultationFee}
                />
              </Form.Item>
            </Col>
            {/* <Col span={8} xs={24} sm={24} lg={8}>
            <Form.Item required label="Operation Time">
              <TimePicker.RangePicker
                name="operationTime"
                onChange={(e) => setOperationTime.push(e.target.value)}
                value={operationTime}
              />
            </Form.Item>
          </Col> */}
          </Row>
          <div className="send">
            <button className="primary-button" type="submit">
              SUBMIT
            </button>
          </div>
        </Form>
      )}
    </div>
  );
}

export default ApplyDoctor;
