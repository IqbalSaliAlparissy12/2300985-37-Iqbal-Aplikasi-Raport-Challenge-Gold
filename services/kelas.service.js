const {tblKelas} = require("../models")

class KelasService{
    constructor(){
        this.newKelas = tblKelas;
    }
    async getKelas(id){
        let data;
        if(id){
            data = await this.newKelas.findOne({
                where:{
                    id
                } 
            })
        }else{
            data = await this.newKelas.findAll();
        }
        return data
    }

    async addKelas(payload){
        const date = new Date();
        const {kelas, strKelasDetail} = payload
        const inputKelas = this.newKelas.create({
            kelas, strKelasDetail, createdAt : date, updatedAt : date
        })
        return inputKelas
    }
}

module.exports = KelasService