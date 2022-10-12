export default {
	fetch(request) {
		console.log("codeclub-1 worker")
		console.log(request.url);
		if(request.url == "https://www.cloudflareworkers.com/yes") {
			if (request.method == 'GET') {
				return new Response('Yes! GET', {
					headers: {
						'content-type': 'text/plain',
					},
				});
			}
			else if (request.method == 'POST') {
				return new Response('Yes! POST', {
					headers: {
						'content-type': 'application/json',
					},
				});
			}
			else {
				return new Response('Yes! Something else..', {
					headers: {
						'content-type': 'text/plain',
					},
				});
			}
		}
		else {
			return new Response('Nope!', {
				headers: {
					'content-type': 'text/plain'
				},
			});
		}
	},
};
