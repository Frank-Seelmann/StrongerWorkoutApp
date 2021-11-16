import session from "./session";

const API_ROOT = process.env.VUE_APP_APT_ROOT ?? 'http://localhost:3100/';

export async function api(url, data = null, method = null) {
    try {
        let response;

        if (data) {
            response = await fetch(API_ROOT + url, {
                method: method ?? 'POST', // *GET, POST, PUT, DELETE, etc.
                cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
                headers: {
                    'Content-Type': 'application/json'
                    // 'Content-Type': 'application/x-www-form-urlencoded',
                },
                body: JSON.stringify(data) // body data type must match "Content-Type" header
            });
        } else {
            response = await fetch(API_ROOT + url);
        }

        if (!response.ok) {
            throw await response.json();
        }

        return await response.json();

    } catch (err) {
        session.Error(err);
    }
}