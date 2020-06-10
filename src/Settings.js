function URLS() {
	function Login() {
		const URL = "https://bluegoldfish.dk/securityown/api/login";
		return URL;
	}
	function User() {
		const URL = "https://bluegoldfish.dk/securityown/api/info/user";
		return URL;
	}

	function Admin() {
		const URL = "https://bluegoldfish.dk/securityown/api/info/admin";
		return URL;
	}

	function AdminData() {
		const URL = "https://bluegoldfish.dk/securityown/api/fetch";
		return URL;
	}

	function Dog() {
		const URL = "https://bluegoldfish.dk/securityown/api/fetch/dogpic";
		return URL;
	}
	function Cat() {
		const URL = "https://bluegoldfish.dk/securityown/api/fetch/catpic";
		return URL;
	}

	return { Login, User, Admin, AdminData, Dog, Cat };
}
export default new URLS();
