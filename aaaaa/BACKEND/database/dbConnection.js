import mongoose from 'mongoose'

export const dbConnection = () => {
    mongoose.connect(process.env.MONGO_URI, {
        dbName: "MERN_STACK_JOB_SEEKING_Application"
    }).then(()=>{
        console.log('connected to database!')
    }).catch((err)=>{
        console.log(`Some error occur while connected to database: ${err}`)
    })
};

