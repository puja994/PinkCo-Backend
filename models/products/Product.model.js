import ProdSchema from './Product.schema.js'

export const getProducts = () =>{
    return new Promise (async(resolve,reject)=>{
        try{
            const result = await ProdSchema.find()
            resolve(result)

        }catch(error){
            reject(error)
        }
    })
}
export const getProductById = (_id) =>{
    return new Promise (async(resolve,reject)=>{
        try{
            const result = await ProdSchema.find({
              categories: { $in: _id },
            });
      
            resolve(result)

        }catch(error){
            reject(error)
        }
    })
}
export const getProductBySlug = (slugValue) => {
    return new Promise(async (resolve, reject) => {
      try {
        const result = await ProdSchema.find({
          slug: {
            $in: slugValue,
          },
        });
  
        resolve(result);
      } catch (error) {
        reject(error);
      }
    });
  };