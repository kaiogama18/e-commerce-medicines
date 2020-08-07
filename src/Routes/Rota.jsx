
export default async (props) => {
    const url = 'api/api';
    try {
        const response = await fetch(url, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(props),
        });
        if (response.ok) {
            return await response.json()
        } else {
            let error = new Error(response.statusText);
            error.response = response;
            throw error;
        }
    } catch (error) {
        const { response } = error;
    }

}

