export default class Restaurant {
	private static list: Restaurant[] = [];
	private coordinates: [number, number];

	// prettier-ignore
	constructor(
		private readonly id: number,
		private readonly name: string,
		private readonly address: string,
		private readonly kind: string,
		private readonly lat: number,
		private readonly lng: number,
	) {
		this.coordinates = [this.lat, this.lng];
		Restaurant.list.push(this);
	}

	// static
	static get getList() {
		return Restaurant.list;
	}

	// getters
	get getName() {
		return this.name;
	}

	get getKind() {
		return this.kind;
	}

	get getAddress() {
		return this.address;
	}

	get getCoordinates(): [number, number] {
		return this.coordinates;
	}
}
