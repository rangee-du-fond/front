<script>
  import { datas } from './apis/data.store';
</script>

<style>
  main {
    margin: 0 10%;
    border: 1px solid #0003;
    border-radius: 5px;
    padding: 0;
  }
</style>

<nav class="navbar navbar-dark bg-dark justify-content-between" style="margin-bottom: 15px">
  <p class="navbar-brand">Application</p>
</nav>
<main>
  <table class="table table-hover">
    <thead class="thead-light">
      <tr>
        <th scope="col">id</th>
        <th scope="col">nom</th>
        <th scope="col">valeur</th>
      </tr>
    </thead>
    <tbody>
      {#each $datas as data}
        <tr>
          <td>{data.id}</td>
          <td>{data.name}</td>
          <td>{data.value}</td>
        </tr>
      {/each}
    </tbody>
  </table>
</main>
