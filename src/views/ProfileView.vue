<template>
  <div class="tambah">
    <!-- Form register -->
      <div class="container mt-5">
        <div class="row">
          <div class="col-md-12">
            <div class="ms-8">
            </div>
            <!--form prevent submit-->
            <form @submit.prevent="addAnggota">
              <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label
                  ">Nama</label>
                <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" v-model="nama" />
              </div>
              <div class="mb-3">
                <label for="exampleInputPassword1" class="form-label">NIM</label>
                <input type="text" class="form-control" id="exampleInputPassword1" v-model="nim" />
              </div>
              <div class="mb-3">
                <label for="exampleInputPassword1" class="form-label">Program Studi</label>
                <input type="text" class="form-control" id="exampleInputPassword1" v-model="prodi" />
              </div>
              <div class="mb-3">
                <label for="exampleInputPassword1" class="form-label">Angkatan</label>
                <input type="text" class="form-control" id="exampleInputPassword1" v-model="angkatan" />
              </div>
              <div class="mb-3">
                <label for="exampleInputPassword1" class="form-label">Email</label>
                <input type="email" class="form-control" id="exampleInputPassword1" v-model="email" />
              </div>
              <div class="mb-3">
                <button type="submit" class="btn btn-primary">Submit</button>
              </div>
            </form>
          </div>

        </div>
      </div>
  </div>
</template>

<script>
// axios
import axios from "axios";

export default {
  name: "TambahView",
  data() {
    return {
      nama: "",
      nim: "",
      prodi: "",
      angkatan: "",
      email: "",
    };
  },
  methods: {
    addAnggota() {
      // post data  
      axios
        .post("http://localhost:3000/users", {
          nama: this.nama,
          nim: this.nim,
          prodi: this.prodi, 
          angkatan: this.angkatan,
          email: this.email,
        })
        .then((response) => {
          console.log(response);
          this.$router.push("/");
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>