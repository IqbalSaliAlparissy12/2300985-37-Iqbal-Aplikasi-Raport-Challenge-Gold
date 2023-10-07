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
}

module.exports = KelasService