export const formatDate = (dateString: string): string => {
	const date = new Date(dateString);

	// Format: Month Day, Year (e.g., "April 15, 2023")
	return date.toLocaleDateString("en-US", {
		month: "long",
		day: "numeric",
		year: "numeric",
	});
};
