import crypto  from  'crypto';

// const  hash =  crypto.createHash('sha256');
// hash.update('password12345')
// console.log(hash.digest('hex'))


const algorithm = "aes-256-cbc";
const key = crypto.randomBytes(32);
const iv =  crypto.randomBytes(16);


const cipher  = crypto.createCipheriv(algorithm,key,iv);
let encrpted =cipher.update("Hello this  is  my password", 'utf-8', 'hex');
 encrpted +=  cipher.final('hex')
 console.log(encrpted);

 const  decipher  = crypto.createDecipheriv(algorithm,key,iv);
 let decrpted  = decipher.update(encrpted , 'hex', 'utf-8')
     decrpted +=  decipher.update('utf8');

     console.log(decrpted)


