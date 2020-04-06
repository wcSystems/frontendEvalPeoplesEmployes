<template>
  <div class="about">
    <h1>Usuarios</h1>
    <table class="table table-hover">
        <thead>
            <tr>
                <th class="center" style="width: 10%">ID</th>
                <th class="center" style="width: 35%">Nombre</th>
                <th class="center" style="width: 10%"><i class="fa fa-pencil"></i></th>
                <th class="center" style="width: 10%"><i class="fa fa-trash"></i></th>
            </tr>
        </thead>
        <tbody v-for="(item, index) in usuarios" :key="index">
            <tr >
                <td class="center">{{item.usuario_id}}</td>
                <td class="center">{{item.usuario_nom}} {{item.usuario_ape}} </td>
                <td class="center"><button type="button" @click="editar(item)" class="btn btn-secondary" ><i class="fa fa-edit"></i></button></td>
                <td class="center"><button class="btn btn-danger" data-toggle="modal" :data-target="'#ELIM'+item.usuario_id" ><i class="fa fa-trash"></i></button></td>
            </tr>
            <div class="modal modal-alert fade" :id="'ELIM'+item.usuario_id" tabindex="-1" role="dialog" aria-hidden="true">
                <div class="modal-dialog modal-dialog-centered" role="document">
                    <div class="modal-content">
                            <div class="modal-header">
                                <h5 class="modal-title">Eliminar a {{item.usuario_nom}} {{item.usuario_ape}}</h5>
                                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true"><i class="fal fa-times"></i></span>
                                </button>
                            </div>
                            <div class="modal-body">
                                Esta accion no se puede deshacer
                            </div>
                            <div class="modal-footer">
                                <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                                <button type="button" @click="BDestroy(item.id,index)" class="btn btn-primary">Continuar</button>
                            </div>
                    </div>
                </div>
            </div>
        </tbody>
    </table>
  </div>
</template>
<script>
export default {
  data() {
    return {
      usuarios: [],
    };
  },
  created(){
    this.axios.get("http://localhost:8000/api/usuarios").then((response) => {
      let data = response.data
      data.forEach(element => {
        this.usuarios.push(element)
      });
    })
  }
}       
</script>