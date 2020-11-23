import React from "react";
import "./ApplicantCard.scss";
import Card from "react-bootstrap/Card";
import Badge from "react-bootstrap/Badge";
import Avatar from "./Avatar";

const ApplicantCard = ({
  firstName,
  lastName,
  phone,
  email,
  status,
  date,
  time,
  bid,
  bidAmount,
  bidCurrency,
}) => {
  const initials = `${firstName.charAt(0)}${lastName.charAt(0)}`;

  const badgeStatus = () => {
    return (
      (status === "Appointment_Set" && "APPOINTMENT") ||
      (status === "Property_Viewed" && "VIEWED") ||
      (status === "Offer_Accepted" && "ACCEPTED") ||
      "INTERESTED"
    );
  };
  return (
    <Card className="applicant-card">
      <div className="card-avatar">
        <Avatar initials={initials} />
      </div>
      <Card.Body>
        <Card.Title>
          <b>{firstName} {lastName}</b>
        </Card.Title>
        <Card.Text>{phone}</Card.Text>
        <Card.Text>{email}</Card.Text>
        <div className="badge-container">
          <Badge variant="secondary" className="badge-status">
            {badgeStatus()} {date} {time}
          </Badge>
          {bid && (
            <Badge variant="warning" className="badge-bid">
              BID {bidAmount}{bidCurrency}
            </Badge>
          )}
        </div>
      </Card.Body>
    </Card>
  );
};

export default ApplicantCard;
