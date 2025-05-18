@Smoke
Validate login with valid credentials
	Go to "http://secure.smartbearsoftware.com/samples/testcomplete12/WebOrders/login.aspx"
	Enter username as "Tester"
	Enter password as "test"
	Click on "Login" button
	Validate user is logged in
	Validate url contains "weborders"
	Validate "Welcome, Tester!" is visible
	Validate "Logout" button is visible
	Validate "Web Orders" heading is visible

@Smoke
Validate logout
	Go to "http://secure.smartbearsoftware.com/samples/testcomplete12/WebOrders/login.aspx"
	Enter username as "Tester"
	Enter password as "test"
	Click on "Login" button
	Click on "Logout" button
	Validate url contains "Login"
	Validate login form is visible












