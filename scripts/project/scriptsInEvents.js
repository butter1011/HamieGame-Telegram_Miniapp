


const scriptsInEvents = {

	async EventMenu_Event2_Act4(runtime, localVars)
	{
		if (window.Telegram.WebApp) {
			Telegram.WebApp.ready();
			window.Telegram.WebApp.enableClosingConfirmation();
		}
		
		// Initialize global variables
		const telegramId = window.Telegram.WebApp.initDataUnsafe.user.id;
		const username = window.Telegram.WebApp.initDataUnsafe.user.username || ""; // Fallback if username is not available
		const firstName = window.Telegram.WebApp.initDataUnsafe.user.first_name || ""; // Fallback if first name is not available
		const lastName = window.Telegram.WebApp.initDataUnsafe.user.last_name || ""; // Fallback if last name is not available
		
		runtime.globalVars.telegramId = telegramId;
		runtime.globalVars.userName = username;
		runtime.globalVars.firstName = firstName;
		runtime.globalVars.lastName = lastName;
		
		console.log("Telegram ID:", telegramId);
		console.log("Username:", username);
		console.log("First Name:", firstName);
		console.log("Last Name:", lastName);
	}

};

self.C3.ScriptsInEvents = scriptsInEvents;

