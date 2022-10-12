export default {
	fetch(request) {
        const random = Math.floor(Math.random() * 4);
        const responses = ['hello 1', 'this is 2', 'what is 3', 'I am 4'];
        return new Response(responses[random], {
            headers: {
                'content-type': 'text/plain',
            },
        });
	},
};
