const kelas = require("../models")

class KelasService{
    constructor(){
        this.newKelas = kelas;
    }

    async getKelas(id){
        let data;
        if(id){
            data = await this.newKelas.findAll({
                id
            })
        }else{
            data = await this.newKelas.findAll();
        }

    }
}

module.exports = KelasService