<script>

    import './From.css';
    import '../button.css';

    export let isOpen = false;
    export let onClose;
    let name = '';
    let email = '';
  
    const handleSubmit = (event) => {
      event.preventDefault();
      console.log({ name, email });
      onClose();
    };
  </script>
  
  {#if isOpen}
    <div class="modal-overlay">
      <div class="modal-content">
        <form on:submit={handleSubmit}>
          <label for="name">Name:</label>
          <input id="name" bind:value={name} required />
  
          <label for="email">Email:</label>
          <input id="email" type="email" bind:value={email} required />
  
          <button type="submit">Submit</button>
          <button type="button" on:click={onClose}>Close</button>
        </form>
      </div>
    </div>
  {/if}
  
  <style>
    .modal-overlay { /* Add your styles here */ }
    .modal-content { /* Add your styles here */ }
  </style>
  