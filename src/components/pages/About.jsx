import React from "react";
import TeamMemberCard from "./aboutFiles/TeamMemberCard";
import MM from "./aboutFiles/images/MM.jpg";
import LN from "./aboutFiles/images/LN.jpg";
import ash from "./aboutFiles/images/ash.jpg";
import JF from "./aboutFiles/images/JF.jpg";
import {BsGithub} from "react-icons/bs";
import {BiServer} from "react-icons/bi";
import {GiCigarette} from "react-icons/gi";
import {TbDog} from "react-icons/tb";
import BiographiesAnna from "./aboutFiles/BiographiesAnna";
import BiographiesTobi from "./aboutFiles/BiographiesTobi";
import BiographiesAsh from "./aboutFiles/BiographiesAsh";
import BiographiesJames from "./aboutFiles/BiographiesJames";

const About = () => {
	const teamMembers = [
		{
			image: MM,
			name: <a href="#anna" className="card-link">Anna Gilthorpe</a>,
			title: "Shake Your Tailwind",
			bio: <h2><BsGithub /></h2>
		},
		{
			image: LN,
			name: <a href="#tobi" className="card-link">Tobi Olajide</a>,
			title: "Always Servin'g",
			bio: <h2><BiServer /></h2>
		},
		{
			image: ash,
			name: <a href="#ash" className="card-link">Ashley Cook</a>,
			title: "Soapy Coffee",
			bio: <h2><GiCigarette /></h2>
		},
		{
			image: JF,
			name: <a href="#james" className="card-link">James Fahey</a>,
			title: "Express Yourself",
			bio: <h2><TbDog /></h2>
		},
	];

	return (
		<div className="team-page">
			<h1 className="headerFont">Meet The Team</h1>
			<div className="team-members">
			{teamMembers.map((teamMembers) => (
				<TeamMemberCard
				image = {teamMembers.image}
				key = {teamMembers.name}
				name = {teamMembers.name}
				title = {teamMembers.title}
				bio = {teamMembers.bio}
				/>
			))}
			</div>
			<BiographiesAnna />
			<BiographiesTobi />
			<BiographiesAsh />
			<BiographiesJames />
		</div>
		
	);
};

export default About;