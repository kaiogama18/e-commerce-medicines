import fetch from 'isomorphic-unfetch';
const url = 'http://perfiltecnologia.ddns.net:63000/rest'

export default async (req, res) => {
    const { method, route, param } = await req.body;
    try {
        const response = (method == 'GET') ? (
            await fetch(url + route)
        ) : (
                param == null ? (
                    await fetch(url + route, {
                        method: 'POST',
                    })
                ) : (
                        await fetch(url + route, {
                            method: 'POST',
                            headers: { 'Content-Type': 'application/json' },
                            body: JSON.stringify(param),
                        })
                    )
            )
        
        if (response.ok) {
            const data = await response.json()
            // console.log("Api WEDO param DATA => " + JSON.stringify( data, null, 2));
            return res.status(200).json({ data });

        } else {
            error.response = response;
            throw error;
        }
    } catch (error) {
        const { response } = error;

        return response
            ? res.status(response.status).json({ message: response.statusText })
            : res.status(400).json({ message: error.message });
    }


};