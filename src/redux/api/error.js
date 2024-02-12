export const handleError = err => {
	if (err.response) {
		return err.response.data.message;
	} else {
		return 'Something went wrong, please try again later';
	}
};
