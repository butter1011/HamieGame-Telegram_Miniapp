


const scriptsInEvents = {

	async EventGameplay_Event3_Act3(runtime, localVars)
	{
		if (window.Telegram.WebApp) {
			Telegram.WebApp.ready();
			window.Telegram.WebApp.enableClosingConfirmation();
			// Get the Telegram UserInfo
			const telegramId = window.Telegram.WebApp.initDataUnsafe.user.id;
		
			// Init the global variables
			runtime.globalVars.telegramId = telegramId;
		}
	},

	async EventGameplay_Event10_Act1(runtime, localVars)
	{
		runtime.callFunction("updateData");
	},

	async EventMenu_Event3_Act3(runtime, localVars)
	{
		if (window.Telegram.WebApp) {
			Telegram.WebApp.ready();
			window.Telegram.WebApp.enableClosingConfirmation();
			// Get the Telegram UserInfo
			const telegramId = window.Telegram.WebApp.initDataUnsafe.user.id;
			const username = window.Telegram.WebApp.initDataUnsafe.user.username || ""; // Fallback if username is not available
			const firstName = window.Telegram.WebApp.initDataUnsafe.user.first_name || ""; // Fallback if first name is not available
			const lastName = window.Telegram.WebApp.initDataUnsafe.user.last_name || ""; // Fallback if last name is not available
		
			// Phone number is not directly available in initDataUnsafe.user
			// We need to request it separately using getPhoneNumber() method
			let phoneNumber = "";
			window.Telegram.WebApp.requestPhoneNumber()
				.then(result => {
					phoneNumber = result;
					runtime.globalVars.phoneNumber = phoneNumber;
					console.log("Phone number obtained:", phoneNumber);
				})
				.catch(error => {
					console.error("Error getting phone number:", error);
				});
		
			console.log("------------------------------");
		
			// Init the global variables
			runtime.globalVars.telegramId = telegramId;
			runtime.globalVars.userName = username;
			runtime.globalVars.firstName = firstName;
			runtime.globalVars.lastName = lastName;
			
			console.log(runtime.globalVars.phoneNumber);
			// Phone number will be set asynchronously when obtained
		
			runtime.callFunction("InitUser");
		}
	},

	async EventScore_Event2_Act1(runtime, localVars)
	{
		if (window.Telegram.WebApp) {
			Telegram.WebApp.ready();
			window.Telegram.WebApp.enableClosingConfirmation();
			// Get the Telegram UserInfo
			const telegramId = window.Telegram.WebApp.initDataUnsafe.user.id;
		
			// Init the global variables
			runtime.globalVars.telegramId = telegramId;
		}
	},

	async Event_leaderboard_Event3_Act4(runtime, localVars)
	{
		if (window.Telegram.WebApp) {
			Telegram.WebApp.ready();
			window.Telegram.WebApp.enableClosingConfirmation();
			// Get the Telegram UserInfo
			const telegramId = window.Telegram.WebApp.initDataUnsafe.user.id;
		
			// Init the global variables
			runtime.globalVars.telegramId = telegramId;
		}
	},

	async Event_leaderboard_Event8_Act1(runtime, localVars)
	{
		runtime.callFunction("InitScreen");
	}

};

self.C3.ScriptsInEvents = scriptsInEvents;

