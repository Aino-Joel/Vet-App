import React, { useState } from "react";
import { Form, Col, Row, Input, TimePicker } from "antd";
import { useApplyDoctor } from "../hooks/useApplyDoctor";

function ApplyDoctor() {
  const [fName, setFName] = useState("");
  const [lName, setLName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [website, setWebsite] = useState("");
  const [address, setAddress] = useState("");
  const [specialization, setSpecialization] = useState("");
  const [experience, setExperience] = useState("");
  const [consultationFee, setConsultationFee] = useState("");
  const { applyDoctor, error, isLoading } = useApplyDoctor();

  const handleSubmit = async () => {
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
    );
  };

  return (
    <div className="apply-doctor p-6 bg-white rounded-lg shadow-md">
      <h1 className="text-3xl font-bold mb-4">Apply Doctor</h1>
      <hr className="mb-6" />

      <Form layout="vertical" onFinish={handleSubmit}>
        <h2 className="text-2xl font-semibold mb-4">Personal Information</h2>
        <Row gutter={[20, 20]}>
          <Col span={8} xs={24} sm={24} lg={8}>
            <Form.Item required label="First Name">
              <Input
                type="text"
                placeholder="First Name"
                name="fName"
                onChange={(e) => setFName(e.target.value)}
                value={fName}
                className="p-2 border border-gray-300 rounded-md"
              />
            </Form.Item>
          </Col>
          <Col span={8} xs={24} sm={24} lg={8}>
            <Form.Item required label="Last Name">
              <Input
                type="text"
                placeholder="Last Name"
                name="lName"
                onChange={(e) => setLName(e.target.value)}
                value={lName}
                className="p-2 border border-gray-300 rounded-md"
              />
            </Form.Item>
          </Col>
          <Col span={8} xs={24} sm={24} lg={8}>
            <Form.Item required label="Email">
              <Input
                type="email"
                placeholder="Email"
                name="email"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                className="p-2 border border-gray-300 rounded-md"
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
                className="p-2 border border-gray-300 rounded-md"
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
                className="p-2 border border-gray-300 rounded-md"
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
                className="p-2 border border-gray-300 rounded-md"
              />
            </Form.Item>
          </Col>
        </Row>
        <h2 className="text-2xl font-semibold mb-4">Professional Information</h2>
        <Row gutter={[20, 20]}>
          <Col span={8} xs={24} sm={24} lg={8}>
            <Form.Item required label="Specialization">
              <Input
                type="text"
                placeholder="Specialization"
                name="specialization"
                onChange={(e) => setSpecialization(e.target.value)}
                value={specialization}
                className="p-2 border border-gray-300 rounded-md"
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
                className="p-2 border border-gray-300 rounded-md"
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
                className="p-2 border border-gray-300 rounded-md"
              />
            </Form.Item>
          </Col>
        </Row>
        <div class="flex justify-center mt-6">
  <button class="bg-green-600 hover:bg-green-800 text-white font-bold py-3 px-6 rounded align-middle" type="submit">
    SUBMIT
  </button>
  {error && <p class="text-red-500 mt-2">{error}</p>}
</div>
      </Form>
    </div>
  );
}

export default ApplyDoctor;
