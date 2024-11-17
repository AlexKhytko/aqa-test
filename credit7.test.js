const axios = require('axios');


test("wp-json", async () => {
    try {
        const response = await axios.get('https://credit7.ua/wp-json/', {
            headers: {
                'Content-Type': 'application/json',
            },
         });
        console.log("Response Status:", response.status);
        console.log("Response Headers:", response.headers);
        
        expect(response.status).toBe(200); 
        expect(response.headers['content-type']).toContain('application/json');
        
     } catch (error) {
        console.error('Error occurred:', error);
        throw error; 
    }
});

test("jak-vzjati-kredit", async () => {
    try {
        const response = await axios.get('https://credit7.ua/jak-vzjati-kredit/', {
            headers: {
                'Content-Type': 'text/html',
            }
        });
        console.log("Response Status:", response.status);
        console.log("Response Headers:", response.headers);
        //console.log("Response Data:", response.data);
        expect(response.status).toBe(200); 
        expect(response.headers['content-type']).toContain('text/html');
        expect(response.data).toBeDefined(); 
     } catch (error) {
        console.error('Error occurred:', error);
        throw error; 
    }
});

// test("jak-vzjati-kredit", async () => {
//     try {
//         const response = await axios.get('https://credit7.ua/jak-vzjati-kredit/', {
//             headers: {
//                 'Content-Type': 'application/json',
//             }
//         });
//        // Логируем ответ для диагностики
//         console.log("Respose  " + response.status);
//       //  console.log(response.data);
//        // Проверка статус-кода
//         expect(response.status).toBe(200); // Перевірка статусу
//     } catch (error) {
//         // Логируем ошибку в случае неудачного запроса
//         console.error('Error occurred:', error);
//         throw error;  // Перебросить ошибку, чтобы тест не прошел
//     }
// });

test("registration", async () => {
    try {
        const response = await axios.get('https://credit7.ua/client/registration/general-information?redirectFromEntryPoint=1', {
            headers: {
                'Content-Type': 'application/json',
            }
        });
       // Логируем ответ для диагностики
        console.log("Respose  " + response.status);
       // console.log(response.data);
       // Проверка статус-кода
        expect(response.status).toBe(200); // Перевірка статусу
    } catch (error) {
        // Логируем ошибку в случае неудачного запроса
        console.error('Error occurred:', error);
        throw error;  // Перебросить ошибку, чтобы тест не прошел
    }
});

test("main", async () => {
    try {
        const response = await axios.get('https://credit7.ua/', {
            headers: {
                'Content-Type': 'application/json',
            }
        });
       // Логируем ответ для диагностики
        console.log("Respose  " + response.status);
       // Проверка статус-кода
        expect(response.status).toBe(200); // Перевірка статусу
    } catch (error) {
        // Логируем ошибку в случае неудачного запроса
        console.error('Error occurred:', error);
        throw error;  // Перебросить ошибку, чтобы тест не прошел
    }
});
test("kredytni-produkty", async () => {
    try {
        const response = await axios.get('https://credit7.ua/kredytni-produkty/', {
            headers: {
                'Content-Type': 'application/json',
            }
        });
       // Логируем ответ для диагностики
        console.log("Respose  " + response.status);
       // Проверка статус-кода
        expect(response.status).toBe(200); // Перевірка статусу
    } catch (error) {
        // Логируем ошибку в случае неудачного запроса
        console.error('Error occurred:', error);
        throw error;  // Перебросить ошибку, чтобы тест не прошел
    }
});

test("yak-splatiti", async () => {
    try {
        const response = await axios.get('https://credit7.ua/yak-splatiti/', {
            headers: {
                'Content-Type': 'application/json',
            }
        });
       // Логируем ответ для диагностики
        console.log("Respose  " + response.status);
       // Проверка статус-кода
        expect(response.status).toBe(200); // Перевірка статусу
    } catch (error) {
        // Логируем ошибку в случае неудачного запроса
        console.error('Error occurred:', error);
        throw error;  // Перебросить ошибку, чтобы тест не прошел
    }
});

test("pro-nas", async () => {
    try {
        const response = await axios.get('https://credit7.ua/pro-nas/', {
            headers: {
                'Content-Type': 'application/json',
            }
        });
       // Логируем ответ для диагностики
        console.log("Respose  " + response.status);
       // Проверка статус-кода
        expect(response.status).toBe(200); // Перевірка статусу
    } catch (error) {
        // Логируем ошибку в случае неудачного запроса
        console.error('Error occurred:', error);
        throw error;  // Перебросить ошибку, чтобы тест не прошел
    }
});


test("news", async () => {
    try {
        const response = await axios.get('https://credit7.ua/news/', {
            headers: {
                'Content-Type': 'application/json',
            }
        });
       // Логируем ответ для диагностики
        console.log("Respose  " + response.status);
       // Проверка статус-кода
        expect(response.status).toBe(200); // Перевірка статусу
    } catch (error) {
        // Логируем ошибку в случае неудачного запроса
        console.error('Error occurred:', error);
        throw error;  // Перебросить ошибку, чтобы тест не прошел
    }
});
test("login", async () => {
    try {
        const response = await axios.get('https://credit7.ua/client/login', {
            headers: {
                'Content-Type': 'application/json',
            }
        });
       // Логируем ответ для диагностики
        console.log("Respose  " + response.status);
       // Проверка статус-кода
        expect(response.status).toBe(200); // Перевірка статусу
    } catch (error) {
        // Логируем ошибку в случае неудачного запроса
        console.error('Error occurred:', error);
        throw error;  // Перебросить ошибку, чтобы тест не прошел
    }
});

test("payment", async () => {
    try {
        const response = await axios.get('https://credit7.ua/s/payment', {
            headers: {
                'Content-Type': 'application/json',
            }
        });
       // Логируем ответ для диагностики
        console.log("Respose  " + response.status);
       // Проверка статус-кода
        expect(response.status).toBe(200); // Перевірка статусу
    } catch (error) {
        // Логируем ошибку в случае неудачного запроса
        console.error('Error occurred:', error);
        throw error;  // Перебросить ошибку, чтобы тест не прошел
    }
});

test("zyma_blyzko", async () => {
    try {
        const response = await axios.get('https://credit7.ua/akcii/zyma_blyzko/', {
            headers: {
                'Content-Type': 'application/json',
            }
        });
       // Логируем ответ для диагностики
        console.log("Respose  " + response.status);
       // Проверка статус-кода
        expect(response.status).toBe(200); // Перевірка статусу
    } catch (error) {
        // Логируем ошибку в случае неудачного запроса
        console.error('Error occurred:', error);
        throw error;  // Перебросить ошибку, чтобы тест не прошел
    }
});
