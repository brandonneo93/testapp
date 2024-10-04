<script lang="ts">
    import { onMount } from 'svelte';
    import { writable } from 'svelte/store';
    import { Button } from "$lib/components/ui/button";
    const csvData = writable([]);
    const searchTerm = writable('');
  
    // Function to handle CSV file upload
    async function handleUpload(event: Event) {
      const file = (event.target as HTMLInputElement).files?.[0];
      if (file) {
        const text = await file.text();
        const data = parseCSV(text);
        csvData.set(data);
      }
    }
  
    // Function to parse CSV text into an array of objects
    function parseCSV(text: string) {
      const rows = text.trim().split('\n').map(row => row.split(','));
      const headers = rows[0];
      return rows.slice(1).map(row => {
        return headers.reduce((obj, header, index) => {
          obj[header.trim()] = row[index].trim().replace(/^"|"$/g, '');
          return obj;
        }, {} as Record<string, string>);
      });
    }
  
    // Function to update an item (to be implemented)
    function handleUpdate(item: any) {
      console.log('Update:', item);
    }
  
    // Function to delete an item (to be implemented)
    function handleDelete(id: string) {
      csvData.update(data => data.filter(item => item.id !== id));
    }
  
    // Computed property to filter data based on search term
    $: filteredData = $searchTerm
      ? $csvData.filter(item => 
          Object.values(item).some(value =>
            value.toLowerCase().includes($searchTerm.toLowerCase())
          )
        )
      : $csvData;
  </script>
  
  <div class="container mx-auto p-4">
    <h1 class="text-2xl font-bold mb-4">Upload CSV</h1>
    <input type="file" accept=".csv" on:change={handleUpload} class="mb-4"/>
    
    <input 
      type="text" 
      placeholder="Search..." 
      bind:value={$searchTerm} 
      class="mb-4 p-2 border border-gray-300 rounded"
    />
    
    <table class="min-w-full border border-gray-300">
      <thead>
        <tr>
          {#each Object.keys($csvData[0] || {}) as key}
            <th class="border-b">{key}</th>
          {/each}
          <th class="border-b">Actions</th>
        </tr>
      </thead>
      <tbody>
        {#each filteredData as item}
          <tr>
            {#each Object.values(item) as value}
              <td class="border-b">{value}</td>
            {/each}
            <td class="border-b">
              <Button on:click={() => handleUpdate(item)} class="mr-2 text-blue-600">Update</Button>
              <Button on:click={() => handleDelete(item.id)} class="text-red-600">Delete</Button>
            </td>
          </tr>
        {/each}
      </tbody>
    </table>
  </div>
  
  <style>
    /* Add any additional styles here */
  </style>
  