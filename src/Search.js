import React, { useState, useEffect } from "react";
import facade from "./Settings";
import URLS from "./Settings";

export function Search() {
	const [searchId, setSearchId] = useState("");
	const [searchEmail, setSearchEmail] = useState("");
	const [searchPhone, setSearchPhone] = useState("");
	const [firstName, setFirstName] = useState("");
	const [lastName, setLastName] = useState("");
	const [email, setEmail] = useState("");
	const [phone, setPhone] = useState("");
	const [hobbies, setHobbies] = useState([]);
	const [address, setAddress] = useState({});
	const [allHobbies, setAllHobbies] = useState([]);
	const [selectedHobby, setSelectedHobby] = useState("");
	const [personsHobbies, setPersonsHobbies] = useState([]);

	useEffect(() => {
		fetchHobbies();
	}, []);

	function fetchHobbies() {
		let options = {
			method: "GET",
			headers: {
				"Content-Type": "application/json",
				Accept: "application/json",
			},
		};
		fetch(URLS.Hobby() + "/all", options)
			.then((res) => res.json())
			.then((data) => {
				console.log(data);
				setAllHobbies(data);
			});
	}

	function fetchPersonsFromHobby(selectedHobby) {
		let options = {
			method: "GET",
			headers: {
				"Content-Type": "application/json",
				Accept: "application/json",
			},
		};
		fetch(URLS.SearchUser() + "/hobby/" + selectedHobby, options)
			.then((res) => res.json())
			.then((data) => {
				console.log(data);
				setPersonsHobbies(data);
			});
	}

	function fetchWithId(id) {
		let options = {
			method: "GET",
			headers: {
				"Content-Type": "application/json",
				Accept: "application/json",
			},
		};
		fetch(URLS.SearchUser() + "/id/" + id, options)
			.then((res) => res.json())
			.then((data) => {
				console.log(data);
				setFirstName(data.firstName);
				setLastName(data.lastName);
				setEmail(data.email);
				setPhone(data.phone);
				setHobbies(data.hobbies);
				setAddress(data.address);
			});
	}
	function fetchWithEmail() {
		let options = {
			method: "GET",
			headers: {
				"Content-Type": "application/json",
				Accept: "application/json",
			},
		};
		fetch(URLS.SearchUser() + "/email/" + searchEmail, options)
			.then((res) => res.json())
			.then((data) => {
				console.log(data);
				setFirstName(data.firstName);
				setLastName(data.lastName);
				setEmail(data.email);
				setPhone(data.phone);
				setHobbies(data.hobbies);
				setAddress(data.address);
			});
	}
	function fetchWithPhone() {
		let options = {
			method: "GET",
			headers: {
				"Content-Type": "application/json",
				Accept: "application/json",
			},
		};
		fetch(URLS.SearchUser() + "/phone/" + searchPhone, options)
			.then((res) => res.json())
			.then((data) => {
				console.log(data);
				setFirstName(data.firstName);
				setLastName(data.lastName);
				setEmail(data.email);
				setPhone(data.phone);
				setHobbies(data.hobby);
				setAddress(data.address);
			});
	}

	function idChangeHandler(event) {
		let s = event.target.value;
		console.log(s);
		setSearchId(s);
	}
	function emailChangeHandler(event) {
		let s = event.target.value;
		console.log(s);
		setSearchEmail(s);
	}
	function phoneChangeHandler(event) {
		let s = event.target.value;
		console.log(s);
		setSearchPhone(s);
	}

	function changeHandlerSelectHobby(event) {
		console.log(event.target.value);
		let str = event.target.value;
		setSelectedHobby(str);
	}

	function idSubmitHandler(event) {
		event.preventDefault();
		fetchWithId(searchId);
		setSearchId("");
		setSearchEmail("");
		setSearchPhone("");
	}

	function emailSubmitHandler(event) {
		event.preventDefault();
		fetchWithEmail(searchEmail);
		setSearchId("");
		setSearchEmail("");
		setSearchPhone("");
	}

	function phoneSubmitHandler(event) {
		event.preventDefault();
		fetchWithPhone(searchPhone);
		setSearchId("");
		setSearchEmail("");
		setSearchPhone("");
	}

	function hobbySubmitHandler(event) {
		event.preventDefault();
		fetchPersonsFromHobby(selectedHobby);
	}

	return (
		<div>
			<h1>Search</h1>
			<p>Find persons with given hobby:</p>
			<select onChange={changeHandlerSelectHobby} style={{ width: "200px" }}>
				{allHobbies.map((hobby) => {
					return (
						<option key={hobby.id} value={hobby.name}>
							{hobby.name}
						</option>
					);
				})}
			</select>
			<button onClick={hobbySubmitHandler}>Search</button>

			{personsHobbies && personsHobbies.length > 0
				? personsHobbies.map((people, x) => {
						return (
							<div key={x}>
								{/* <div key={hobby.id}> */}
								<p>
									{people.id + ": "} {people.firstName} {people.lastName}
								</p>
							</div>
						);
				  })
				: ""}
			<hr />
			<p>Search for a person here</p>
			<input
				type="text"
				placeholder="ID"
				value={searchId}
				onChange={idChangeHandler}
			></input>
			<br />
			<button onClick={idSubmitHandler}>Search</button>
			<br />
			<input
				type="text"
				placeholder="Email"
				value={searchEmail}
				onChange={emailChangeHandler}
			></input>
			<br />
			<button onClick={emailSubmitHandler}>Search</button>
			<br />
			<input
				type="text"
				placeholder="Phone"
				value={searchPhone}
				onChange={phoneChangeHandler}
			></input>
			<br />
			<button onClick={phoneSubmitHandler}>Search</button>
			{firstName !== undefined ? (
				<>
					<p>
						<b>Name: </b>
						{firstName} {lastName}
					</p>
					<p>
						<b>Phone: </b>
						{phone}
					</p>
					<p>
						<b>Email: </b>
						{email}
					</p>
					<p>
						<b>Address: </b>
						{address.street}, {address.city} {address.zip}
					</p>
					<b>Hobbies: </b>
					{hobbies.map((hobby, x) => {
						return (
							<div key={x}>
								{/* <div key={hobby.id}> */}
								<p>{x + 1 + ":"}</p>
								<p>Name: {hobby.name}</p>
								<p>Description: {hobby.description}</p>
							</div>
						);
					})}
				</>
			) : (
				<p>No Person Found</p>
			)}
			<hr />
			<h2>All Hobbies</h2>
			<p>
				{allHobbies.map((hobby, x) => {
					return (
						<li key={x}>
							{hobby.name} - {hobby.description}
						</li>
					);
				})}
			</p>
		</div>
	);
}
