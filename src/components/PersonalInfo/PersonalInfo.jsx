import React from "react";
import { cntPersonalInfo, infoLabel, cntInfo } from "./_personalInfo.scss";

const Row = ({
    label,
    value
}) => {
    return (
        <div className={cntInfo}>
            <div className={infoLabel}>{label}</div>
            <div className="info-value">{value}</div>
        </div>
    );
}

const PersonalInfo = () => {
    const email = "krasheninnikova.olga@gmail.com",
          linkedInUrl = "www.linkedin.com/in/olga-krasheninnikova",
          phone = "408-476-1431";
    return (
        <div className={cntPersonalInfo}>
            <Row label="Phone"
                value={<a href={"tel:" + phone}>{phone}</a>} />
            <Row label="Email"
                value={<a href={"mailto:" + email}>{email}</a>}/>
            <Row label="LinkedIn"
                value={<a target="_blank" href={"https://" + linkedInUrl}>{linkedInUrl}</a>}/>
            <Row label="Address"
                value={<span>San Jose CA 95131<br></br>
                    1572 Theo Dr.</span>}/>
        </div>
    );
}

export default PersonalInfo;