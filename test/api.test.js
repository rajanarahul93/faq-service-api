const { expect, app } = require('./setup');  
const FAQ = require('../src/models/FAQ');   

describe('FAQ API', () => {  
  describe('GET /api/faqs', () => {  
    it('should fetch FAQs in English (default)', async () => {
      await FAQ.create({
        question: 'Test?', 
        answer: '<p>Test Answer</p>',  
        translations: [],  
      });

      const res = await chai.request(app).get('/api/faqs');
      
      expect(res.status).to.equal(200); 
      expect(res.body).to.be.an('array');  
      expect(res.body[0].question).to.equal('Test?');  
    });

    it('should cache FAQs after first request', async () => {
      await chai.request(app).get('/api/faqs');
      
      const cached = await client.get('faqs:en');
      
      expect(cached).to.not.be.null;  
    });
  });

  describe('POST /api/faqs', () => {  
    it('should create an FAQ with translations', async () => {
      const res = await chai.request(app)
        .post('/api/faqs')
        .send({ question: 'Hello', answer: '<p>World</p>' });

      // Assertions
      expect(res.status).to.equal(201);  
      expect(res.body.translations).to.have.lengthOf(2);  
    });
  });
});
