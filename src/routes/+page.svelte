
<script lang="ts">
  export let data;
  
  </script>
<form method="POST" enctype="multipart/form-data" action="?/postIt">
    <h1>MONGO-PUSH TEST</h1>
    <div>
      <label for="title">
        <input type="text" name="title" id="title" required aria-required="true">
      </label>
    </div>
    <div>
      <label for="idk">
          <input type="text" name="idk" id="idk">
      </label>
    </div>
    <div>
      <label for="description">
        <input type="text" name="description" id="description" required aria-required="true">
      </label>
    </div>
    <!-- <div>
      <label for="image">
          <input type="file" name="image" id="image">
          <p>Supported file types: jpg, mp4, png, gif</p>
      </label>
    </div> -->
    <div>
      <button type="submit">Submit</button>
    </div> 
  </form>
<form method="POST" action="?/deleteIt">
<button type="submit">RESET</button>
</form>
  <div>
    <h1>POSTS</h1>
    {#each data.posts as post}
      <div>
        <h2>{post.title}</h2>
        <p>{post.description}</p>
        <p>{post.idk}</p>
      </div>
    {/each}
  </div>

<!-- ORGIL STYLE DEER HIIJ BAIH /HOMEPAGE/ -->
<style>

  </style>