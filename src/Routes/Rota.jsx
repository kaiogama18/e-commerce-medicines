
export default async (props) => {
    const url = 'api/api';
    try {
        const response = await fetch(url, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(props),
        });
        if (response.ok) {
            // const { data } = await response.json();
            // alert("DATA => " + JSON.stringify( data, null, 2));
            return await response.json()
        } else {
            let error = new Error(response.statusText);
            error.response = response;
            throw error;
        }
    } catch (error) {
        const { response } = error;
        // alert(JSON.stringify(response, null, 2));
    }

}



// export default async (props) => {
//     const url = 'api/api';
//     // alert(JSON.stringify(props, null, 2));
//     try {
//       const response = await fetch(url, {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify(props),
//       });
//       if (response.status === 200) {
//         const { data, menssage, code } = await response.json();
//         alert(menssage)
//         return { code, menssage, data }
//       } else {
//         let error = new Error(response.statusText);
//         error.response = response;
//         throw error;
//       }
//     } catch (error) {
//       const { response } = error;
//       alert(JSON.stringify(response, null, 2));
//     }

//   }
