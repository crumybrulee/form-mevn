<template>
  <div class="edit">
    <div class="container">
      <div class="row">
        <div class="col-md-12">
          <h1>Edit Profile</h1>
          <form @submit.prevent="editAnggota">
            <div class="mb-3">
              <label for="exampleInputPassword1" class="form-label">Nama</label>
              <input type="text" class="form-control" id="exampleInputPassword1" v-model="nama" />
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
  name: "EditView",
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
    editAnggota() {
      // post data
      axios
        .put("http://localhost:3000/users/" + this.$route.params.id, {
          nama: this.nama,
          email: this.email,
          nim: this.nim,
          prodi: this.prodi,
          angkatan: this.angkatan,
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
  mounted() {
    // get data
    axios
      .get("http://localhost:3000/users/" + this.$route.params.id)
      .then((response) => {
        
        this.nama = response.data.nama;
        this.email = response.data.email;
        this.nim = response.data.nim;
        this.prodi = response.data.prodi;
        this.angkatan = response.data.angkatan;
        console.log(this.nim);
        // refresh value
        this.$forceUpdate();
      })
      .catch((error) => {
        console.log(error);
      });
  },
};
</script>