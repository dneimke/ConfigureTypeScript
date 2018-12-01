// Base class for Http operations GET, PUT, POST, DELETE, PATCH!!
export class HttpFetchService<T> { 

    public Post<U>(url: string, payload: any): Promise<U> {  
        const promise = new Promise<U>((resolve, reject) => {
            fetch(url, {
                method: 'post',
                body: JSON.stringify(payload) 
            }).then((response) => {
                return response.json();
            })
                .then(function (result: U) {  
                    resolve(result);
                });
        });

        return promise;
    }
}


