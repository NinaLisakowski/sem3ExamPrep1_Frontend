function URLS() {
	function Login() {
		const URL = "https://bluegoldfish.dk/sem3ExamPrep1/api/login";
		return URL;
	}
	function User() {
		const URL = "https://bluegoldfish.dk/sem3ExamPrep1/api/info/user";
		return URL;
	}

	function Admin() {
		const URL = "https://bluegoldfish.dk/sem3ExamPrep1/api/info/admin";
		return URL;
	}

	function AdminData() {
		const URL = "https://bluegoldfish.dk/sem3ExamPrep1/api/fetch";
		return URL;
	}

	function Dog() {
		const URL = "https://bluegoldfish.dk/sem3ExamPrep1/api/fetch/dogpic";
		return URL;
	}
	function Cat() {
		const URL = "https://bluegoldfish.dk/sem3ExamPrep1/api/fetch/catpic";
		return URL;
	}

	function SearchUser() {
		const URL = "https://bluegoldfish.dk/sem3ExamPrep1/api/persons";
		return URL;
	}

	function Hobby() {
		const URL = "https://bluegoldfish.dk/sem3ExamPrep1/api/hobbies";
		return URL;
	}

	return { Login, User, Admin, AdminData, Dog, Cat, SearchUser, Hobby };
}
export default new URLS();
