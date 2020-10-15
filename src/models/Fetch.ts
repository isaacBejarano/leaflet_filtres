console.log("Fetch loaded");

export default class Fetch {
	private static list: Fetch[];

	constructor(private URL: string, private action = "get") {
		Fetch.list.push(this);
	}
	// setters
	set setURL(url: string) {
		this.URL = url;
	}

	// getters
	get getURL(): string {
		return this.URL;
	}

	get getAction(): string {
		return this.action;
	}

	// static
	static get getList() {
		return Fetch.list;
	}
}
