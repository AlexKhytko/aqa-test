const axios = require('axios');

test("dictionary", async () => {
    try {
        // Выполняем запрос
        const response = await axios.get('https://api3.uashort.agis.work/dictionary', {
            headers: {
                'accept': 'application/json',
            },
        });

        expect(response.status).toBe(200);
        console.log(response.data);
        expect(response.data).toBeDefined();  // Проверка, что response.data не undefined
        expect(typeof response.data).toBe('object');  // Проверка, что response.data - это объект
        expect(response.data).toHaveProperty('education');  // Проверка наличия свойства 'dictionary'
        expect(typeof response.data.education).toBe('object');  // Проверка, что 'dictionary' - объект       
        expect(response.data).toHaveProperty('active_regions'); 
        expect(typeof response.data.active_regions).toBe('object'); 
        expect(response.data).toHaveProperty('number_of_children'); 
        expect(typeof response.data.number_of_children).toBe('object'); 
        expect(response.data).toHaveProperty('contact_type'); 
        expect(typeof response.data.contact_type).toBe('object');
        expect(response.data).toHaveProperty('independent_professional_activity_type'); 
        expect(typeof response.data.independent_professional_activity_type).toBe('object'); 
        expect(response.data).toHaveProperty('family_status'); 
        expect(typeof response.data.family_status).toBe('object');
        expect(response.data).toHaveProperty('disbursement_method'); 
        expect(typeof response.data.disbursement_method).toBe('object');
        expect(response.data).toHaveProperty('additional_document_types'); 
        expect(typeof response.data.additional_document_types).toBe('object');
        expect(response.data).toHaveProperty('visual_evaluation'); 
        expect(typeof response.data.visual_evaluation).toBe('object');
        expect(response.data).toHaveProperty('disability_group'); 
        expect(typeof response.data.disability_group).toBe('object');
        expect(response.data).toHaveProperty('academic_degree'); 
        expect(typeof response.data.academic_degree).toBe('object');
        expect(response.data).toHaveProperty('faculty'); 
        expect(typeof response.data.faculty).toBe('object');
    
        
    } catch (error) {
        console.error('Error occurred:', error);
        throw error;  // Пробрасываем ошибку, чтобы тест не считался успешным при ошибке
    }
});
