
<template>
  <div class="home">
    <div class="container mt-5">
      <div class="row">
        <div class="col-md-6">
          <div class="ms-8">
            <HelloWorld msg="Mission 5: Create Personal Website" />
          </div>
        </div>
      </div>
    </div>
    <div>
      <h2 class="text-start ms-5">
        <div class="ms-5">
          <!-- Identity Form -->
        </div>
        <!--add one button-->
        <router-link to="/tambah" type="button" class="btn btn-primary ms-5" data-bs-toggle="modal"
          data-bs-target="#exampleModal">
          Identity Form

        </router-link>

      </h2>
    </div>
    <!-- table reponsive -->
    <div class="container mt-5">
      <div class="row">
        <div class="col-md-12">
          <table class="table table-striped table-hover">
            <thead>
              <tr>
                <th scope="col">No</th>
                <th scope="col">Nama</th>
                <th scope="col">NIM</th>
                <th scope="col">Program Studi</th>
                <th scope="col">Angkatan</th>
                <th scope="col">Email</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(anggota, index) in anggotas" :key="anggota.id">
                <th scope="row">{{ index + 1 }}</th>
                <td>{{ anggota.nama }}</td>
                <td>{{ anggota.nim }}</td>
                <td>{{ anggota.prodi }}</td>
                <td>{{ anggota.angkatan }}</td>
                <td>{{ anggota.email }}</td>
                <td>
                  <!-- edit by email router-link -->
                  <router-link :to="'/edit/' + anggota.nim" type="button" class="btn btn-primary" data-bs-toggle="modal"
                    data-bs-target="#exampleModal">
                    Edit
                  </router-link>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import HelloWorld from '@/components/HelloWorld.vue'; // @ is an alias to /src

export default defineComponent({
  name: 'HomeView',
  components: {
    HelloWorld,
  },
  data() {
    return {
      anggotas: [],
    };
  },
  methods :
  {
    getAnggota() {
      fetch('http://localhost:3000/users')
        .then((response) => response.json())
        .then((data) => {
          this.anggotas = data;
          alert('Data berhasil diambil');
        });
    },
  },
  mounted() {
    this.getAnggota();
  },
});
</script>

<style>
.logo {
  width: 400px;
  height: auto;
}
</style>
