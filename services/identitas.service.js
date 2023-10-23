const { tblIdentitas } = require("../models");

class IdentitasService {
    constructor() {
        this.newIdentitas = tblIdentitas;
    }

    async getIdentitas() {
        try {
            return await this.newIdentitas.findAll();
        } catch (error) {
            console.log(error);
        }
    }

    async getIdentitasId(id) {
        try {
            return await this.newIdentitas.findOne({
                where: {
                    id,
                }
            });
        } catch (error) {
            console.log(error);
        }
    }

    //edit kelas
    async updateIdentitas(id, payload) {
        try {
            const { strNamaSekolah, strNIS, strAlamat, strKodePos, strTelpon, strKelurahan, strKecamatan, strKabuten, strProvinsi, strWebsite, strEmail } = payload;

            const identitasUpdate = await this.newIdentitas.findOne({
                where: { id: id },
            });

            if (!identitasUpdate) {
                throw new Error("Mata pelajaran tidak ditemukan.");
            }

            await identitasUpdate.update({
                strNamaSekolah, strNIS, strAlamat, strKodePos, strTelpon, strKelurahan, strKecamatan, strKabuten, strProvinsi, strWebsite, strEmail
            });

            return identitasUpdate;
        } catch (error) {
            console.error("Gagal memperbarui identitas sekolah:", error);
            throw error;
        }
    }

    async addIdentitas(payload) {
        const date = new Date();
        const { strNamaSekolah, strNIS, strAlamat, strKodePos, strTelpon, strKelurahan, strKecamatan, strKabuten, strProvinsi, strWebsite, strEmail } = payload;
        const inputIdentitas = this.newIdentitas.create({
            strNamaSekolah: strNamaSekolah,
            strNIS: strNIS,
            strAlamat: strAlamat,
            strKodePos: strKodePos,
            strTelpon: strTelpon,
            strKelurahan: strKelurahan,
            strKecamatan: strKecamatan,
            strKabuten: strKabuten,
            strProvinsi: strProvinsi,
            strWebsite: strWebsite,
            strEmail: strEmail,
            createdAt: date,
            updatedAt: date,
        });
        return inputIdentitas;
    }

    async delete(id) {
        const identitasDelete = this.newIdentitas.destroy({
            where: {
                id,
            },
        });

        return identitasDelete;
    }
}

module.exports = IdentitasService
