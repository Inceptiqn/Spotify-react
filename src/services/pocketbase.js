const PB_BASE_URL = "http://127.0.0.1:8090";

const buildFileUrl = (collection, recordId, fileName) => {
	if (!fileName) return "";
	return `${PB_BASE_URL}/api/files/${collection}/${recordId}/${fileName}`;
};

export const fetchAlbums = async () => {
	const res = await fetch(
		`${PB_BASE_URL}/api/collections/albums/records?page=1&perPage=200`,
	);
	if (!res.ok) {
		throw new Error("Failed to fetch albums");
	}

	const data = await res.json();

	return data.items.map((record) => ({
		id: record.id,
		title: record.title,
		owner: record.owner,
		cover: buildFileUrl("albums", record.id, record.cover),
		color: record.color || "#121212",
	}));
};

export const fetchSongs = async () => {
	const res = await fetch(
		`${PB_BASE_URL}/api/collections/songs/records?page=1&perPage=500`,
	);
	if (!res.ok) {
		throw new Error("Failed to fetch songs");
	}

	const data = await res.json();

	return data.items
		.sort((a, b) => (a.track || 0) - (b.track || 0))
		.map((record) => ({
			id: record.id,
			title: record.title,
			artist: record.artist,
			albumId: record.album,
			duration: record.duration || 0,
			track: record.track || 0,
			file: buildFileUrl("songs", record.id, record.file),
		}));
};

export const pocketbaseConfig = {
	baseUrl: PB_BASE_URL,
};
